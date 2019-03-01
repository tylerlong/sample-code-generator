import * as fs from 'fs'
import * as yaml from 'js-yaml'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'))

console.log(doc)
