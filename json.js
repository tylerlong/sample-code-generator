import fs from 'fs'

const regexStr = 'HTTP (GET|PUT|DELETE|POST|PATCH) `(.+?)`\n\n```(?:js|cs)\n(.+?)\n```'
const regexp = new RegExp(regexStr, 'sg')
const regexp2 = new RegExp(regexStr, 's')

const parseMarkdown = markdown => {
  const list = markdown.match(regexp)
  const result = {}
  list.forEach(s => {
    const m = s.match(regexp2)
    const [, method, endpoint, code] = m
    if (!result[endpoint]) {
      result[endpoint] = {}
    }
    result[endpoint][method] = code
  })
  return result
}
const jsMarkdown = fs.readFileSync(process.env.JAVASCRIPT_MARKDOWN_PATH, 'utf-8')
const jsResult = parseMarkdown(jsMarkdown)
const csMarkdown = fs.readFileSync(process.env.CSHARP_MARKDOWN_PATH, 'utf-8')
const csResult = parseMarkdown(csMarkdown)

const result = {
  javascript: jsResult,
  csharp: csResult
}

fs.writeFileSync('samples.json', JSON.stringify(result, null, 2))
