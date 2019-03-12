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
  const accountId = '~'
  const extensionId = '~'

  var formData = new FormData()

  var body = {
    // to: [{ phoneNumber: process.env.RINGCENTRAL_RECEIVER }],
    to: [{ phoneNumber: '16506417402' }],
    faxResolution: 'High'
  }
  formData.append('json', Buffer.from(JSON.stringify(body)),
    { filename: 'request.json' })

  formData.append('attachment', Buffer.from('Hello world'),
    { filename: 'text.txt' })

  formData.append('attachment', fs.readFileSync('./test.png'),
    { filename: 'text.png' })

  const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/fax`, formData)
  console.log(r.json())
})()
