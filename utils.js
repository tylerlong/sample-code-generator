import fs from 'fs'
import yaml from 'js-yaml'
import * as R from 'ramda'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'))

export const loadFullDefinition = name => {
  let model
  if (Array.isArray(name)) { // special case
    model = { properties: {} }
    name.forEach(prop => {
      const key = prop.name
      delete prop.name
      model.properties[key] = prop
    })
  } else {
    model = R.clone(doc.definitions[name])
  }
  Object.keys(model.properties).forEach(key => {
    const prop = model.properties[key]
    if (prop['$ref']) {
      prop.properties = loadFullDefinition(R.last(prop['$ref'].split('/'))).properties
      delete prop['$ref']
    }
    if (prop.items && prop.items['$ref']) {
      prop.items.properties = loadFullDefinition(R.last(prop.items['$ref'].split('/'))).properties
      delete prop.items['$ref']
    }
  })
  return model
}

export const getResponseType = responses => {
  const responseSchema = (responses[200] || responses[201] || responses[202] || responses[204] || responses[205] || responses[302] || responses.default).schema
  let responseType
  if (responseSchema) {
    if (responseSchema.type === 'string' && responseSchema.format === 'binary') {
      responseType = 'byte[]'
    } else if (responseSchema['$ref']) {
      responseType = R.last(responseSchema['$ref'].split('/'))
    }
  }
  return responseType
}
