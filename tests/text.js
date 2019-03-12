const SDK = require('ringcentral')
const uuidv1 = require('uuid/v1')

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
  let r = await platform.get('/restapi/v1.0/glip/groups')
  const groupId = r.json().records[0].id

  r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/posts`)
  const postId = r.json().records[0].id

  const newText = uuidv1()

  r = await platform.send({
    method: 'PUT',
    url: `/restapi/v1.0/glip/groups/${groupId}/posts/${postId}/text`,
    headers: { 'Content-Type': 'text/plain' },
    body: newText
  })
  console.log(await r.response().text())
  await platform.logout()
})()
