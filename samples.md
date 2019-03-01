# RingCentral JS SDK code samples

## Get all versions

HTTP GET /restapi

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi');
```


## Get api version

HTTP GET /restapi/{apiVersion}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/${apiVersion}`);
```

- `apiVersion`'s default value is `v1.0`

## Load api status

HTTP GET /restapi/v1.0/status

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/status');
```


## Load user call log

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete user call log

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync user call log

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Get call records

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List extension active calls

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/active-calls`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load company call log

HTTP GET /restapi/v1.0/account/{accountId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log`);
```

- `accountId`'s default value is `~`

## Load company call log record

HTTP GET /restapi/v1.0/account/{accountId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`

## List company active calls

HTTP GET /restapi/v1.0/account/{accountId}/active-calls

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/active-calls`);
```

- `accountId`'s default value is `~`

## List call recordings

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}`);
```

- `accountId`'s default value is `~`

## List call recording data

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}/content

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}/content`);
```

- `accountId`'s default value is `~`

## Send sms

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/sms

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/sms`, createSMSMessage);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createSMSMessage` is an object with the following properties:

```yaml
from:
  description: >-
    Sender of an SMS message. The phoneNumber property must be filled to
    correspond to one of the account phone numbers which is allowed to send SMS
  $ref: '#/definitions/MessageStoreCallerInfoRequest'
to:
  type: array
  description: Receiver of an SMS message. The phoneNumber property must be filled
  items:
    $ref: '#/definitions/MessageStoreCallerInfoRequest'
text:
  type: string
  description: >-
    Text of a message. Max length is 1000 symbols (2-byte UTF-16 encoded). If a
    character is encoded in 4 bytes in UTF-16 it is treated as 2 characters,
    thus restricting the maximum message length to 500 symbols
```

## Create internal text message

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/company-pager`, createInternalTextMessageRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createInternalTextMessageRequest` is an object with the following properties:

```yaml
from:
  description: Sender of a pager message.
  $ref: '#/definitions/PagerCallerInfoRequest'
replyOn:
  type: integer
  description: Internal identifier of a message this message replies to
text:
  type: string
  description: >-
    Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded).
    If a character is encoded in 4 bytes in UTF-16 it is treated as 2
    characters, thus restricting the maximum message length to 512 symbols
  example: hello world
to:
  type: array
  description: Optional if replyOn parameter is specified. Receiver of a pager message.
  items:
    $ref: '#/definitions/PagerCallerInfoRequest'
```

## Send fax message

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/fax`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List fax cover pages

HTTP GET /restapi/v1.0/dictionary/fax-cover-page

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/fax-cover-page');
```


## List messages

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete messages by filter

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load message

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update message

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`, updateMessageRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateMessageRequest` is an object with the following properties:

```yaml
readStatus:
  type: string
  description: Read status of a message to be changed. Multiple values are accepted
  enum:
    - Read
    - Unread
```

## Delete message

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Get message attachment by id

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}/content/${attachmentId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync messages

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load message store configuration

HTTP GET /restapi/v1.0/account/{accountId}/message-store-configuration

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-configuration`);
```

- `accountId`'s default value is `~`

## Update message store configuration

HTTP PUT /restapi/v1.0/account/{accountId}/message-store-configuration

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/message-store-configuration`, messageStoreConfiguration);
```

- `accountId`'s default value is `~`

`messageStoreConfiguration` is an object with the following properties:

```yaml
retentionPeriod:
  type: integer
  description: >-
    Retention policy setting, specifying how long to keep messages; the
    supported value range is 7-90 days
  minimum: 7
  maximum: 90
```

## Make ring out call

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out`, makeRingOutRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`makeRingOutRequest` is an object with the following properties:

```yaml
from:
  description: >-
    Phone number of the caller. This number corresponds to the 1st leg of the
    RingOut call. This number can be one of user's configured forwarding numbers
    or arbitrary number
  $ref: '#/definitions/MakeRingOutCallerInfoRequestFrom'
to:
  description: >-
    Phone number of the called party. This number corresponds to the 2nd leg of
    a RingOut call
  $ref: '#/definitions/MakeRingOutCallerInfoRequestTo'
callerId:
  description: The number which will be displayed to the called party
  $ref: '#/definitions/MakeRingOutCallerInfoRequestTo'
playPrompt:
  type: boolean
  description: The audio prompt that the calling party hears when the call is connected
country:
  description: >-
    Optional. Dialing plan country data. If not specified, then extension home
    country is applied by default
  $ref: '#/definitions/MakeRingOutCoutryInfo'
```

## Get ring out call status

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Cancel ring out call

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Make ring out call deprecated

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout`, makeRingOutRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`makeRingOutRequest` is an object with the following properties:

```yaml
from:
  description: >-
    Phone number of the caller. This number corresponds to the 1st leg of the
    RingOut call. This number can be one of user's configured forwarding numbers
    or arbitrary number
  $ref: '#/definitions/MakeRingOutCallerInfoRequestFrom'
to:
  description: >-
    Phone number of the called party. This number corresponds to the 2nd leg of
    a RingOut call
  $ref: '#/definitions/MakeRingOutCallerInfoRequestTo'
callerId:
  description: The number which will be displayed to the called party
  $ref: '#/definitions/MakeRingOutCallerInfoRequestTo'
playPrompt:
  type: boolean
  description: The audio prompt that the calling party hears when the call is connected
country:
  description: >-
    Optional. Dialing plan country data. If not specified, then extension home
    country is applied by default
  $ref: '#/definitions/MakeRingOutCoutryInfo'
```

## Get ring out call status deprecated

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Cancel ring out call deprecated

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List contacts

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create contact

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`, personalContactResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactResource` is an object with the following properties:

```yaml
uri:
  type: string
  format: uri
availability:
  type: string
  enum:
    - Alive
    - Deleted
    - Purged
id:
  type: string
firstName:
  type: string
lastName:
  type: string
middleName:
  type: string
birthday:
  type: string
  format: date-time
notes:
  type: string
webPage:
  type: string
company:
  type: string
jobTitle:
  type: string
nickName:
  type: string
email:
  type: string
email2:
  type: string
email3:
  type: string
homeAddress:
  $ref: '#/definitions/ContactAddressInfo'
otherAddress:
  $ref: '#/definitions/ContactAddressInfo'
homePhone:
  type: string
homePhone2:
  type: string
mobilePhone:
  type: string
businessPhone:
  type: string
callbackPhone:
  type: string
carPhone:
  type: string
companyPhone:
  type: string
otherPhone:
  type: string
businessFax:
  type: string
otherFax:
  type: string
businessAddress:
  $ref: '#/definitions/ContactAddressInfo'
assistantPhone:
  type: string
businessPhone2:
  type: string
```

## Load contact

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update contact

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`, personalContactResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactResource` is an object with the following properties:

```yaml
uri:
  type: string
  format: uri
availability:
  type: string
  enum:
    - Alive
    - Deleted
    - Purged
id:
  type: string
firstName:
  type: string
lastName:
  type: string
middleName:
  type: string
birthday:
  type: string
  format: date-time
notes:
  type: string
webPage:
  type: string
company:
  type: string
jobTitle:
  type: string
nickName:
  type: string
email:
  type: string
email2:
  type: string
email3:
  type: string
homeAddress:
  $ref: '#/definitions/ContactAddressInfo'
otherAddress:
  $ref: '#/definitions/ContactAddressInfo'
homePhone:
  type: string
homePhone2:
  type: string
mobilePhone:
  type: string
businessPhone:
  type: string
callbackPhone:
  type: string
carPhone:
  type: string
companyPhone:
  type: string
otherPhone:
  type: string
businessFax:
  type: string
otherFax:
  type: string
businessAddress:
  $ref: '#/definitions/ContactAddressInfo'
assistantPhone:
  type: string
businessPhone2:
  type: string
```

## Delete contact

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync address book

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List favorite contacts

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/favorite`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update favorite contact list

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/favorite`, favoriteCollection);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`favoriteCollection` is an object with the following properties:

```yaml
uri:
  type: string
  format: uri
records:
  type: array
  items:
    $ref: '#/definitions/FavoriteContactResource'
```

## Search directory entries

HTTP POST /restapi/v1.0/account/{accountId}/directory/entries/search

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/directory/entries/search`, searchDirectoryEntriesRequest);
```

- `accountId`'s default value is `~`

`searchDirectoryEntriesRequest` is an object with the following properties:

```yaml
searchString:
  type: string
  description: >-
    String value to filter the contacts. The value specified is searched through
    the following fields: `firstName`, `lastName`, `extensionNumber`,
    `phoneNumber`, `email`
showFederated:
  description: >-
    If 'True' then contacts of all accounts in federation are returned. If
    'False' then only contacts of the current account are returned, and account
    section is eliminated in this case
  default: true
  type: boolean
extensionType:
  type: string
  description: Type of extension to filter the contacts
  enum:
    - User
    - Department
    - Announcement
    - Voicemail
    - SharedLinesGroup
    - PagingOnly
    - ParkLocation
    - IvrMenu
    - Limited
    - ApplicationExtension
    - Site
    - Bot
orderBy:
  type: array
  description: Sorting settings
  items:
    $ref: '#/definitions/OrderBy'
page:
  type: integer
perPage:
  type: integer
```

## List directory entries

HTTP GET /restapi/v1.0/account/{accountId}/directory/entries

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/entries`);
```

- `accountId`'s default value is `~`

## Load account federation

HTTP GET /restapi/v1.0/account/{accountId}/directory/federation

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/federation`);
```

- `accountId`'s default value is `~`

## Get presence status

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update presence status

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`, presenceInfoResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`presenceInfoResource` is an object with the following properties:

```yaml
userStatus:
  type: string
  enum:
    - Offline
    - Busy
    - Available
dndStatus:
  type: string
  enum:
    - TakeAllCalls
    - DoNotAcceptDepartmentCalls
    - TakeDepartmentCallsOnly
    - DoNotAcceptAnyCalls
    - Unknown
message:
  type: string
  minLength: 0
  maxLength: 75
allowSeeMyPresence:
  type: boolean
  default: false
ringOnMonitoredCall:
  type: boolean
  default: false
pickUpCallsOnHold:
  type: boolean
  default: false
activeCalls:
  type: array
  items:
    $ref: '#/definitions/ActiveCallInfo'
```

## Account presence

HTTP GET /restapi/v1.0/account/{accountId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/presence`);
```

- `accountId`'s default value is `~`

## List glip chats

HTTP GET /restapi/v1.0/glip/chats

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/chats');
```


## Load glip chat

HTTP GET /restapi/v1.0/glip/chats/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}`);
```


## List glip conversations

HTTP GET /restapi/v1.0/glip/conversations

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/conversations');
```


## Create glip conversation

HTTP POST /restapi/v1.0/glip/conversations

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/conversations', glipPostMembersListBody);
```


`glipPostMembersListBody` is an object with the following properties:

```yaml
members:
  description: Identifier(s) of chat members.
  type: array
  items:
    type: object
    properties:
      id:
        type: string
        description: Internal identifier of a person
      email:
        type: string
        description: Email of a person
```

## Load glip conversation

HTTP GET /restapi/v1.0/glip/conversations/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/conversations/${chatId}`);
```


## List glip teams

HTTP GET /restapi/v1.0/glip/teams

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/teams');
```


## Create glip team

HTTP POST /restapi/v1.0/glip/teams

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/teams', glipPostTeamBody);
```


`glipPostTeamBody` is an object with the following properties:

```yaml
public:
  type: boolean
  description: Team access level.
name:
  type: string
  description: Team name.
description:
  type: string
  description: Team description.
members:
  description: Identifier(s) of team members.
  type: array
  items:
    type: object
    properties:
      id:
        type: string
        description: Internal identifier of a person
      email:
        type: string
        description: Email of a person
```

## Load glip team

HTTP GET /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/teams/${chatId}`);
```


## Update glip team

HTTP PATCH /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch(`/restapi/v1.0/glip/teams/${chatId}`, glipPatchTeamBody);
```


`glipPatchTeamBody` is an object with the following properties:

```yaml
public:
  type: boolean
  description: Team access level.
name:
  type: string
  description: Team name.
description:
  type: string
  description: Team description.
```

## Delete glip team

HTTP DELETE /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/glip/teams/${chatId}`);
```


## Join glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/join

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/join`);
```


## Leave glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/leave

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/leave`);
```


## Add glip team members

HTTP POST /restapi/v1.0/glip/teams/{chatId}/add

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/add`, glipPostMembersListBody);
```


`glipPostMembersListBody` is an object with the following properties:

```yaml
members:
  description: Identifier(s) of chat members.
  type: array
  items:
    type: object
    properties:
      id:
        type: string
        description: Internal identifier of a person
      email:
        type: string
        description: Email of a person
```

## Remove glip team members

HTTP POST /restapi/v1.0/glip/teams/{chatId}/remove

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/remove`, glipPostMembersIdsListBody);
```


`glipPostMembersIdsListBody` is an object with the following properties:

```yaml
members:
  description: Identifier(s) of chat members.
  type: array
  items:
    type: object
    properties:
      id:
        type: string
        description: Internal identifier of a person
```

## Archive glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/archive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/archive`);
```


## Unarchive glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/unarchive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/unarchive`);
```


## Load glip everyone

HTTP GET /restapi/v1.0/glip/everyone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/everyone');
```


## Update glip everyone

HTTP PATCH /restapi/v1.0/glip/everyone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch('/restapi/v1.0/glip/everyone', updateGlipEveryoneRequest);
```


`updateGlipEveryoneRequest` is an object with the following properties:

```yaml
name:
  type: integer
  description: Everyone chat name. Maximum number of characters supported is 250
description:
  type: string
  description: Everyone chat description. Maximum number of characters supported is 1000
```

## List glip groups

HTTP GET /restapi/v1.0/glip/groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/groups');
```


## Create glip group

HTTP POST /restapi/v1.0/glip/groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/groups', glipCreateGroup);
```


`glipCreateGroup` is an object with the following properties:

```yaml
type:
  type: string
  enum:
    - PrivateChat
    - Team
  description: >-
    Type of a group to be created. 'PrivateChat' is a group of 2 members. 'Team'
    is a chat of 1 and more participants, the membership can be modified in
    future. 'PersonalChat' is a private chat thread of a user
isPublic:
  type: boolean
  description: For 'Team' group type only. Team access level
name:
  type: string
  description: For 'Team' group type only. Team name
description:
  type: string
  description: For 'Team' group type only. Team description
members:
  type: array
  items:
    type: string
  description: >-
    Identifier(s) of group members. For 'PrivateChat' group type 2 members only
    are supported
```

## Load glip group

HTTP GET /restapi/v1.0/glip/groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}`);
```


## Assign glip group members

HTTP POST /restapi/v1.0/glip/groups/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/bulk-assign`, editGroupRequest);
```


`editGroupRequest` is an object with the following properties:

```yaml
addedPersonIds:
  type: array
  items:
    type: string
  description: List of users to be added to a team
addedPersonEmails:
  type: array
  items:
    type: string
  description: List of user email addresses to be added to a team (i.e. as guests)
removedPersonIds:
  type: array
  items:
    type: string
  description: List of users to be removed from a team
```

## List glip group posts

HTTP GET /restapi/v1.0/glip/groups/{groupId}/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/posts`);
```


## Create glip group post

HTTP POST /restapi/v1.0/glip/groups/{groupId}/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/posts`, glipCreatePost);
```


`glipCreatePost` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a message. (Can be set for bot's messages only).
text:
  type: string
  description: Text of a post
  maximum: 1000
groupId:
  type: string
  description: Internal identifier of a group
attachments:
  type: array
  items:
    $ref: '#/definitions/GlipMessageAttachmentInfoRequest'
  description: List of attachments to be posted
```

## Update glip post text

HTTP PUT /restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/glip/groups/${groupId}/posts/${postId}/text`, body);
```


## List recent chats

HTTP GET /restapi/v1.0/glip/recent/chats

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/recent/chats');
```


## List favorite chats

HTTP GET /restapi/v1.0/glip/favorites

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/favorites');
```


## Favorite glip chat

HTTP POST /restapi/v1.0/glip/chats/{chatId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/favorite`);
```


## Unfavorite glip chat

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unfavorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unfavorite`);
```


## Mark chat read

HTTP POST /restapi/v1.0/glip/chats/{chatId}/read

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/read`);
```


## Mark chat unread

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unread

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unread`);
```


## List glip posts

HTTP GET /restapi/v1.0/glip/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/posts');
```


## Create post

HTTP POST /restapi/v1.0/glip/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/posts', glipCreatePost);
```


`glipCreatePost` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a message. (Can be set for bot's messages only).
text:
  type: string
  description: Text of a post
  maximum: 1000
groupId:
  type: string
  description: Internal identifier of a group
attachments:
  type: array
  items:
    $ref: '#/definitions/GlipMessageAttachmentInfoRequest'
  description: List of attachments to be posted
```

## Create glip file

HTTP POST /restapi/v1.0/glip/files

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/files');
```


## Create glip card

HTTP POST /restapi/v1.0/glip/cards

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/cards', glipMessageAttachmentInfoRequest);
```


`glipMessageAttachmentInfoRequest` is an object with the following properties:

```yaml
type:
  type: string
  description: Type of attachment
  enum:
    - Card
    - Event
    - Note
  default: Card
title:
  type: string
  description: Attachment title
fallback:
  type: string
  description: >-
    Default message returned in case the client does not support interactive
    messages
color:
  type: string
  description: >-
    Hex color code specifying font color of Event title, including its
    presentation in Calendar; or the color of the side border of an interactive
    message of a Card
  enum:
    - Black
    - Red
    - Orange
    - Yellow
    - Green
    - Blue
    - Purple
    - Magenta
  default: Black
intro:
  type: string
  description: Introductory text displayed directly above a message
author:
  description: Information about the author
  $ref: '#/definitions/GlipMessageAttachmentAuthorInfo'
text:
  type: string
  description: 'Text of attachment (up to 1000 chars), supports GlipDown'
imageUri:
  type: string
  description: Link to an image displayed at the bottom of a message
thumbnailUri:
  type: string
  description: Link to an image preview displayed to the right of a message (82x82)
fields:
  type: array
  description: Individual subsections within a message
  items:
    $ref: '#/definitions/GlipMessageAttachmentFieldsInfo'
footnote:
  description: Message footer information
  $ref: '#/definitions/GlipMessageAttachmentFootnoteInfo'
startTime:
  type: string
  description: Datetime of starting an event
endTime:
  type: string
  description: Datetime of ending an event
allDay:
  type: boolean
  description: >-
    Indicates whether an event has some specific time slot or lasts for the
    whole day(s)
  default: false
recurrence:
  type: string
  description: >-
    Event recurrence settings. For non-periodic events the value is 'None'. Must
    be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month;
    365 - Year
  enum:
    - None
    - Day
    - Weekday
    - Week
    - Month
    - Year
endingCondition:
  type: string
  description: Condition of ending an event
```

## Load glip card

HTTP GET /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/cards/${cardId}`);
```


## Update glip card

HTTP PUT /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/glip/cards/${cardId}`, glipMessageAttachmentInfoRequest);
```


`glipMessageAttachmentInfoRequest` is an object with the following properties:

```yaml
type:
  type: string
  description: Type of attachment
  enum:
    - Card
    - Event
    - Note
  default: Card
title:
  type: string
  description: Attachment title
fallback:
  type: string
  description: >-
    Default message returned in case the client does not support interactive
    messages
color:
  type: string
  description: >-
    Hex color code specifying font color of Event title, including its
    presentation in Calendar; or the color of the side border of an interactive
    message of a Card
  enum:
    - Black
    - Red
    - Orange
    - Yellow
    - Green
    - Blue
    - Purple
    - Magenta
  default: Black
intro:
  type: string
  description: Introductory text displayed directly above a message
author:
  description: Information about the author
  $ref: '#/definitions/GlipMessageAttachmentAuthorInfo'
text:
  type: string
  description: 'Text of attachment (up to 1000 chars), supports GlipDown'
imageUri:
  type: string
  description: Link to an image displayed at the bottom of a message
thumbnailUri:
  type: string
  description: Link to an image preview displayed to the right of a message (82x82)
fields:
  type: array
  description: Individual subsections within a message
  items:
    $ref: '#/definitions/GlipMessageAttachmentFieldsInfo'
footnote:
  description: Message footer information
  $ref: '#/definitions/GlipMessageAttachmentFootnoteInfo'
startTime:
  type: string
  description: Datetime of starting an event
endTime:
  type: string
  description: Datetime of ending an event
allDay:
  type: boolean
  description: >-
    Indicates whether an event has some specific time slot or lasts for the
    whole day(s)
  default: false
recurrence:
  type: string
  description: >-
    Event recurrence settings. For non-periodic events the value is 'None'. Must
    be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month;
    365 - Year
  enum:
    - None
    - Day
    - Weekday
    - Week
    - Month
    - Year
endingCondition:
  type: string
  description: Condition of ending an event
```

## Delete glip card

HTTP DELETE /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/glip/cards/${cardId}`);
```


## Load glip events

HTTP GET /restapi/v1.0/glip/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/events');
```


## Create event

HTTP POST /restapi/v1.0/glip/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/events', glipEventCreate);
```


`glipEventCreate` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of an event
creatorId:
  type: string
  description: Internal identifier of a person created an event
title:
  type: string
  description: Event title
startTime:
  type: string
  description: Datetime of starting an event
endTime:
  type: string
  description: Datetime of ending an event
allDay:
  type: boolean
  description: >-
    Indicates whether event has some specific time slot or lasts for whole
    day(s)
  default: false
recurrence:
  type: string
  description: >-
    Event recurrence settings. For non-periodic events the value is 'None'. Must
    be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month;
    365 - Year
  enum:
    - None
    - Day
    - Weekday
    - Week
    - Month
    - Year
endingCondition:
  type: string
  description: Condition of ending
endingAfter:
  type: integer
  description: >-
    Count of iterations. For periodic events only. Value range is 1 - 10. Must
    be specified if 'endingCondition' is 'Count'
endingOn:
  type: string
  enum:
    - None
    - Count
    - Date
  default: None
  description: Iterations end datetime for periodic events.
color:
  type: string
  description: >-
    Hex color code, specifying font color of Event title (including its
    presentation in Calendar)
  enum:
    - Black
    - Red
    - Orange
    - Yellow
    - Green
    - Blue
    - Purple
    - Magenta
  default: Black
location:
  type: string
  description: Event location
description:
  type: string
  description: Event details
```

## Load event

HTTP GET /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/events/${eventId}`);
```


## Update event

HTTP PUT /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/glip/events/${eventId}`, glipEventCreate);
```


`glipEventCreate` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of an event
creatorId:
  type: string
  description: Internal identifier of a person created an event
title:
  type: string
  description: Event title
startTime:
  type: string
  description: Datetime of starting an event
endTime:
  type: string
  description: Datetime of ending an event
allDay:
  type: boolean
  description: >-
    Indicates whether event has some specific time slot or lasts for whole
    day(s)
  default: false
recurrence:
  type: string
  description: >-
    Event recurrence settings. For non-periodic events the value is 'None'. Must
    be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month;
    365 - Year
  enum:
    - None
    - Day
    - Weekday
    - Week
    - Month
    - Year
endingCondition:
  type: string
  description: Condition of ending
endingAfter:
  type: integer
  description: >-
    Count of iterations. For periodic events only. Value range is 1 - 10. Must
    be specified if 'endingCondition' is 'Count'
endingOn:
  type: string
  enum:
    - None
    - Count
    - Date
  default: None
  description: Iterations end datetime for periodic events.
color:
  type: string
  description: >-
    Hex color code, specifying font color of Event title (including its
    presentation in Calendar)
  enum:
    - Black
    - Red
    - Orange
    - Yellow
    - Green
    - Blue
    - Purple
    - Magenta
  default: Black
location:
  type: string
  description: Event location
description:
  type: string
  description: Event details
```

## Delete event

HTTP DELETE /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/glip/events/${eventId}`);
```


## Create eventby group id

HTTP POST /restapi/v1.0/glip/groups/{groupId}/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/events`, glipEventCreate);
```


`glipEventCreate` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of an event
creatorId:
  type: string
  description: Internal identifier of a person created an event
title:
  type: string
  description: Event title
startTime:
  type: string
  description: Datetime of starting an event
endTime:
  type: string
  description: Datetime of ending an event
allDay:
  type: boolean
  description: >-
    Indicates whether event has some specific time slot or lasts for whole
    day(s)
  default: false
recurrence:
  type: string
  description: >-
    Event recurrence settings. For non-periodic events the value is 'None'. Must
    be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month;
    365 - Year
  enum:
    - None
    - Day
    - Weekday
    - Week
    - Month
    - Year
endingCondition:
  type: string
  description: Condition of ending
endingAfter:
  type: integer
  description: >-
    Count of iterations. For periodic events only. Value range is 1 - 10. Must
    be specified if 'endingCondition' is 'Count'
endingOn:
  type: string
  enum:
    - None
    - Count
    - Date
  default: None
  description: Iterations end datetime for periodic events.
color:
  type: string
  description: >-
    Hex color code, specifying font color of Event title (including its
    presentation in Calendar)
  enum:
    - Black
    - Red
    - Orange
    - Yellow
    - Green
    - Blue
    - Purple
    - Magenta
  default: Black
location:
  type: string
  description: Event location
description:
  type: string
  description: Event details
```

## List group events

HTTP GET /restapi/v1.0/glip/groups/{groupId}/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/events`);
```


## Load group notes

HTTP GET /restapi/v1.0/glip/groups/{groupId}/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/notes`);
```


## Create group note

HTTP POST /restapi/v1.0/glip/groups/{groupId}/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/notes`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a note
status:
  type: string
  description: >-
    If a note should be immediately published then pass 'Active' value. This
    doesn't create a new post in the current group but as a result the note can
    be read by members of this group
  default: Draft
  enum:
    - Active
    - Draft
body:
  type: string
  description: Contents of a note
```

## Load user notes

HTTP GET /restapi/v1.0/glip/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/notes');
```


## Create user note

HTTP POST /restapi/v1.0/glip/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/notes', glipNoteCreate);
```


`glipNoteCreate` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a note
status:
  type: string
  description: >-
    If a note should be immediately published then pass 'Active' value. This
    doesn't create a new post in the current group but as a result the note can
    be read by members of this group
  default: Draft
  enum:
    - Active
    - Draft
body:
  type: string
  description: Contents of a note
```

## Load user note

HTTP GET /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/notes/${noteId}`);
```


## Delete note

HTTP DELETE /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/glip/notes/${noteId}`);
```


## Patch note

HTTP PATCH /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch(`/restapi/v1.0/glip/notes/${noteId}`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a note
status:
  type: string
  description: >-
    If a note should be immediately published then pass 'Active' value. This
    doesn't create a new post in the current group but as a result the note can
    be read by members of this group
  default: Draft
  enum:
    - Active
    - Draft
body:
  type: string
  description: Contents of a note
```

## Update note

HTTP PUT /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/glip/notes/${noteId}`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following properties:

```yaml
title:
  type: string
  description: Title of a note
status:
  type: string
  description: >-
    If a note should be immediately published then pass 'Active' value. This
    doesn't create a new post in the current group but as a result the note can
    be read by members of this group
  default: Draft
  enum:
    - Active
    - Draft
body:
  type: string
  description: Contents of a note
```

## Lock note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/lock

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/lock`);
```


## Publish note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/publish

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/publish`);
```


## Unlock note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/unlock

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/unlock`);
```


## Load glip person

HTTP GET /restapi/v1.0/glip/persons/{personId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/persons/${personId}`);
```


## Load glip company

HTTP GET /restapi/v1.0/glip/companies/{companyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/companies/${companyId}`);
```


## Create glip group webhook

HTTP POST /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


## List glip group webhooks

HTTP GET /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


## List glip webhooks

HTTP GET /restapi/v1.0/glip/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/webhooks');
```


## Load glip webhook

HTTP GET /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


## Delete glip webhook

HTTP DELETE /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


## Activate glip webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/activate

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/activate`);
```


## Suspend glip webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/suspend

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/suspend`);
```


## Load glip preferences

HTTP GET /restapi/v1.0/glip/preferences

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/glip/preferences');
```


## List meetings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create meeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting`, meetingRequestResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`meetingRequestResource` is an object with the following properties:

```yaml
topic:
  type: string
meetingType:
  type: string
schedule:
  $ref: '#/definitions/MeetingScheduleResource'
password:
  type: string
host:
  $ref: '#/definitions/HostInfoRequest'
allowJoinBeforeHost:
  type: boolean
  default: false
startHostVideo:
  type: boolean
  default: false
startParticipantsVideo:
  type: boolean
  default: false
audioOptions:
  type: array
  items:
    type: string
```

## Load meeting

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update meeting

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`, meetingRequestResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`meetingRequestResource` is an object with the following properties:

```yaml
topic:
  type: string
meetingType:
  type: string
schedule:
  $ref: '#/definitions/MeetingScheduleResource'
password:
  type: string
host:
  $ref: '#/definitions/HostInfoRequest'
allowJoinBeforeHost:
  type: boolean
  default: false
startHostVideo:
  type: boolean
  default: false
startParticipantsVideo:
  type: boolean
  default: false
audioOptions:
  type: array
  items:
    type: string
```

## Delete meeting

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## End meeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}/end`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load meeting service info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/service-info`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List subscriptions

HTTP GET /restapi/v1.0/subscription

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/subscription');
```


## Create subscription

HTTP POST /restapi/v1.0/subscription

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/subscription', createSubscriptionRequest);
```


`createSubscriptionRequest` is an object with the following properties:

```yaml
eventFilters:
  type: array
  description: >-
    Collection of URIs to API resources. For APNS transport type only message
    event filter is available
  items:
    type: string
deliveryMode:
  description: Notification delivery settings
  $ref: '#/definitions/NotificationDeliveryModeRequest'
expiresIn:
  type: integer
  description: >-
    Subscription lifetime in seconds. Max value is 7 days (604800 sec). For
    *WebHook* transport type max value might be set up to 630720000 seconds (20
    years)
  default: 604800
```

## Load subscription

HTTP GET /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/subscription/${subscriptionId}`);
```


## Update subscription

HTTP PUT /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/subscription/${subscriptionId}`, modifySubscriptionRequest);
```


`modifySubscriptionRequest` is an object with the following properties:

```yaml
eventFilters:
  type: array
  description: Collection of URIs to API resources
  items:
    type: string
deliveryMode:
  description: Notification delivery settings
  $ref: '#/definitions/NotificationDeliveryModeRequest'
expiresIn:
  type: integer
  description: >-
    Subscription lifetime in seconds. Max value is 7 days (604800 sec). For
    *WebHook* transport type max value might be set up to 630720000 seconds (20
    years)
  default: 604800
```

## Delete subscription

HTTP DELETE /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/subscription/${subscriptionId}`);
```


## Renew subscription

HTTP POST /restapi/v1.0/subscription/{subscriptionId}/renew

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/subscription/${subscriptionId}/renew`);
```


## Get authorization profile

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Check user permission

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile/check`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load user business hours

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/business-hours`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update user business hours

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/business-hours`, userBusinessHoursUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`userBusinessHoursUpdateRequest` is an object with the following properties:

```yaml
schedule:
  description: Schedule when an answering rule is applied
  $ref: '#/definitions/UserBusinessHoursScheduleInfo'
```

## Load company business hours

HTTP GET /restapi/v1.0/account/{accountId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-hours`);
```

- `accountId`'s default value is `~`

## Update company business hours

HTTP PUT /restapi/v1.0/account/{accountId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/business-hours`, companyBusinessHoursUpdateRequest);
```

- `accountId`'s default value is `~`

`companyBusinessHoursUpdateRequest` is an object with the following properties:

```yaml
schedule:
  description: Schedule when an answering rule is applied
  $ref: '#/definitions/CompanyBusinessHoursScheduleInfo'
```

## Load call blocking settings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update call blocking settings

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking`, callerBlockingSettingsUpdate);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`callerBlockingSettingsUpdate` is an object with the following properties:

```yaml
mode:
  type: string
  enum:
    - Specific
    - All
  description: 'Call blocking options: either specific or all calls and faxes'
noCallerId:
  description: Determines how to handle calls with no caller ID in 'Specific' mode
  type: string
  enum:
    - BlockCallsAndFaxes
    - BlockFaxes
    - Allow
payPhones:
  type: string
  enum:
    - Block
    - Allow
  description: Blocking settings for pay phones
greetings:
  type: array
  description: List of greetings played for blocked callers
  items:
    $ref: '#/definitions/BlockedCallerGreetingInfo'
```

## List blocked allowed phone number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create blocked allowed phone number list

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`, addBlockedAllowedPhoneNumber);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`addBlockedAllowedPhoneNumber` is an object with the following properties:

```yaml
phoneNumber:
  type: string
  description: >-
    A blocked/allowed phone number in
    [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
label:
  type: string
  description: Custom name of a blocked/allowed phone number
status:
  type: string
  description: Status of a phone number
  enum:
    - Blocked
    - Allowed
  default: Blocked
```

## Create blocked allowed phone number lists

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/bulk-update

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/bulk-update`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load blocked allowed phone number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete blocked allowed phone number

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update blocked allowed phone number

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`, addBlockedAllowedPhoneNumber);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`addBlockedAllowedPhoneNumber` is an object with the following properties:

```yaml
phoneNumber:
  type: string
  description: >-
    A blocked/allowed phone number in
    [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
label:
  type: string
  description: Custom name of a blocked/allowed phone number
status:
  type: string
  description: Status of a phone number
  enum:
    - Blocked
    - Allowed
  default: Blocked
```

## List extension forwarding numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create extension forwarding number

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`, createForwardingNumberRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createForwardingNumberRequest` is an object with the following properties:

```yaml
phoneNumber:
  type: string
  description: Forwarding/Call flip phone number
label:
  type: string
  description: Forwarding/Call flip number title
type:
  type: string
  description: >-
    Forwarding/Call flip phone type. If specified, 'label' attribute value is
    ignored. The default value is 'Other'
  enum:
    - PhoneLine
    - Home
    - Mobile
    - Work
    - Other
device:
  description: >-
    Reference to the other extension device. Applicable for 'PhoneLine' type
    only. Cannot be specified together with 'phoneNumber' parameter.
  $ref: '#/definitions/CreateForwardingNumberDeviceInfo'
```

## Load extension forwarding number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension forwarding number

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`, updateForwardingNumberRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateForwardingNumberRequest` is an object with the following properties:

```yaml
phoneNumber:
  type: string
  description: Forwarding/Call flip phone number
label:
  type: string
  description: Forwarding/Call flip number title
flipNumber:
  type: string
  description: >-
    Number assigned to the call flip phone number, corresponds to the shortcut
    dial number
type:
  type: string
  description: Forwarding phone number type
  enum:
    - Home
    - Mobile
    - Work
    - PhoneLine
    - Outage
    - Other
```

## Delete extension forwarding number

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List answering rules

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create answering rule

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`, createAnsweringRuleRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createAnsweringRuleRequest` is an object with the following properties:

```yaml
enabled:
  type: boolean
  description: Specifies if the rule is active or inactive. The default value is 'True'
type:
  type: string
  description: Type of an answering rule. The 'Custom' value should be specified
name:
  type: string
  description: Name of an answering rule specified by user
callers:
  type: array
  description: >-
    Answering rule will be applied when calls are received from the specified
    caller(s)
  items:
    $ref: '#/definitions/CallersInfoRequest'
calledNumbers:
  type: array
  description: Answering rules are applied when calling to selected number(s)
  items:
    $ref: '#/definitions/CalledNumberInfo'
schedule:
  description: Schedule when an answering rule should be applied
  $ref: '#/definitions/ScheduleInfo'
callHandlingAction:
  type: string
  description: Specifies how incoming calls are forwarded
  enum:
    - ForwardCalls
    - UnconditionalForwarding
    - AgentQueue
    - TransferToExtension
    - TakeMessagesOnly
    - PlayAnnouncementOnly
forwarding:
  description: >-
    Forwarding parameters. Returned if 'ForwardCalls' is specified in
    'callHandlingAction'. These settings determine the forwarding numbers to
    which the call will be forwarded
  $ref: '#/definitions/ForwardingInfo'
unconditionalForwarding:
  description: >-
    Unconditional forwarding parameters. Returned if 'UnconditionalForwarding'
    is specified in 'callHandlingAction'
  $ref: '#/definitions/UnconditionalForwardingInfo'
queue:
  description: >-
    Queue settings applied for department (call queue) extension type, with the
    'AgentQueue' value specified as a call handling action
  $ref: '#/definitions/QueueInfo'
transfer:
  description: >-
    Transfer settings applied for department (call queue) extension type, with
    'TransferToExtension' call handling action
  $ref: '#/definitions/TransferredExtensionInfo'
voicemail:
  description: Specifies whether to take a voicemail and who should do it
  $ref: '#/definitions/VoicemailInfo'
greetings:
  type: array
  description: >-
    Greetings applied for an answering rule; only predefined greetings can be
    applied, see Dictionary Greeting List
  items:
    $ref: '#/definitions/GreetingInfo'
screening:
  type: string
  description: >-
    Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller
    ID is missing, then callers are asked to say their name before connecting;
    'UnknownCallerId' - if caller ID is not in contact list, then callers are
    asked to say their name before connecting; 'Always' - the callers are always
    asked to say their name before connecting. The default value is 'Off'
  enum:
    - 'Off'
    - NoCallerId
    - UnknownCallerId
    - Always
```

## Load answering rule

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update answering rule

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`, updateAnsweringRuleRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateAnsweringRuleRequest` is an object with the following properties:

```yaml
forwarding:
  description: >-
    Forwarding parameters. Returned if 'ForwardCalls' is specified in
    'callHandlingAction'. These settings determine the forwarding numbers to
    which the call will be forwarded
  $ref: '#/definitions/ForwardingInfoCreateRuleRequest'
enabled:
  type: boolean
  description: Specifies if the rule is active or inactive. The default value is 'True'
name:
  type: string
  description: Name of an answering rule specified by user
callers:
  type: array
  description: >-
    Answering rule will be applied when calls are received from the specified
    caller(s)
  items:
    $ref: '#/definitions/CallersInfoRequest'
calledNumbers:
  type: array
  description: Answering rules are applied when calling to selected number(s)
  items:
    $ref: '#/definitions/CalledNumberInfo'
schedule:
  description: Schedule when an answering rule should be applied
  $ref: '#/definitions/ScheduleInfo'
callHandlingAction:
  type: string
  description: Specifies how incoming calls are forwarded
  enum:
    - ForwardCalls
    - UnconditionalForwarding
    - AgentQueue
    - TransferToExtension
    - TakeMessagesOnly
    - PlayAnnouncementOnly
unconditionalForwarding:
  description: >-
    Unconditional forwarding parameters. Returned if 'UnconditionalForwarding'
    is specified in 'callHandlingAction'
  $ref: '#/definitions/UnconditionalForwardingInfo'
queue:
  description: >-
    Queue settings applied for department (call queue) extension type, with the
    'AgentQueue' value specified as a call handling action
  $ref: '#/definitions/QueueInfo'
voicemail:
  description: Specifies whether to take a voicemail and who should do it
  $ref: '#/definitions/VoicemailInfo'
greetings:
  type: array
  description: >-
    Greetings applied for an answering rule; only predefined greetings can be
    applied, see Dictionary Greeting List
  items:
    $ref: '#/definitions/GreetingInfo'
screening:
  type: string
  description: >-
    Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller
    ID is missing, then callers are asked to say their name before connecting;
    'UnknownCallerId' - if caller ID is not in contact list, then callers are
    asked to say their name before connecting; 'Always' - the callers are always
    asked to say their name before connecting. The default value is 'Off'
  enum:
    - 'Off'
    - NoCallerId
    - UnknownCallerId
    - Always
showInactiveNumbers:
  type: boolean
  description: Indicates whether inactive numbers should be returned or not.
```

## Delete answering rule

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create company answering rule

HTTP POST /restapi/v1.0/account/{accountId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/answering-rule`, companyAnsweringRuleRequest);
```

- `accountId`'s default value is `~`

`companyAnsweringRuleRequest` is an object with the following properties:

```yaml
name:
  type: string
  description: >-
    Name of an answering rule specified by user. Max number of symbols is 30.
    The default value is 'My Rule N' where 'N' is the first free number
enabled:
  type: boolean
  description: Specifies if the rule is active or inactive. The default value is 'True'
  default: true
type:
  type: string
  description: >-
    Type of an answering rule, the default value is 'Custom' = ['BusinessHours',
    'AfterHours', 'Custom']
  enum:
    - BusinessHours
    - AfterHours
    - Custom
callers:
  type: array
  description: >-
    Answering rule will be applied when calls are received from the specified
    caller(s)
  items:
    $ref: '#/definitions/CompanyAnsweringRuleCallersInfoRequest'
calledNumbers:
  type: array
  description: Answering rule will be applied when calling the specified number(s)
  items:
    $ref: '#/definitions/CompanyAnsweringRuleCalledNumberInfo'
schedule:
  description: Schedule when an answering rule should be applied
  $ref: '#/definitions/CompanyAnsweringRuleScheduleInfoRequest'
callHandlingAction:
  type: string
  description: >-
    Specifies how incoming calls are forwarded. The default value is 'Operator'
    'Operator' - play company greeting and forward to operator extension
    'Disconnect' - play company greeting and disconnect 'Bypass' - bypass
    greeting to go to selected extension = ['Operator', 'Disconnect', 'Bypass']
  enum:
    - Operator
    - Disconnect
    - Bypass
extension:
  description: Extension to which the call is forwarded in 'Bypass' mode
  $ref: '#/definitions/CompanyAnsweringRuleCallersInfoRequest'
greetings:
  type: array
  description: >-
    Greetings applied for an answering rule; only predefined greetings can be
    applied, see Dictionary Greeting List
  items:
    $ref: '#/definitions/GreetingInfo'
```

## List company answering rule

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule`);
```

- `accountId`'s default value is `~`

## Load company answering rule

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

## Update company answering rule

HTTP PUT /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`, companyAnsweringRuleUpdate);
```

- `accountId`'s default value is `~`

`companyAnsweringRuleUpdate` is an object with the following properties:

```yaml
enabled:
  type: boolean
  description: Specifies if the rule is active or inactive. The default value is 'True'
  default: true
name:
  type: string
  description: >-
    Name of an answering rule specified by user. Max number of symbols is 30.
    The default value is 'My Rule N' where 'N' is the first free number
callers:
  type: array
  description: >-
    Answering rule will be applied when calls are received from the specified
    caller(s)
  items:
    $ref: '#/definitions/CompanyAnsweringRuleCallersInfoRequest'
calledNumbers:
  type: array
  description: Answering rule will be applied when calling the specified number(s)
  items:
    $ref: '#/definitions/CompanyAnsweringRuleCalledNumberInfo'
schedule:
  description: Schedule when an answering rule should be applied
  $ref: '#/definitions/CompanyAnsweringRuleScheduleInfoRequest'
callHandlingAction:
  type: string
  description: >-
    Specifies how incoming calls are forwarded. The default value is 'Operator'
    'Operator' - play company greeting and forward to operator extension
    'Disconnect' - play company greeting and disconnect 'Bypass' - bypass
    greeting to go to selected extension = ['Operator', 'Disconnect', 'Bypass']
  enum:
    - Operator
    - Disconnect
    - Bypass
extension:
  description: Extension to which the call is forwarded in 'Bypass' mode
  $ref: '#/definitions/CompanyAnsweringRuleCallersInfoRequest'
greetings:
  type: array
  description: >-
    Greetings applied for an answering rule; only predefined greetings can be
    applied, see Dictionary Greeting List
  items:
    $ref: '#/definitions/GreetingInfo'
```

## Delete company answering rule

HTTP DELETE /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

## List standard greetings

HTTP GET /restapi/v1.0/dictionary/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/greeting');
```


## Load standard greeting

HTTP GET /restapi/v1.0/dictionary/greeting/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/dictionary/greeting/${greetingId}`);
```


## Create company greeting

HTTP POST /restapi/v1.0/account/{accountId}/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/greeting`, customCompanyGreetingRequest);
```

- `accountId`'s default value is `~`

`customCompanyGreetingRequest` is an object with the following properties:

```yaml
type:
  type: string
  description: Type of a greeting
  enum:
    - Company
    - StartRecording
    - StopRecording
    - AutomaticRecording
answeringRule:
  description: Information on an answering rule that the greeting is applied to
  $ref: '#/definitions/CustomCompanyGreetingAnsweringRuleInfo'
language:
  description: >-
    Information on a greeting language. Supported for types 'StopRecording',
    'StartRecording', 'AutomaticRecording'
  $ref: '#/definitions/CustomCompanyGreetingLanguageInfoRequest'
audio:
  type: file
  description: Custom greeting audio
```

## Create user custom greeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting`, customGreetingRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`customGreetingRequest` is an object with the following properties:

```yaml
type:
  type: string
  description: 'Type of a greeting, specifying the case when the greeting is played.'
  enum:
    - Introductory
    - Announcement
    - ConnectingMessage
    - ConnectingAudio
    - Voicemail
    - Unavailable
    - HoldMusic
answeringRule:
  description: Information on an answering rule that the greeting is applied to
  $ref: '#/definitions/CustomGreetingAnsweringRuleInfoRequest'
audio:
  type: file
  description: Custom greeting audio
```

## Load custom greeting

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting/${greetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create ivr prompt

HTTP POST /restapi/v1.0/account/{accountId}/ivr-prompts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/ivr-prompts`);
```

- `accountId`'s default value is `~`

## List ivr prompts

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts`);
```

- `accountId`'s default value is `~`

## Load ivr prompt

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Delete ivr prompt

HTTP DELETE /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Update ivr prompt

HTTP PUT /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Load ivr prompt content

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}/content`);
```

- `accountId`'s default value is `~`

## Create ivr menu

HTTP POST /restapi/v1.0/account/{accountId}/ivr-menus

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/ivr-menus`, iVRMenuInfo);
```

- `accountId`'s default value is `~`

`iVRMenuInfo` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of an IVR Menu extension
uri:
  type: string
  description: Link to an IVR Menu extension resource
name:
  type: string
  description: First name of an IVR Menu user
extensionNumber:
  type: string
  description: Number of an IVR Menu extension
prompt:
  description: Prompt metadata
  $ref: '#/definitions/IVRMenuPromptInfo'
actions:
  type: array
  description: Keys handling settings
  items:
    $ref: '#/definitions/IVRMenuActionsInfo'
```

## Load ivr menu

HTTP GET /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`);
```

- `accountId`'s default value is `~`

## Update ivr menu

HTTP PUT /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`, iVRMenuInfo);
```

- `accountId`'s default value is `~`

`iVRMenuInfo` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of an IVR Menu extension
uri:
  type: string
  description: Link to an IVR Menu extension resource
name:
  type: string
  description: First name of an IVR Menu user
extensionNumber:
  type: string
  description: Number of an IVR Menu extension
prompt:
  description: Prompt metadata
  $ref: '#/definitions/IVRMenuPromptInfo'
actions:
  type: array
  description: Keys handling settings
  items:
    $ref: '#/definitions/IVRMenuActionsInfo'
```

## Load call recording settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording`);
```

- `accountId`'s default value is `~`

## Update call recording settings

HTTP PUT /restapi/v1.0/account/{accountId}/call-recording

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/call-recording`, callRecordingSettingsResource);
```

- `accountId`'s default value is `~`

`callRecordingSettingsResource` is an object with the following properties:

```yaml
onDemand:
  $ref: '#/definitions/OnDemandResource'
automatic:
  $ref: '#/definitions/AutomaticRecordingResource'
greetings:
  type: array
  description: Collection of Greeting Info
  items:
    $ref: '#/definitions/GreetingResource'
```

## List call recording extension settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/extensions

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/extensions`);
```

- `accountId`'s default value is `~`

## Update call recording extension settings

HTTP POST /restapi/v1.0/account/{accountId}/call-recording/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-recording/bulk-assign`, bulkAccountCallRecordingsResource);
```

- `accountId`'s default value is `~`

`bulkAccountCallRecordingsResource` is an object with the following properties:

```yaml
addedExtensions:
  $ref: '#/definitions/CallRecordingExtensionResource'
updatedExtensions:
  $ref: '#/definitions/CallRecordingExtensionResource'
removedExtensions:
  $ref: '#/definitions/CallRecordingExtensionResource'
```

## List call recording custom greetings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

## Delete call recording custom greetings

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

## Delete call recording custom greeting

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings/${greetingId}`);
```

- `accountId`'s default value is `~`

## Create sip registration

HTTP POST /restapi/v1.0/client-info/sip-provision

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/client-info/sip-provision', createSipRegistrationRequest);
```


`createSipRegistrationRequest` is an object with the following properties:

```yaml
device:
  type: array
  description: Device unique description
  items:
    $ref: '#/definitions/DeviceInfoRequest'
sipInfo:
  type: array
  description: SIP settings for device
  items:
    $ref: '#/definitions/SIPInfoRequest'
```

## List extension phone numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/phone-number`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load extension info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`, extensionUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`extensionUpdateRequest` is an object with the following properties:

```yaml
status:
  type: string
  enum:
    - Disabled
    - Enabled
    - NotActivated
statusInfo:
  $ref: '#/definitions/ExtensionStatusInfo'
reason:
  type: string
  description: Type of suspension
comment:
  type: string
  description: Free Form user comment
extensionNumber:
  type: string
  description: Extension number available
contact:
  $ref: '#/definitions/ContactInfoUpdateRequest'
regionalSettings:
  $ref: '#/definitions/ExtensionRegionalSettingRequest'
setupWizardState:
  type: string
  enum:
    - NotStarted
    - Incomplete
    - Completed
partnerId:
  type: string
  description: ' Extension partner identifier'
ivrPin:
  type: string
  description: IVR PIN
password:
  type: string
  description: Password for extension
callQueueInfo:
  $ref: '#/definitions/CallQueueInfoRequest'
  description: For Department extension type only. Call queue settings
transition:
  $ref: '#/definitions/UserTransitionInfo'
  description: For NotActivated extensions only. Welcome email settings
```

## Delete extension

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load extension caller id

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension caller id

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`, extensionCallerIdInfo);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`extensionCallerIdInfo` is an object with the following properties:

```yaml
uri:
  type: string
  description: Canonical URL of a caller ID resource
byDevice:
  type: array
  items:
    $ref: '#/definitions/CallerIdByDevice'
    description: Caller ID settings by device
byFeature:
  type: array
  items:
    $ref: '#/definitions/CallerIdByFeature'
    description: Caller ID settings by feature
extensionNameForOutboundCalls:
  type: boolean
  description: >-
    If 'True', then user first name and last name will be used as caller ID when
    making outbound calls from extension
extensionNumberForInternalCalls:
  type: boolean
  description: >-
    If 'True', then extension number will be used as caller ID when making
    internal calls
```

## List extension grants

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/grant`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load notification settings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/notification-settings`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update notification settings

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/notification-settings`, notificationSettingsUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`notificationSettingsUpdateRequest` is an object with the following properties:

```yaml
emailAddresses:
  type: array
  items:
    type: string
  description: List of notification recipient email addresses
smsEmailAddresses:
  type: array
  items:
    type: string
  description: List of notification recipient email addresses
advancedMode:
  type: boolean
  description: >-
    Specifies notifications settings mode. If 'True' then advanced mode is on,
    it allows using different emails and/or phone numbers for each notification
    type. If 'False' then basic mode is on. Advanced mode settings are returned
    in both modes, if specified once, but if basic mode is switched on, they are
    not applied 
voicemails:
  $ref: '#/definitions/VoicemailsInfo'
inboundFaxes:
  $ref: '#/definitions/InboundFaxesInfo'
outboundFaxes:
  $ref: '#/definitions/OutboundFaxesInfo'
inboundTexts:
  $ref: '#/definitions/InboundTextsInfo'
missedCalls:
  $ref: '#/definitions/MissedCallsInfo'
```

## Download profile image

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Upload profile image

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update profile image

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Download scaled pofile image

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image/${scaleSize}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load conferencing info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update conferencing info

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`, updateConferencingInfoRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateConferencingInfoRequest` is an object with the following properties:

```yaml
phoneNumbers:
  type: array
  items:
    $ref: '#/definitions/ConferencePhoneNumberInfo'
  description: >-
    Multiple dial-in phone numbers to connect to audio conference service,
    relevant for user's brand. Each number is given with the country and
    location information, in order to let the user choose the less expensive way
    to connect to a conference. The first number in the list is the primary
    conference number, that is default and domestic
allowJoinBeforeHost:
  type: boolean
  description: >-
    Determines if host user allows conference participants to join before the
    host
```

## Load account

HTTP GET /restapi/v1.0/account/{accountId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}`);
```

- `accountId`'s default value is `~`

## Load account business address

HTTP GET /restapi/v1.0/account/{accountId}/business-address

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-address`);
```

- `accountId`'s default value is `~`

## Update account business address

HTTP PUT /restapi/v1.0/account/{accountId}/business-address

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/business-address`, modifyAccountBusinessAddressRequest);
```

- `accountId`'s default value is `~`

`modifyAccountBusinessAddressRequest` is an object with the following properties:

```yaml
company:
  type: string
  description: Company business name
email:
  type: string
  description: Company business email address
businessAddress:
  description: Company business address
  $ref: '#/definitions/BusinessAddressInfo'
```

## Load service info

HTTP GET /restapi/v1.0/account/{accountId}/service-info

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/service-info`);
```

- `accountId`'s default value is `~`

## List languages

HTTP GET /restapi/v1.0/dictionary/language

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/language');
```


## Load language

HTTP GET /restapi/v1.0/dictionary/language/{languageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/dictionary/language/${languageId}`);
```


## List countries

HTTP GET /restapi/v1.0/dictionary/country

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/country');
```


## Load country

HTTP GET /restapi/v1.0/dictionary/country/{countryId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/dictionary/country/${countryId}`);
```


## List locations

HTTP GET /restapi/v1.0/dictionary/location

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/location');
```


## List states

HTTP GET /restapi/v1.0/dictionary/state

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/state');
```


## Load state

HTTP GET /restapi/v1.0/dictionary/state/{stateId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/dictionary/state/${stateId}`);
```


## List timezones

HTTP GET /restapi/v1.0/dictionary/timezone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/v1.0/dictionary/timezone');
```


## Load timezone

HTTP GET /restapi/v1.0/dictionary/timezone/{timezoneId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/dictionary/timezone/${timezoneId}`);
```


## List account phone numbers

HTTP GET /restapi/v1.0/account/{accountId}/phone-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number`);
```

- `accountId`'s default value is `~`

## Load account phone number

HTTP GET /restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number/${phoneNumberId}`);
```

- `accountId`'s default value is `~`

## List extensions

HTTP GET /restapi/v1.0/account/{accountId}/extension

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension`);
```

- `accountId`'s default value is `~`

## Create extension

HTTP POST /restapi/v1.0/account/{accountId}/extension

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension`, extensionCreationRequest);
```

- `accountId`'s default value is `~`

`extensionCreationRequest` is an object with the following properties:

```yaml
contact:
  description: Contact Information
  $ref: '#/definitions/ContactInfoCreationRequest'
extensionNumber:
  type: string
  description: Number of extension
password:
  type: string
  description: 'Password for extension. If not specified, the password is auto-generated'
references:
  type: array
  description: List of non-RC internal identifiers assigned to an extension
  items:
    $ref: '#/definitions/ReferenceInfo'
roles:
  type: array
  items:
    $ref: '#/definitions/Roles'
regionalSettings:
  description: 'Extension region data (timezone, home country, language)'
  $ref: '#/definitions/RegionalSettings'
setupWizardState:
  type: string
  description: Specifies extension configuration wizard state (web service setup).
  default: NotStarted
  enum:
    - NotStarted
    - Incomplete
    - Completed
status:
  type: string
  description: Extension current state
  enum:
    - Enabled
    - Disabled
    - NotActivated
    - Unassigned
statusInfo:
  description: 'Status information (reason, comment). For ''Disabled'' status only'
  $ref: '#/definitions/ExtensionStatusInfo'
type:
  type: string
  description: Extension type
  enum:
    - User
    - VirtualUser
    - DigitalUser
    - Department
    - Announcement
    - Voicemail
    - SharedLinesGroup
    - PagingOnlyGroup
    - ParkLocation
hidden:
  type: boolean
  description: >-
    Hides extension from showing in company directory. Supported for extensions
    of User type only. For unassigned extensions the value is set to 'True' by
    default. For assigned extensions the value is set to 'False' by default
```

## List templates

HTTP GET /restapi/v1.0/account/{accountId}/templates

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates`);
```

- `accountId`'s default value is `~`

## Load template

HTTP GET /restapi/v1.0/account/{accountId}/templates/{templateId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates/${templateId}`);
```

- `accountId`'s default value is `~`

## List call queues

HTTP GET /restapi/v1.0/account/{accountId}/call-queues

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues`);
```

- `accountId`'s default value is `~`

## List call queue members

HTTP GET /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues/${groupId}/members`);
```

- `accountId`'s default value is `~`

## Assign call queue members

HTTP POST /restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-queues/${groupId}/bulk-assign`, callQueueBulkAssignResource);
```

- `accountId`'s default value is `~`

`callQueueBulkAssignResource` is an object with the following properties:

```yaml
addedExtensionIds:
  type: array
  items:
    type: string
removedExtensionIds:
  type: array
  items:
    type: string
```

## List department members

HTTP GET /restapi/v1.0/account/{accountId}/department/{departmentId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/department/${departmentId}/members`);
```

- `accountId`'s default value is `~`

## Bulk assign departments

HTTP POST /restapi/v1.0/account/{accountId}/department/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/department/bulk-assign`, departmentBulkAssignResource);
```

- `accountId`'s default value is `~`

`departmentBulkAssignResource` is an object with the following properties:

```yaml
items:
  type: array
  items:
    $ref: '#/definitions/BulkAssignItem'
```

## List paging group users

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/users`);
```

- `accountId`'s default value is `~`

## List paging group devices

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/devices`);
```

- `accountId`'s default value is `~`

## Bulk assign paging group

HTTP POST /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/bulk-assign`, editPagingGroupRequest);
```

- `accountId`'s default value is `~`

`editPagingGroupRequest` is an object with the following properties:

```yaml
addedUserIds:
  type: array
  description: List of users that will be allowed to page a group specified
  items:
    type: string
removedUserIds:
  type: array
  description: List of users that will be unallowed to page a group specified
  items:
    type: string
addedDeviceIds:
  type: array
  description: List of account devices that will be assigned to a paging group specified
  items:
    type: string
removedDeviceIds:
  type: array
  description: >-
    List of account devices that will be unassigned from a paging group
    specified
  items:
    type: string
```

## Create call monitoring group

HTTP POST /restapi/v1.0/account/{accountId}/call-monitoring-groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-monitoring-groups`, createCallMonitoringGroupRequest);
```

- `accountId`'s default value is `~`

`createCallMonitoringGroupRequest` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of a group
name:
  type: string
  description: Name of a group
```

## List call monitoring groups

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups`);
```

- `accountId`'s default value is `~`

## Update call monitoring group

HTTP PUT /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`, createCallMonitoringGroupRequest);
```

- `accountId`'s default value is `~`

`createCallMonitoringGroupRequest` is an object with the following properties:

```yaml
id:
  type: string
  description: Internal identifier of a group
name:
  type: string
  description: Name of a group
```

## Remove call monitoring group

HTTP DELETE /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`);
```

- `accountId`'s default value is `~`

## List call monitoring group members

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}/members`);
```

- `accountId`'s default value is `~`

## Update call monitoring groups

HTTP POST /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}/bulk-assign`, callMonitoringBulkAssign);
```

- `accountId`'s default value is `~`

`callMonitoringBulkAssign` is an object with the following properties:

```yaml
addedExtensions:
  type: array
  items:
    $ref: '#/definitions/CallMonitoringExtensionUpdate'
removedExtensions:
  type: array
  items:
    $ref: '#/definitions/CallMonitoringExtensionUpdate'
updatedExtensions:
  type: array
  items:
    $ref: '#/definitions/CallMonitoringExtensionUpdate'
```

## Parse phone number

HTTP POST /restapi/v1.0/number-parser/parse

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/number-parser/parse', parsePhoneNumberRequest);
```


`parsePhoneNumberRequest` is an object with the following properties:

```yaml
originalStrings:
  type: array
  description: >-
    Phone numbers passed in a string. The maximum value of phone numbers is
    limited to 64. The maximum number of symbols in each phone number in a
    string is 64
  items:
    type: string
```

## Load account device

HTTP GET /restapi/v1.0/account/{accountId}/device/{deviceId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/device/${deviceId}`);
```

- `accountId`'s default value is `~`

## Update device

HTTP PUT /restapi/v1.0/account/{accountId}/device/{deviceId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/device/${deviceId}`, accountDeviceUpdate);
```

- `accountId`'s default value is `~`

`accountDeviceUpdate` is an object with the following properties:

```yaml
emergencyServiceAddress:
  description: >-
    Address for emergency cases. The same emergency address is assigned to all
    numbers of a single device
  $ref: '#/definitions/EmergencyAddressInfoRequest'
extension:
  description: Information on extension that the device is assigned to
  $ref: '#/definitions/DeviceUpdateExtensionInfo'
phoneLines:
  description: Information on phone lines added to a device
  $ref: '#/definitions/DeviceUpdatePhoneLinesInfo'
useAsCommonPhone:
  type: boolean
  description: >-
    Supported only for devices assigned to Limited extensions. If true, enables
    users to log in to this phone as a common phone.
```

## List extension devices

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/device

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/device`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Check health

HTTP GET /scim/health

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/scim/health');
```


## Check health2

HTTP GET /scim/v2/health

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/scim/v2/health');
```


## Get service provider config2

HTTP GET /scim/v2/ServiceProviderConfig

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/scim/v2/ServiceProviderConfig');
```


## Search via get2

HTTP GET /scim/v2/Users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/scim/v2/Users');
```


## Create user2

HTTP POST /scim/v2/Users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/scim/v2/Users', user);
```


`user` is an object with the following properties:

```yaml
active:
  type: boolean
  description: user status
  default: false
addresses:
  type: array
  items:
    $ref: '#/definitions/UserAddress'
emails:
  type: array
  items:
    $ref: '#/definitions/Email'
externalId:
  type: string
  description: external unique resource id defined by provisioning client
id:
  type: string
  description: unique resource id defined by RingCentral
name:
  $ref: '#/definitions/Name'
phoneNumbers:
  type: array
  items:
    $ref: '#/definitions/PhoneNumber'
photos:
  type: array
  items:
    $ref: '#/definitions/Photo'
schemas:
  type: array
  items:
    type: string
    enum:
      - 'urn:ietf:params:scim:schemas:core:2.0:User'
'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User':
  $ref: '#/definitions/EnterpriseUser'
userName:
  type: string
  description: MUST be same as work type email address
```

## Search via post2

HTTP POST /scim/v2/Users/.search

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/scim/v2/Users/.search', searchRequest);
```


`searchRequest` is an object with the following properties:

```yaml
count:
  type: integer
  format: int32
  description: page size
filter:
  type: string
  description: only support 'userName' or 'email' filter expressions for now
schemas:
  type: array
  items:
    type: string
    enum:
      - 'urn:ietf:params:scim:api:messages:2.0:SearchRequest'
startIndex:
  type: integer
  format: int32
  description: start index (1-based)
```

## Get user2

HTTP GET /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/scim/v2/Users/${id}`);
```


## Replace user2

HTTP PUT /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.put(`/scim/v2/Users/${id}`, user);
```


`user` is an object with the following properties:

```yaml
active:
  type: boolean
  description: user status
  default: false
addresses:
  type: array
  items:
    $ref: '#/definitions/UserAddress'
emails:
  type: array
  items:
    $ref: '#/definitions/Email'
externalId:
  type: string
  description: external unique resource id defined by provisioning client
id:
  type: string
  description: unique resource id defined by RingCentral
name:
  $ref: '#/definitions/Name'
phoneNumbers:
  type: array
  items:
    $ref: '#/definitions/PhoneNumber'
photos:
  type: array
  items:
    $ref: '#/definitions/Photo'
schemas:
  type: array
  items:
    type: string
    enum:
      - 'urn:ietf:params:scim:schemas:core:2.0:User'
'urn:ietf:params:scim:schemas:extension:enterprise:2.0:User':
  $ref: '#/definitions/EnterpriseUser'
userName:
  type: string
  description: MUST be same as work type email address
```

## Delete user2

HTTP DELETE /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/scim/v2/Users/${id}`);
```


## Patch user2

HTTP PATCH /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch(`/scim/v2/Users/${id}`, userPatch);
```


`userPatch` is an object with the following properties:

```yaml
Operations:
  type: array
  description: patch operations list
  items:
    $ref: '#/definitions/PatchOperation'
schemas:
  type: array
  items:
    type: string
    enum:
      - 'urn:ietf:params:scim:api:messages:2.0:PatchOp'
```

## Get call session status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

## Delete call session

HTTP DELETE /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

## Hold call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/hold

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/hold`);
```

- `accountId`'s default value is `~`

## Unhold call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/unhold

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/unhold`);
```

- `accountId`'s default value is `~`

## Reject party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/reject

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/reject`);
```

- `accountId`'s default value is `~`

## Transfer call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/transfer

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/transfer`, transferTarget);
```

- `accountId`'s default value is `~`

`transferTarget` is an object with the following properties:

```yaml
phoneNumber:
  description: Phone number
  type: string
voicemail:
  description: VM owner's extension id
  type: string
parkOrbit:
  description: Park orbit id
  type: string
```

## Forward call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/forward

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/forward`, forwardTarget);
```

- `accountId`'s default value is `~`

`forwardTarget` is an object with the following properties:

```yaml
phoneNumber:
  description: Phone number
  type: string
voicemail:
  description: VM owner's extension id
  type: string
```

## Call flip party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/flip

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/flip`, callPartyFlip);
```

- `accountId`'s default value is `~`

`callPartyFlip` is an object with the following properties:

```yaml
callFlipId:
  description: Call flip id
  type: string
```

## Get call party status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`);
```

- `accountId`'s default value is `~`

## Update call party

HTTP PATCH /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`, partyUpdateRequest);
```

- `accountId`'s default value is `~`

`partyUpdateRequest` is an object with the following properties:

```yaml
party:
  description: Party update data
  $ref: '#/definitions/PartyUpdateInfo'
```

## Start call recording

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings`);
```

- `accountId`'s default value is `~`

## Pause resume call recording

HTTP PATCH /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings/{recordingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.patch(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings/${recordingId}`, callRecordingUpdate);
```

- `accountId`'s default value is `~`

`callRecordingUpdate` is an object with the following properties:

```yaml
active:
  description: Recording status
  type: boolean
```

## Get compliance archive stream

HTTP GET /restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}/archive/${archiveId}`);
```


## Create data export task

HTTP POST /restapi/v1.0/glip/data-export

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/v1.0/glip/data-export', createDataExportTaskRequest);
```


`createDataExportTaskRequest` is an object with the following properties:

```yaml
dateFrom:
  type: string
  description: >-
    Starting time for data collection. The default value is current time minus
    24 hours. If `dateTo` is not specified then its value is set to `dateFrom`
    plus 24 hours. The specified time range should not be greater than 7 days
dateTo:
  type: string
  description: >-
    Ending time for data collection. The default value is current time. If
    `dateFrom` is not specified then its value is set to `dateTo` minus 24
    hours. The specified time range should not be greater than 7 days
userIds:
  type: array
  description: >-
    List of users which data is collected. The following data will be exported:
    posts, tasks, events, etc. posted by the user(s); posts addressing the
    user(s) via direct and @Mentions; tasks assigned to the listed user(s). The
    list of 30 users per request is supported.
  items:
    type: string
chatIds:
  type: array
  description: >-
    List of chats from which the data (posts, files, tasks, events, notes, etc.)
    will be collected
  items:
    type: string
```

## Load data export task

HTTP GET /restapi/v1.0/glip/data-export/{taskId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}`);
```


## Create message store report

HTTP POST /restapi/v1.0/account/{accountId}/message-store-report

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/message-store-report`, createMessageStoreReportRequest);
```

- `accountId`'s default value is `~`

`createMessageStoreReportRequest` is an object with the following properties:

```yaml
dateFrom:
  type: string
  description: >-
    Starting time for collecting messages. The default value equals to the
    current time minus 24 hours
dateTo:
  type: string
  description: Ending time for collecting messages. The default value is the current time
```

## Load message store report task

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}`);
```

- `accountId`'s default value is `~`

## Load message store report archive

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive`);
```

- `accountId`'s default value is `~`

## Load message store report archive content

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive/${archiveId}`);
```

- `accountId`'s default value is `~`

## List account meeting recordings

HTTP GET /restapi/v1.0/account/{accountId}/meeting-recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/meeting-recordings`);
```

- `accountId`'s default value is `~`

## List user meeting recordings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting-recordings`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Authorize

HTTP GET /restapi/oauth/authorize

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.get('/restapi/oauth/authorize');
```


## Get token

HTTP POST /restapi/oauth/token

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/oauth/token');
```


## Revoke token

HTTP POST /restapi/oauth/revoke

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: serverURL, appKey: clientId, appSecret: clientSecret});
const platform = rcsdk.platform();
await platform.login({ username, extension, password });
const r = await platform.post('/restapi/oauth/revoke');
```
