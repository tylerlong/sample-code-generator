import fs from 'fs'
import yaml from 'js-yaml'
import * as R from 'ramda'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'))

export const loadFullDefinition = name => {
  const model = R.clone(doc.definitions[name])
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
