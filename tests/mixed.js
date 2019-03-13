const SDK = require('ringcentral')
const FormData = require('form-data')
const fs = require('fs')

const rcsdk = new SDK({
  server: process.env.RINGCENTRAL_SERVER_URL,
  appKey: process.env.RINGCENTRAL_CLIENT_ID,
  appSecret: process.env.RINGCENTRAL_CLIENT_SECRET
})
const platform = rcsdk.platform();
(async () => {
  await platform.login({
    username: process.env.RINGCENTRAL_USERNAME,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD
  })

  let r = await platform.get('/restapi/v1.0/account/~/extension/~/answering-rule')
  const answeringRule = r.json().records[0]

  var formData = new FormData()
  var body = {
    type: 'Voicemail',
    answeringRule: { id: answeringRule.id }
  }
  formData.append('body', Buffer.from(JSON.stringify(body)),
    { filename: 'request.json' })

  formData.append('attachment', fs.readFileSync('./test.mp3'),
    { filename: 'test.mp3' })

  try {
    r = await platform.post('/restapi/v1.0/account/~/extension/~/greeting', formData)
    console.log(await r.json())
  } catch (e) {
    console.log(e.apiResponse.response()._raw.toString())
  }
  await platform.logout()
})()
