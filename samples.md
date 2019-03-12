# RingCentral JS SDK code samples

## Get all versions

HTTP GET /restapi

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi');
```


## Get api version

HTTP GET /restapi/{apiVersion}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/${apiVersion}`);
```

- `apiVersion`'s default value is `v1.0`

## Load api status

HTTP GET /restapi/v1.0/status

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/status');
```


## Load user call log

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete user call log

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync user call log

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Get call records

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List extension active calls

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/active-calls`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load company call log

HTTP GET /restapi/v1.0/account/{accountId}/call-log

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log`);
```

- `accountId`'s default value is `~`

## Load company call log record

HTTP GET /restapi/v1.0/account/{accountId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`

## List company active calls

HTTP GET /restapi/v1.0/account/{accountId}/active-calls

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/active-calls`);
```

- `accountId`'s default value is `~`

## List call recordings

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}`);
```

- `accountId`'s default value is `~`

## List call recording data

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}/content

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}/content`);
```

- `accountId`'s default value is `~`

## Send sms

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/sms

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/sms`, createSMSMessage);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createSMSMessage` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "from",
    "text",
    "to"
  ],
  "properties": {
    "from": {
      "description": "Sender of an SMS message. The phoneNumber property must be filled to correspond to one of the account phone numbers which is allowed to send SMS",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        }
      }
    },
    "to": {
      "type": "array",
      "description": "Receiver of an SMS message. The phoneNumber property must be filled",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Phone number in E.164 format"
          }
        }
      }
    },
    "text": {
      "type": "string",
      "description": "Text of a message. Max length is 1000 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 500 symbols"
    }
  }
}```

## Create internal text message

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/company-pager`, createInternalTextMessageRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createInternalTextMessageRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "from",
    "text"
  ],
  "properties": {
    "from": {
      "description": "Sender of a pager message.",
      "properties": {
        "extensionId": {
          "type": "string",
          "description": "Extension identifier",
          "example": "123456789"
        }
      }
    },
    "replyOn": {
      "type": "integer",
      "description": "Internal identifier of a message this message replies to"
    },
    "text": {
      "type": "string",
      "description": "Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols",
      "example": "hello world"
    },
    "to": {
      "type": "array",
      "description": "Optional if replyOn parameter is specified. Receiver of a pager message.",
      "items": {
        "properties": {
          "extensionId": {
            "type": "string",
            "description": "Extension identifier",
            "example": "123456789"
          }
        }
      }
    }
  }
}```

## Send fax message

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png', contentType: 'image/png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/fax`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following properties:

```yaml
[
  {
    "name": "faxResolution",
    "in": "formData",
    "description": "Resolution of Fax",
    "required": true,
    "type": "string",
    "enum": [
      "High",
      "Low"
    ]
  },
  {
    "name": "to",
    "in": "formData",
    "description": "To Phone Number",
    "required": true,
    "type": "array",
    "items": {
      "$ref": "#/definitions/MessageStoreCallerInfoRequest"
    }
  },
  {
    "name": "sendTime",
    "in": "formData",
    "description": "Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately",
    "required": false,
    "type": "string",
    "format": "date-time"
  },
  {
    "name": "isoCode",
    "in": "formData",
    "description": "ISO Code. e.g UK",
    "type": "string"
  },
  {
    "name": "coverIndex",
    "in": "formData",
    "description": "Cover page identifier. For the list of available cover page identifiers please call the method Fax Cover Pages. If not specified, the default cover page which is configured in 'Outbound Fax Settings' is attached",
    "type": "integer"
  },
  {
    "name": "coverPageText",
    "in": "formData",
    "description": "Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols",
    "type": "string"
  }
]```

## List fax cover pages

HTTP GET /restapi/v1.0/dictionary/fax-cover-page

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/fax-cover-page');
```


## List messages

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete messages by filter

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load message

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update message

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`, updateMessageRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateMessageRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "readStatus": {
      "type": "string",
      "description": "Read status of a message to be changed. Multiple values are accepted",
      "enum": [
        "Read",
        "Unread"
      ]
    }
  }
}```

## Delete message

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Get message attachment by id

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}/content/${attachmentId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync messages

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load message store configuration

HTTP GET /restapi/v1.0/account/{accountId}/message-store-configuration

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-configuration`);
```

- `accountId`'s default value is `~`

## Update message store configuration

HTTP PUT /restapi/v1.0/account/{accountId}/message-store-configuration

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/message-store-configuration`, messageStoreConfiguration);
```

- `accountId`'s default value is `~`

`messageStoreConfiguration` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "retentionPeriod": {
      "type": "integer",
      "description": "Retention policy setting, specifying how long to keep messages; the supported value range is 7-90 days",
      "minimum": 7,
      "maximum": 90
    }
  }
}```

## Make ring out call

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out`, makeRingOutRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`makeRingOutRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "from",
    "to"
  ],
  "properties": {
    "from": {
      "description": "Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        },
        "forwardingNumberId": {
          "type": "string",
          "description": "Internal identifier of a forwarding number; returned in response as an 'id' field value. Can be specified instead of the phoneNumber attribute"
        }
      }
    },
    "to": {
      "description": "Phone number of the called party. This number corresponds to the 2nd leg of a RingOut call",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        }
      }
    },
    "callerId": {
      "description": "The number which will be displayed to the called party",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        }
      }
    },
    "playPrompt": {
      "type": "boolean",
      "description": "The audio prompt that the calling party hears when the call is connected"
    },
    "country": {
      "description": "Optional. Dialing plan country data. If not specified, then extension home country is applied by default",
      "properties": {
        "id": {
          "type": "string",
          "description": "Dialing plan country identifier"
        }
      }
    }
  }
}```

## Get ring out call status

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Cancel ring out call

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Make ring out call deprecated

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout`, makeRingOutRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`makeRingOutRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "from",
    "to"
  ],
  "properties": {
    "from": {
      "description": "Phone number of the caller. This number corresponds to the 1st leg of the RingOut call. This number can be one of user's configured forwarding numbers or arbitrary number",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        },
        "forwardingNumberId": {
          "type": "string",
          "description": "Internal identifier of a forwarding number; returned in response as an 'id' field value. Can be specified instead of the phoneNumber attribute"
        }
      }
    },
    "to": {
      "description": "Phone number of the called party. This number corresponds to the 2nd leg of a RingOut call",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        }
      }
    },
    "callerId": {
      "description": "The number which will be displayed to the called party",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number in E.164 format"
        }
      }
    },
    "playPrompt": {
      "type": "boolean",
      "description": "The audio prompt that the calling party hears when the call is connected"
    },
    "country": {
      "description": "Optional. Dialing plan country data. If not specified, then extension home country is applied by default",
      "properties": {
        "id": {
          "type": "string",
          "description": "Dialing plan country identifier"
        }
      }
    }
  }
}```

## Get ring out call status deprecated

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Cancel ring out call deprecated

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List contacts

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create contact

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`, personalContactResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "format": "uri"
    },
    "availability": {
      "type": "string",
      "enum": [
        "Alive",
        "Deleted",
        "Purged"
      ]
    },
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "middleName": {
      "type": "string"
    },
    "birthday": {
      "type": "string",
      "format": "date-time"
    },
    "notes": {
      "type": "string"
    },
    "webPage": {
      "type": "string"
    },
    "company": {
      "type": "string"
    },
    "jobTitle": {
      "type": "string"
    },
    "nickName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "email2": {
      "type": "string"
    },
    "email3": {
      "type": "string"
    },
    "homeAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "otherAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "homePhone": {
      "type": "string"
    },
    "homePhone2": {
      "type": "string"
    },
    "mobilePhone": {
      "type": "string"
    },
    "businessPhone": {
      "type": "string"
    },
    "callbackPhone": {
      "type": "string"
    },
    "carPhone": {
      "type": "string"
    },
    "companyPhone": {
      "type": "string"
    },
    "otherPhone": {
      "type": "string"
    },
    "businessFax": {
      "type": "string"
    },
    "otherFax": {
      "type": "string"
    },
    "businessAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "assistantPhone": {
      "type": "string"
    },
    "businessPhone2": {
      "type": "string"
    }
  }
}```

## Load contact

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update contact

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`, personalContactResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "format": "uri"
    },
    "availability": {
      "type": "string",
      "enum": [
        "Alive",
        "Deleted",
        "Purged"
      ]
    },
    "id": {
      "type": "string"
    },
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "middleName": {
      "type": "string"
    },
    "birthday": {
      "type": "string",
      "format": "date-time"
    },
    "notes": {
      "type": "string"
    },
    "webPage": {
      "type": "string"
    },
    "company": {
      "type": "string"
    },
    "jobTitle": {
      "type": "string"
    },
    "nickName": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "email2": {
      "type": "string"
    },
    "email3": {
      "type": "string"
    },
    "homeAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "otherAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "homePhone": {
      "type": "string"
    },
    "homePhone2": {
      "type": "string"
    },
    "mobilePhone": {
      "type": "string"
    },
    "businessPhone": {
      "type": "string"
    },
    "callbackPhone": {
      "type": "string"
    },
    "carPhone": {
      "type": "string"
    },
    "companyPhone": {
      "type": "string"
    },
    "otherPhone": {
      "type": "string"
    },
    "businessFax": {
      "type": "string"
    },
    "otherFax": {
      "type": "string"
    },
    "businessAddress": {
      "properties": {
        "country": {
          "type": "string",
          "description": "Country name of extension user company. Not returned for Address Book"
        },
        "state": {
          "type": "string",
          "description": "State/province name of extension user company"
        },
        "city": {
          "type": "string",
          "description": "City name of extension user company"
        },
        "street": {
          "type": "string",
          "description": "Street address of extension user company"
        },
        "zip": {
          "type": "string",
          "description": "Zip code of extension user company"
        }
      }
    },
    "assistantPhone": {
      "type": "string"
    },
    "businessPhone2": {
      "type": "string"
    }
  }
}```

## Delete contact

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Sync address book

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book-sync`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List favorite contacts

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/favorite`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update favorite contact list

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/favorite`, favoriteCollection);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`favoriteCollection` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "format": "uri"
    },
    "records": {
      "type": "array",
      "items": {
        "properties": {
          "uri": {
            "type": "string",
            "format": "uri"
          },
          "id": {
            "type": "string"
          },
          "extensionId": {
            "type": "string"
          },
          "contactId": {
            "type": "string"
          }
        }
      }
    }
  }
}```

## Search directory entries

HTTP POST /restapi/v1.0/account/{accountId}/directory/entries/search

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/directory/entries/search`, searchDirectoryEntriesRequest);
```

- `accountId`'s default value is `~`

`searchDirectoryEntriesRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "searchString": {
      "type": "string",
      "description": "String value to filter the contacts. The value specified is searched through the following fields: `firstName`, `lastName`, `extensionNumber`, `phoneNumber`, `email`"
    },
    "showFederated": {
      "description": "If 'True' then contacts of all accounts in federation are returned. If 'False' then only contacts of the current account are returned, and account section is eliminated in this case",
      "default": true,
      "type": "boolean"
    },
    "extensionType": {
      "type": "string",
      "description": "Type of extension to filter the contacts",
      "enum": [
        "User",
        "Department",
        "Announcement",
        "Voicemail",
        "SharedLinesGroup",
        "PagingOnly",
        "ParkLocation",
        "IvrMenu",
        "Limited",
        "ApplicationExtension",
        "Site",
        "Bot"
      ]
    },
    "orderBy": {
      "type": "array",
      "description": "Sorting settings",
      "items": {
        "properties": {
          "index": {
            "type": "integer",
            "description": "Sorting priority index, starting from '1'. Optional if only one element in `orderBy` array is specified"
          },
          "fieldName": {
            "type": "string",
            "description": "Field name by which to sort the contacts",
            "enum": [
              "firstName",
              "lastName",
              "extensionNumber",
              "phoneNumber",
              "email"
            ]
          },
          "direction": {
            "type": "string",
            "description": "Sorting direction",
            "enum": [
              "Asc",
              "Desc"
            ]
          }
        }
      }
    },
    "page": {
      "type": "integer"
    },
    "perPage": {
      "type": "integer"
    }
  }
}```

## List directory entries

HTTP GET /restapi/v1.0/account/{accountId}/directory/entries

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/entries`);
```

- `accountId`'s default value is `~`

## Load account federation

HTTP GET /restapi/v1.0/account/{accountId}/directory/federation

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/federation`);
```

- `accountId`'s default value is `~`

## Get presence status

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update presence status

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`, presenceInfoResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`presenceInfoResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "userStatus": {
      "type": "string",
      "enum": [
        "Offline",
        "Busy",
        "Available"
      ]
    },
    "dndStatus": {
      "type": "string",
      "enum": [
        "TakeAllCalls",
        "DoNotAcceptDepartmentCalls",
        "TakeDepartmentCallsOnly",
        "DoNotAcceptAnyCalls",
        "Unknown"
      ]
    },
    "message": {
      "type": "string",
      "minLength": 0,
      "maxLength": 75
    },
    "allowSeeMyPresence": {
      "type": "boolean",
      "default": false
    },
    "ringOnMonitoredCall": {
      "type": "boolean",
      "default": false
    },
    "pickUpCallsOnHold": {
      "type": "boolean",
      "default": false
    },
    "activeCalls": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string"
          },
          "direction": {
            "type": "string",
            "enum": [
              "Inbound",
              "Outbound"
            ]
          },
          "from": {
            "type": "string",
            "description": "Phone number or extension number of a caller. For GCM transport type '_from' property should be used"
          },
          "fromName": {
            "type": "string",
            "description": "Name of a caller"
          },
          "to": {
            "type": "string",
            "description": "Phone number or extension number of a callee"
          },
          "toName": {
            "type": "string",
            "description": "Name of a callee"
          },
          "startTime": {
            "type": "string",
            "description": "Time when the call is actually started"
          },
          "telephonyStatus": {
            "type": "string"
          },
          "sipData": {
            "properties": {
              "callId": {
                "type": "string"
              },
              "toTag": {
                "type": "string"
              },
              "fromTag": {
                "type": "string"
              },
              "remoteUri": {
                "type": "string"
              },
              "localUri": {
                "type": "string"
              },
              "rcSessionId": {
                "type": "string"
              }
            }
          },
          "sessionId": {
            "type": "string"
          },
          "terminationType": {
            "type": "string"
          }
        }
      }
    }
  }
}```

## Account presence

HTTP GET /restapi/v1.0/account/{accountId}/presence

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/presence`);
```

- `accountId`'s default value is `~`

## List glip chats

HTTP GET /restapi/v1.0/glip/chats

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/chats');
```


## Load glip chat

HTTP GET /restapi/v1.0/glip/chats/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}`);
```


## List glip conversations

HTTP GET /restapi/v1.0/glip/conversations

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/conversations');
```


## Create glip conversation

HTTP POST /restapi/v1.0/glip/conversations

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/conversations', glipPostMembersListBody);
```


`glipPostMembersListBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "members"
  ],
  "properties": {
    "members": {
      "description": "Identifier(s) of chat members.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of a person"
          },
          "email": {
            "type": "string",
            "description": "Email of a person"
          }
        }
      }
    }
  }
}```

## Load glip conversation

HTTP GET /restapi/v1.0/glip/conversations/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/conversations/${chatId}`);
```


## List glip teams

HTTP GET /restapi/v1.0/glip/teams

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/teams');
```


## Create glip team

HTTP POST /restapi/v1.0/glip/teams

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/teams', glipPostTeamBody);
```


`glipPostTeamBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "public": {
      "type": "boolean",
      "description": "Team access level."
    },
    "name": {
      "type": "string",
      "description": "Team name."
    },
    "description": {
      "type": "string",
      "description": "Team description."
    },
    "members": {
      "description": "Identifier(s) of team members.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of a person"
          },
          "email": {
            "type": "string",
            "description": "Email of a person"
          }
        }
      }
    }
  }
}```

## Load glip team

HTTP GET /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/teams/${chatId}`);
```


## Update glip team

HTTP PATCH /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/glip/teams/${chatId}`, glipPatchTeamBody);
```


`glipPatchTeamBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "public": {
      "type": "boolean",
      "description": "Team access level."
    },
    "name": {
      "type": "string",
      "description": "Team name."
    },
    "description": {
      "type": "string",
      "description": "Team description."
    }
  }
}```

## Delete glip team

HTTP DELETE /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/teams/${chatId}`);
```


## Join glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/join

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/join`);
```


## Leave glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/leave

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/leave`);
```


## Add glip team members

HTTP POST /restapi/v1.0/glip/teams/{chatId}/add

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/add`, glipPostMembersListBody);
```


`glipPostMembersListBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "members"
  ],
  "properties": {
    "members": {
      "description": "Identifier(s) of chat members.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of a person"
          },
          "email": {
            "type": "string",
            "description": "Email of a person"
          }
        }
      }
    }
  }
}```

## Remove glip team members

HTTP POST /restapi/v1.0/glip/teams/{chatId}/remove

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/remove`, glipPostMembersIdsListBody);
```


`glipPostMembersIdsListBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "members"
  ],
  "properties": {
    "members": {
      "description": "Identifier(s) of chat members.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of a person"
          }
        }
      }
    }
  }
}```

## Archive glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/archive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/archive`);
```


## Unarchive glip team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/unarchive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/unarchive`);
```


## Load glip everyone

HTTP GET /restapi/v1.0/glip/everyone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/everyone');
```


## Update glip everyone

HTTP PATCH /restapi/v1.0/glip/everyone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch('/restapi/v1.0/glip/everyone', updateGlipEveryoneRequest);
```


`updateGlipEveryoneRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "name": {
      "type": "integer",
      "description": "Everyone chat name. Maximum number of characters supported is 250"
    },
    "description": {
      "type": "string",
      "description": "Everyone chat description. Maximum number of characters supported is 1000"
    }
  }
}```

## List glip groups

HTTP GET /restapi/v1.0/glip/groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/groups');
```


## Create glip group

HTTP POST /restapi/v1.0/glip/groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/groups', glipCreateGroup);
```


`glipCreateGroup` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "type"
  ],
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "PrivateChat",
        "Team"
      ],
      "description": "Type of a group to be created. 'PrivateChat' is a group of 2 members. 'Team' is a chat of 1 and more participants, the membership can be modified in future. 'PersonalChat' is a private chat thread of a user"
    },
    "isPublic": {
      "type": "boolean",
      "description": "For 'Team' group type only. Team access level"
    },
    "name": {
      "type": "string",
      "description": "For 'Team' group type only. Team name"
    },
    "description": {
      "type": "string",
      "description": "For 'Team' group type only. Team description"
    },
    "members": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Identifier(s) of group members. For 'PrivateChat' group type 2 members only are supported"
    }
  }
}```

## Load glip group

HTTP GET /restapi/v1.0/glip/groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}`);
```


## Assign glip group members

HTTP POST /restapi/v1.0/glip/groups/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/bulk-assign`, editGroupRequest);
```


`editGroupRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "addedPersonIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of users to be added to a team"
    },
    "addedPersonEmails": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of user email addresses to be added to a team (i.e. as guests)"
    },
    "removedPersonIds": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of users to be removed from a team"
    }
  }
}```

## List glip group posts

HTTP GET /restapi/v1.0/glip/groups/{groupId}/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/posts`);
```


## Create glip group post

HTTP POST /restapi/v1.0/glip/groups/{groupId}/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/posts`, glipCreatePost);
```


`glipCreatePost` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a message. (Can be set for bot's messages only)."
    },
    "text": {
      "type": "string",
      "description": "Text of a post",
      "maximum": 1000
    },
    "groupId": {
      "type": "string",
      "description": "Internal identifier of a group"
    },
    "attachments": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of attachment",
            "enum": [
              "Card",
              "Event",
              "Note"
            ],
            "default": "Card"
          },
          "title": {
            "type": "string",
            "description": "Attachment title"
          },
          "fallback": {
            "type": "string",
            "description": "Default message returned in case the client does not support interactive messages"
          },
          "color": {
            "type": "string",
            "description": "Hex color code specifying font color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card",
            "enum": [
              "Black",
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "Magenta"
            ],
            "default": "Black"
          },
          "intro": {
            "type": "string",
            "description": "Introductory text displayed directly above a message"
          },
          "author": {
            "description": "Information about the author",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of a message author"
              },
              "uri": {
                "type": "string",
                "description": "Link to an author's name"
              },
              "iconUri": {
                "type": "string",
                "description": "Link to an image displayed to the left of an author's name; sized 82x82px"
              }
            }
          },
          "text": {
            "type": "string",
            "description": "Text of attachment (up to 1000 chars), supports GlipDown"
          },
          "imageUri": {
            "type": "string",
            "description": "Link to an image displayed at the bottom of a message"
          },
          "thumbnailUri": {
            "type": "string",
            "description": "Link to an image preview displayed to the right of a message (82x82)"
          },
          "fields": {
            "type": "array",
            "description": "Individual subsections within a message",
            "items": {
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Title of an individual field"
                },
                "value": {
                  "type": "string",
                  "description": "Value of an individual field (supports Markdown)"
                },
                "style": {
                  "type": "string",
                  "description": "Style of width span applied to a field",
                  "default": "Short",
                  "enum": [
                    "Short",
                    "Long"
                  ]
                }
              }
            }
          },
          "footnote": {
            "description": "Message footer information",
            "properties": {
              "text": {
                "type": "string",
                "description": "Text of a footer"
              },
              "iconUri": {
                "type": "string",
                "description": "Link to an icon displayed to the left of a footer; sized 32x32px"
              },
              "time": {
                "type": "string",
                "description": "Message creation datetime in ISO 8601 format including timezone, for example *2016-03-10T18:07:52.534Z*",
                "format": "date-time"
              }
            }
          },
          "startTime": {
            "type": "string",
            "description": "Datetime of starting an event"
          },
          "endTime": {
            "type": "string",
            "description": "Datetime of ending an event"
          },
          "allDay": {
            "type": "boolean",
            "description": "Indicates whether an event has some specific time slot or lasts for the whole day(s)",
            "default": false
          },
          "recurrence": {
            "type": "string",
            "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
            "enum": [
              "None",
              "Day",
              "Weekday",
              "Week",
              "Month",
              "Year"
            ]
          },
          "endingCondition": {
            "type": "string",
            "description": "Condition of ending an event"
          }
        }
      },
      "description": "List of attachments to be posted"
    }
  }
}```

## Update glip post text

HTTP PUT /restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/groups/${groupId}/posts/${postId}/text`, body);
```


## List recent chats

HTTP GET /restapi/v1.0/glip/recent/chats

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/recent/chats');
```


## List favorite chats

HTTP GET /restapi/v1.0/glip/favorites

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/favorites');
```


## Favorite glip chat

HTTP POST /restapi/v1.0/glip/chats/{chatId}/favorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/favorite`);
```


## Unfavorite glip chat

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unfavorite

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unfavorite`);
```


## Mark chat read

HTTP POST /restapi/v1.0/glip/chats/{chatId}/read

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/read`);
```


## Mark chat unread

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unread

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unread`);
```


## List glip posts

HTTP GET /restapi/v1.0/glip/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/posts');
```


## Create post

HTTP POST /restapi/v1.0/glip/posts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/posts', glipCreatePost);
```


`glipCreatePost` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a message. (Can be set for bot's messages only)."
    },
    "text": {
      "type": "string",
      "description": "Text of a post",
      "maximum": 1000
    },
    "groupId": {
      "type": "string",
      "description": "Internal identifier of a group"
    },
    "attachments": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of attachment",
            "enum": [
              "Card",
              "Event",
              "Note"
            ],
            "default": "Card"
          },
          "title": {
            "type": "string",
            "description": "Attachment title"
          },
          "fallback": {
            "type": "string",
            "description": "Default message returned in case the client does not support interactive messages"
          },
          "color": {
            "type": "string",
            "description": "Hex color code specifying font color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card",
            "enum": [
              "Black",
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "Magenta"
            ],
            "default": "Black"
          },
          "intro": {
            "type": "string",
            "description": "Introductory text displayed directly above a message"
          },
          "author": {
            "description": "Information about the author",
            "properties": {
              "name": {
                "type": "string",
                "description": "Name of a message author"
              },
              "uri": {
                "type": "string",
                "description": "Link to an author's name"
              },
              "iconUri": {
                "type": "string",
                "description": "Link to an image displayed to the left of an author's name; sized 82x82px"
              }
            }
          },
          "text": {
            "type": "string",
            "description": "Text of attachment (up to 1000 chars), supports GlipDown"
          },
          "imageUri": {
            "type": "string",
            "description": "Link to an image displayed at the bottom of a message"
          },
          "thumbnailUri": {
            "type": "string",
            "description": "Link to an image preview displayed to the right of a message (82x82)"
          },
          "fields": {
            "type": "array",
            "description": "Individual subsections within a message",
            "items": {
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Title of an individual field"
                },
                "value": {
                  "type": "string",
                  "description": "Value of an individual field (supports Markdown)"
                },
                "style": {
                  "type": "string",
                  "description": "Style of width span applied to a field",
                  "default": "Short",
                  "enum": [
                    "Short",
                    "Long"
                  ]
                }
              }
            }
          },
          "footnote": {
            "description": "Message footer information",
            "properties": {
              "text": {
                "type": "string",
                "description": "Text of a footer"
              },
              "iconUri": {
                "type": "string",
                "description": "Link to an icon displayed to the left of a footer; sized 32x32px"
              },
              "time": {
                "type": "string",
                "description": "Message creation datetime in ISO 8601 format including timezone, for example *2016-03-10T18:07:52.534Z*",
                "format": "date-time"
              }
            }
          },
          "startTime": {
            "type": "string",
            "description": "Datetime of starting an event"
          },
          "endTime": {
            "type": "string",
            "description": "Datetime of ending an event"
          },
          "allDay": {
            "type": "boolean",
            "description": "Indicates whether an event has some specific time slot or lasts for the whole day(s)",
            "default": false
          },
          "recurrence": {
            "type": "string",
            "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
            "enum": [
              "None",
              "Day",
              "Weekday",
              "Week",
              "Month",
              "Year"
            ]
          },
          "endingCondition": {
            "type": "string",
            "description": "Condition of ending an event"
          }
        }
      },
      "description": "List of attachments to be posted"
    }
  }
}```

## Create glip file

HTTP POST /restapi/v1.0/glip/files

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png', contentType: 'image/png' });
const r = await platform.post('/restapi/v1.0/glip/files', formData);
```


`body` is an object with the following properties:

```yaml
[]```

## Create glip card

HTTP POST /restapi/v1.0/glip/cards

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/cards', glipMessageAttachmentInfoRequest);
```


`glipMessageAttachmentInfoRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of attachment",
      "enum": [
        "Card",
        "Event",
        "Note"
      ],
      "default": "Card"
    },
    "title": {
      "type": "string",
      "description": "Attachment title"
    },
    "fallback": {
      "type": "string",
      "description": "Default message returned in case the client does not support interactive messages"
    },
    "color": {
      "type": "string",
      "description": "Hex color code specifying font color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card",
      "enum": [
        "Black",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Magenta"
      ],
      "default": "Black"
    },
    "intro": {
      "type": "string",
      "description": "Introductory text displayed directly above a message"
    },
    "author": {
      "description": "Information about the author",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of a message author"
        },
        "uri": {
          "type": "string",
          "description": "Link to an author's name"
        },
        "iconUri": {
          "type": "string",
          "description": "Link to an image displayed to the left of an author's name; sized 82x82px"
        }
      }
    },
    "text": {
      "type": "string",
      "description": "Text of attachment (up to 1000 chars), supports GlipDown"
    },
    "imageUri": {
      "type": "string",
      "description": "Link to an image displayed at the bottom of a message"
    },
    "thumbnailUri": {
      "type": "string",
      "description": "Link to an image preview displayed to the right of a message (82x82)"
    },
    "fields": {
      "type": "array",
      "description": "Individual subsections within a message",
      "items": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of an individual field"
          },
          "value": {
            "type": "string",
            "description": "Value of an individual field (supports Markdown)"
          },
          "style": {
            "type": "string",
            "description": "Style of width span applied to a field",
            "default": "Short",
            "enum": [
              "Short",
              "Long"
            ]
          }
        }
      }
    },
    "footnote": {
      "description": "Message footer information",
      "properties": {
        "text": {
          "type": "string",
          "description": "Text of a footer"
        },
        "iconUri": {
          "type": "string",
          "description": "Link to an icon displayed to the left of a footer; sized 32x32px"
        },
        "time": {
          "type": "string",
          "description": "Message creation datetime in ISO 8601 format including timezone, for example *2016-03-10T18:07:52.534Z*",
          "format": "date-time"
        }
      }
    },
    "startTime": {
      "type": "string",
      "description": "Datetime of starting an event"
    },
    "endTime": {
      "type": "string",
      "description": "Datetime of ending an event"
    },
    "allDay": {
      "type": "boolean",
      "description": "Indicates whether an event has some specific time slot or lasts for the whole day(s)",
      "default": false
    },
    "recurrence": {
      "type": "string",
      "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
      "enum": [
        "None",
        "Day",
        "Weekday",
        "Week",
        "Month",
        "Year"
      ]
    },
    "endingCondition": {
      "type": "string",
      "description": "Condition of ending an event"
    }
  }
}```

## Load glip card

HTTP GET /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/cards/${cardId}`);
```


## Update glip card

HTTP PUT /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/cards/${cardId}`, glipMessageAttachmentInfoRequest);
```


`glipMessageAttachmentInfoRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of attachment",
      "enum": [
        "Card",
        "Event",
        "Note"
      ],
      "default": "Card"
    },
    "title": {
      "type": "string",
      "description": "Attachment title"
    },
    "fallback": {
      "type": "string",
      "description": "Default message returned in case the client does not support interactive messages"
    },
    "color": {
      "type": "string",
      "description": "Hex color code specifying font color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card",
      "enum": [
        "Black",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Magenta"
      ],
      "default": "Black"
    },
    "intro": {
      "type": "string",
      "description": "Introductory text displayed directly above a message"
    },
    "author": {
      "description": "Information about the author",
      "properties": {
        "name": {
          "type": "string",
          "description": "Name of a message author"
        },
        "uri": {
          "type": "string",
          "description": "Link to an author's name"
        },
        "iconUri": {
          "type": "string",
          "description": "Link to an image displayed to the left of an author's name; sized 82x82px"
        }
      }
    },
    "text": {
      "type": "string",
      "description": "Text of attachment (up to 1000 chars), supports GlipDown"
    },
    "imageUri": {
      "type": "string",
      "description": "Link to an image displayed at the bottom of a message"
    },
    "thumbnailUri": {
      "type": "string",
      "description": "Link to an image preview displayed to the right of a message (82x82)"
    },
    "fields": {
      "type": "array",
      "description": "Individual subsections within a message",
      "items": {
        "properties": {
          "title": {
            "type": "string",
            "description": "Title of an individual field"
          },
          "value": {
            "type": "string",
            "description": "Value of an individual field (supports Markdown)"
          },
          "style": {
            "type": "string",
            "description": "Style of width span applied to a field",
            "default": "Short",
            "enum": [
              "Short",
              "Long"
            ]
          }
        }
      }
    },
    "footnote": {
      "description": "Message footer information",
      "properties": {
        "text": {
          "type": "string",
          "description": "Text of a footer"
        },
        "iconUri": {
          "type": "string",
          "description": "Link to an icon displayed to the left of a footer; sized 32x32px"
        },
        "time": {
          "type": "string",
          "description": "Message creation datetime in ISO 8601 format including timezone, for example *2016-03-10T18:07:52.534Z*",
          "format": "date-time"
        }
      }
    },
    "startTime": {
      "type": "string",
      "description": "Datetime of starting an event"
    },
    "endTime": {
      "type": "string",
      "description": "Datetime of ending an event"
    },
    "allDay": {
      "type": "boolean",
      "description": "Indicates whether an event has some specific time slot or lasts for the whole day(s)",
      "default": false
    },
    "recurrence": {
      "type": "string",
      "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
      "enum": [
        "None",
        "Day",
        "Weekday",
        "Week",
        "Month",
        "Year"
      ]
    },
    "endingCondition": {
      "type": "string",
      "description": "Condition of ending an event"
    }
  }
}```

## Delete glip card

HTTP DELETE /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/cards/${cardId}`);
```


## Load glip events

HTTP GET /restapi/v1.0/glip/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/events');
```


## Create event

HTTP POST /restapi/v1.0/glip/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/events', glipEventCreate);
```


`glipEventCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title",
    "startTime",
    "endTime"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of an event"
    },
    "creatorId": {
      "type": "string",
      "description": "Internal identifier of a person created an event"
    },
    "title": {
      "type": "string",
      "description": "Event title"
    },
    "startTime": {
      "type": "string",
      "description": "Datetime of starting an event"
    },
    "endTime": {
      "type": "string",
      "description": "Datetime of ending an event"
    },
    "allDay": {
      "type": "boolean",
      "description": "Indicates whether event has some specific time slot or lasts for whole day(s)",
      "default": false
    },
    "recurrence": {
      "type": "string",
      "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
      "enum": [
        "None",
        "Day",
        "Weekday",
        "Week",
        "Month",
        "Year"
      ]
    },
    "endingCondition": {
      "type": "string",
      "description": "Condition of ending"
    },
    "endingAfter": {
      "type": "integer",
      "description": "Count of iterations. For periodic events only. Value range is 1 - 10. Must be specified if 'endingCondition' is 'Count'"
    },
    "endingOn": {
      "type": "string",
      "enum": [
        "None",
        "Count",
        "Date"
      ],
      "default": "None",
      "description": "Iterations end datetime for periodic events."
    },
    "color": {
      "type": "string",
      "description": "Hex color code, specifying font color of Event title (including its presentation in Calendar)",
      "enum": [
        "Black",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Magenta"
      ],
      "default": "Black"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "description": {
      "type": "string",
      "description": "Event details"
    }
  }
}```

## Load event

HTTP GET /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/events/${eventId}`);
```


## Update event

HTTP PUT /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/events/${eventId}`, glipEventCreate);
```


`glipEventCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title",
    "startTime",
    "endTime"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of an event"
    },
    "creatorId": {
      "type": "string",
      "description": "Internal identifier of a person created an event"
    },
    "title": {
      "type": "string",
      "description": "Event title"
    },
    "startTime": {
      "type": "string",
      "description": "Datetime of starting an event"
    },
    "endTime": {
      "type": "string",
      "description": "Datetime of ending an event"
    },
    "allDay": {
      "type": "boolean",
      "description": "Indicates whether event has some specific time slot or lasts for whole day(s)",
      "default": false
    },
    "recurrence": {
      "type": "string",
      "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
      "enum": [
        "None",
        "Day",
        "Weekday",
        "Week",
        "Month",
        "Year"
      ]
    },
    "endingCondition": {
      "type": "string",
      "description": "Condition of ending"
    },
    "endingAfter": {
      "type": "integer",
      "description": "Count of iterations. For periodic events only. Value range is 1 - 10. Must be specified if 'endingCondition' is 'Count'"
    },
    "endingOn": {
      "type": "string",
      "enum": [
        "None",
        "Count",
        "Date"
      ],
      "default": "None",
      "description": "Iterations end datetime for periodic events."
    },
    "color": {
      "type": "string",
      "description": "Hex color code, specifying font color of Event title (including its presentation in Calendar)",
      "enum": [
        "Black",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Magenta"
      ],
      "default": "Black"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "description": {
      "type": "string",
      "description": "Event details"
    }
  }
}```

## Delete event

HTTP DELETE /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/events/${eventId}`);
```


## Create eventby group id

HTTP POST /restapi/v1.0/glip/groups/{groupId}/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/events`, glipEventCreate);
```


`glipEventCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title",
    "startTime",
    "endTime"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of an event"
    },
    "creatorId": {
      "type": "string",
      "description": "Internal identifier of a person created an event"
    },
    "title": {
      "type": "string",
      "description": "Event title"
    },
    "startTime": {
      "type": "string",
      "description": "Datetime of starting an event"
    },
    "endTime": {
      "type": "string",
      "description": "Datetime of ending an event"
    },
    "allDay": {
      "type": "boolean",
      "description": "Indicates whether event has some specific time slot or lasts for whole day(s)",
      "default": false
    },
    "recurrence": {
      "type": "string",
      "description": "Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year",
      "enum": [
        "None",
        "Day",
        "Weekday",
        "Week",
        "Month",
        "Year"
      ]
    },
    "endingCondition": {
      "type": "string",
      "description": "Condition of ending"
    },
    "endingAfter": {
      "type": "integer",
      "description": "Count of iterations. For periodic events only. Value range is 1 - 10. Must be specified if 'endingCondition' is 'Count'"
    },
    "endingOn": {
      "type": "string",
      "enum": [
        "None",
        "Count",
        "Date"
      ],
      "default": "None",
      "description": "Iterations end datetime for periodic events."
    },
    "color": {
      "type": "string",
      "description": "Hex color code, specifying font color of Event title (including its presentation in Calendar)",
      "enum": [
        "Black",
        "Red",
        "Orange",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Magenta"
      ],
      "default": "Black"
    },
    "location": {
      "type": "string",
      "description": "Event location"
    },
    "description": {
      "type": "string",
      "description": "Event details"
    }
  }
}```

## List group events

HTTP GET /restapi/v1.0/glip/groups/{groupId}/events

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/events`);
```


## Load group notes

HTTP GET /restapi/v1.0/glip/groups/{groupId}/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/notes`);
```


## Create group note

HTTP POST /restapi/v1.0/glip/groups/{groupId}/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/notes`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a note"
    },
    "status": {
      "type": "string",
      "description": "If a note should be immediately published then pass 'Active' value. This doesn't create a new post in the current group but as a result the note can be read by members of this group",
      "default": "Draft",
      "enum": [
        "Active",
        "Draft"
      ]
    },
    "body": {
      "type": "string",
      "description": "Contents of a note"
    }
  }
}```

## Load user notes

HTTP GET /restapi/v1.0/glip/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/notes');
```


## Create user note

HTTP POST /restapi/v1.0/glip/notes

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/notes', glipNoteCreate);
```


`glipNoteCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a note"
    },
    "status": {
      "type": "string",
      "description": "If a note should be immediately published then pass 'Active' value. This doesn't create a new post in the current group but as a result the note can be read by members of this group",
      "default": "Draft",
      "enum": [
        "Active",
        "Draft"
      ]
    },
    "body": {
      "type": "string",
      "description": "Contents of a note"
    }
  }
}```

## Load user note

HTTP GET /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/notes/${noteId}`);
```


## Delete note

HTTP DELETE /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/notes/${noteId}`);
```


## Patch note

HTTP PATCH /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/glip/notes/${noteId}`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a note"
    },
    "status": {
      "type": "string",
      "description": "If a note should be immediately published then pass 'Active' value. This doesn't create a new post in the current group but as a result the note can be read by members of this group",
      "default": "Draft",
      "enum": [
        "Active",
        "Draft"
      ]
    },
    "body": {
      "type": "string",
      "description": "Contents of a note"
    }
  }
}```

## Update note

HTTP PUT /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/notes/${noteId}`, glipNoteCreate);
```


`glipNoteCreate` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "title"
  ],
  "properties": {
    "title": {
      "type": "string",
      "description": "Title of a note"
    },
    "status": {
      "type": "string",
      "description": "If a note should be immediately published then pass 'Active' value. This doesn't create a new post in the current group but as a result the note can be read by members of this group",
      "default": "Draft",
      "enum": [
        "Active",
        "Draft"
      ]
    },
    "body": {
      "type": "string",
      "description": "Contents of a note"
    }
  }
}```

## Lock note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/lock

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/lock`);
```


## Publish note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/publish

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/publish`);
```


## Unlock note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/unlock

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/unlock`);
```


## Load glip person

HTTP GET /restapi/v1.0/glip/persons/{personId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/persons/${personId}`);
```


## Load glip company

HTTP GET /restapi/v1.0/glip/companies/{companyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/companies/${companyId}`);
```


## Create glip group webhook

HTTP POST /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


## List glip group webhooks

HTTP GET /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


## List glip webhooks

HTTP GET /restapi/v1.0/glip/webhooks

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/webhooks');
```


## Load glip webhook

HTTP GET /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


## Delete glip webhook

HTTP DELETE /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


## Activate glip webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/activate

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/activate`);
```


## Suspend glip webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/suspend

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/suspend`);
```


## Load glip preferences

HTTP GET /restapi/v1.0/glip/preferences

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/preferences');
```


## List meetings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create meeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting`, meetingRequestResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`meetingRequestResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "topic": {
      "type": "string"
    },
    "meetingType": {
      "type": "string"
    },
    "schedule": {
      "properties": {
        "startTime": {
          "type": "string"
        },
        "durationInMinutes": {
          "type": "integer",
          "format": "int32"
        },
        "timeZone": {
          "properties": {
            "uri": {
              "type": "string",
              "format": "uri"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        }
      }
    },
    "password": {
      "type": "string"
    },
    "host": {
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension which is assigned to be a meeting host. The default value is currently logged-in extension identifier"
        }
      }
    },
    "allowJoinBeforeHost": {
      "type": "boolean",
      "default": false
    },
    "startHostVideo": {
      "type": "boolean",
      "default": false
    },
    "startParticipantsVideo": {
      "type": "boolean",
      "default": false
    },
    "audioOptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}```

## Load meeting

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update meeting

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`, meetingRequestResource);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`meetingRequestResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "topic": {
      "type": "string"
    },
    "meetingType": {
      "type": "string"
    },
    "schedule": {
      "properties": {
        "startTime": {
          "type": "string"
        },
        "durationInMinutes": {
          "type": "integer",
          "format": "int32"
        },
        "timeZone": {
          "properties": {
            "uri": {
              "type": "string",
              "format": "uri"
            },
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        }
      }
    },
    "password": {
      "type": "string"
    },
    "host": {
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension which is assigned to be a meeting host. The default value is currently logged-in extension identifier"
        }
      }
    },
    "allowJoinBeforeHost": {
      "type": "boolean",
      "default": false
    },
    "startHostVideo": {
      "type": "boolean",
      "default": false
    },
    "startParticipantsVideo": {
      "type": "boolean",
      "default": false
    },
    "audioOptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}```

## Delete meeting

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## End meeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}/end`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load meeting service info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/service-info`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List subscriptions

HTTP GET /restapi/v1.0/subscription

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/subscription');
```


## Create subscription

HTTP POST /restapi/v1.0/subscription

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/subscription', createSubscriptionRequest);
```


`createSubscriptionRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "deliveryMode",
    "eventFilters"
  ],
  "properties": {
    "eventFilters": {
      "type": "array",
      "description": "Collection of URIs to API resources. For APNS transport type only message event filter is available",
      "items": {
        "type": "string"
      }
    },
    "deliveryMode": {
      "description": "Notification delivery settings",
      "properties": {
        "transportType": {
          "type": "string",
          "description": "Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)",
          "enum": [
            "PubNub",
            "WebHook",
            "APNS",
            "PubNub/APNS",
            "PubNub/GCM"
          ]
        },
        "address": {
          "type": "string",
          "description": "Mandatory for 'APNS' and 'WebHook' transport types. For 'APNS' - internal identifier of a device 'device_token' for 'WebHook' - URL of a consumer service (cannot be changed during subscription update)"
        },
        "encryption": {
          "type": "boolean",
          "description": "Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'"
        },
        "certificateName": {
          "type": "string",
          "description": "For 'PubNub/APNS' and 'PubNub/GCM' transport types. Name of a certificate"
        },
        "registrationId": {
          "type": "string",
          "description": "For 'PubNub/APNS' and 'PubNub/GCM' transport types. Identifier of a registration"
        },
        "verificationToken": {
          "type": "string",
          "description": "For 'Webhook' transport type. Subscription verification key ensuring data security"
        }
      }
    },
    "expiresIn": {
      "type": "integer",
      "description": "Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 630720000 seconds (20 years)",
      "default": 604800
    }
  }
}```

## Load subscription

HTTP GET /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/subscription/${subscriptionId}`);
```


## Update subscription

HTTP PUT /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/subscription/${subscriptionId}`, modifySubscriptionRequest);
```


`modifySubscriptionRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "eventFilters"
  ],
  "properties": {
    "eventFilters": {
      "type": "array",
      "description": "Collection of URIs to API resources",
      "items": {
        "type": "string"
      }
    },
    "deliveryMode": {
      "description": "Notification delivery settings",
      "properties": {
        "transportType": {
          "type": "string",
          "description": "Notifications transportation provider name. 'APNS' (Apple Push Notifications Service)",
          "enum": [
            "PubNub",
            "WebHook",
            "APNS",
            "PubNub/APNS",
            "PubNub/GCM"
          ]
        },
        "address": {
          "type": "string",
          "description": "Mandatory for 'APNS' and 'WebHook' transport types. For 'APNS' - internal identifier of a device 'device_token' for 'WebHook' - URL of a consumer service (cannot be changed during subscription update)"
        },
        "encryption": {
          "type": "boolean",
          "description": "Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'"
        },
        "certificateName": {
          "type": "string",
          "description": "For 'PubNub/APNS' and 'PubNub/GCM' transport types. Name of a certificate"
        },
        "registrationId": {
          "type": "string",
          "description": "For 'PubNub/APNS' and 'PubNub/GCM' transport types. Identifier of a registration"
        },
        "verificationToken": {
          "type": "string",
          "description": "For 'Webhook' transport type. Subscription verification key ensuring data security"
        }
      }
    },
    "expiresIn": {
      "type": "integer",
      "description": "Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 630720000 seconds (20 years)",
      "default": 604800
    }
  }
}```

## Delete subscription

HTTP DELETE /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/subscription/${subscriptionId}`);
```


## Renew subscription

HTTP POST /restapi/v1.0/subscription/{subscriptionId}/renew

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/subscription/${subscriptionId}/renew`);
```


## Get authorization profile

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Check user permission

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile/check`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load user business hours

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/business-hours`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update user business hours

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/business-hours`, userBusinessHoursUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`userBusinessHoursUpdateRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "schedule"
  ],
  "properties": {
    "schedule": {
      "description": "Schedule when an answering rule is applied",
      "properties": {
        "weeklyRanges": {
          "description": "Weekly schedule",
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}```

## Load company business hours

HTTP GET /restapi/v1.0/account/{accountId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-hours`);
```

- `accountId`'s default value is `~`

## Update company business hours

HTTP PUT /restapi/v1.0/account/{accountId}/business-hours

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/business-hours`, companyBusinessHoursUpdateRequest);
```

- `accountId`'s default value is `~`

`companyBusinessHoursUpdateRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "schedule": {
      "description": "Schedule when an answering rule is applied",
      "properties": {
        "weeklyRanges": {
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "example": {
    "schedule": {
      "weeklyRanges": {
        "tuesday": [
          {
            "from": "09:00",
            "to": "18:00"
          }
        ],
        "friday": [
          {
            "from": "09:00",
            "to": "18:00"
          }
        ],
        "thursday": [
          {
            "from": "09:00",
            "to": "18:00"
          }
        ],
        "wednesday": [
          {
            "from": "09:00",
            "to": "18:00"
          }
        ],
        "monday": [
          {
            "from": "09:00",
            "to": "18:00"
          }
        ]
      }
    }
  }
}```

## Load call blocking settings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update call blocking settings

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking`, callerBlockingSettingsUpdate);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`callerBlockingSettingsUpdate` is an object with the following definition:

```yaml
{
  "type": "object",
  "description": "Returns the lists of blocked and allowed phone numbers",
  "properties": {
    "mode": {
      "type": "string",
      "enum": [
        "Specific",
        "All"
      ],
      "description": "Call blocking options: either specific or all calls and faxes"
    },
    "noCallerId": {
      "description": "Determines how to handle calls with no caller ID in 'Specific' mode",
      "type": "string",
      "enum": [
        "BlockCallsAndFaxes",
        "BlockFaxes",
        "Allow"
      ]
    },
    "payPhones": {
      "type": "string",
      "enum": [
        "Block",
        "Allow"
      ],
      "description": "Blocking settings for pay phones"
    },
    "greetings": {
      "type": "array",
      "description": "List of greetings played for blocked callers",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of a greeting"
          },
          "preset": {
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to a greeting resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of a greeting"
              },
              "name": {
                "type": "string",
                "description": "Name of a greeting"
              }
            }
          }
        }
      }
    }
  }
}```

## List blocked allowed phone number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create blocked allowed phone number list

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`, addBlockedAllowedPhoneNumber);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`addBlockedAllowedPhoneNumber` is an object with the following definition:

```yaml
{
  "type": "object",
  "description": "Updates either blocked or allowed phone number list with a new phone number.",
  "properties": {
    "phoneNumber": {
      "type": "string",
      "description": "A blocked/allowed phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format"
    },
    "label": {
      "type": "string",
      "description": "Custom name of a blocked/allowed phone number"
    },
    "status": {
      "type": "string",
      "description": "Status of a phone number",
      "enum": [
        "Blocked",
        "Allowed"
      ],
      "default": "Blocked"
    }
  }
}```

## Create blocked allowed phone number lists

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/bulk-update

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/bulk-update`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load blocked allowed phone number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Delete blocked allowed phone number

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update blocked allowed phone number

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`, addBlockedAllowedPhoneNumber);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`addBlockedAllowedPhoneNumber` is an object with the following definition:

```yaml
{
  "type": "object",
  "description": "Updates either blocked or allowed phone number list with a new phone number.",
  "properties": {
    "phoneNumber": {
      "type": "string",
      "description": "A blocked/allowed phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format"
    },
    "label": {
      "type": "string",
      "description": "Custom name of a blocked/allowed phone number"
    },
    "status": {
      "type": "string",
      "description": "Status of a phone number",
      "enum": [
        "Blocked",
        "Allowed"
      ],
      "default": "Blocked"
    }
  }
}```

## List extension forwarding numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create extension forwarding number

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`, createForwardingNumberRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createForwardingNumberRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "phoneNumber": {
      "type": "string",
      "description": "Forwarding/Call flip phone number"
    },
    "label": {
      "type": "string",
      "description": "Forwarding/Call flip number title"
    },
    "type": {
      "type": "string",
      "description": "Forwarding/Call flip phone type. If specified, 'label' attribute value is ignored. The default value is 'Other'",
      "enum": [
        "PhoneLine",
        "Home",
        "Mobile",
        "Work",
        "Other"
      ]
    },
    "device": {
      "description": "Reference to the other extension device. Applicable for 'PhoneLine' type only. Cannot be specified together with 'phoneNumber' parameter.",
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of the other extension device"
        }
      }
    }
  }
}```

## Load extension forwarding number

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension forwarding number

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`, updateForwardingNumberRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateForwardingNumberRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "phoneNumber": {
      "type": "string",
      "description": "Forwarding/Call flip phone number"
    },
    "label": {
      "type": "string",
      "description": "Forwarding/Call flip number title"
    },
    "flipNumber": {
      "type": "string",
      "description": "Number assigned to the call flip phone number, corresponds to the shortcut dial number"
    },
    "type": {
      "type": "string",
      "description": "Forwarding phone number type",
      "enum": [
        "Home",
        "Mobile",
        "Work",
        "PhoneLine",
        "Outage",
        "Other"
      ]
    }
  }
}```

## Delete extension forwarding number

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## List answering rules

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create answering rule

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`, createAnsweringRuleRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`createAnsweringRuleRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "name",
    "type"
  ],
  "properties": {
    "enabled": {
      "type": "boolean",
      "description": "Specifies if the rule is active or inactive. The default value is 'True'"
    },
    "type": {
      "type": "string",
      "description": "Type of an answering rule. The 'Custom' value should be specified"
    },
    "name": {
      "type": "string",
      "description": "Name of an answering rule specified by user"
    },
    "callers": {
      "type": "array",
      "description": "Answering rule will be applied when calls are received from the specified caller(s)",
      "items": {
        "properties": {
          "callerId": {
            "type": "string",
            "description": "Phone number of a caller"
          },
          "name": {
            "type": "string",
            "description": "Contact name of a caller"
          }
        }
      }
    },
    "calledNumbers": {
      "type": "array",
      "description": "Answering rules are applied when calling to selected number(s)",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Called phone number"
          }
        }
      }
    },
    "schedule": {
      "description": "Schedule when an answering rule should be applied",
      "properties": {
        "weeklyRanges": {
          "description": "Weekly schedule",
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        },
        "ranges": {
          "description": "Specific data ranges",
          "type": "array",
          "items": {
            "properties": {
              "from": {
                "type": "string",
                "description": "Starting datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              },
              "to": {
                "type": "string",
                "description": "Ending datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              }
            }
          }
        },
        "ref": {
          "type": "string",
          "description": "The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method",
          "enum": [
            "BusinessHours",
            "AfterHours"
          ]
        }
      }
    },
    "callHandlingAction": {
      "type": "string",
      "description": "Specifies how incoming calls are forwarded",
      "enum": [
        "ForwardCalls",
        "UnconditionalForwarding",
        "AgentQueue",
        "TransferToExtension",
        "TakeMessagesOnly",
        "PlayAnnouncementOnly"
      ]
    },
    "forwarding": {
      "description": "Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded",
      "properties": {
        "notifyMySoftPhones": {
          "type": "boolean",
          "description": "Specifies if the user's softphone(s) are notified before forwarding the incoming call to desk phones and forwarding numbers"
        },
        "notifyAdminSoftPhones": {
          "type": "boolean",
          "description": "Specifies if the administrator's softphone is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'False'"
        },
        "softPhonesRingCount": {
          "type": "integer",
          "description": "Number of rings before forwarding starts"
        },
        "ringingMode": {
          "type": "string",
          "description": "Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ring all at the same time",
          "enum": [
            "Sequentially",
            "Simultaneously"
          ]
        },
        "rules": {
          "type": "array",
          "description": "Information on a call forwarding rule",
          "items": {
            "properties": {
              "index": {
                "type": "integer",
                "description": "Forwarding number (or group) ordinal"
              },
              "ringCount": {
                "type": "integer",
                "description": "Number of rings for a forwarding number (or group)"
              },
              "enabled": {
                "type": "boolean",
                "description": "Forwarding number status. Returned only if `showInactiveNumbers` is set to `true`"
              },
              "forwardingNumbers": {
                "type": "array",
                "description": "Forwarding number (or group) data",
                "items": {
                  "properties": {
                    "uri": {
                      "type": "string",
                      "description": "Link to a forwarding number resource"
                    },
                    "id": {
                      "type": "string",
                      "description": "Internal identifier of a forwarding number"
                    },
                    "phoneNumber": {
                      "type": "string",
                      "description": "Phone number to which the call is forwarded"
                    },
                    "label": {
                      "type": "string",
                      "description": "Title of a forwarding number"
                    },
                    "type": {
                      "type": "string",
                      "description": "Type of a forwarding number",
                      "enum": [
                        "Home",
                        "Mobile",
                        "Work",
                        "PhoneLine",
                        "Outage",
                        "Other"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "mobileTimeout": {
          "type": "boolean",
          "description": "Specifies if mobile timeout is activated for the rule"
        }
      }
    },
    "unconditionalForwarding": {
      "description": "Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number to which the call is forwarded"
        }
      }
    },
    "queue": {
      "description": "Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action",
      "properties": {
        "transferMode": {
          "type": "string",
          "description": "Specifies how calls are transferred to group members",
          "enum": [
            "Rotating",
            "Simultaneous",
            "FixedOrder"
          ]
        },
        "fixedOrderAgents": {
          "type": "array",
          "description": "Information on a call forwarding rule",
          "items": {
            "properties": {
              "extension": {
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Internal identifier of an extension"
                  },
                  "uri": {
                    "type": "string",
                    "description": "Canonical URI of an extension"
                  },
                  "extensionNumber": {
                    "type": "string",
                    "description": "Number of department extension"
                  },
                  "partnerId": {
                    "type": "string",
                    "description": "For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension"
                  }
                }
              },
              "index": {
                "type": "integer",
                "description": "Ordinal of an agent (call queue member)"
              }
            }
          }
        },
        "holdAudioInterruptionMode": {
          "type": "string",
          "description": "Connecting audio interruption mode",
          "enum": [
            "Never",
            "WhenMusicEnds",
            "Periodically"
          ]
        },
        "holdAudioInterruptionPeriod": {
          "type": "integer",
          "description": "Connecting audio interruption message period in seconds"
        },
        "agentTimeout": {
          "type": "integer",
          "description": "Maximum time in seconds to wait for a call queue member before trying the next member"
        },
        "wrapUpTime": {
          "type": "integer",
          "description": "Minimum post-call wrap up time in seconds before agent status is automatically set"
        },
        "holdTime": {
          "type": "integer",
          "description": "Maximum hold time in seconds to wait for an available call queue member"
        },
        "maxCallers": {
          "type": "integer",
          "description": "Maximum count of callers on hold"
        },
        "maxCallersAction": {
          "type": "string",
          "description": "Action which should be taken if count of callers on hold exceeds the maximum",
          "enum": [
            "Voicemail",
            "Announcement"
          ]
        }
      }
    },
    "transfer": {
      "description": "Transfer settings applied for department (call queue) extension type, with 'TransferToExtension' call handling action",
      "properties": {
        "extension": {
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of an extension"
            },
            "uri": {
              "type": "string",
              "description": "Canonical URI of an extension"
            },
            "extensionNumber": {
              "type": "string",
              "description": "Number of department extension"
            },
            "partnerId": {
              "type": "string",
              "description": "For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension"
            }
          }
        }
      }
    },
    "voicemail": {
      "description": "Specifies whether to take a voicemail and who should do it",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "If 'True' then voicemails are allowed to be received"
        },
        "recipient": {
          "description": "Recipient data",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to a recipient extension resource"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of a recipient extension"
            }
          }
        }
      }
    },
    "greetings": {
      "type": "array",
      "description": "Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of a greeting, specifying the case when the greeting is played.",
            "enum": [
              "Introductory",
              "Announcement",
              "ConnectingMessage",
              "ConnectingAudio",
              "Voicemail",
              "Unavailable",
              "InterruptPrompt",
              "HoldMusic",
              "Custom",
              "Company",
              "BlockedCallersSpecific",
              "BlockedCallersAll",
              "BlockedNoCallerId",
              "BlockedPayPhones",
              "StartRecording",
              "StopRecording",
              "AutomaticRecording"
            ]
          },
          "usageType": {
            "type": "string",
            "description": "Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.",
            "enum": [
              "UserExtensionAnsweringRule",
              "ExtensionAnsweringRule",
              "DepartmentExtensionAnsweringRule",
              "CompanyAnsweringRule",
              "CompanyAfterHoursAnsweringRule",
              "VoicemailExtensionAnsweringRule",
              "AnnouncementExtensionAnsweringRule"
            ]
          },
          "preset": {
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to a greeting resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of a greeting"
              },
              "name": {
                "type": "string",
                "description": "Name of a greeting"
              }
            }
          }
        }
      }
    },
    "screening": {
      "type": "string",
      "description": "Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller ID is missing, then callers are asked to say their name before connecting; 'UnknownCallerId' - if caller ID is not in contact list, then callers are asked to say their name before connecting; 'Always' - the callers are always asked to say their name before connecting. The default value is 'Off'",
      "enum": [
        "Off",
        "NoCallerId",
        "UnknownCallerId",
        "Always"
      ]
    }
  }
}```

## Load answering rule

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update answering rule

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`, updateAnsweringRuleRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateAnsweringRuleRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "forwarding": {
      "description": "Forwarding parameters. Returned if 'ForwardCalls' is specified in 'callHandlingAction'. These settings determine the forwarding numbers to which the call will be forwarded",
      "properties": {
        "notifyMySoftPhones": {
          "type": "boolean",
          "description": "Specifies if the first ring on desktop/mobile apps is enabled. The default value is 'True'"
        },
        "notifyAdminSoftPhones": {
          "type": "boolean",
          "description": "Specifies if the administrator's softphone (desktop application) is notified before forwarding the incoming call to desk phones and forwarding numbers. The default value is 'True'"
        },
        "softPhonesRingCount": {
          "type": "integer",
          "default": 1,
          "description": "Specifies delay between ring on apps and starting of a call forwarding"
        },
        "ringingMode": {
          "type": "string",
          "description": "Specifies the order in which forwarding numbers ring. 'Sequentially' means that forwarding numbers are ringing one at a time, in order of priority. 'Simultaneously' means that forwarding numbers are ringing all at the same time. The default value is 'Sequentially'",
          "enum": [
            "Sequentially",
            "Simultaneously"
          ]
        },
        "rules": {
          "type": "array",
          "description": "Information on a call forwarding rule",
          "items": {
            "properties": {
              "index": {
                "type": "integer",
                "description": "Forwarding number (or group) ordinal. Not returned for inactive numbers"
              },
              "ringCount": {
                "type": "integer",
                "description": "Number of rings for a forwarding number (or group). For inactive numbers the default value ('4') is returned"
              },
              "enabled": {
                "type": "boolean",
                "description": "Phone number status"
              },
              "forwardingNumbers": {
                "type": "array",
                "description": "Forwarding number (or group) data",
                "items": {
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "Internal identifier of a forwarding number"
                    },
                    "type": {
                      "type": "string",
                      "description": "Forwarding phone number type",
                      "enum": [
                        "Home",
                        "Mobile",
                        "Work",
                        "PhoneLine",
                        "Outage",
                        "Other"
                      ]
                    }
                  }
                }
              }
            }
          }
        },
        "mobileTimeout": {
          "type": "boolean",
          "description": "Specifies if mobile timeout is activated for the rule"
        }
      }
    },
    "enabled": {
      "type": "boolean",
      "description": "Specifies if the rule is active or inactive. The default value is 'True'"
    },
    "name": {
      "type": "string",
      "description": "Name of an answering rule specified by user"
    },
    "callers": {
      "type": "array",
      "description": "Answering rule will be applied when calls are received from the specified caller(s)",
      "items": {
        "properties": {
          "callerId": {
            "type": "string",
            "description": "Phone number of a caller"
          },
          "name": {
            "type": "string",
            "description": "Contact name of a caller"
          }
        }
      }
    },
    "calledNumbers": {
      "type": "array",
      "description": "Answering rules are applied when calling to selected number(s)",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Called phone number"
          }
        }
      }
    },
    "schedule": {
      "description": "Schedule when an answering rule should be applied",
      "properties": {
        "weeklyRanges": {
          "description": "Weekly schedule",
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time intervals for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        },
        "ranges": {
          "description": "Specific data ranges",
          "type": "array",
          "items": {
            "properties": {
              "from": {
                "type": "string",
                "description": "Starting datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              },
              "to": {
                "type": "string",
                "description": "Ending datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              }
            }
          }
        },
        "ref": {
          "type": "string",
          "description": "The user's schedule specified for business hours or after hours; it can also be set/retrieved calling the corresponding method",
          "enum": [
            "BusinessHours",
            "AfterHours"
          ]
        }
      }
    },
    "callHandlingAction": {
      "type": "string",
      "description": "Specifies how incoming calls are forwarded",
      "enum": [
        "ForwardCalls",
        "UnconditionalForwarding",
        "AgentQueue",
        "TransferToExtension",
        "TakeMessagesOnly",
        "PlayAnnouncementOnly"
      ]
    },
    "unconditionalForwarding": {
      "description": "Unconditional forwarding parameters. Returned if 'UnconditionalForwarding' is specified in 'callHandlingAction'",
      "properties": {
        "phoneNumber": {
          "type": "string",
          "description": "Phone number to which the call is forwarded"
        }
      }
    },
    "queue": {
      "description": "Queue settings applied for department (call queue) extension type, with the 'AgentQueue' value specified as a call handling action",
      "properties": {
        "transferMode": {
          "type": "string",
          "description": "Specifies how calls are transferred to group members",
          "enum": [
            "Rotating",
            "Simultaneous",
            "FixedOrder"
          ]
        },
        "fixedOrderAgents": {
          "type": "array",
          "description": "Information on a call forwarding rule",
          "items": {
            "properties": {
              "extension": {
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Internal identifier of an extension"
                  },
                  "uri": {
                    "type": "string",
                    "description": "Canonical URI of an extension"
                  },
                  "extensionNumber": {
                    "type": "string",
                    "description": "Number of department extension"
                  },
                  "partnerId": {
                    "type": "string",
                    "description": "For Partner Applications Internal identifier of an extension created by partner. The RingCentral supports the mapping of accounts and stores the corresponding account ID/extension ID for each partner ID of a client application. In request URIs partner IDs are accepted instead of regular RingCentral native IDs as path parameters using pid = XXX clause. Though in response URIs contain the corresponding account IDs and extension IDs. In all request and response bodies these values are reflected via partnerId attributes of account and extension"
                  }
                }
              },
              "index": {
                "type": "integer",
                "description": "Ordinal of an agent (call queue member)"
              }
            }
          }
        },
        "holdAudioInterruptionMode": {
          "type": "string",
          "description": "Connecting audio interruption mode",
          "enum": [
            "Never",
            "WhenMusicEnds",
            "Periodically"
          ]
        },
        "holdAudioInterruptionPeriod": {
          "type": "integer",
          "description": "Connecting audio interruption message period in seconds"
        },
        "agentTimeout": {
          "type": "integer",
          "description": "Maximum time in seconds to wait for a call queue member before trying the next member"
        },
        "wrapUpTime": {
          "type": "integer",
          "description": "Minimum post-call wrap up time in seconds before agent status is automatically set"
        },
        "holdTime": {
          "type": "integer",
          "description": "Maximum hold time in seconds to wait for an available call queue member"
        },
        "maxCallers": {
          "type": "integer",
          "description": "Maximum count of callers on hold"
        },
        "maxCallersAction": {
          "type": "string",
          "description": "Action which should be taken if count of callers on hold exceeds the maximum",
          "enum": [
            "Voicemail",
            "Announcement"
          ]
        }
      }
    },
    "voicemail": {
      "description": "Specifies whether to take a voicemail and who should do it",
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "If 'True' then voicemails are allowed to be received"
        },
        "recipient": {
          "description": "Recipient data",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to a recipient extension resource"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of a recipient extension"
            }
          }
        }
      }
    },
    "greetings": {
      "type": "array",
      "description": "Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of a greeting, specifying the case when the greeting is played.",
            "enum": [
              "Introductory",
              "Announcement",
              "ConnectingMessage",
              "ConnectingAudio",
              "Voicemail",
              "Unavailable",
              "InterruptPrompt",
              "HoldMusic",
              "Custom",
              "Company",
              "BlockedCallersSpecific",
              "BlockedCallersAll",
              "BlockedNoCallerId",
              "BlockedPayPhones",
              "StartRecording",
              "StopRecording",
              "AutomaticRecording"
            ]
          },
          "usageType": {
            "type": "string",
            "description": "Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.",
            "enum": [
              "UserExtensionAnsweringRule",
              "ExtensionAnsweringRule",
              "DepartmentExtensionAnsweringRule",
              "CompanyAnsweringRule",
              "CompanyAfterHoursAnsweringRule",
              "VoicemailExtensionAnsweringRule",
              "AnnouncementExtensionAnsweringRule"
            ]
          },
          "preset": {
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to a greeting resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of a greeting"
              },
              "name": {
                "type": "string",
                "description": "Name of a greeting"
              }
            }
          }
        }
      }
    },
    "screening": {
      "type": "string",
      "description": "Call screening status. 'Off' - no call screening; 'NoCallerId' - if caller ID is missing, then callers are asked to say their name before connecting; 'UnknownCallerId' - if caller ID is not in contact list, then callers are asked to say their name before connecting; 'Always' - the callers are always asked to say their name before connecting. The default value is 'Off'",
      "enum": [
        "Off",
        "NoCallerId",
        "UnknownCallerId",
        "Always"
      ]
    },
    "showInactiveNumbers": {
      "type": "boolean",
      "description": "Indicates whether inactive numbers should be returned or not."
    }
  }
}```

## Delete answering rule

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create company answering rule

HTTP POST /restapi/v1.0/account/{accountId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/answering-rule`, companyAnsweringRuleRequest);
```

- `accountId`'s default value is `~`

`companyAnsweringRuleRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number"
    },
    "enabled": {
      "type": "boolean",
      "description": "Specifies if the rule is active or inactive. The default value is 'True'",
      "default": true
    },
    "type": {
      "type": "string",
      "description": "Type of an answering rule, the default value is 'Custom' = ['BusinessHours', 'AfterHours', 'Custom']",
      "enum": [
        "BusinessHours",
        "AfterHours",
        "Custom"
      ]
    },
    "callers": {
      "type": "array",
      "description": "Answering rule will be applied when calls are received from the specified caller(s)",
      "items": {
        "properties": {
          "callerId": {
            "type": "string",
            "description": "Phone number of a caller"
          },
          "name": {
            "type": "string",
            "description": "Displayed name for a caller ID"
          }
        }
      }
    },
    "calledNumbers": {
      "type": "array",
      "description": "Answering rule will be applied when calling the specified number(s)",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of an account phone number"
          }
        }
      }
    },
    "schedule": {
      "description": "Schedule when an answering rule should be applied",
      "properties": {
        "weeklyRanges": {
          "description": "Weekly schedule. If specified, ranges cannot be specified",
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        },
        "ranges": {
          "description": "Specific data ranges. If specified, weeklyRanges cannot be specified",
          "type": "array",
          "items": {
            "properties": {
              "from": {
                "type": "string",
                "description": "Starting datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              },
              "to": {
                "type": "string",
                "description": "Ending datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              }
            }
          }
        },
        "ref": {
          "type": "string",
          "description": "Reference to Business Hours or After Hours schedule",
          "enum": [
            "BusinessHours",
            "AfterHours"
          ]
        }
      }
    },
    "callHandlingAction": {
      "type": "string",
      "description": "Specifies how incoming calls are forwarded. The default value is 'Operator' 'Operator' - play company greeting and forward to operator extension 'Disconnect' - play company greeting and disconnect 'Bypass' - bypass greeting to go to selected extension = ['Operator', 'Disconnect', 'Bypass']",
      "enum": [
        "Operator",
        "Disconnect",
        "Bypass"
      ]
    },
    "extension": {
      "description": "Extension to which the call is forwarded in 'Bypass' mode",
      "properties": {
        "callerId": {
          "type": "string",
          "description": "Phone number of a caller"
        },
        "name": {
          "type": "string",
          "description": "Displayed name for a caller ID"
        }
      }
    },
    "greetings": {
      "type": "array",
      "description": "Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of a greeting, specifying the case when the greeting is played.",
            "enum": [
              "Introductory",
              "Announcement",
              "ConnectingMessage",
              "ConnectingAudio",
              "Voicemail",
              "Unavailable",
              "InterruptPrompt",
              "HoldMusic",
              "Custom",
              "Company",
              "BlockedCallersSpecific",
              "BlockedCallersAll",
              "BlockedNoCallerId",
              "BlockedPayPhones",
              "StartRecording",
              "StopRecording",
              "AutomaticRecording"
            ]
          },
          "usageType": {
            "type": "string",
            "description": "Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.",
            "enum": [
              "UserExtensionAnsweringRule",
              "ExtensionAnsweringRule",
              "DepartmentExtensionAnsweringRule",
              "CompanyAnsweringRule",
              "CompanyAfterHoursAnsweringRule",
              "VoicemailExtensionAnsweringRule",
              "AnnouncementExtensionAnsweringRule"
            ]
          },
          "preset": {
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to a greeting resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of a greeting"
              },
              "name": {
                "type": "string",
                "description": "Name of a greeting"
              }
            }
          }
        }
      }
    }
  }
}```

## List company answering rule

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule`);
```

- `accountId`'s default value is `~`

## Load company answering rule

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

## Update company answering rule

HTTP PUT /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`, companyAnsweringRuleUpdate);
```

- `accountId`'s default value is `~`

`companyAnsweringRuleUpdate` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "enabled": {
      "type": "boolean",
      "description": "Specifies if the rule is active or inactive. The default value is 'True'",
      "default": true
    },
    "name": {
      "type": "string",
      "description": "Name of an answering rule specified by user. Max number of symbols is 30. The default value is 'My Rule N' where 'N' is the first free number"
    },
    "callers": {
      "type": "array",
      "description": "Answering rule will be applied when calls are received from the specified caller(s)",
      "items": {
        "properties": {
          "callerId": {
            "type": "string",
            "description": "Phone number of a caller"
          },
          "name": {
            "type": "string",
            "description": "Displayed name for a caller ID"
          }
        }
      }
    },
    "calledNumbers": {
      "type": "array",
      "description": "Answering rule will be applied when calling the specified number(s)",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of an account phone number"
          }
        }
      }
    },
    "schedule": {
      "description": "Schedule when an answering rule should be applied",
      "properties": {
        "weeklyRanges": {
          "description": "Weekly schedule. If specified, ranges cannot be specified",
          "properties": {
            "monday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "tuesday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "wednesday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "thursday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "friday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "saturday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            },
            "sunday": {
              "type": "array",
              "description": "Time interval for a particular day",
              "items": {
                "properties": {
                  "from": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  },
                  "to": {
                    "type": "string",
                    "description": "Time in format hh:mm"
                  }
                }
              }
            }
          }
        },
        "ranges": {
          "description": "Specific data ranges. If specified, weeklyRanges cannot be specified",
          "type": "array",
          "items": {
            "properties": {
              "from": {
                "type": "string",
                "description": "Starting datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              },
              "to": {
                "type": "string",
                "description": "Ending datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), for example *2018-10-29T14:00:00*, *2018-10-29T14:00:00Z*, *2018-10-29T14:00:00+0100*"
              }
            }
          }
        },
        "ref": {
          "type": "string",
          "description": "Reference to Business Hours or After Hours schedule",
          "enum": [
            "BusinessHours",
            "AfterHours"
          ]
        }
      }
    },
    "callHandlingAction": {
      "type": "string",
      "description": "Specifies how incoming calls are forwarded. The default value is 'Operator' 'Operator' - play company greeting and forward to operator extension 'Disconnect' - play company greeting and disconnect 'Bypass' - bypass greeting to go to selected extension = ['Operator', 'Disconnect', 'Bypass']",
      "enum": [
        "Operator",
        "Disconnect",
        "Bypass"
      ]
    },
    "extension": {
      "description": "Extension to which the call is forwarded in 'Bypass' mode",
      "properties": {
        "callerId": {
          "type": "string",
          "description": "Phone number of a caller"
        },
        "name": {
          "type": "string",
          "description": "Displayed name for a caller ID"
        }
      }
    },
    "greetings": {
      "type": "array",
      "description": "Greetings applied for an answering rule; only predefined greetings can be applied, see Dictionary Greeting List",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "description": "Type of a greeting, specifying the case when the greeting is played.",
            "enum": [
              "Introductory",
              "Announcement",
              "ConnectingMessage",
              "ConnectingAudio",
              "Voicemail",
              "Unavailable",
              "InterruptPrompt",
              "HoldMusic",
              "Custom",
              "Company",
              "BlockedCallersSpecific",
              "BlockedCallersAll",
              "BlockedNoCallerId",
              "BlockedPayPhones",
              "StartRecording",
              "StopRecording",
              "AutomaticRecording"
            ]
          },
          "usageType": {
            "type": "string",
            "description": "Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.",
            "enum": [
              "UserExtensionAnsweringRule",
              "ExtensionAnsweringRule",
              "DepartmentExtensionAnsweringRule",
              "CompanyAnsweringRule",
              "CompanyAfterHoursAnsweringRule",
              "VoicemailExtensionAnsweringRule",
              "AnnouncementExtensionAnsweringRule"
            ]
          },
          "preset": {
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to a greeting resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of a greeting"
              },
              "name": {
                "type": "string",
                "description": "Name of a greeting"
              }
            }
          }
        }
      }
    }
  }
}```

## Delete company answering rule

HTTP DELETE /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

## List standard greetings

HTTP GET /restapi/v1.0/dictionary/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/greeting');
```


## Load standard greeting

HTTP GET /restapi/v1.0/dictionary/greeting/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/greeting/${greetingId}`);
```


## Create company greeting

HTTP POST /restapi/v1.0/account/{accountId}/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/greeting`, customCompanyGreetingRequest);
```

- `accountId`'s default value is `~`

`customCompanyGreetingRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of a greeting",
      "enum": [
        "Company",
        "StartRecording",
        "StopRecording",
        "AutomaticRecording"
      ]
    },
    "answeringRule": {
      "description": "Information on an answering rule that the greeting is applied to",
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an answering rule"
        }
      }
    },
    "language": {
      "description": "Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'",
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of a greeting language"
        }
      }
    },
    "audio": {
      "type": "file",
      "description": "Custom greeting audio"
    }
  }
}```

## Create user custom greeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting`, customGreetingRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`customGreetingRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Type of a greeting, specifying the case when the greeting is played.",
      "enum": [
        "Introductory",
        "Announcement",
        "ConnectingMessage",
        "ConnectingAudio",
        "Voicemail",
        "Unavailable",
        "HoldMusic"
      ]
    },
    "answeringRule": {
      "description": "Information on an answering rule that the greeting is applied to",
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an answering rule"
        }
      }
    },
    "audio": {
      "type": "file",
      "description": "Custom greeting audio"
    }
  }
}```

## Load custom greeting

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting/${greetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Create ivr prompt

HTTP POST /restapi/v1.0/account/{accountId}/ivr-prompts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png', contentType: 'image/png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/ivr-prompts`, formData);
```

- `accountId`'s default value is `~`

`body` is an object with the following properties:

```yaml
[
  {
    "in": "formData",
    "name": "name",
    "type": "string",
    "required": false,
    "description": "Description of file contents."
  }
]```

## List ivr prompts

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts`);
```

- `accountId`'s default value is `~`

## Load ivr prompt

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Delete ivr prompt

HTTP DELETE /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Update ivr prompt

HTTP PUT /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

## Load ivr prompt content

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}/content`);
```

- `accountId`'s default value is `~`

## Create ivr menu

HTTP POST /restapi/v1.0/account/{accountId}/ivr-menus

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/ivr-menus`, iVRMenuInfo);
```

- `accountId`'s default value is `~`

`iVRMenuInfo` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of an IVR Menu extension"
    },
    "uri": {
      "type": "string",
      "description": "Link to an IVR Menu extension resource"
    },
    "name": {
      "type": "string",
      "description": "First name of an IVR Menu user"
    },
    "extensionNumber": {
      "type": "string",
      "description": "Number of an IVR Menu extension"
    },
    "prompt": {
      "description": "Prompt metadata",
      "properties": {
        "mode": {
          "type": "string",
          "description": "Prompt mode: custom media or text",
          "enum": [
            "Audio",
            "TextToSpeech"
          ]
        },
        "audio": {
          "description": "For 'Audio' mode only. Prompt media reference",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to a prompt language"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of a language"
            },
            "name": {
              "type": "string",
              "description": "Language name"
            },
            "localeCode": {
              "type": "string",
              "description": "Language locale code"
            }
          }
        },
        "text": {
          "type": "string",
          "description": "For 'TextToSpeech' mode only. Prompt text"
        },
        "language": {
          "description": "For 'TextToSpeech' mode only. Prompt language metadata",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to an prompt audio file"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of an prompt"
            }
          }
        }
      }
    },
    "actions": {
      "type": "array",
      "description": "Keys handling settings",
      "items": {
        "properties": {
          "input": {
            "type": "string",
            "description": "Key. The following values are supported: numeric: '1' to '9' Star Hash NoInput "
          },
          "action": {
            "type": "string",
            "description": "Internal identifier of an answering rule",
            "enum": [
              "Connect",
              "Voicemail",
              "DialByName",
              "Transfer",
              "Repeat",
              "ReturnToRoot",
              "ReturnToPrevious",
              "Disconnect"
            ]
          },
          "extension": {
            "description": "For 'Connect' or 'Voicemail' actions only. Extension reference",
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to an extension resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of an extension"
              }
            }
          },
          "phoneNumber": {
            "type": "string",
            "description": "For 'Transfer' action only. PSTN number in E.164 format"
          }
        }
      }
    }
  }
}```

## Load ivr menu

HTTP GET /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`);
```

- `accountId`'s default value is `~`

## Update ivr menu

HTTP PUT /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`, iVRMenuInfo);
```

- `accountId`'s default value is `~`

`iVRMenuInfo` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of an IVR Menu extension"
    },
    "uri": {
      "type": "string",
      "description": "Link to an IVR Menu extension resource"
    },
    "name": {
      "type": "string",
      "description": "First name of an IVR Menu user"
    },
    "extensionNumber": {
      "type": "string",
      "description": "Number of an IVR Menu extension"
    },
    "prompt": {
      "description": "Prompt metadata",
      "properties": {
        "mode": {
          "type": "string",
          "description": "Prompt mode: custom media or text",
          "enum": [
            "Audio",
            "TextToSpeech"
          ]
        },
        "audio": {
          "description": "For 'Audio' mode only. Prompt media reference",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to a prompt language"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of a language"
            },
            "name": {
              "type": "string",
              "description": "Language name"
            },
            "localeCode": {
              "type": "string",
              "description": "Language locale code"
            }
          }
        },
        "text": {
          "type": "string",
          "description": "For 'TextToSpeech' mode only. Prompt text"
        },
        "language": {
          "description": "For 'TextToSpeech' mode only. Prompt language metadata",
          "properties": {
            "uri": {
              "type": "string",
              "description": "Link to an prompt audio file"
            },
            "id": {
              "type": "string",
              "description": "Internal identifier of an prompt"
            }
          }
        }
      }
    },
    "actions": {
      "type": "array",
      "description": "Keys handling settings",
      "items": {
        "properties": {
          "input": {
            "type": "string",
            "description": "Key. The following values are supported: numeric: '1' to '9' Star Hash NoInput "
          },
          "action": {
            "type": "string",
            "description": "Internal identifier of an answering rule",
            "enum": [
              "Connect",
              "Voicemail",
              "DialByName",
              "Transfer",
              "Repeat",
              "ReturnToRoot",
              "ReturnToPrevious",
              "Disconnect"
            ]
          },
          "extension": {
            "description": "For 'Connect' or 'Voicemail' actions only. Extension reference",
            "properties": {
              "uri": {
                "type": "string",
                "description": "Link to an extension resource"
              },
              "id": {
                "type": "string",
                "description": "Internal identifier of an extension"
              }
            }
          },
          "phoneNumber": {
            "type": "string",
            "description": "For 'Transfer' action only. PSTN number in E.164 format"
          }
        }
      }
    }
  }
}```

## Load call recording settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording`);
```

- `accountId`'s default value is `~`

## Update call recording settings

HTTP PUT /restapi/v1.0/account/{accountId}/call-recording

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/call-recording`, callRecordingSettingsResource);
```

- `accountId`'s default value is `~`

`callRecordingSettingsResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "onDemand": {
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Flag for controlling OnDemand Call Recording settings"
        }
      }
    },
    "automatic": {
      "properties": {
        "enabled": {
          "type": "boolean",
          "description": "Flag for controling Automatic Call Recording settings"
        },
        "outboundCallTones": {
          "type": "boolean",
          "description": "Flag for controlling 'Play Call Recording Announcement for Outbound Calls' settings"
        },
        "outboundCallAnnouncement": {
          "type": "boolean",
          "description": "Flag for controlling 'Play periodic tones for outbound calls' settings"
        },
        "allowMute": {
          "type": "boolean",
          "description": "Flag for controlling 'Allow mute in auto call recording' settings"
        },
        "extensionCount": {
          "type": "integer",
          "description": "Total amount of extension that are used in call recordings"
        }
      }
    },
    "greetings": {
      "type": "array",
      "description": "Collection of Greeting Info",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "StartRecording",
              "StopRecording",
              "AutomaticRecording"
            ]
          },
          "mode": {
            "type": "string",
            "enum": [
              "Default",
              "Custom"
            ],
            "description": "'Default' value specifies that all greetings of that type (in all languages) are default, if at least one greeting (in any language) of the specified type is custom, then 'Custom' value is returned."
          }
        }
      }
    }
  }
}```

## List call recording extension settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/extensions

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/extensions`);
```

- `accountId`'s default value is `~`

## Update call recording extension settings

HTTP POST /restapi/v1.0/account/{accountId}/call-recording/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-recording/bulk-assign`, bulkAccountCallRecordingsResource);
```

- `accountId`'s default value is `~`

`bulkAccountCallRecordingsResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "addedExtensions": {
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension"
        },
        "uri": {
          "type": "string"
        },
        "extensionNumber": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "callDirection": {
          "type": "string",
          "description": "Direction of call",
          "enum": [
            "Outbound",
            "Inbound",
            "All"
          ]
        }
      }
    },
    "updatedExtensions": {
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension"
        },
        "uri": {
          "type": "string"
        },
        "extensionNumber": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "callDirection": {
          "type": "string",
          "description": "Direction of call",
          "enum": [
            "Outbound",
            "Inbound",
            "All"
          ]
        }
      }
    },
    "removedExtensions": {
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension"
        },
        "uri": {
          "type": "string"
        },
        "extensionNumber": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "callDirection": {
          "type": "string",
          "description": "Direction of call",
          "enum": [
            "Outbound",
            "Inbound",
            "All"
          ]
        }
      }
    }
  }
}```

## List call recording custom greetings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

## Delete call recording custom greetings

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

## Delete call recording custom greeting

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings/${greetingId}`);
```

- `accountId`'s default value is `~`

## Create sip registration

HTTP POST /restapi/v1.0/client-info/sip-provision

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/client-info/sip-provision', createSipRegistrationRequest);
```


`createSipRegistrationRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "device",
    "sipInfo"
  ],
  "properties": {
    "device": {
      "type": "array",
      "description": "Device unique description",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": "Device unique identifier, retrieved on previous session (if any)"
          },
          "appExternalId": {
            "type": "string",
            "description": "For iOS devices only Certificate name (used by iOS applications for APNS subscription)"
          },
          "computerName": {
            "type": "string",
            "description": "For SoftPhone only Computer name"
          }
        }
      }
    },
    "sipInfo": {
      "type": "array",
      "description": "SIP settings for device",
      "items": {
        "properties": {
          "transport": {
            "type": "string",
            "description": "Supported transport. SIP info will be returned for this transport if supported",
            "enum": [
              "UDP",
              "TCP",
              "TLS",
              "WS",
              "WSS"
            ]
          }
        }
      }
    }
  }
}```

## List extension phone numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/phone-number`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load extension info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`, extensionUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`extensionUpdateRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "Disabled",
        "Enabled",
        "NotActivated"
      ]
    },
    "statusInfo": {
      "properties": {
        "comment": {
          "type": "string",
          "description": "A free-form user comment, describing the status change reason"
        },
        "reason": {
          "type": "string",
          "description": "Type of suspension",
          "enum": [
            "Voluntarily",
            "Involuntarily"
          ]
        }
      }
    },
    "reason": {
      "type": "string",
      "description": "Type of suspension"
    },
    "comment": {
      "type": "string",
      "description": "Free Form user comment"
    },
    "extensionNumber": {
      "type": "string",
      "description": "Extension number available"
    },
    "contact": {
      "properties": {
        "firstName": {
          "type": "string",
          "description": "For User extension type only. Extension user first name"
        },
        "lastName": {
          "type": "string",
          "description": "For User extension type only. Extension user last name"
        },
        "company": {
          "type": "string",
          "description": "Extension user company name"
        },
        "jobTitle": {
          "type": "string"
        },
        "email": {
          "type": "string",
          "description": "Email of extension user"
        },
        "businessPhone": {
          "type": "string",
          "description": "Extension user contact phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format"
        },
        "mobilePhone": {
          "type": "string",
          "description": "Extension user mobile (**non** Toll Free) phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format"
        },
        "businessAddress": {
          "properties": {
            "country": {
              "type": "string",
              "description": "Country name of an extension user company"
            },
            "state": {
              "type": "string",
              "description": "State/province name of an extension user company. Mandatory for the USA, UK and Canada"
            },
            "city": {
              "type": "string",
              "description": "City name of an extension user company"
            },
            "street": {
              "type": "string",
              "description": "Street address of an extension user company"
            },
            "zip": {
              "type": "string",
              "description": "Zip code of an extension user company"
            }
          }
        },
        "emailAsLoginName": {
          "type": "boolean",
          "description": " If 'True' then contact email is enabled as login name for this user. Please note that email should be unique in this case. The default value is 'False'"
        },
        "pronouncedName": {
          "properties": {
            "type": {
              "type": "string",
              "description": "Voice name type. 'Default' - default extension name; first name and last name specified in user profile; 'TextToSpeech' - custom text; user name spelled the way it sounds and specified by user; 'Recorded' - custom audio, user name recorded in user's own voice (supported only for extension retrieval)",
              "enum": [
                "Default",
                "TextToSpeech",
                "Recorded"
              ]
            },
            "text": {
              "type": "string",
              "description": "Custom text"
            }
          }
        },
        "department": {
          "type": "string",
          "description": "Extension user department, if any"
        }
      }
    },
    "regionalSettings": {
      "properties": {
        "homeCountry": {
          "properties": {
            "id": {
              "type": "string",
              "description": "internal Identifier of a country"
            }
          }
        },
        "timezone": {
          "properties": {
            "id": {
              "type": "string",
              "description": "internal Identifier of a timezone"
            }
          }
        },
        "language": {
          "properties": {
            "id": {
              "type": "string",
              "description": "internal Identifier of a language"
            }
          }
        },
        "greetingLanguage": {
          "properties": {
            "id": {
              "type": "string",
              "description": "internal Identifier of a greeting language"
            }
          }
        },
        "formattingLocale": {
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal Identifier of a formatting language"
            }
          }
        },
        "timeFormat": {
          "type": "string",
          "enum": [
            "12h",
            "24h"
          ],
          "default": "12h",
          "description": "Time format setting"
        }
      }
    },
    "setupWizardState": {
      "type": "string",
      "enum": [
        "NotStarted",
        "Incomplete",
        "Completed"
      ]
    },
    "partnerId": {
      "type": "string",
      "description": " Extension partner identifier"
    },
    "ivrPin": {
      "type": "string",
      "description": "IVR PIN"
    },
    "password": {
      "type": "string",
      "description": "Password for extension"
    },
    "callQueueInfo": {
      "description": "For Department extension type only. Call queue settings",
      "properties": {
        "slaGoal": {
          "type": "integer",
          "description": "Target percentage of calls that must be answered by agents within the service level time threshold"
        },
        "slaThresholdSeconds": {
          "type": "integer"
        },
        "includeAbandonedCalls": {
          "type": "boolean"
        },
        "abandonedThresholdSeconds": {
          "type": "integer"
        }
      }
    },
    "transition": {
      "description": "For NotActivated extensions only. Welcome email settings",
      "properties": {
        "sendWelcomeEmailsToUsers": {
          "type": "boolean",
          "description": "Specifies if an activation email is automatically sent to new users (Not Activated extensions) or not"
        },
        "sendWelcomeEmail": {
          "type": "boolean",
          "description": "Supported for account confirmation. Specifies whether welcome email is sent"
        }
      }
    }
  }
}```

## Delete extension

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load extension caller id

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update extension caller id

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`, extensionCallerIdInfo);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`extensionCallerIdInfo` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "uri": {
      "type": "string",
      "description": "Canonical URL of a caller ID resource"
    },
    "byDevice": {
      "type": "array",
      "items": {
        "description": "Caller ID settings by device",
        "properties": {
          "device": {
            "properties": {
              "id": {
                "type": "string",
                "description": "Internal identifier of a device"
              },
              "uri": {
                "type": "string",
                "description": "Link to a device resource"
              },
              "phoneNumber": {
                "type": "string",
                "description": "Name of a device"
              }
            }
          },
          "callerId": {
            "properties": {
              "type": {
                "type": "string",
                "description": "If 'PhoneNumber' value is specified, then a certain phone number is shown as a caller ID when using this telephony feature. If 'Blocked' value is specified, then a caller ID is hidden. The value 'CurrentLocation' can be specified for 'RingOut' feature only. The default is 'PhoneNumber' = ['PhoneNumber', 'Blocked', 'CurrentLocation']"
              },
              "phoneInfo": {
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Internal identifier of a phone number"
                  },
                  "uri": {
                    "type": "string",
                    "description": "Link to a phone number resource"
                  },
                  "phoneNumber": {
                    "type": "string",
                    "description": "Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format"
                  }
                }
              }
            }
          }
        }
      }
    },
    "byFeature": {
      "type": "array",
      "items": {
        "description": "Caller ID settings by feature",
        "properties": {
          "feature": {
            "type": "string",
            "enum": [
              "RingOut",
              "RingMe",
              "CallFlip",
              "FaxNumber",
              "AdditionalSoftphone",
              "Alternate",
              "CommonPhone",
              "MobileApp",
              "Delegated"
            ]
          },
          "callerId": {
            "properties": {
              "type": {
                "type": "string",
                "description": "If 'PhoneNumber' value is specified, then a certain phone number is shown as a caller ID when using this telephony feature. If 'Blocked' value is specified, then a caller ID is hidden. The value 'CurrentLocation' can be specified for 'RingOut' feature only. The default is 'PhoneNumber' = ['PhoneNumber', 'Blocked', 'CurrentLocation']"
              },
              "phoneInfo": {
                "properties": {
                  "id": {
                    "type": "string",
                    "description": "Internal identifier of a phone number"
                  },
                  "uri": {
                    "type": "string",
                    "description": "Link to a phone number resource"
                  },
                  "phoneNumber": {
                    "type": "string",
                    "description": "Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format"
                  }
                }
              }
            }
          }
        }
      }
    },
    "extensionNameForOutboundCalls": {
      "type": "boolean",
      "description": "If 'True', then user first name and last name will be used as caller ID when making outbound calls from extension"
    },
    "extensionNumberForInternalCalls": {
      "type": "boolean",
      "description": "If 'True', then extension number will be used as caller ID when making internal calls"
    }
  }
}```

## List extension grants

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/grant`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load notification settings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/notification-settings`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update notification settings

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/notification-settings`, notificationSettingsUpdateRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`notificationSettingsUpdateRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "emailAddresses": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of notification recipient email addresses"
    },
    "smsEmailAddresses": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "List of notification recipient email addresses"
    },
    "advancedMode": {
      "type": "boolean",
      "description": "Specifies notifications settings mode. If 'True' then advanced mode is on, it allows using different emails and/or phone numbers for each notification type. If 'False' then basic mode is on. Advanced mode settings are returned in both modes, if specified once, but if basic mode is switched on, they are not applied "
    },
    "voicemails": {
      "properties": {
        "notifyByEmail": {
          "type": "boolean",
          "description": "Email notification flag"
        },
        "notifyBySms": {
          "type": "boolean",
          "description": "SMS notification flag"
        },
        "advancedEmailAddresses": {
          "type": "array",
          "description": "List of recipient email addresses for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "advancedSmsEmailAddresses": {
          "type": "array",
          "description": "List of recipient phone numbers for voicemail notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "includeAttachment": {
          "type": "boolean",
          "description": "Indicates whether voicemail should be attached to email"
        },
        "markAsRead": {
          "type": "boolean",
          "description": "Indicates whether email should be automatically marked as read"
        }
      }
    },
    "inboundFaxes": {
      "properties": {
        "notifyByEmail": {
          "type": "boolean",
          "description": "Email notification flag"
        },
        "notifyBySms": {
          "type": "boolean",
          "description": "SMS notification flag"
        },
        "advancedEmailAddresses": {
          "type": "array",
          "description": "List of recipient email addresses for inbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "advancedSmsEmailAddresses": {
          "type": "array",
          "description": "List of recipient phone numbers for inbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "includeAttachment": {
          "type": "boolean",
          "description": "Indicates whether fax should be attached to email"
        },
        "markAsRead": {
          "type": "boolean",
          "description": "Indicates whether email should be automatically marked as read"
        }
      }
    },
    "outboundFaxes": {
      "properties": {
        "notifyByEmail": {
          "type": "boolean",
          "description": "Email notification flag"
        },
        "notifyBySms": {
          "type": "boolean",
          "description": "SMS notification flag"
        },
        "advancedEmailAddresses": {
          "type": "array",
          "description": "List of recipient email addresses for outbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "advancedSmsEmailAddresses": {
          "type": "array",
          "description": "List of recipient phone numbers for outbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "inboundTexts": {
      "properties": {
        "notifyByEmail": {
          "type": "boolean",
          "description": "Email notification flag"
        },
        "notifyBySms": {
          "type": "boolean",
          "description": "SMS notification flag"
        },
        "advancedEmailAddresses": {
          "type": "array",
          "description": "List of recipient email addresses for inbound text message notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "advancedSmsEmailAddresses": {
          "type": "array",
          "description": "List of recipient phone numbers for inbound text message notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "missedCalls": {
      "properties": {
        "notifyByEmail": {
          "type": "boolean",
          "description": "Email notification flag"
        },
        "notifyBySms": {
          "type": "boolean",
          "description": "SMS notification flag"
        },
        "advancedEmailAddresses": {
          "type": "array",
          "description": "List of recipient email addresses for missed call notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        },
        "advancedSmsEmailAddresses": {
          "type": "array",
          "description": "List of recipient phone numbers for missed call notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only",
          "items": {
            "type": "string"
          }
        }
      }
    }
  }
}```

## Download profile image

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Upload profile image

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png', contentType: 'image/png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following properties:

```yaml
[]```

## Update profile image

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png', contentType: 'image/png' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following properties:

```yaml
[]```

## Download scaled pofile image

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image/${scaleSize}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Load conferencing info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Update conferencing info

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`, updateConferencingInfoRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`updateConferencingInfoRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "phoneNumbers": {
      "type": "array",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Dial-in phone number to connect to a conference"
          },
          "default": {
            "type": "boolean",
            "description": "'True' if the number is default for the conference. Default conference number is a domestic number that can be set by user (otherwise it is set by the system). Only one default number per country is allowed"
          }
        }
      },
      "description": "Multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic"
    },
    "allowJoinBeforeHost": {
      "type": "boolean",
      "description": "Determines if host user allows conference participants to join before the host"
    }
  }
}```

## Load account

HTTP GET /restapi/v1.0/account/{accountId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}`);
```

- `accountId`'s default value is `~`

## Load account business address

HTTP GET /restapi/v1.0/account/{accountId}/business-address

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-address`);
```

- `accountId`'s default value is `~`

## Update account business address

HTTP PUT /restapi/v1.0/account/{accountId}/business-address

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/business-address`, modifyAccountBusinessAddressRequest);
```

- `accountId`'s default value is `~`

`modifyAccountBusinessAddressRequest` is an object with the following definition:

```yaml
{
  "required": [
    "businessAddress"
  ],
  "type": "object",
  "properties": {
    "company": {
      "type": "string",
      "description": "Company business name"
    },
    "email": {
      "type": "string",
      "description": "Company business email address"
    },
    "businessAddress": {
      "description": "Company business address",
      "properties": {
        "country": {
          "type": "string",
          "description": "Name of a country"
        },
        "state": {
          "type": "string",
          "description": "Name of a state/province"
        },
        "city": {
          "type": "string",
          "description": "Name of a city"
        },
        "street": {
          "type": "string",
          "description": "Street address"
        },
        "zip": {
          "type": "string",
          "description": "Zip code"
        }
      }
    }
  }
}```

## Load service info

HTTP GET /restapi/v1.0/account/{accountId}/service-info

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/service-info`);
```

- `accountId`'s default value is `~`

## List languages

HTTP GET /restapi/v1.0/dictionary/language

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/language');
```


## Load language

HTTP GET /restapi/v1.0/dictionary/language/{languageId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/language/${languageId}`);
```


## List countries

HTTP GET /restapi/v1.0/dictionary/country

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/country');
```


## Load country

HTTP GET /restapi/v1.0/dictionary/country/{countryId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/country/${countryId}`);
```


## List locations

HTTP GET /restapi/v1.0/dictionary/location

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/location');
```


## List states

HTTP GET /restapi/v1.0/dictionary/state

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/state');
```


## Load state

HTTP GET /restapi/v1.0/dictionary/state/{stateId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/state/${stateId}`);
```


## List timezones

HTTP GET /restapi/v1.0/dictionary/timezone

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/timezone');
```


## Load timezone

HTTP GET /restapi/v1.0/dictionary/timezone/{timezoneId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/timezone/${timezoneId}`);
```


## List account phone numbers

HTTP GET /restapi/v1.0/account/{accountId}/phone-number

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number`);
```

- `accountId`'s default value is `~`

## Load account phone number

HTTP GET /restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number/${phoneNumberId}`);
```

- `accountId`'s default value is `~`

## List extensions

HTTP GET /restapi/v1.0/account/{accountId}/extension

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension`);
```

- `accountId`'s default value is `~`

## Create extension

HTTP POST /restapi/v1.0/account/{accountId}/extension

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension`, extensionCreationRequest);
```

- `accountId`'s default value is `~`

`extensionCreationRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "type",
    "contact"
  ],
  "properties": {
    "contact": {
      "description": "Contact Information",
      "properties": {
        "firstName": {
          "type": "string",
          "description": "For User extension type only. Extension user first name"
        },
        "lastName": {
          "type": "string",
          "description": "For User extension type only. Extension user last name"
        },
        "company": {
          "type": "string",
          "description": "Extension user company name"
        },
        "jobTitle": {
          "type": "string"
        },
        "email": {
          "type": "string",
          "description": "Email of extension user"
        },
        "businessPhone": {
          "type": "string",
          "description": "Extension user contact phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format"
        },
        "mobilePhone": {
          "type": "string",
          "description": "Extension user mobile (**non** Toll Free) phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format"
        },
        "businessAddress": {
          "properties": {
            "country": {
              "type": "string",
              "description": "Country name of an extension user company"
            },
            "state": {
              "type": "string",
              "description": "State/province name of an extension user company. Mandatory for the USA, UK and Canada"
            },
            "city": {
              "type": "string",
              "description": "City name of an extension user company"
            },
            "street": {
              "type": "string",
              "description": "Street address of an extension user company"
            },
            "zip": {
              "type": "string",
              "description": "Zip code of an extension user company"
            }
          }
        },
        "emailAsLoginName": {
          "type": "boolean",
          "description": " If 'True' then contact email is enabled as login name for this user. Please note that email should be unique in this case. The default value is 'False'"
        },
        "pronouncedName": {
          "properties": {
            "type": {
              "type": "string",
              "description": "Voice name type. 'Default' - default extension name; first name and last name specified in user profile; 'TextToSpeech' - custom text; user name spelled the way it sounds and specified by user; 'Recorded' - custom audio, user name recorded in user's own voice (supported only for extension retrieval)",
              "enum": [
                "Default",
                "TextToSpeech",
                "Recorded"
              ]
            },
            "text": {
              "type": "string",
              "description": "Custom text"
            }
          }
        },
        "department": {
          "type": "string",
          "description": "Extension user department, if any"
        }
      }
    },
    "extensionNumber": {
      "type": "string",
      "description": "Number of extension"
    },
    "password": {
      "type": "string",
      "description": "Password for extension. If not specified, the password is auto-generated"
    },
    "references": {
      "type": "array",
      "description": "List of non-RC internal identifiers assigned to an extension",
      "items": {
        "properties": {
          "ref": {
            "type": "string",
            "description": "Non-RC identifier of an extension"
          },
          "type": {
            "type": "string",
            "description": "Type of external identifier",
            "enum": [
              "PartnerId",
              "CustomerDirectoryId"
            ]
          }
        }
      }
    },
    "roles": {
      "type": "array",
      "items": {
        "properties": {
          "uri": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "description": "Internal identifier of a role"
          }
        }
      }
    },
    "regionalSettings": {
      "description": "Extension region data (timezone, home country, language)",
      "properties": {
        "homeCountry": {
          "description": "Extension country information",
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of a home country"
            },
            "uri": {
              "type": "string",
              "description": "Canonical URI of a home country"
            },
            "name": {
              "type": "string",
              "description": "Official name of a home country"
            },
            "isoCode": {
              "type": "string",
              "description": "ISO code of a country"
            },
            "callingCode": {
              "type": "string",
              "description": "Calling code of a country"
            }
          }
        },
        "timezone": {
          "description": "Extension timezone information",
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of a timezone"
            },
            "uri": {
              "type": "string",
              "description": "Canonical URI of a timezone"
            },
            "name": {
              "type": "string",
              "description": "Short name of a timezone"
            },
            "description": {
              "type": "string",
              "description": "Meaningful description of the timezone"
            }
          }
        },
        "language": {
          "description": "User interface language data",
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of a language"
            },
            "uri": {
              "type": "string",
              "description": "Canonical URI of a language"
            },
            "greeting": {
              "type": "boolean",
              "description": "Indicates whether a language is available as greeting language"
            },
            "formattingLocale": {
              "type": "boolean",
              "description": "Indicates whether a language is available as formatting locale"
            },
            "localeCode": {
              "type": "string",
              "description": "Localization code of a language"
            },
            "name": {
              "type": "string",
              "description": "Official name of a language"
            },
            "ui": {
              "type": "boolean",
              "description": "Indicates whether a language is available as UI language"
            }
          }
        },
        "greetingLanguage": {
          "description": "Information on language used for telephony greetings",
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of a greeting language"
            },
            "localeCode": {
              "type": "string",
              "description": "Localization code of a greeting language"
            },
            "name": {
              "type": "string",
              "description": "Official name of a greeting language"
            }
          }
        },
        "formattingLocale": {
          "description": "Formatting language preferences for numbers, dates and currencies",
          "properties": {
            "id": {
              "type": "string",
              "description": "Internal identifier of a formatting language"
            },
            "localeCode": {
              "type": "string",
              "description": "Localization code of a formatting language"
            },
            "name": {
              "type": "string"
            }
          }
        },
        "timeFormat": {
          "type": "string",
          "description": "Time format setting. The default value is '12h' = ['12h', '24h']",
          "enum": [
            "12h",
            "24h"
          ]
        }
      }
    },
    "setupWizardState": {
      "type": "string",
      "description": "Specifies extension configuration wizard state (web service setup).",
      "default": "NotStarted",
      "enum": [
        "NotStarted",
        "Incomplete",
        "Completed"
      ]
    },
    "status": {
      "type": "string",
      "description": "Extension current state",
      "enum": [
        "Enabled",
        "Disabled",
        "NotActivated",
        "Unassigned"
      ]
    },
    "statusInfo": {
      "description": "Status information (reason, comment). For 'Disabled' status only",
      "properties": {
        "comment": {
          "type": "string",
          "description": "A free-form user comment, describing the status change reason"
        },
        "reason": {
          "type": "string",
          "description": "Type of suspension",
          "enum": [
            "Voluntarily",
            "Involuntarily"
          ]
        }
      }
    },
    "type": {
      "type": "string",
      "description": "Extension type",
      "enum": [
        "User",
        "VirtualUser",
        "DigitalUser",
        "Department",
        "Announcement",
        "Voicemail",
        "SharedLinesGroup",
        "PagingOnlyGroup",
        "ParkLocation"
      ]
    },
    "hidden": {
      "type": "boolean",
      "description": "Hides extension from showing in company directory. Supported for extensions of User type only. For unassigned extensions the value is set to 'True' by default. For assigned extensions the value is set to 'False' by default"
    }
  }
}```

## List templates

HTTP GET /restapi/v1.0/account/{accountId}/templates

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates`);
```

- `accountId`'s default value is `~`

## Load template

HTTP GET /restapi/v1.0/account/{accountId}/templates/{templateId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates/${templateId}`);
```

- `accountId`'s default value is `~`

## List call queues

HTTP GET /restapi/v1.0/account/{accountId}/call-queues

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues`);
```

- `accountId`'s default value is `~`

## List call queue members

HTTP GET /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues/${groupId}/members`);
```

- `accountId`'s default value is `~`

## Assign call queue members

HTTP POST /restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-queues/${groupId}/bulk-assign`, callQueueBulkAssignResource);
```

- `accountId`'s default value is `~`

`callQueueBulkAssignResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "addedExtensionIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "removedExtensionIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}```

## List department members

HTTP GET /restapi/v1.0/account/{accountId}/department/{departmentId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/department/${departmentId}/members`);
```

- `accountId`'s default value is `~`

## Bulk assign departments

HTTP POST /restapi/v1.0/account/{accountId}/department/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/department/bulk-assign`, departmentBulkAssignResource);
```

- `accountId`'s default value is `~`

`departmentBulkAssignResource` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "properties": {
          "departmentId": {
            "type": "string"
          },
          "addedExtensionIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "removedExtensionIds": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}```

## List paging group users

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/users`);
```

- `accountId`'s default value is `~`

## List paging group devices

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/devices`);
```

- `accountId`'s default value is `~`

## Bulk assign paging group

HTTP POST /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/bulk-assign`, editPagingGroupRequest);
```

- `accountId`'s default value is `~`

`editPagingGroupRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "addedUserIds": {
      "type": "array",
      "description": "List of users that will be allowed to page a group specified",
      "items": {
        "type": "string"
      }
    },
    "removedUserIds": {
      "type": "array",
      "description": "List of users that will be unallowed to page a group specified",
      "items": {
        "type": "string"
      }
    },
    "addedDeviceIds": {
      "type": "array",
      "description": "List of account devices that will be assigned to a paging group specified",
      "items": {
        "type": "string"
      }
    },
    "removedDeviceIds": {
      "type": "array",
      "description": "List of account devices that will be unassigned from a paging group specified",
      "items": {
        "type": "string"
      }
    }
  }
}```

## Create call monitoring group

HTTP POST /restapi/v1.0/account/{accountId}/call-monitoring-groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-monitoring-groups`, createCallMonitoringGroupRequest);
```

- `accountId`'s default value is `~`

`createCallMonitoringGroupRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of a group"
    },
    "name": {
      "type": "string",
      "description": "Name of a group"
    }
  }
}```

## List call monitoring groups

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups`);
```

- `accountId`'s default value is `~`

## Update call monitoring group

HTTP PUT /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`, createCallMonitoringGroupRequest);
```

- `accountId`'s default value is `~`

`createCallMonitoringGroupRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Internal identifier of a group"
    },
    "name": {
      "type": "string",
      "description": "Name of a group"
    }
  }
}```

## Remove call monitoring group

HTTP DELETE /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`);
```

- `accountId`'s default value is `~`

## List call monitoring group members

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}/members`);
```

- `accountId`'s default value is `~`

## Update call monitoring groups

HTTP POST /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}/bulk-assign`, callMonitoringBulkAssign);
```

- `accountId`'s default value is `~`

`callMonitoringBulkAssign` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "addedExtensions": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": " Only the following extension types are allowed: User, DigitalUser, VirtualUser, FaxUser, Limited"
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "Monitoring",
                "Monitored"
              ]
            }
          }
        }
      }
    },
    "removedExtensions": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": " Only the following extension types are allowed: User, DigitalUser, VirtualUser, FaxUser, Limited"
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "Monitoring",
                "Monitored"
              ]
            }
          }
        }
      }
    },
    "updatedExtensions": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": " Only the following extension types are allowed: User, DigitalUser, VirtualUser, FaxUser, Limited"
          },
          "permissions": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "Monitoring",
                "Monitored"
              ]
            }
          }
        }
      }
    }
  }
}```

## Parse phone number

HTTP POST /restapi/v1.0/number-parser/parse

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/number-parser/parse', parsePhoneNumberRequest);
```


`parsePhoneNumberRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "originalStrings": {
      "type": "array",
      "description": "Phone numbers passed in a string. The maximum value of phone numbers is limited to 64. The maximum number of symbols in each phone number in a string is 64",
      "items": {
        "type": "string"
      }
    }
  }
}```

## Load account device

HTTP GET /restapi/v1.0/account/{accountId}/device/{deviceId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/device/${deviceId}`);
```

- `accountId`'s default value is `~`

## Update device

HTTP PUT /restapi/v1.0/account/{accountId}/device/{deviceId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/device/${deviceId}`, accountDeviceUpdate);
```

- `accountId`'s default value is `~`

`accountDeviceUpdate` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "emergencyServiceAddress": {
      "description": "Address for emergency cases. The same emergency address is assigned to all numbers of a single device",
      "properties": {
        "customerName": {
          "type": "string",
          "description": "Name of a customer"
        },
        "street": {
          "type": "string",
          "description": "Street address, line 1 - street address, P.O. box, company name, c/o"
        },
        "street2": {
          "type": "string",
          "description": "Street address, line 2 - apartment, suite, unit, building, floor, etc."
        },
        "city": {
          "type": "string",
          "description": "City name"
        },
        "zip": {
          "type": "string",
          "description": "Zip code"
        },
        "state": {
          "type": "string",
          "description": "State/province name"
        },
        "country": {
          "type": "string",
          "description": "Country name"
        }
      }
    },
    "extension": {
      "description": "Information on extension that the device is assigned to",
      "properties": {
        "id": {
          "type": "string",
          "description": "Internal identifier of an extension"
        }
      }
    },
    "phoneLines": {
      "description": "Information on phone lines added to a device",
      "properties": {
        "phoneLines": {
          "type": "array",
          "description": "Information on phone lines added to a device",
          "items": {
            "properties": {
              "id": {
                "type": "string",
                "description": "Internal identifier of a phone number"
              }
            }
          }
        }
      }
    },
    "useAsCommonPhone": {
      "type": "boolean",
      "description": "Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone."
    }
  }
}```

## List extension devices

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/device

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/device`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Check health

HTTP GET /scim/health

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/health');
```


## Check health2

HTTP GET /scim/v2/health

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/health');
```


## Get service provider config2

HTTP GET /scim/v2/ServiceProviderConfig

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/ServiceProviderConfig');
```


## Search via get2

HTTP GET /scim/v2/Users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/Users');
```


## Create user2

HTTP POST /scim/v2/Users

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/scim/v2/Users', user);
```


`user` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "emails",
    "name",
    "schemas",
    "userName"
  ],
  "properties": {
    "active": {
      "type": "boolean",
      "description": "user status",
      "default": false
    },
    "addresses": {
      "type": "array",
      "items": {
        "properties": {
          "country": {
            "type": "string"
          },
          "locality": {
            "type": "string"
          },
          "postalCode": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "streetAddress": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "work"
            ]
          }
        }
      }
    },
    "emails": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "work"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "externalId": {
      "type": "string",
      "description": "external unique resource id defined by provisioning client"
    },
    "id": {
      "type": "string",
      "description": "unique resource id defined by RingCentral"
    },
    "name": {
      "properties": {
        "familyName": {
          "type": "string"
        },
        "givenName": {
          "type": "string"
        }
      }
    },
    "phoneNumbers": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "work",
              "mobile",
              "other"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "photos": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "photo"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "schemas": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ]
      }
    },
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
      "properties": {
        "department": {
          "type": "string"
        }
      }
    },
    "userName": {
      "type": "string",
      "description": "MUST be same as work type email address"
    }
  }
}```

## Search via post2

HTTP POST /scim/v2/Users/.search

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/scim/v2/Users/.search', searchRequest);
```


`searchRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "page size"
    },
    "filter": {
      "type": "string",
      "description": "only support 'userName' or 'email' filter expressions for now"
    },
    "schemas": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "urn:ietf:params:scim:api:messages:2.0:SearchRequest"
        ]
      }
    },
    "startIndex": {
      "type": "integer",
      "format": "int32",
      "description": "start index (1-based)"
    }
  }
}```

## Get user2

HTTP GET /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/scim/v2/Users/${id}`);
```


## Replace user2

HTTP PUT /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/scim/v2/Users/${id}`, user);
```


`user` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "emails",
    "name",
    "schemas",
    "userName"
  ],
  "properties": {
    "active": {
      "type": "boolean",
      "description": "user status",
      "default": false
    },
    "addresses": {
      "type": "array",
      "items": {
        "properties": {
          "country": {
            "type": "string"
          },
          "locality": {
            "type": "string"
          },
          "postalCode": {
            "type": "string"
          },
          "region": {
            "type": "string"
          },
          "streetAddress": {
            "type": "string"
          },
          "type": {
            "type": "string",
            "enum": [
              "work"
            ]
          }
        }
      }
    },
    "emails": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "work"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "externalId": {
      "type": "string",
      "description": "external unique resource id defined by provisioning client"
    },
    "id": {
      "type": "string",
      "description": "unique resource id defined by RingCentral"
    },
    "name": {
      "properties": {
        "familyName": {
          "type": "string"
        },
        "givenName": {
          "type": "string"
        }
      }
    },
    "phoneNumbers": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "work",
              "mobile",
              "other"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "photos": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "photo"
            ]
          },
          "value": {
            "type": "string"
          }
        }
      }
    },
    "schemas": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ]
      }
    },
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
      "properties": {
        "department": {
          "type": "string"
        }
      }
    },
    "userName": {
      "type": "string",
      "description": "MUST be same as work type email address"
    }
  }
}```

## Delete user2

HTTP DELETE /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/scim/v2/Users/${id}`);
```


## Patch user2

HTTP PATCH /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/scim/v2/Users/${id}`, userPatch);
```


`userPatch` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "Operations",
    "schemas"
  ],
  "properties": {
    "Operations": {
      "type": "array",
      "description": "patch operations list",
      "items": {
        "properties": {
          "op": {
            "type": "string",
            "enum": [
              "add",
              "replace",
              "remove"
            ]
          },
          "path": {
            "type": "string"
          },
          "value": {
            "type": "string",
            "description": "corresponding 'value' of that field specified by 'path'"
          }
        }
      }
    },
    "schemas": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "urn:ietf:params:scim:api:messages:2.0:PatchOp"
        ]
      }
    }
  }
}```

## Get call session status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

## Delete call session

HTTP DELETE /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

## Hold call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/hold

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/hold`);
```

- `accountId`'s default value is `~`

## Unhold call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/unhold

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/unhold`);
```

- `accountId`'s default value is `~`

## Reject party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/reject

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/reject`);
```

- `accountId`'s default value is `~`

## Transfer call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/transfer

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/transfer`, transferTarget);
```

- `accountId`'s default value is `~`

`transferTarget` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "phoneNumber": {
      "description": "Phone number",
      "type": "string"
    },
    "voicemail": {
      "description": "VM owner's extension id",
      "type": "string"
    },
    "parkOrbit": {
      "description": "Park orbit id",
      "type": "string"
    }
  }
}```

## Forward call party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/forward

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/forward`, forwardTarget);
```

- `accountId`'s default value is `~`

`forwardTarget` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "phoneNumber": {
      "description": "Phone number",
      "type": "string"
    },
    "voicemail": {
      "description": "VM owner's extension id",
      "type": "string"
    }
  }
}```

## Call flip party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/flip

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/flip`, callPartyFlip);
```

- `accountId`'s default value is `~`

`callPartyFlip` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "callFlipId": {
      "description": "Call flip id",
      "type": "string"
    }
  }
}```

## Get call party status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`);
```

- `accountId`'s default value is `~`

## Update call party

HTTP PATCH /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`, partyUpdateRequest);
```

- `accountId`'s default value is `~`

`partyUpdateRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "party": {
      "description": "Party update data",
      "properties": {
        "muted": {
          "description": "True if the party is muted. False - otherwise",
          "type": "boolean"
        },
        "standAlone": {
          "description": "True if party is not connected to a session voice conference. False - otherwise",
          "type": "boolean"
        }
      }
    }
  }
}```

## Start call recording

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings`);
```

- `accountId`'s default value is `~`

## Pause resume call recording

HTTP PATCH /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings/{recordingId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings/${recordingId}`, callRecordingUpdate);
```

- `accountId`'s default value is `~`

`callRecordingUpdate` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "active": {
      "description": "Recording status",
      "type": "boolean"
    }
  }
}```

## Get compliance archive stream

HTTP GET /restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}/archive/${archiveId}`);
```


## Create data export task

HTTP POST /restapi/v1.0/glip/data-export

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/data-export', createDataExportTaskRequest);
```


`createDataExportTaskRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "dateFrom": {
      "type": "string",
      "description": "Starting time for data collection. The default value is current time minus 24 hours. If `dateTo` is not specified then its value is set to `dateFrom` plus 24 hours. The specified time range should not be greater than 7 days"
    },
    "dateTo": {
      "type": "string",
      "description": "Ending time for data collection. The default value is current time. If `dateFrom` is not specified then its value is set to `dateTo` minus 24 hours. The specified time range should not be greater than 7 days"
    },
    "userIds": {
      "type": "array",
      "description": "List of users which data is collected. The following data will be exported: posts, tasks, events, etc. posted by the user(s); posts addressing the user(s) via direct and @Mentions; tasks assigned to the listed user(s). The list of 30 users per request is supported.",
      "items": {
        "type": "string"
      }
    },
    "chatIds": {
      "type": "array",
      "description": "List of chats from which the data (posts, files, tasks, events, notes, etc.) will be collected",
      "items": {
        "type": "string"
      }
    }
  }
}```

## Load data export task

HTTP GET /restapi/v1.0/glip/data-export/{taskId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}`);
```


## Create message store report

HTTP POST /restapi/v1.0/account/{accountId}/message-store-report

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/message-store-report`, createMessageStoreReportRequest);
```

- `accountId`'s default value is `~`

`createMessageStoreReportRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "dateFrom": {
      "type": "string",
      "description": "Starting time for collecting messages. The default value equals to the current time minus 24 hours"
    },
    "dateTo": {
      "type": "string",
      "description": "Ending time for collecting messages. The default value is the current time"
    }
  }
}```

## Load message store report task

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}`);
```

- `accountId`'s default value is `~`

## Load message store report archive

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive`);
```

- `accountId`'s default value is `~`

## Load message store report archive content

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive/${archiveId}`);
```

- `accountId`'s default value is `~`

## List account meeting recordings

HTTP GET /restapi/v1.0/account/{accountId}/meeting-recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/meeting-recordings`);
```

- `accountId`'s default value is `~`

## List user meeting recordings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting-recordings`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

## Authorize

HTTP GET /restapi/oauth/authorize

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });

const r = await platform.get('/restapi/oauth/authorize', formData);
```


`body` is an object with the following properties:

```yaml
[
  {
    "name": "response_type",
    "required": true,
    "in": "formData",
    "type": "string",
    "enum": [
      "code",
      "token"
    ],
    "description": "Determines authorization flow: **code** - Authorization Code, **token** - Implicit Grant"
  },
  {
    "name": "redirect_uri",
    "required": true,
    "in": "formData",
    "type": "string",
    "description": "This is a callback URI which determines where the response is sent. The value of this parameter must exactly match one of the URIs you have provided for your app upon registration"
  },
  {
    "name": "client_id",
    "required": true,
    "in": "formData",
    "type": "string",
    "description": "Identifier (key) of a client application"
  },
  {
    "name": "state",
    "type": "string",
    "in": "formData",
    "description": "Client state. Returned back to the client at the end of the flow"
  },
  {
    "name": "brand_id",
    "type": "string",
    "in": "formData",
    "description": "Brand identifier. If it is not provided in request, server will try to determine brand from client app profile. The default value is '1210' - RingCentral US"
  },
  {
    "name": "display",
    "type": "string",
    "enum": [
      "page",
      "popup",
      "touch",
      "mobile"
    ],
    "in": "formData",
    "description": "Style of login form. The default value is 'page'. The 'popup' and 'touch' values are featured for mobile applications"
  },
  {
    "name": "prompt",
    "type": "string",
    "enum": [
      "login",
      "sso",
      "consent"
    ],
    "in": "formData",
    "description": "Specifies which login form will be displayed. Space-separated set of the following values: 'login' - official RingCentral login form, 'sso' - Single Sign-On login form, 'consent' - form to show the requested scope and prompt user for consent. Either 'login' or 'sso' (or both) must be specified. The default value is 'login&sso'"
  },
  {
    "name": "localeId",
    "type": "string",
    "in": "formData",
    "description": "Localization code of a language. Overwrites 'Accept-Language' header value"
  },
  {
    "name": "ui_locales",
    "type": "string",
    "in": "formData",
    "description": "Localization code of a language. Overwrites 'localeId' parameter value"
  },
  {
    "name": "ui_options",
    "type": "string",
    "in": "formData",
    "enum": [
      "hide_logo",
      "hide_tos",
      "hide_remember_me",
      "external_popup",
      "old_ui"
    ],
    "description": "User interface options data"
  }
]```

## Get token

HTTP POST /restapi/oauth/token

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });

const r = await platform.post('/restapi/oauth/token', formData);
```


`body` is an object with the following properties:

```yaml
[
  {
    "name": "username",
    "in": "formData",
    "description": "Phone number linked to an account or extension in E.164 format with or without leading '+' sign",
    "required": false,
    "type": "string"
  },
  {
    "name": "password",
    "in": "formData",
    "description": "User's password",
    "required": false,
    "type": "string",
    "format": "password"
  },
  {
    "name": "extension",
    "in": "formData",
    "description": "Optional. Extension short number. If company number is specified as a username, and extension is not specified, the server will attempt to authenticate client as main company administrator",
    "required": false,
    "type": "string"
  },
  {
    "name": "grant_type",
    "in": "formData",
    "description": "Grant type",
    "required": false,
    "type": "string",
    "enum": [
      "authorization_code",
      "password",
      "refresh_token",
      "client_credentials"
    ],
    "default": "password"
  },
  {
    "name": "access_token_ttl",
    "in": "formData",
    "description": "Access token lifetime in seconds",
    "required": false,
    "type": "integer",
    "format": "int64",
    "minimum": 600,
    "maximum": 3600,
    "default": 3600
  },
  {
    "name": "refresh_token_ttl",
    "in": "formData",
    "description": "Refresh token lifetime in seconds",
    "required": false,
    "type": "integer",
    "format": "int64",
    "default": 604800,
    "maximum": 604800
  },
  {
    "name": "scope",
    "in": "formData",
    "description": "List of API permissions to be used with access token. Can be omitted when requesting all permissions defined during the application registration phase",
    "required": false,
    "type": "string"
  },
  {
    "name": "refresh_token",
    "in": "formData",
    "description": "Previously issued refresh token. This is the only formData field used for the Refresh Token Flow.",
    "required": false,
    "type": "string"
  },
  {
    "name": "endpoint_id",
    "in": "formData",
    "required": false,
    "type": "string",
    "description": "The unique identifier of a client application. If not specified, the previously specified or auto generated value is used by default"
  },
  {
    "name": "code",
    "in": "formData",
    "required": false,
    "type": "string",
    "description": "The authorization code that the client previously received from the authorization server"
  },
  {
    "name": "redirect_uri",
    "in": "formData",
    "required": false,
    "type": "string",
    "description": "The redirect URI in the token request must be an exact match of the redirect URI that was used when generating the authorization code"
  }
]```

## Revoke token

HTTP POST /restapi/oauth/revoke

```js
const SDK = require('ringcentral');

const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });

const r = await platform.post('/restapi/oauth/revoke', formData);
```


`body` is an object with the following properties:

```yaml
[
  {
    "name": "token",
    "in": "formData",
    "description": "Active access or refresh token to be revoked",
    "required": true,
    "type": "string"
  }
]```