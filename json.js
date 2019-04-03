import fs from 'fs'
import * as R from 'ramda'

const regexStr = 'HTTP (?:GET|PUT|DELETE|POST|PATCH) `(?:.+?)`\n\n```(?:js|cs)\n(.+?)\n```.+?\\[Try it out\\]\\(https://developer\\.ringcentral\\.com/api-reference#(.+?)\\) in API Explorer'
const regexp = new RegExp(regexStr, 'sg')
const regexp2 = new RegExp(regexStr, 's')

const parseMarkdown = markdown => {
  const list = markdown.match(regexp)
  const result = {}
  list.forEach(s => {
    const m = s.match(regexp2)
    const [, code, anchor] = m
    result[R.last(anchor.split('-'))] = code
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
