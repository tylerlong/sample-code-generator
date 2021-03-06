# RingCentral JavaScript SDK Code Samples

## Get API Versions

HTTP GET `/restapi`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetVersionsResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersions) in API Explorer.

## Get Account Info

HTTP GET `/restapi/v1.0/account/{accountId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetAccountInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountInfo) in API Explorer.

## Get Company Active Calls

HTTP GET `/restapi/v1.0/account/{accountId}/active-calls`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/active-calls`, listCompanyActiveCallsParameters);
```

- `accountId`'s default value is `~`

`listCompanyActiveCallsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "direction": {
      "in": "query",
      "description": "The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      }
    },
    "view": {
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "in": "query",
      "default": "Simple",
      "required": false,
      "type": "string",
      "enum": [
        "Simple",
        "Detailed"
      ]
    },
    "type": {
      "in": "query",
      "description": "Call type of a record. If not specified, all call types are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Voice",
          "Fax"
        ]
      }
    },
    "transport": {
      "in": "query",
      "description": "Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "PSTN",
          "VoIP"
        ]
      }
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "required": false,
      "default": 1,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ActiveCallsResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCompanyActiveCalls) in API Explorer.

## Create Company Call Handling Rule

HTTP POST `/restapi/v1.0/account/{accountId}/answering-rule`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyAnsweringRule) in API Explorer.

## Get Company Call Handling Rule List

HTTP GET `/restapi/v1.0/account/{accountId}/answering-rule`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCompanyAnsweringRules) in API Explorer.

## Get Company Call Handling Rule

HTTP GET `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCompanyAnsweringRule) in API Explorer.

## Update Company Call Handling Rule

HTTP PUT `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCompanyAnsweringRule) in API Explorer.

## Delete Company Call Handling Rule

HTTP DELETE `/restapi/v1.0/account/{accountId}/answering-rule/{ruleId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCompanyAnsweringRule) in API Explorer.

## Get Account Business Address

HTTP GET `/restapi/v1.0/account/{accountId}/business-address`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-address`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AccountBusinessAddressResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAccountBusinessAddress) in API Explorer.

## Update Company Business Address

HTTP PUT `/restapi/v1.0/account/{accountId}/business-address`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AccountBusinessAddressResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Company-updateAccountBusinessAddress) in API Explorer.

## Get Company Business Hours

HTTP GET `/restapi/v1.0/account/{accountId}/business-hours`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-hours`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyBusinessHours.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readCompanyBusinessHours) in API Explorer.

## Update Company Business Hours

HTTP PUT `/restapi/v1.0/account/{accountId}/business-hours`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyBusinessHours.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateCompanyBusinessHours) in API Explorer.

## Get Company Call Log Records

HTTP GET `/restapi/v1.0/account/{accountId}/call-log`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log`, readCompanyCallLogParameters);
```

- `accountId`'s default value is `~`

`readCompanyCallLogParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "extensionNumber": {
      "in": "query",
      "description": "Extension number of a user. If specified, returns call log for a particular extension only",
      "required": false,
      "type": "string"
    },
    "phoneNumber": {
      "in": "query",
      "description": "Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the phone number specified. Cannot be specified together with the extensionNumber filter",
      "required": false,
      "type": "string"
    },
    "direction": {
      "in": "query",
      "description": "The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      }
    },
    "type": {
      "in": "query",
      "description": "Call type of a record. If not specified, all call types are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Voice",
          "Fax"
        ]
      }
    },
    "view": {
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "in": "query",
      "default": "Simple",
      "required": false,
      "type": "string",
      "enum": [
        "Simple",
        "Detailed"
      ]
    },
    "withRecording": {
      "in": "query",
      "description": "**Deprecated**. Supported for compatibility reasons only. `true` if only recorded calls are returned. The default value is `false`. If both `withRecording` and `recordingType` are specified, `withRecording` is ignored",
      "required": false,
      "type": "boolean"
    },
    "recordingType": {
      "in": "query",
      "description": "Type of a call recording. If not specified, then calls without recordings are also returned",
      "type": "string",
      "enum": [
        "Automatic",
        "OnDemand",
        "All"
      ]
    },
    "dateFrom": {
      "in": "query",
      "description": "The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "dateTo": {
      "in": "query",
      "description": "The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "sessionId": {
      "description": "Internal identifier of a session",
      "in": "query",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AccountCallLogResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallLog) in API Explorer.

## Get Company Call Log Record(s)

HTTP GET `/restapi/v1.0/account/{accountId}/call-log/{callRecordId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyCallLogRecord.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCompanyCallRecord) in API Explorer.

## Create Call Monitoring Group

HTTP POST `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroup.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-createCallMonitoringGroup) in API Explorer.

## Get Call Monitoring Groups List

HTTP GET `/restapi/v1.0/account/{accountId}/call-monitoring-groups`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups`, listCallMonitoringGroupsParameters);
```

- `accountId`'s default value is `~`

`listCallMonitoringGroupsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": "1",
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "required": false,
      "default": "100",
      "type": "integer"
    },
    "memberExtensionId": {
      "in": "query",
      "description": "Internal identifier of an extension that is a member of every group within the result",
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroups.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-listCallMonitoringGroups) in API Explorer.

## Updates Call Monitoring Group

HTTP PUT `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroup.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-updateCallMonitoringGroup) in API Explorer.

## Delete Call Monitoring Group

HTTP DELETE `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-deleteCallMonitoringGroup) in API Explorer.

## Update Call Monitoring Group List

HTTP POST `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/bulk-assign`

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
    "updatedExtensions": {
      "type": "array",
      "items": {
        "properties": {
          "id": {
            "type": "string",
            "description": "Only the following extension types are allowed: User, DigitalUser, VirtualUser, FaxUser, Limited"
          },
          "permissions": {
            "description": "Set of call monitoring group permissions granted to the specified extension. In order to remove the specified extension from a call monitoring group use an empty value",
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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-updateCallMonitoringGroupList) in API Explorer.

## Get Call Monitoring Group Member List

HTTP GET `/restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}/members`, listCallMonitoringGroupMembersParameters);
```

- `accountId`'s default value is `~`

`listCallMonitoringGroupMembersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroupMemberList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-listCallMonitoringGroupMembers) in API Explorer.

## Get Call Queues

HTTP GET `/restapi/v1.0/account/{accountId}/call-queues`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues`, listCallQueuesParameters);
```

- `accountId`'s default value is `~`

`listCallQueuesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "memberExtensionId": {
      "in": "query",
      "description": "Internal identifier of an extension that is a member of every group within the result",
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallQueues.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueues) in API Explorer.

## Assign Multiple Call Queue Members

HTTP POST `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/bulk-assign`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleCallQueueMembers) in API Explorer.

## Get Call Queue Members

HTTP GET `/restapi/v1.0/account/{accountId}/call-queues/{groupId}/members`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-queues/${groupId}/members`, listCallQueueMembersParameters);
```

- `accountId`'s default value is `~`

`listCallQueueMembersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallQueueMembers.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listCallQueueMembers) in API Explorer.

## Get Call Recording Settings

HTTP GET `/restapi/v1.0/account/{accountId}/call-recording`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingSettingsResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCallRecordingSettings) in API Explorer.

## Update Call Recording Settings

HTTP PUT `/restapi/v1.0/account/{accountId}/call-recording`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingSettingsResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingSettings) in API Explorer.

## Update Call Recording Extension List

HTTP POST `/restapi/v1.0/account/{accountId}/call-recording/bulk-assign`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateCallRecordingExtensionList) in API Explorer.

## Get Call Recording Custom Greeting List

HTTP GET `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`, listCallRecordingCustomGreetingsParameters);
```

- `accountId`'s default value is `~`

`listCallRecordingCustomGreetingsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "query",
      "required": false,
      "type": "string",
      "enum": [
        "StartRecording",
        "StopRecording",
        "AutomaticRecording"
      ]
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingCustomGreetings.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingCustomGreetings) in API Explorer.

## Delete Call Recording Custom Greeting List

HTTP DELETE `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCallRecordingCustomGreetingList) in API Explorer.

## Delete Call Recording Custom Greeting

HTTP DELETE `/restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings/${greetingId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteCallRecordingCustomGreeting) in API Explorer.

## Get Call Recording Extension List

HTTP GET `/restapi/v1.0/account/{accountId}/call-recording/extensions`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/extensions`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingExtensions.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listCallRecordingExtensions) in API Explorer.

## Assign Multiple Department Members

HTTP POST `/restapi/v1.0/account/{accountId}/department/bulk-assign`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-assignMultipleDepartmentMembers) in API Explorer.

## Get Department Member List

HTTP GET `/restapi/v1.0/account/{accountId}/department/{departmentId}/members`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/department/${departmentId}/members`, listDepartmentMembersParameters);
```

- `accountId`'s default value is `~`

`listDepartmentMembersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DepartmentMemberList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Queues-listDepartmentMembers) in API Explorer.

## Get Device

HTTP GET `/restapi/v1.0/account/{accountId}/device/{deviceId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/device/${deviceId}`, readDeviceParameters);
```

- `accountId`'s default value is `~`

`readDeviceParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "syncEmergencyAddress": {
      "in": "query",
      "description": "Specifies if emergency address should be synchronized or not",
      "type": "boolean",
      "default": false
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetDeviceInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-readDevice) in API Explorer.

## Update Device

HTTP PUT `/restapi/v1.0/account/{accountId}/device/{deviceId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DeviceResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-updateDevice) in API Explorer.

## Get Company Directory Entries

HTTP GET `/restapi/v1.0/account/{accountId}/directory/entries`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/entries`, listDirectoryEntriesParameters);
```

- `accountId`'s default value is `~`

`listDirectoryEntriesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "showFederated": {
      "in": "query",
      "description": "If 'True' then contacts of all accounts in federation are returned. If 'False' then only contacts of the current account are returned, and account section is eliminated in this case",
      "required": false,
      "type": "string",
      "default": true
    },
    "type": {
      "in": "query",
      "description": "Type of an extension",
      "required": false,
      "type": "string",
      "enum": [
        "User",
        "Department",
        "Announcement",
        "Voicemail",
        "SharedLinesGroup",
        "PagingOnly",
        "IvrMenu",
        "ParkLocation",
        "Limited"
      ]
    },
    "page": {
      "in": "query",
      "description": "Page number",
      "required": false,
      "type": "string",
      "default": "1"
    },
    "perPage": {
      "in": "query",
      "description": "Records count to be returned per one page. The default value is 1000. Specific keyword values: `all` - all records are returned in one page; `max` - maximum count of records that can be returned in one page",
      "maximum": 2000,
      "default": 1000,
      "required": false,
      "type": "string"
    },
    "siteId": {
      "in": "query",
      "description": "Internal identifier of the business site to which extensions belong",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DirectoryResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-listDirectoryEntries) in API Explorer.

## Search Company Directory Entries

HTTP POST `/restapi/v1.0/account/{accountId}/directory/entries/search`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DirectoryResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-searchDirectoryEntries) in API Explorer.

## Get Corporate Directory Entry

HTTP GET `/restapi/v1.0/account/{accountId}/directory/entries/{entryId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/entries/${entryId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ContactResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readDirectoryEntry) in API Explorer.

## Get Account Federation

HTTP GET `/restapi/v1.0/account/{accountId}/directory/federation`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/federation`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/FederationResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Internal-Contacts-readAccountFederation) in API Explorer.

## Get Extension List

HTTP GET `/restapi/v1.0/account/{accountId}/extension`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension`, listExtensionsParameters);
```

- `accountId`'s default value is `~`

`listExtensionsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "extensionId": {
      "type": "string",
      "in": "query",
      "description": "Extension number to retrieve",
      "required": false
    },
    "email": {
      "type": "string",
      "in": "query",
      "description": "Extension email address",
      "required": false
    },
    "page": {
      "type": "integer",
      "format": "int64",
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": 1,
      "required": false
    },
    "perPage": {
      "type": "integer",
      "format": "int64",
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false
    },
    "status": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Enabled",
          "Disabled",
          "NotActivated",
          "Unassigned"
        ]
      },
      "collectionFormat": "multi",
      "allowEmptyValue": true,
      "in": "query",
      "description": "Extension current state. Multiple values are supported. If 'Unassigned' is specified, then extensions without extensionNumber are returned. If not specified, then all extensions are returned.",
      "required": false
    },
    "type": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "User",
          "FaxUser",
          "VirtualUser",
          "DigitalUser",
          "Department",
          "Announcement",
          "Voicemail",
          "SharedLinesGroup",
          "PagingOnly",
          "IvrMenu",
          "ApplicationExtension",
          "ParkLocation",
          "Limited",
          "Bot"
        ]
      },
      "collectionFormat": "multi",
      "allowEmptyValue": true,
      "in": "query",
      "description": "Extension type. Multiple values are supported",
      "required": false
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listExtensions) in API Explorer.

## Create Extension

HTTP POST `/restapi/v1.0/account/{accountId}/extension`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCreationResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-createExtension) in API Explorer.

## Get Extension

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtension) in API Explorer.

## Update Extension

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

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
      "type": "array",
      "items": {
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
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtension) in API Explorer.

## Delete Extension

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-deleteExtension) in API Explorer.

## Get User Active Calls

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/active-calls`, listExtensionActiveCallsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listExtensionActiveCallsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "direction": {
      "in": "query",
      "description": "The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      }
    },
    "view": {
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "in": "query",
      "default": "Simple",
      "required": false,
      "type": "string",
      "enum": [
        "Simple",
        "Detailed"
      ]
    },
    "type": {
      "in": "query",
      "description": "Call type of a record. If not specified, all call types are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Voice",
          "Fax"
        ]
      }
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ActiveCallsResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listExtensionActiveCalls) in API Explorer.

## Address Book Synchronization

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book-sync`, syncAddressBookParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`syncAddressBookParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "syncType": {
      "in": "query",
      "description": "Type of synchronization",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "FSync",
          "ISync"
        ]
      },
      "collectionFormat": "multi"
    },
    "syncToken": {
      "in": "query",
      "description": "Value of syncToken property of the last sync request response",
      "required": false,
      "type": "string"
    },
    "perPage": {
      "in": "query",
      "description": "Number of records per page to be returned. The max number of records is 250, which is also the default. For 'FSync' if the number of records exceeds the parameter value (either specified or default), all of the pages can be retrieved in several requests. For 'ISync' if the number of records exceeds the page size, the number of incoming changes to this number is limited",
      "required": false,
      "type": "integer"
    },
    "pageId": {
      "in": "query",
      "description": "Internal identifier of a page. It can be obtained from the 'nextPageId' parameter passed in response body",
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AddressBookSync.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-syncAddressBook) in API Explorer.

## Get Contact List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`, listContactsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listContactsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "startsWith": {
      "in": "query",
      "description": "If specified, only contacts whose First name or Last name start with the mentioned substring are returned. Case-insensitive",
      "required": false,
      "type": "string"
    },
    "sortBy": {
      "in": "query",
      "description": "Sorts results by the specified property",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "FirstName",
          "LastName",
          "Company"
        ]
      },
      "collectionFormat": "multi"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "phoneNumber": {
      "in": "query",
      "required": false,
      "type": "array",
      "items": {
        "type": "string"
      },
      "collectionFormat": "multi"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ContactList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listContacts) in API Explorer.

## Create Contact

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`, personalContactRequest, createContactParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "First name of the contact",
      "example": "Charlie"
    },
    "lastName": {
      "type": "string",
      "description": "Last name of the contact",
      "example": "Williams"
    },
    "middleName": {
      "type": "string",
      "description": "Middle name of the contact",
      "example": "J"
    },
    "nickName": {
      "type": "string",
      "description": "Nick name of the contact",
      "example": "The Boss"
    },
    "company": {
      "type": "string",
      "description": "Company name of the contact",
      "example": "Example, Inc."
    },
    "jobTitle": {
      "type": "string",
      "description": "Job title of the contact",
      "example": "CEO"
    },
    "email": {
      "type": "string",
      "description": "Email of the contact",
      "example": "charlie.williams@example.com"
    },
    "email2": {
      "type": "string",
      "description": "2nd email of the contact",
      "example": "charlie-example@gmail.com"
    },
    "email3": {
      "type": "string",
      "description": "3rd email of the contact",
      "example": "theboss-example@hotmail.com"
    },
    "birthday": {
      "type": "string",
      "format": "date-time",
      "description": "Date of birth of the contact"
    },
    "webPage": {
      "type": "string",
      "description": "The contact home page URL",
      "example": "http://www.example.com"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the contact",
      "example": "#1 Customer"
    },
    "homePhone": {
      "type": "string",
      "description": "Home phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "homePhone2": {
      "type": "string",
      "description": "2nd home phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessPhone": {
      "type": "string",
      "description": "Business phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessPhone2": {
      "type": "string",
      "description": "2nd business phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "mobilePhone": {
      "type": "string",
      "description": "Mobile phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessFax": {
      "type": "string",
      "description": "Business fax number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "companyPhone": {
      "type": "string",
      "description": "Company number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "assistantPhone": {
      "type": "string",
      "description": "Phone number of the contact assistant in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "carPhone": {
      "type": "string",
      "description": "Car phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "otherPhone": {
      "type": "string",
      "description": "Other phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "otherFax": {
      "type": "string",
      "description": "Other fax number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "callbackPhone": {
      "type": "string",
      "description": "Callback phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "homeAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    },
    "businessAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    },
    "otherAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    }
  }
}
```

`createContactParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "dialingPlan": {
      "in": "query",
      "description": "A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-createContact) in API Explorer.

## Get Contact

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-readContact) in API Explorer.

## Update Contact

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`, personalContactRequest, updateContactParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`personalContactRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string",
      "description": "First name of the contact",
      "example": "Charlie"
    },
    "lastName": {
      "type": "string",
      "description": "Last name of the contact",
      "example": "Williams"
    },
    "middleName": {
      "type": "string",
      "description": "Middle name of the contact",
      "example": "J"
    },
    "nickName": {
      "type": "string",
      "description": "Nick name of the contact",
      "example": "The Boss"
    },
    "company": {
      "type": "string",
      "description": "Company name of the contact",
      "example": "Example, Inc."
    },
    "jobTitle": {
      "type": "string",
      "description": "Job title of the contact",
      "example": "CEO"
    },
    "email": {
      "type": "string",
      "description": "Email of the contact",
      "example": "charlie.williams@example.com"
    },
    "email2": {
      "type": "string",
      "description": "2nd email of the contact",
      "example": "charlie-example@gmail.com"
    },
    "email3": {
      "type": "string",
      "description": "3rd email of the contact",
      "example": "theboss-example@hotmail.com"
    },
    "birthday": {
      "type": "string",
      "format": "date-time",
      "description": "Date of birth of the contact"
    },
    "webPage": {
      "type": "string",
      "description": "The contact home page URL",
      "example": "http://www.example.com"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the contact",
      "example": "#1 Customer"
    },
    "homePhone": {
      "type": "string",
      "description": "Home phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "homePhone2": {
      "type": "string",
      "description": "2nd home phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessPhone": {
      "type": "string",
      "description": "Business phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessPhone2": {
      "type": "string",
      "description": "2nd business phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "mobilePhone": {
      "type": "string",
      "description": "Mobile phone of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "businessFax": {
      "type": "string",
      "description": "Business fax number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "companyPhone": {
      "type": "string",
      "description": "Company number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "assistantPhone": {
      "type": "string",
      "description": "Phone number of the contact assistant in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "carPhone": {
      "type": "string",
      "description": "Car phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "otherPhone": {
      "type": "string",
      "description": "Other phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "otherFax": {
      "type": "string",
      "description": "Other fax number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "callbackPhone": {
      "type": "string",
      "description": "Callback phone number of the contact in e.164 (with \"+\") format",
      "example": "+15551234567"
    },
    "homeAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    },
    "businessAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    },
    "otherAddress": {
      "properties": {
        "street": {
          "type": "string",
          "description": "Street address",
          "example": "20 Davis Dr."
        },
        "city": {
          "type": "string",
          "description": "City name",
          "example": "Belmont"
        },
        "state": {
          "type": "string",
          "description": "State/province name",
          "example": "CA"
        },
        "zip": {
          "type": "string",
          "description": "Zip/Postal code",
          "example": "94002"
        }
      }
    }
  }
}
```

`updateContactParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "dialingPlan": {
      "in": "query",
      "description": "A country code value complying with the [ISO 3166-1 alpha-2](https://ru.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. The default value is home country of the current extension",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateContact) in API Explorer.

## Delete Contact

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-deleteContact) in API Explorer.

## Get Call Handling Rules

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule`, listAnsweringRulesParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listAnsweringRulesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "view": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "Simple"
    },
    "enabledOnly": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "false"
    },
    "page": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "1"
    },
    "perPage": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "100"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserAnsweringRuleList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listAnsweringRules) in API Explorer.

## Create Call Handling Rule

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createAnsweringRule) in API Explorer.

## Get Call Handling Rule

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`, readAnsweringRuleParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readAnsweringRuleParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "showInactiveNumbers": {
      "in": "query",
      "description": "Indicates whether inactive numbers should be returned or not",
      "default": false,
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readAnsweringRule) in API Explorer.

## Update Call Handling Rule

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-updateAnsweringRule) in API Explorer.

## Delete Call Handling Rule

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-deleteAnsweringRule) in API Explorer.

## Get Authorization Profile

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AuthProfileResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-readAuthorizationProfile) in API Explorer.

## Check User Permission

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/authz-profile/check`, checkUserPermissionParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`checkUserPermissionParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "permissionId": {
      "in": "query",
      "required": false,
      "type": "string"
    },
    "targetExtensionId": {
      "in": "query",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AuthProfileCheckResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Permissions-checkUserPermission) in API Explorer.

## Get User Business Hours

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/business-hours`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetUserBusinessHoursResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-readUserBusinessHours) in API Explorer.

## Update User Business Hours

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/business-hours`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserBusinessHoursUpdateResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Business-Hours-updateUserBusinessHours) in API Explorer.

## Get User Call Log Records

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`, readUserCallLogParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readUserCallLogParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "extensionNumber": {
      "in": "query",
      "description": "Extension number of a user. If specified, returns call log for a particular extension only",
      "required": false,
      "type": "string"
    },
    "showBlocked": {
      "in": "query",
      "description": "If 'True' then calls from/to blocked numbers are returned",
      "default": true,
      "required": false,
      "type": "boolean"
    },
    "phoneNumber": {
      "in": "query",
      "description": "Phone number of a caller/callee. If specified, returns all calls (both incoming and outcoming) with the phone number specified",
      "required": false,
      "type": "string"
    },
    "direction": {
      "in": "query",
      "description": "The direction for the resulting records. If not specified, both inbound and outbound records are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      }
    },
    "sessionId": {
      "in": "query",
      "description": "Internal identifier of a session",
      "required": false,
      "type": "string"
    },
    "type": {
      "in": "query",
      "description": "Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Voice",
          "Fax"
        ]
      }
    },
    "transport": {
      "in": "query",
      "description": "Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "PSTN",
          "VoIP"
        ]
      }
    },
    "view": {
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "in": "query",
      "default": "Simple",
      "required": false,
      "type": "string",
      "enum": [
        "Simple",
        "Detailed"
      ]
    },
    "withRecording": {
      "in": "query",
      "description": "**Deprecated**. Supported for compatibility reasons. `True` if only recorded calls are returned. If both `withRecording` and `recordingType` are specified, then `withRecording` is ignored",
      "default": false,
      "required": false,
      "type": "boolean"
    },
    "recordingType": {
      "in": "query",
      "description": "Type of a call recording. If not specified, then calls without recordings are also returned",
      "type": "string",
      "enum": [
        "Automatic",
        "OnDemand",
        "All"
      ]
    },
    "dateTo": {
      "in": "query",
      "description": "The end datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "dateFrom": {
      "in": "query",
      "description": "The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "showDeleted": {
      "in": "query",
      "description": "If 'True' then deleted calls are returned",
      "default": false,
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserCallLogResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallLog) in API Explorer.

## Delete User Call Log

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`, deleteUserCallLogParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`deleteUserCallLogParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "dateTo": {
      "in": "query",
      "description": "The end datetime for records deletion in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "phoneNumber": {
      "in": "query",
      "required": false,
      "type": "string"
    },
    "extensionNumber": {
      "in": "query",
      "required": false,
      "type": "string"
    },
    "type": {
      "in": "query",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Voice",
          "Fax"
        ]
      }
    },
    "direction": {
      "in": "query",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      }
    },
    "dateFrom": {
      "in": "query",
      "format": "date-time",
      "required": false,
      "type": "string"
    }
  }
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-deleteUserCallLog) in API Explorer.

## Sync User Call Log

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log-sync`, syncUserCallLogParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`syncUserCallLogParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "syncType": {
      "in": "query",
      "description": "Type of synchronization",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "FSync",
          "ISync"
        ]
      }
    },
    "syncToken": {
      "in": "query",
      "description": "Value of syncToken property of last sync request response",
      "required": false,
      "type": "string"
    },
    "dateFrom": {
      "in": "query",
      "description": "The start datetime for resulting records in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "recordCount": {
      "in": "query",
      "description": "For 'FSync' the parameter is mandatory, it limits the number of records to be returned in response. For 'ISync' it specifies with how many records to extend sync Frame to the past, the maximum number of records is 250",
      "required": false,
      "type": "integer"
    },
    "statusGroup": {
      "in": "query",
      "description": "Type of calls to be returned. The default value is 'All'",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Missed",
          "All"
        ]
      }
    },
    "view": {
      "in": "query",
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "required": false,
      "type": "string",
      "default": "Simple",
      "enum": [
        "Simple",
        "Detailed"
      ]
    },
    "showDeleted": {
      "in": "query",
      "description": "Supproted for ISync. If 'True' then deleted call records are returned",
      "default": false,
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallLogSync.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-syncUserCallLog) in API Explorer.

## Get User Call Record

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log/${callRecordId}`, readUserCallRecordParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readUserCallRecordParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "view": {
      "description": "View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync",
      "in": "query",
      "required": false,
      "type": "string",
      "default": "Simple",
      "enum": [
        "Simple",
        "Detailed"
      ]
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserCallLogRecord.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readUserCallRecord) in API Explorer.

## Get Caller Blocking Settings

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallerBlockingSettings.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readCallerBlockingSettings) in API Explorer.

## Update Caller Blocking Settings

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallerBlockingSettings.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateCallerBlockingSettings) in API Explorer.

## Get Blocked/Allowed Phone Numbers

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`, listBlockedAllowedNumbersParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listBlockedAllowedNumbersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "required": false,
      "type": "integer"
    },
    "status": {
      "in": "query",
      "required": false,
      "type": "string",
      "enum": [
        "Blocked",
        "Allowed"
      ]
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumbersList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-listBlockedAllowedNumbers) in API Explorer.

## Add Blocked/Allowed Number

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-createBlockedAllowedNumber) in API Explorer.

## Get Blocked/Allowed Number

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-readBlockedAllowedNumber) in API Explorer.

## Delete Blocked/Allowed Number

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers/${blockedNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-deleteBlockedAllowedNumber) in API Explorer.

## Update Blocked/Allowed Number

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers/{blockedNumberId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Blocking-updateBlockedAllowedNumber) in API Explorer.

## Get Extension Caller ID

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-id`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCallerIdInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readExtensionCallerId) in API Explorer.

## Update Extension Caller ID

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-id`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCallerIdInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateExtensionCallerId) in API Explorer.

## Create Internal Text Message

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/company-pager`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Pager-Messages-createInternalTextMessage) in API Explorer.

## Get User Conferencing Settings

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`, readConferencingSettingsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readConferencingSettingsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "countryId": {
      "in": "query",
      "description": "Internal identifier of a country. If not specified, the response is returned for the brand country",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetConferencingInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readConferencingSettings) in API Explorer.

## Update User Conferencing Settings

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetConferencingInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateConferencingSettings) in API Explorer.

## Get Extension Device List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/device`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/device`, listExtensionDevicesParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listExtensionDevicesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "linePooling": {
      "in": "query",
      "type": "string",
      "description": "Pooling type of a device",
      "required": false,
      "enum": [
        "Host",
        "Guest",
        "None"
      ]
    },
    "feature": {
      "in": "query",
      "type": "string",
      "description": "Device feature or multiple features supported",
      "required": false,
      "enum": [
        "Intercom",
        "Paging",
        "BLA"
      ]
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionDevicesResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Devices-listExtensionDevices) in API Explorer.

## Get Favorite Contact List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/favorite`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-listFavoriteContacts) in API Explorer.

## Update Favorite Contact List

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/favorite`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#External-Contacts-updateFavoriteContactList) in API Explorer.

## Create Fax Message

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/fax`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/fax`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
  "properties": {
    "faxResolution": {
      "in": "formData",
      "description": "Resolution of Fax",
      "required": false,
      "type": "string",
      "enum": [
        "High",
        "Low"
      ]
    },
    "to": {
      "in": "formData",
      "description": "To Phone Number",
      "required": true,
      "type": "array",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Phone number in E.164 format"
          }
        }
      }
    },
    "sendTime": {
      "in": "formData",
      "description": "Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "isoCode": {
      "in": "formData",
      "description": "ISO Code. e.g UK",
      "type": "string"
    },
    "coverIndex": {
      "in": "formData",
      "description": "Cover page identifier. For the list of available cover page identifiers please call the method Fax Cover Pages. If not specified, the default cover page which is configured in 'Outbound Fax Settings' is attached",
      "type": "integer"
    },
    "coverPageText": {
      "in": "formData",
      "description": "Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols",
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/FaxResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-createFaxMessage) in API Explorer.

## Get Forwarding Number List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`, listForwardingNumbersParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listForwardingNumbersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted.",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items).",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionForwardingNumberListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-listForwardingNumbers) in API Explorer.

## Create Forwarding Number

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-createForwardingNumber) in API Explorer.

## Get Forwarding Number

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-readForwardingNumber) in API Explorer.

## Update Forwarding Number

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-updateForwardingNumber) in API Explorer.

## Delete Forwarding Number

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number/{forwardingNumberId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number/${forwardingNumberId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Forwarding-deleteForwardingNumber) in API Explorer.

## Get Extension Grant List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/grant`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/grant`, listExtensionGrantsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listExtensionGrantsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "1"
    },
    "perPage": {
      "in": "query",
      "required": false,
      "type": "string",
      "default": "100"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionGrantListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-listExtensionGrants) in API Explorer.

## Create Custom User Greeting

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('binary', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "formData",
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
      ],
      "required": true
    },
    "answeringRule": {
      "in": "formData",
      "properties": {
        "id": {
          "type": "string"
        }
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CustomUserGreetingInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCustomUserGreeting) in API Explorer.

## Get Custom Greeting

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting/{greetingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting/${greetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CustomUserGreetingInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readCustomGreeting) in API Explorer.

## Get Scheduled Meetings

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MeetingsResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Mgmt.-listMeetings) in API Explorer.

## Create Meetings

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting`

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
    "usePersonalMeetingId": {
      "type": "boolean"
    },
    "audioOptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MeetingResponseResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Mgmt.-createMeeting) in API Explorer.

## Get Meeting Service Info

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/service-info`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/service-info`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MeetingServiceInfoResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-Config-readMeetingServiceInfo) in API Explorer.

## Get Meeting Info

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MeetingResponseResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Mgmt.-readMeeting) in API Explorer.

## Update Meeting

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

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
    "usePersonalMeetingId": {
      "type": "boolean"
    },
    "audioOptions": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MeetingResponseResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Mgmt.-updateMeeting) in API Explorer.

## Delete Meeting

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Mgmt.-deleteMeeting) in API Explorer.

## End Meeting

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting/${meetingId}/end`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Meeting-Control-endMeeting) in API Explorer.

## Get Assistants

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meetings-configuration/assistants`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AssistantsResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-Config-readAssistants) in API Explorer.

## Get Assisted Users

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assisted`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meetings-configuration/assisted`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AssistedUsersResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Meetings-Config-readAssistedUsers) in API Explorer.

## Get Message List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`, listMessagesParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listMessagesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "availability": {
      "in": "query",
      "description": "Specifies the availability status for the resulting messages. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Alive",
          "Deleted",
          "Purged"
        ]
      },
      "collectionFormat": "multi"
    },
    "conversationId": {
      "in": "query",
      "description": "Specifies the conversation identifier for the resulting messages",
      "required": false,
      "type": "integer"
    },
    "dateFrom": {
      "in": "query",
      "description": "The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "dateTo": {
      "in": "query",
      "description": "The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "direction": {
      "in": "query",
      "description": "The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      },
      "collectionFormat": "multi"
    },
    "distinctConversations": {
      "in": "query",
      "description": "If 'True', then the latest messages per every conversation ID are returned",
      "required": false,
      "type": "boolean"
    },
    "messageType": {
      "in": "query",
      "description": "The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Fax",
          "SMS",
          "VoiceMail",
          "Pager",
          "Text"
        ]
      },
      "collectionFormat": "multi"
    },
    "readStatus": {
      "in": "query",
      "description": "The read status for the resulting messages. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Read",
          "Unread"
        ]
      },
      "collectionFormat": "multi"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "phoneNumber": {
      "in": "query",
      "description": "The phone number. If specified, messages are returned for this particular phone number only",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-listMessages) in API Explorer.

## Delete Conversation

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`, deleteMessageByFilterParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`deleteMessageByFilterParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "conversationId": {
      "in": "query",
      "required": false,
      "type": "array",
      "items": {
        "type": "string"
      },
      "collectionFormat": "multi"
    },
    "dateTo": {
      "in": "query",
      "required": false,
      "type": "string",
      "description": "Messages received earlier then the date specified will be deleted. The default value is 'Now'",
      "format": "date-time"
    },
    "type": {
      "in": "query",
      "required": false,
      "description": "Type of messages to be deleted",
      "type": "string",
      "enum": [
        "Fax",
        "SMS",
        "VoiceMail",
        "Pager",
        "Text",
        "All"
      ],
      "default": "All"
    }
  }
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessageByFilter) in API Explorer.

## Get Message

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessage) in API Explorer.

## Update Message(s)

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessage) in API Explorer.

## Delete Message

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}`, deleteMessageParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`deleteMessageParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "purge": {
      "in": "query",
      "description": "If the value is 'True', then the message is purged immediately with all the attachments",
      "default": false,
      "required": false,
      "type": "boolean"
    },
    "conversationId": {
      "in": "query",
      "description": "Internal identifier of a message thread",
      "required": false,
      "type": "integer"
    }
  }
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-deleteMessage) in API Explorer.

## Get Message Content

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}/content/${attachmentId}`, readMessageContentParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readMessageContentParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "contentDisposition": {
      "in": "query",
      "required": false,
      "description": "Content disposition of a response",
      "type": "string",
      "enum": [
        "Inline",
        "Attachment"
      ],
      "default": "Inline"
    }
  }
}
```

You can get response binary data by `const buffer = await r.response().buffer()`

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageContent) in API Explorer.

## Sync Messages

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-sync`, syncMessagesParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`syncMessagesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "conversationId": {
      "in": "query",
      "description": "Conversation identifier for the resulting messages. Meaningful for SMS and Pager messages only.",
      "required": false,
      "type": "integer"
    },
    "dateFrom": {
      "in": "query",
      "description": "The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "dateTo": {
      "in": "query",
      "description": "The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time",
      "required": false,
      "type": "string",
      "format": "date-time"
    },
    "direction": {
      "in": "query",
      "description": "Direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Inbound",
          "Outbound"
        ]
      },
      "collectionFormat": "multi"
    },
    "distinctConversations": {
      "in": "query",
      "description": "If 'True', then the latest messages per every conversation ID are returned",
      "required": false,
      "type": "boolean"
    },
    "messageType": {
      "in": "query",
      "description": "Type for the resulting messages. If not specified, all types of messages are returned. Multiple values are accepted",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Fax",
          "SMS",
          "VoiceMail",
          "Pager",
          "Text"
        ]
      },
      "collectionFormat": "multi"
    },
    "recordCount": {
      "in": "query",
      "description": "Limits the number of records to be returned (works in combination with dateFrom and dateTo if specified)",
      "required": false,
      "type": "integer"
    },
    "syncToken": {
      "in": "query",
      "description": "Value of syncToken property of last sync request response",
      "required": false,
      "type": "string"
    },
    "syncType": {
      "in": "query",
      "description": "Type of message synchronization",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "FSync",
          "ISync"
        ]
      },
      "collectionFormat": "multi"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageSyncResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-syncMessages) in API Explorer.

## Get Notification Settings

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/notification-settings`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/NotificationSettings.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readNotificationSettings) in API Explorer.

## Update Notification Settings

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/notification-settings`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/NotificationSettings.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateNotificationSettings) in API Explorer.

## Get Extension Phone Number List

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/phone-number`, listExtensionPhoneNumbersParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listExtensionPhoneNumbersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "usageType": {
      "in": "query",
      "description": "Usage type of a phone number",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "MainCompanyNumber",
          "AdditionalCompanyNumber",
          "CompanyNumber",
          "DirectNumber",
          "CompanyFaxNumber",
          "ForwardedNumber",
          "ForwardedCompanyNumber"
        ]
      },
      "collectionFormat": "multi"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are allowed. Default value is '1'",
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items). If not specified, the value is '100' by default",
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionPhoneNumbersResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listExtensionPhoneNumbers) in API Explorer.

## Get User Presence Status

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`, readUserPresenceStatusParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`readUserPresenceStatusParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "detailedTelephonyState": {
      "in": "query",
      "description": "Whether to return detailed telephony state",
      "required": false,
      "type": "boolean"
    },
    "sipData": {
      "in": "query",
      "description": "Whether to return SIP data",
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetPresenceInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readUserPresenceStatus) in API Explorer.

## Update User Presence Status

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/presence`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PresenceInfoResource.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-updateUserPresenceStatus) in API Explorer.

## Get User Profile Image

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response binary data by `const buffer = await r.response().buffer()`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readUserProfileImage) in API Explorer.

## Upload User Profile Image

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('image', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-createUserProfileImage) in API Explorer.

## Update User Profile Image

HTTP PUT `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('image', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image`, formData);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-updateUserProfileImage) in API Explorer.

## Get Scaled User Profile Image

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/profile-image/${scaleSize}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response binary data by `const buffer = await r.response().buffer()`

[Try it out](https://developer.ringcentral.com/api-reference#User-Settings-readScaledPofileImage) in API Explorer.

## Make RingOut Call

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCall) in API Explorer.

## Get RingOut Call Status

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatus) in API Explorer.

## Cancel RingOut Call

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ring-out/{ringoutId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ring-out/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCall) in API Explorer.

## Make RingOut Call

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponseIntId.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-createRingOutCallDeprecated) in API Explorer.

## Get RingOut Call Status

HTTP GET `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-readRingOutCallStatusDeprecated) in API Explorer.

## Cancel RingOut Call

HTTP DELETE `/restapi/v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/ringout/${ringoutId}`);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#RingOut-deleteRingOutCallDeprecated) in API Explorer.

## Create SMS/MMS Message

HTTP POST `/restapi/v1.0/account/{accountId}/extension/{extensionId}/sms`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SMS-createSMSMessage) in API Explorer.

## Create Company Greeting

HTTP POST `/restapi/v1.0/account/{accountId}/greeting`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('binary', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/greeting`, formData);
```

- `accountId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "formData",
      "type": "string",
      "description": "Type of a greeting, specifying the case when the greeting is played.",
      "enum": [
        "Company",
        "StartRecording",
        "StopRecording",
        "AutomaticRecording"
      ],
      "required": true
    },
    "answeringRule": {
      "in": "formData",
      "properties": {
        "id": {
          "type": "string"
        }
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CustomCompanyGreetingInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-createCompanyGreeting) in API Explorer.

## Create IVR Menu

HTTP POST `/restapi/v1.0/account/{accountId}/ivr-menus`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRMenu) in API Explorer.

## Get IVR Menu

HTTP GET `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRMenu) in API Explorer.

## Update IVR Menu

HTTP PUT `/restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRMenu) in API Explorer.

## Create IVR Prompts

HTTP POST `/restapi/v1.0/account/{accountId}/ivr-prompts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('attachment', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/ivr-prompts`, formData);
```

- `accountId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
  "properties": {
    "name": {
      "in": "formData",
      "type": "string",
      "required": false,
      "description": "Description of file contents."
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PromptInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-createIVRPrompt) in API Explorer.

## Get IVR Prompt List

HTTP GET `/restapi/v1.0/account/{accountId}/ivr-prompts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/IVRPrompts.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-listIVRPrompts) in API Explorer.

## Get IVR Prompt

HTTP GET `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PromptInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPrompt) in API Explorer.

## Delete IVR Prompt

HTTP DELETE `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-deleteIVRPrompt) in API Explorer.

## Update IVR Prompt

HTTP PUT `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-updateIVRPrompt) in API Explorer.

## Get IVR Prompt Content

HTTP GET `/restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}/content`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Routing-readIVRPromptContent) in API Explorer.

## Get Message Store Configuration

HTTP GET `/restapi/v1.0/account/{accountId}/message-store-configuration`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-configuration`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreConfiguration.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-readMessageStoreConfiguration) in API Explorer.

## Update Message Store Configuration

HTTP PUT `/restapi/v1.0/account/{accountId}/message-store-configuration`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreConfiguration.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Store-updateMessageStoreConfiguration) in API Explorer.

## Create Message Store Report

HTTP POST `/restapi/v1.0/account/{accountId}/message-store-report`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReport.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-createMessageStoreReport) in API Explorer.

## Get Message Store Report Task

HTTP GET `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReport.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportTask) in API Explorer.

## Get Message Store Report Archive

HTTP GET `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReportArchive.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchive) in API Explorer.

## Get Message Store Report Archive Content

HTTP GET `/restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive/${archiveId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Message-Exports-readMessageStoreReportArchiveContent) in API Explorer.

## Assign Paging Group Users and Devices

HTTP POST `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-assignMultiplePagingGroupUsersDevices) in API Explorer.

## Get Paging Group Devices

HTTP GET `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/devices`, listPagingGroupDevicesParameters);
```

- `accountId`'s default value is `~`

`listPagingGroupDevicesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PagingOnlyGroupDevices.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupDevices) in API Explorer.

## Get Paging Group Users

HTTP GET `/restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/paging-only-groups/${pagingOnlyGroupId}/users`, listPagingGroupUsersParameters);
```

- `accountId`'s default value is `~`

`listPagingGroupUsersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/PagingOnlyGroupUsers.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Paging-Only-Groups-listPagingGroupUsers) in API Explorer.

## Get Company Phone Number List

HTTP GET `/restapi/v1.0/account/{accountId}/phone-number`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number`, listAccountPhoneNumbersParameters);
```

- `accountId`'s default value is `~`

`listAccountPhoneNumbersParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "usageType": {
      "in": "query",
      "description": "Usage type of a phone number",
      "required": false,
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "MainCompanyNumber",
          "AdditionalCompanyNumber",
          "CompanyNumber",
          "DirectNumber",
          "CompanyFaxNumber",
          "ForwardedNumber",
          "ForwardedCompanyNumber",
          "ContactCenterNumber",
          "ConferencingNumber",
          "MeetingsNumber"
        ]
      },
      "collectionFormat": "multi"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AccountPhoneNumbers.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-listAccountPhoneNumbers) in API Explorer.

## Get Phone Number

HTTP GET `/restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number/${phoneNumberId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CompanyPhoneNumberInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Phone-Numbers-readAccountPhoneNumber) in API Explorer.

## Get User Presence Status List

HTTP GET `/restapi/v1.0/account/{accountId}/presence`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/presence`, readAccountPresenceParameters);
```

- `accountId`'s default value is `~`

`readAccountPresenceParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "detailedTelephonyState": {
      "in": "query",
      "description": "Whether to return detailed telephony state",
      "required": false,
      "type": "boolean"
    },
    "sipData": {
      "in": "query",
      "description": "Whether to return SIP data",
      "required": false,
      "type": "boolean"
    },
    "page": {
      "in": "query",
      "description": "Page number for account presence information",
      "required": false,
      "type": "integer",
      "format": "int32"
    },
    "perPage": {
      "in": "query",
      "description": "Number for account presence information items per page",
      "required": false,
      "type": "integer",
      "format": "int32"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/AccountPresenceInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Presence-readAccountPresence) in API Explorer.

## Get Call Recording

HTTP GET `/restapi/v1.0/account/{accountId}/recording/{recordingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetCallRecordingResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-readCallRecording) in API Explorer.

## Get Call Recordings Data

HTTP GET `/restapi/v1.0/account/{accountId}/recording/{recordingId}/content`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}/content`);
```

- `accountId`'s default value is `~`

You can get response binary data by `const buffer = await r.response().buffer()`

[Try it out](https://developer.ringcentral.com/api-reference#Call-Log-listCallRecordingData) in API Explorer.

## Get Account Service Info

HTTP GET `/restapi/v1.0/account/{accountId}/service-info`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/service-info`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetServiceInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Company-readAcountServiceInfo) in API Explorer.

## Create CallOut Call Session

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/call-out`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/call-out`, makeCallOutRequest);
```

- `accountId`'s default value is `~`

`makeCallOutRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "from",
    "to"
  ],
  "properties": {
    "from": {
      "properties": {
        "deviceId": {
          "description": "Internal identifier of a device",
          "type": "string",
          "example": "59474004"
        }
      }
    },
    "to": {
      "properties": {
        "phoneNumber": {
          "description": "Phone number in E.164 format",
          "type": "string",
          "example": "+16502223366"
        },
        "extensionNumber": {
          "type": "string",
          "description": "Extension number",
          "example": "103"
        }
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallSession.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-createCallOutCallSession) in API Explorer.

## Get Call Session Status

HTTP GET `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`, readCallSessionStatusParameters);
```

- `accountId`'s default value is `~`

`readCallSessionStatusParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "timestamp": {
      "in": "query",
      "description": "The date and time of a call session latest change",
      "required": false,
      "type": "string"
    },
    "timeout": {
      "in": "query",
      "description": "The time frame of awaiting for a status change before sending the resulting one in response",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallSessionObject.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallSessionStatus) in API Explorer.

## Drop Call Session

HTTP DELETE `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-deleteCallSession) in API Explorer.

## Get Call Party Status

HTTP GET `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-readCallPartyStatus) in API Explorer.

## Update Call Party

HTTP PATCH `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-updateCallParty) in API Explorer.

## Call Flip on Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/flip`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-callFlipParty) in API Explorer.

## Forward Call Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/forward`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-forwardCallParty) in API Explorer.

## Hold Call Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/hold`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/hold`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-holdCallParty) in API Explorer.

## Create Recording

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-startCallRecording) in API Explorer.

## Pause/Resume Recording

HTTP PATCH `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings/{recordingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings/${recordingId}`, callRecordingUpdate, pauseResumeCallRecordingParameters);
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
}
```

`pauseResumeCallRecordingParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "brandId": {
      "in": "query",
      "description": "Identifies a brand of a logged in user or a brand of a sign-up session",
      "required": true,
      "type": "string",
      "default": "~"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallRecording.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-pauseResumeCallRecording) in API Explorer.

## Reject Call Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/reject`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/reject`);
```

- `accountId`'s default value is `~`

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-rejectParty) in API Explorer.

## Transfer Call Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/transfer`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-transferCallParty) in API Explorer.

## Unhold Call Party

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/unhold`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/unhold`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-unholdCallParty) in API Explorer.

## Supervise Call

HTTP POST `/restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/supervise`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/supervise`, superviseCallSessionRequest);
```

- `accountId`'s default value is `~`

`superviseCallSessionRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "mode",
    "deviceId",
    "extensionNumber"
  ],
  "properties": {
    "mode": {
      "type": "string",
      "description": "Supervising mode",
      "enum": [
        "Listen"
      ],
      "example": "Listen"
    },
    "deviceId": {
      "type": "string",
      "description": "Internal identifier of a supervisor's device",
      "example": "191888004"
    },
    "extensionNumber": {
      "type": "string",
      "description": "Extension number of a user that will be monitored",
      "example": "102"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/SuperviseCallSession.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Call-Control-superviseCallSession) in API Explorer.

## Get User Template List

HTTP GET `/restapi/v1.0/account/{accountId}/templates`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates`, listUserTemplatesParameters);
```

- `accountId`'s default value is `~`

`listUserTemplatesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "query",
      "type": "string",
      "enum": [
        "UserSettings",
        "CallHandling"
      ]
    },
    "page": {
      "in": "query",
      "type": "string"
    },
    "perPage": {
      "in": "query",
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserTemplates.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-listUserTemplates) in API Explorer.

## Get User Template

HTTP GET `/restapi/v1.0/account/{accountId}/templates/{templateId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates/${templateId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/TemplateInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Extensions-readUserTemplate) in API Explorer.

## Register SIP Device

HTTP POST `/restapi/v1.0/client-info/sip-provision`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/CreateSipRegistrationResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SIP-createSIPRegistration) in API Explorer.

## Get Country List

HTTP GET `/restapi/v1.0/dictionary/country`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/country', listCountriesParameters);
```


`listCountriesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "loginAllowed": {
      "in": "query",
      "description": "Specifies whether login with the phone numbers of this country is enabled or not",
      "required": false,
      "type": "boolean"
    },
    "signupAllowed": {
      "in": "query",
      "description": "Indicates whether signup/billing is allowed for a country. If not specified all countries are returned (according to other filters specified if any)",
      "required": false,
      "type": "boolean"
    },
    "numberSelling": {
      "in": "query",
      "description": "Specifies if RingCentral sells phone numbers of this country",
      "required": false,
      "type": "boolean"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "freeSoftphoneLine": {
      "in": "query",
      "description": "Specifies if free phone line for softphone is available for a country or not",
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetCountryListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listCountries) in API Explorer.

## Get Country

HTTP GET `/restapi/v1.0/dictionary/country/{countryId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/country/${countryId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetCountryInfoDictionaryResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readCountry) in API Explorer.

## Get Fax Cover Page List

HTTP GET `/restapi/v1.0/dictionary/fax-cover-page`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/fax-cover-page', listFaxCoverPagesParameters);
```


`listFaxCoverPagesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ListFaxCoverPagesResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Fax-listFaxCoverPages) in API Explorer.

## Get Standard Greeting List

HTTP GET `/restapi/v1.0/dictionary/greeting`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/greeting', listStandardGreetingsParameters);
```


`listStandardGreetingsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted.",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items).",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "type": {
      "in": "query",
      "description": "Type of a greeting, specifying the case when the greeting is played",
      "required": false,
      "type": "string",
      "enum": [
        "Introductory",
        "Announcement",
        "ConnectingMessage",
        "ConnectingAudio",
        "Voicemail",
        "Unavailable",
        "HoldMusic",
        "Company"
      ]
    },
    "usageType": {
      "in": "query",
      "type": "string",
      "description": "Usage type of a greeting, specifying if the greeting is applied for user extension or department extension",
      "enum": [
        "UserExtensionAnsweringRule",
        "ExtensionAnsweringRule",
        "DepartmentExtensionAnsweringRule",
        "CompanyAnsweringRule",
        "CompanyAfterHoursAnsweringRule",
        "VoicemailExtensionAnsweringRule",
        "AnnouncementExtensionAnsweringRule"
      ]
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DictionaryGreetingList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-listStandardGreetings) in API Explorer.

## Get Standard Greeting

HTTP GET `/restapi/v1.0/dictionary/greeting/{greetingId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/greeting/${greetingId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DictionaryGreetingInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Rule-Management-readStandardGreeting) in API Explorer.

## Get Language List

HTTP GET `/restapi/v1.0/dictionary/language`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/language');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/LanguageList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLanguages) in API Explorer.

## Get Language

HTTP GET `/restapi/v1.0/dictionary/language/{languageId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/language/${languageId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/LanguageInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readLanguage) in API Explorer.

## Get Location List

HTTP GET `/restapi/v1.0/dictionary/location`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/location', listLocationsParameters);
```


`listLocationsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "orderBy": {
      "in": "query",
      "description": "Sorts results by the property specified",
      "required": false,
      "default": "City",
      "type": "string",
      "enum": [
        "Npa",
        "City"
      ]
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "required": false,
      "default": 1,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "stateId": {
      "in": "query",
      "description": "Internal identifier of a state",
      "required": false,
      "type": "string"
    },
    "withNxx": {
      "in": "query",
      "description": "Specifies if nxx codes are returned",
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetLocationListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listLocations) in API Explorer.

## Get States List

HTTP GET `/restapi/v1.0/dictionary/state`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/state', listStatesParameters);
```


`listStatesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "allCountries": {
      "in": "query",
      "type": "boolean",
      "description": "If set to 'True' then states for all countries are returned and `countryId` is ignored, even if specified. If the value is empty then the parameter is ignored",
      "required": false
    },
    "countryId": {
      "in": "query",
      "description": "Internal identifier of a country",
      "required": false,
      "type": "integer"
    },
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": 1,
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": 100,
      "required": false,
      "type": "integer"
    },
    "withPhoneNumbers": {
      "in": "query",
      "description": "If 'True', the list of states with phone numbers available for buying is returned",
      "default": false,
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetStateListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listStates) in API Explorer.

## Get State

HTTP GET `/restapi/v1.0/dictionary/state/{stateId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/state/${stateId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetStateInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readState) in API Explorer.

## Get Timezone List

HTTP GET `/restapi/v1.0/dictionary/timezone`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/timezone', listTimezonesParameters);
```


`listTimezonesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": "1",
      "required": false,
      "type": "string"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": "100",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetTimezoneListResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-listTimezones) in API Explorer.

## Get Timezone

HTTP GET `/restapi/v1.0/dictionary/timezone/{timezoneId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/timezone/${timezoneId}`, readTimezoneParameters);
```


`readTimezoneParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "page": {
      "in": "query",
      "description": "Indicates the page number to retrieve. Only positive number values are accepted",
      "default": "1",
      "required": false,
      "type": "string"
    },
    "perPage": {
      "in": "query",
      "description": "Indicates the page size (number of items)",
      "default": "100",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetTimezoneInfoResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Regional-Settings-readTimezone) in API Explorer.

## Create Card

HTTP POST `/restapi/v1.0/glip/cards`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/cards', glipMessageAttachmentInfoRequest, createGlipCardParameters);
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
      "description": "Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'"
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
}
```

`createGlipCardParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "groupId": {
      "in": "query",
      "description": "Internal identifier of a group where to create a post with the card",
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipMessageAttachmentInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipCard) in API Explorer.

## Get Card

HTTP GET `/restapi/v1.0/glip/cards/{cardId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/cards/${cardId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipMessageAttachmentInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipCard) in API Explorer.

## Update Card

HTTP PUT `/restapi/v1.0/glip/cards/{cardId}`

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
      "description": "Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'"
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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipCard) in API Explorer.

## Delete Card

HTTP DELETE `/restapi/v1.0/glip/cards/{cardId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/cards/${cardId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipCard) in API Explorer.

## Get Chats

HTTP GET `/restapi/v1.0/glip/chats`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/chats', listGlipChatsParameters);
```


`listGlipChatsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "query",
      "description": "Type of chats to be fetched. By default all type of chats will be fetched",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Everyone",
          "Group",
          "Personal",
          "Direct",
          "Team"
        ]
      }
    },
    "recordCount": {
      "in": "query",
      "description": "Number of chats to be fetched by one request. The maximum value is 250, by default - 30.",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token.",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipChats) in API Explorer.

## Get Chat

HTTP GET `/restapi/v1.0/glip/chats/{chatId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipChatInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipChat) in API Explorer.

## Add Chat to Favorites

HTTP POST `/restapi/v1.0/glip/chats/{chatId}/favorite`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/favorite`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-favoriteGlipChat) in API Explorer.

## Get Posts

HTTP GET `/restapi/v1.0/glip/chats/{chatId}/posts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}/posts`, readGlipPostsParameters);
```


`readGlipPostsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Max number of posts to be fetched by one request (Not more than 250).",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token.",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostsList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPosts) in API Explorer.

## Create Post

HTTP POST `/restapi/v1.0/glip/chats/{chatId}/posts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/posts`, glipPostPostBody);
```


`glipPostPostBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "text"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Post text."
    },
    "attachments": {
      "description": "Identifier(s) of attachments.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Internal identifier of an attachment"
          },
          "type": {
            "type": "string",
            "description": "Attachment type"
          }
        }
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipPost) in API Explorer.

## Get Post

HTTP GET `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}/posts/${postId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-readGlipPost) in API Explorer.

## Update Post

HTTP PATCH `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/glip/chats/${chatId}/posts/${postId}`, glipPatchPostBody);
```


`glipPatchPostBody` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string",
      "description": "Post text."
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-patchGlipPost) in API Explorer.

## Delete Post

HTTP DELETE `/restapi/v1.0/glip/chats/{chatId}/posts/{postId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/chats/${chatId}/posts/${postId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Posts-deleteGlipPost) in API Explorer.

## Mark Chat as Read

HTTP POST `/restapi/v1.0/glip/chats/{chatId}/read`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/read`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatRead) in API Explorer.

## Remove Chat from Favorites

HTTP POST `/restapi/v1.0/glip/chats/{chatId}/unfavorite`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unfavorite`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unfavoriteGlipChat) in API Explorer.

## Mark Chat as Unread

HTTP POST `/restapi/v1.0/glip/chats/{chatId}/unread`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unread`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-markChatUnread) in API Explorer.

## Get Company Info

HTTP GET `/restapi/v1.0/glip/companies/{companyId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/companies/${companyId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipCompany.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipCompany) in API Explorer.

## Get Conversations

HTTP GET `/restapi/v1.0/glip/conversations`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/conversations', listGlipConversationsParameters);
```


`listGlipConversationsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Number of conversations to be fetched by one request. The maximum value is 250, by default - 30",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token.",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationsList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipConversations) in API Explorer.

## Create/Open Conversation

HTTP POST `/restapi/v1.0/glip/conversations`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/glip/conversations', createGlipConversationRequest);
```


`createGlipConversationRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "required": [
    "members"
  ],
  "properties": {
    "members": {
      "description": "Identifier(s) of chat member(s). The maximum supported number of IDs is 15. User's own ID is optional. If `members` section is omitted then 'Personal' chat will be returned  ",
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipConversation) in API Explorer.

## Get Conversation

HTTP GET `/restapi/v1.0/glip/conversations/{chatId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/conversations/${chatId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipConversation) in API Explorer.

## Create Data Export Task

HTTP POST `/restapi/v1.0/glip/data-export`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DataExportTask.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-createDataExportTask) in API Explorer.

## Get Data Export Task

HTTP GET `/restapi/v1.0/glip/data-export/{taskId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/DataExportTask.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readDataExportTask) in API Explorer.

## Get Glip Data Archive

HTTP GET `/restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}/archive/${archiveId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Compliance-Exports-readComplianceArchive) in API Explorer.

## Get User Events List

HTTP GET `/restapi/v1.0/glip/events`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/events', readGlipEventsParameters);
```


`readGlipEventsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Number of groups to be fetched by one request. The maximum value is 250, by default - 30.",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Token of a page to be returned",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventsInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-readGlipEvents) in API Explorer.

## Create Event

HTTP POST `/restapi/v1.0/glip/events`

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
      "description": "Color of Event title (including its presentation in Calendar)",
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-createEvent) in API Explorer.

## Get Event

HTTP GET `/restapi/v1.0/glip/events/{eventId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/events/${eventId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-readEvent) in API Explorer.

## Update Event

HTTP PUT `/restapi/v1.0/glip/events/{eventId}`

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
      "description": "Color of Event title (including its presentation in Calendar)",
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-updateEvent) in API Explorer.

## Delete Event

HTTP DELETE `/restapi/v1.0/glip/events/{eventId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/events/${eventId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Events-deleteEvent) in API Explorer.

## Get Everyone Chat

HTTP GET `/restapi/v1.0/glip/everyone`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/everyone');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEveryoneInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipEveryone) in API Explorer.

## Update Everyone Сhat

HTTP PATCH `/restapi/v1.0/glip/everyone`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEveryoneInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-patchGlipEveryone) in API Explorer.

## Get Favorite Chats

HTTP GET `/restapi/v1.0/glip/favorites`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/favorites', listFavoriteChatsParameters);
```


`listFavoriteChatsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Max number of chats to be fetched by one request (Not more than 250).",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsListWithoutNavigation.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listFavoriteChats) in API Explorer.

## Get User Groups

HTTP GET `/restapi/v1.0/glip/groups`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/groups', listGlipGroupsParameters);
```


`listGlipGroupsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "query",
      "description": "Type of groups to be fetched (by default all type of groups will be fetched)",
      "required": false,
      "type": "string",
      "enum": [
        "Group",
        "Team",
        "PrivateChat",
        "PersonalChat"
      ]
    },
    "recordCount": {
      "in": "query",
      "description": "Number of groups to be fetched by one request. The maximum value is 250, by default - 30",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token.",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipGroups) in API Explorer.

## Create Group

HTTP POST `/restapi/v1.0/glip/groups`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipGroup) in API Explorer.

## Get Group

HTTP GET `/restapi/v1.0/glip/groups/{groupId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipGroup) in API Explorer.

## Edit Group Members

HTTP POST `/restapi/v1.0/glip/groups/{groupId}/bulk-assign`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-assignGlipGroupMembers) in API Explorer.

## Create Event by Group ID

HTTP POST `/restapi/v1.0/glip/groups/{groupId}/events`

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
      "description": "Color of Event title (including its presentation in Calendar)",
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-createEventbyGroupId) in API Explorer.

## Get Group Events

HTTP GET `/restapi/v1.0/glip/groups/{groupId}/events`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/events`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Events-listGroupEvents) in API Explorer.

## Get Group Posts

HTTP GET `/restapi/v1.0/glip/groups/{groupId}/posts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/posts`, listGlipGroupPostsParameters);
```


`listGlipGroupPostsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Max number of records to be returned",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPosts.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipGroupPosts) in API Explorer.

## Create Post in Group

HTTP POST `/restapi/v1.0/glip/groups/{groupId}/posts`

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
            "description": "Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'"
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createGlipGroupPost) in API Explorer.

## Update Post

HTTP PUT `/restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/groups/${groupId}/posts/${postId}/text`, text, {}, { headers: { 'Content-Type': 'text/plain' } });
```


- `text` is a string

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Posts-updateGlipPostText) in API Explorer.

## Create Webhook in Group

HTTP POST `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-createGlipGroupWebhook) in API Explorer.

## Get Webhooks in Group

HTTP GET `/restapi/v1.0/glip/groups/{groupId}/webhooks`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipGroupWebhooks) in API Explorer.

## Get Person

HTTP GET `/restapi/v1.0/glip/persons/{personId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/persons/${personId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPersonInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPerson) in API Explorer.

## Get Posts

HTTP GET `/restapi/v1.0/glip/posts`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/posts', listGlipPostsParameters);
```


`listGlipPostsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "groupId": {
      "type": "string",
      "in": "query",
      "description": "Identifier of a group to filter posts",
      "required": false
    },
    "pageToken": {
      "type": "string",
      "in": "query",
      "description": "Token of a page to be returned",
      "required": false
    },
    "recordCount": {
      "type": "integer",
      "format": "int64",
      "in": "query",
      "description": "Number of records to be returned. The maximum value is 250, by default - 30",
      "default": 30,
      "maximum": 250,
      "required": false
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPosts.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-listGlipPosts) in API Explorer.

## Create Post

HTTP POST `/restapi/v1.0/glip/posts`

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
            "description": "Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'"
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Posts-createPost) in API Explorer.

## Get Preferences

HTTP GET `/restapi/v1.0/glip/preferences`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/preferences');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipPreferencesInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Profile-readGlipPreferences) in API Explorer.

## Get Recent Chats

HTTP GET `/restapi/v1.0/glip/recent/chats`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/recent/chats', listRecentChatsParameters);
```


`listRecentChatsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "type": {
      "in": "query",
      "description": "Type of chats to be fetched. By default all chat types are returned",
      "required": false,
      "type": "array",
      "collectionFormat": "multi",
      "items": {
        "type": "string",
        "enum": [
          "Everyone",
          "Group",
          "Personal",
          "Direct",
          "Team"
        ]
      }
    },
    "recordCount": {
      "in": "query",
      "description": "Max number of chats to be fetched by one request (Not more than 250).",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsListWithoutNavigation.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listRecentChats) in API Explorer.

## Get Teams

HTTP GET `/restapi/v1.0/glip/teams`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/teams', listGlipTeamsParameters);
```


`listGlipTeamsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Number of teams to be fetched by one request. The maximum value is 250, by default - 30",
      "required": false,
      "type": "integer",
      "default": 30,
      "maximum": 250
    },
    "pageToken": {
      "in": "query",
      "description": "Pagination token.",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamsList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-listGlipTeams) in API Explorer.

## Create Team

HTTP POST `/restapi/v1.0/glip/teams`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-createGlipTeam) in API Explorer.

## Get Team

HTTP GET `/restapi/v1.0/glip/teams/{chatId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/teams/${chatId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-readGlipTeam) in API Explorer.

## Update Team

HTTP PATCH `/restapi/v1.0/glip/teams/{chatId}`

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
      "description": "Team access level"
    },
    "name": {
      "type": "string",
      "description": "Team name. Maximum number of characters supported is 250"
    },
    "description": {
      "type": "string",
      "description": "Team description. Maximum number of characters supported is 1000"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Chats-patchGlipTeam) in API Explorer.

## Delete Team

HTTP DELETE `/restapi/v1.0/glip/teams/{chatId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/teams/${chatId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-deleteGlipTeam) in API Explorer.

## Add Team Members

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/add`

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
      "description": "Identifier(s) of chat member(s)",
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
        },
        "description": "Conversation is opened"
      }
    }
  }
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-addGlipTeamMembers) in API Explorer.

## Archive Team

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/archive`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/archive`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-archiveGlipTeam) in API Explorer.

## Join Team

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/join`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/join`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-joinGlipTeam) in API Explorer.

## Leave Team

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/leave`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/leave`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-leaveGlipTeam) in API Explorer.

## Remove Team Members

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/remove`

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
}
```

Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-removeGlipTeamMembers) in API Explorer.

## Unarchive Team

HTTP POST `/restapi/v1.0/glip/teams/{chatId}/unarchive`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/unarchive`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Chats-unarchiveGlipTeam) in API Explorer.

## Get Webhooks

HTTP GET `/restapi/v1.0/glip/webhooks`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/webhooks');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-listGlipWebhooks) in API Explorer.

## Get Webhook

HTTP GET `/restapi/v1.0/glip/webhooks/{webhookId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-readGlipWebhook) in API Explorer.

## Delete Webhook

HTTP DELETE `/restapi/v1.0/glip/webhooks/{webhookId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-deleteGlipWebhook) in API Explorer.

## Activate Webhook

HTTP POST `/restapi/v1.0/glip/webhooks/{webhookId}/activate`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/activate`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-activateGlipWebhook) in API Explorer.

## Suspend Webhook

HTTP POST `/restapi/v1.0/glip/webhooks/{webhookId}/suspend`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/suspend`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Glip-Webhooks-suspendGlipWebhook) in API Explorer.

## Parse Phone Number

HTTP POST `/restapi/v1.0/number-parser/parse`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/number-parser/parse', parsePhoneNumberRequest, parsePhoneNumberParameters);
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
}
```

`parsePhoneNumberParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "homeCountry": {
      "in": "query",
      "description": "Internal identifier of a home country. The default value is ISO code (ISO 3166) of the user's home country or brand country, if the user is undefined",
      "required": false,
      "type": "string"
    },
    "nationalAsPriority": {
      "in": "query",
      "description": "The default value is 'False'. If 'True', the numbers that are closer to the home country are given higher priority",
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ParsePhoneNumberResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Account-Provisioning-parsePhoneNumber) in API Explorer.

## Verify Number

HTTP POST `/restapi/v1.0/number-porting/verify-number`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post('/restapi/v1.0/number-porting/verify-number', numberPortingVerifyNumberRequest);
```


`numberPortingVerifyNumberRequest` is an object with the following definition:

```yaml
{
  "type": "object",
  "properties": {
    "records": {
      "type": "array",
      "items": {
        "properties": {
          "phoneNumber": {
            "type": "string",
            "description": "Phone number to verify"
          },
          "isBillingNumber": {
            "type": "boolean",
            "description": "Is phone number billing phone number or not. Can be specified for one phone number only.",
            "default": false
          }
        }
      }
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/NumberPortingVerifyNumberResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Number-Porting-verifyNumber) in API Explorer.

## Get Service Status

HTTP GET `/restapi/v1.0/status`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/status');
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIStatus) in API Explorer.

## Get Subscriptions

HTTP GET `/restapi/v1.0/subscription`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/subscription');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/RecordsCollectionResourceSubscriptionResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-listSubscriptions) in API Explorer.

## Create Subscription

HTTP POST `/restapi/v1.0/subscription`

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
          "description": "For 'PubNub/APNS', 'APNS' and 'PubNub/GCM' transport types. Name of a certificate"
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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-createSubscription) in API Explorer.

## Get Subscription

HTTP GET `/restapi/v1.0/subscription/{subscriptionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/subscription/${subscriptionId}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-readSubscription) in API Explorer.

## Renew Subscription / Update Event Filters

HTTP PUT `/restapi/v1.0/subscription/{subscriptionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/subscription/${subscriptionId}`, modifySubscriptionRequest, updateSubscriptionParameters);
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
          "description": "For 'PubNub/APNS', 'APNS' and 'PubNub/GCM' transport types. Name of a certificate"
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
}
```

`updateSubscriptionParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "aggregated": {
      "in": "query",
      "description": "If 'True' then aggregated presence status is returned in a notification payload",
      "required": false,
      "type": "boolean"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-updateSubscription) in API Explorer.

## Cancel Subscription

HTTP DELETE `/restapi/v1.0/subscription/{subscriptionId}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/subscription/${subscriptionId}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-deleteSubscription) in API Explorer.

## Renew Subscription

HTTP POST `/restapi/v1.0/subscription/{subscriptionId}/renew`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/subscription/${subscriptionId}/renew`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#Subscriptions-renewSubscription) in API Explorer.

## Get Version Info

HTTP GET `/restapi/{apiVersion}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/${apiVersion}`);
```

- `apiVersion`'s default value is `v1.0`

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/GetVersionResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#API-Info-readAPIVersion) in API Explorer.

## Get Service Provider Config

HTTP GET `/scim/v2/ServiceProviderConfig`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/ServiceProviderConfig');
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/ServiceProviderConfig.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readServiceProviderConfig2) in API Explorer.

## Search or List Users

HTTP GET `/scim/v2/Users`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/Users', searchViaGet2Parameters);
```


`searchViaGet2Parameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "filter": {
      "in": "query",
      "description": "only support 'userName' or 'email' filter expressions for now",
      "required": false,
      "type": "string"
    },
    "startIndex": {
      "in": "query",
      "description": "start index (1-based)",
      "required": false,
      "type": "integer",
      "default": 1,
      "format": "int32"
    },
    "count": {
      "in": "query",
      "description": "page size",
      "required": false,
      "type": "integer",
      "default": 100,
      "format": "int32"
    }
  }
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserSearchResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaGet2) in API Explorer.

## Create User

HTTP POST `/scim/v2/Users`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-createUser2) in API Explorer.

## Search or List Users

HTTP POST `/scim/v2/Users/.search`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserSearchResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-searchViaPost2) in API Explorer.

## Get User

HTTP GET `/scim/v2/Users/{id}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/scim/v2/Users/${id}`);
```


You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-readUser2) in API Explorer.

## Update/Replace User

HTTP PUT `/scim/v2/Users/{id}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-replaceUser2) in API Explorer.

## Delete User

HTTP DELETE `/scim/v2/Users/{id}`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/scim/v2/Users/${id}`);
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-deleteUser2) in API Explorer.

## Update/Patch User

HTTP PATCH `/scim/v2/Users/{id}`

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
}
```

You can get response json data by `const json = r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-patchUser2) in API Explorer.

## check health

HTTP GET `/scim/v2/health`

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/health');
```


Response body is empty

[Try it out](https://developer.ringcentral.com/api-reference#SCIM-checkHealth2) in API Explorer.