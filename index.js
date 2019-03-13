import fs from 'fs'
import yaml from 'js-yaml'
import changeCase from 'change-case'
import * as R from 'ramda'

import { loadFullDefinition, getResponseType } from './utils'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'))

const paths = Object.keys(doc.paths).sort()

const generateCodes = (path, method, operation) => {
  let endpoint
  if (path.includes('{')) {
    endpoint = '`' + path.replace(/{/g, '${') + '`'
  } else {
    endpoint = `'${path}'`
  }
  let params = []; let bodyClass; let bodyParam

  const queryParams = (operation.parameters || []).filter(p => p.in === 'query')
  const operationId = operation.operationId
  if (queryParams.length > 0) {
    params.push(`${operationId}Parameters`)
  }

  const body = (operation.parameters || []).filter(p => p.in === 'body')[0]
  if (body) {
    if (body.schema.type === 'string') {
      bodyClass = 'string'
      bodyParam = 'body'
    } else {
      bodyClass = R.last(body.schema['$ref'].split('/'))
      bodyParam = changeCase.lowerCaseFirst(bodyClass)
    }
    params.unshift(bodyParam)
  }
  let result
  if (operation.consumes && operation.consumes[0].startsWith('multipart/')) {
    params.unshift('formData')
    let fileFields = operation.parameters.filter(p => p.in === 'formData' && (p.type === 'file' || (p.items && p.items.type === 'file'))).map(p => p.name)
    let formDataFields = operation.parameters.filter(p => p.in === 'formData' && p.type !== 'file' && !(p.items && p.items.type === 'file'))
    const body = (operation.parameters || []).filter(p => p.in === 'body' && p.schema && p.schema['$ref'])[0]
    if (body) {
      bodyClass = R.last(body.schema['$ref'].split('/'))
      const properties = doc.definitions[bodyClass].properties
      fileFields = Object.keys(properties).filter(key => properties[key].type === 'file')
      formDataFields = Object.keys(properties).filter(key => properties[key].type !== 'file').map(key => Object.assign({ name: key }, properties[key]))
    }
    fileFields = fileFields.map(name => name.endsWith('s') ? name.substring(0, name.length - 1) : name)
    result = [`const FormData = require('form-data');
const formData = new FormData();
${formDataFields.length > 0 ? `formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });` : ''}
${fileFields.map(name => `formData.append('${name}', fs.readFileSync('./test.${name === 'audio' ? 'mp3' : 'png'}'), { filename: 'text.${name === 'audio' ? 'mp3' : 'png'}' });`).join('\n')}
const r = await platform.${method}(${endpoint}${params.map(p => `, ${p}`).join('')});`]
    if (formDataFields.length > 0) {
      result.push(`\n\`body\` is an object with the following definition:`)
      result.push(`\n\`\`\`yaml\n${JSON.stringify(loadFullDefinition(formDataFields), null, 2)}\n\`\`\``)
    }
  } else if (operation.consumes && operation.consumes[0].startsWith('text/')) {
    result = [`const r = await platform.${method}(${endpoint}, text, {}, { headers: { 'Content-Type': 'text/plain' } });`]
    result.push(`\n- \`text\` is a string`)
  } else {
    result = [`const r = await platform.${method}(${endpoint}${params.map(p => `, ${p}`).join('')});`]
    if (bodyClass && bodyClass !== 'string') {
      result.push(`\n\`${bodyParam}\` is an object with the following definition:`)
      result.push(`\n\`\`\`yaml\n${JSON.stringify(loadFullDefinition(bodyClass), null, 2)}\n\`\`\``)
    }
  }

  if (queryParams.length > 0) {
    result.push(`\n\`${operationId}Parameters\` is an **optional** object with the following definition:`)
    result.push(`\n\`\`\`yaml\n${JSON.stringify(loadFullDefinition(queryParams), null, 2)}\n\`\`\``)
  }
  result = result.map(code => code.replace(/\n{2,}/g, '\n'))
  return result
}

const generateDoc = (path, method, operation) => {
  const codes = generateCodes(path, method, operation)
  const code = codes[0]
  const extraCode = codes.slice(1).join('\n')
  let doc = `## ${operation.summary || changeCase.titleCase(operation.operationId)}

HTTP ${changeCase.upperCase(method)} ${path}

\`\`\`js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
${code}
\`\`\`
`
  if (path.includes('/restapi/{apiVersion}')) {
    doc += `\n- \`apiVersion\`'s default value is \`v1.0\``
  }
  if (path.includes('/account/{accountId}')) {
    doc += `\n- \`accountId\`'s default value is \`~\``
  }
  if (path.includes('/extension/{extensionId}')) {
    doc += `\n- \`extensionId\`'s default value is \`~\``
  }
  if (path.includes('/scim/{version}')) {
    doc += `\n- \`version\`'s default value is \`v2\``
  }
  if (extraCode.length > 0) {
    doc += `\n${extraCode}`
  }
  const responseType = getResponseType(operation.responses)
  if (responseType) {
    if (responseType === 'byte[]') {
      doc += '\n\nYou can get response binary data by `const buffer = await r.response().buffer()`'
    } else {
      doc += '\n\nYou can get response json data by `const json = await r.json()`'
      doc += `\n\n- \`json\` is an object with [this definition](./definitions/${responseType}.yaml)`
      fs.writeFileSync(`./definitions/${responseType}.yaml`, JSON.stringify(loadFullDefinition(responseType), null, 2))
    }
  } else {
    doc += '\n\nResponse body is empty'
  }
  return doc
}

let markdown = '# RingCentral JavaScript SDK Code Samples'
paths.forEach(path => {
  const methods = Object.keys(doc.paths[path])
  methods.forEach(method => {
    const operation = doc.paths[path][method]
    if (operation.consumes && operation.consumes[0] === 'application/x-www-form-urlencoded') {
      // ignore oauth endpoints
    } else {
      markdown += `\n\n${generateDoc(path, method, operation)}`
    }
  })
})

fs.writeFileSync('samples.md', markdown)
