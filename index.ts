import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as changeCase from 'change-case'

const doc = yaml.safeLoad(fs.readFileSync(process.env.SWAGGER_FILE_PATH, 'utf8'));

console.log(doc);

const paths = Object.keys(doc.paths);

let markdown = '# RingCentral JS SDK code samples';
paths.forEach(path => {
  const methods = Object.keys(doc.paths[path]);
  methods.forEach(method => {
    const operation = doc.paths[path][method];
    console.log(path, method);
    markdown += `\n\n## ${changeCase.sentenceCase(operation.operationId)}

HTTP ${changeCase.upperCase(method)} ${path}`
  });
});

console.log(markdown);