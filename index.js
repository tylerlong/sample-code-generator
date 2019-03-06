import fs from 'fs'
import yaml from 'js-yaml'
import changeCase from 'change-case'
import * as R from 'ramda'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'))

const paths = Object.keys(doc.paths)

const generateCodes = (path, method, operation) => {
  let endpoint
  if (path.includes('{')) {
    endpoint = '`' + path.replace(/{/g, '${') + '`'
  } else {
    endpoint = `'${path}'`
  }
  let params = ''; let bodyClass; let bodyParam
  const body = (operation.parameters || []).filter(p => p.in === 'body')[0]
  if (body) {
    if (body.schema.type === 'string') {
      bodyClass = 'string'
      bodyParam = 'body'
    } else {
      bodyClass = R.last(body.schema['$ref'].split('/'))
      bodyParam = changeCase.lowerCaseFirst(bodyClass)
    }
    params += `, ${bodyParam}`
  }
  const result = [`const r = await platform.${method}(${endpoint}${params});`]
  if (bodyClass && bodyClass !== 'string') {
    result.push(`\n\`${bodyParam}\` is an object with the following properties:`)
    result.push(`\n\`\`\`yaml\n${yaml.safeDump(doc.definitions[bodyClass].properties)}\`\`\``)
  }
  return result
}

const generateDoc = (path, method, operation) => {
  const codes = generateCodes(path, method, operation)
  const code = codes[0]
  const extraCode = codes.slice(1).join('\n')
  let doc = `## ${changeCase.sentenceCase(operation.operationId)}

HTTP ${changeCase.upperCase(method)} ${path}

\`\`\`js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
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
  return doc
}

let markdown = '# RingCentral JS SDK code samples'
paths.forEach(path => {
  const methods = Object.keys(doc.paths[path])
  methods.forEach(method => {
    const operation = doc.paths[path][method]
    markdown += `\n\n${generateDoc(path, method, operation)}`
  })
})

fs.writeFileSync('samples.md', markdown)
