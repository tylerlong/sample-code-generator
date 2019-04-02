import fs from 'fs'

const regexp = new RegExp('HTTP (GET|PUT|DELETE|POST|PATCH) `(.+?)`\\n\\n```(?:js|cs)\\n(.+?)\\n```', 'sg')
const regexp2 = new RegExp('HTTP (GET|PUT|DELETE|POST|PATCH) `(.+?)`\\n\\n```(?:js|cs)\\n(.+?)\\n```', 's')

const g = markdown => {
  const list = markdown.match(regexp)
  const result = {}
  list.forEach(s => {
    const m = s.match(regexp2)
    if (!result[m[2]]) {
      result[m[2]] = {}
    }
    result[m[2]][m[1]] = m[3]
  })
  return result
}
const jsMarkdown = fs.readFileSync(process.env.JAVASCRIPT_MARKDOWN_PATH, 'utf-8')
const jsResult = g(jsMarkdown)
const csMarkdown = fs.readFileSync(process.env.CSHARP_MARKDOWN_PATH, 'utf-8')
const csResult = g(csMarkdown)
console.log(csResult)

const result = {
  javascript: jsResult,
  csharp: csResult
}

fs.writeFileSync('samples.json', JSON.stringify(result, null, 2))
