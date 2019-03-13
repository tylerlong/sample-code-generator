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

  var formData = new FormData()
  const fileBuffer = fs.readFileSync('./test.png')
  formData.append('image', fileBuffer,
    { filename: 'test.png', contentType: 'image/png' })

  const r = await platform.post('/restapi/v1.0/account/~/extension/~/profile-image', formData)
  console.log((await r.response().buffer()).length)

  await platform.logout()
})()
