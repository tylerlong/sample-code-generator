# RingCentral JavaScript SDK Code Samples

## Get API Versions

HTTP GET /restapi

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetVersionsResponse.yaml)

## Get Company Info

HTTP GET /restapi/v1.0/account/{accountId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetAccountInfoResponse.yaml)

## Get Company Active Calls

HTTP GET /restapi/v1.0/account/{accountId}/active-calls

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ActiveCallsResponse.yaml)

## Create Company Call Handling Rule

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

## Get Company Call Handling Rules

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleList.yaml)

## Get Company Call Handling Rule

HTTP GET /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

## Update Company Call Handling Rule

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyAnsweringRuleInfo.yaml)

## Delete Company Call Handling Rule

HTTP DELETE /restapi/v1.0/account/{accountId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/answering-rule/${ruleId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Get Company Business Address

HTTP GET /restapi/v1.0/account/{accountId}/business-address

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-address`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AccountBusinessAddressResource.yaml)

## Update Company Business Address

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AccountBusinessAddressResource.yaml)

## Get Company Business Hours

HTTP GET /restapi/v1.0/account/{accountId}/business-hours

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/business-hours`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyBusinessHours.yaml)

## Update Company Business Hours

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyBusinessHours.yaml)

## Get Company Call Log Records

HTTP GET /restapi/v1.0/account/{accountId}/call-log

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log`, loadCompanyCallLogParameters);
```

- `accountId`'s default value is `~`

`loadCompanyCallLogParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AccountCallLogResponse.yaml)

## Get Company Call Log Record(s)

HTTP GET /restapi/v1.0/account/{accountId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-log/${callRecordId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyCallLogRecord.yaml)

## Create Call Monitoring Group

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroup.yaml)

## Get Call Monitoring Groups

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroups.yaml)

## Updates Call Monitoring Group

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroup.yaml)

## Remove Given Call Monitoring Group

HTTP DELETE /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-monitoring-groups/${groupId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Edit Call Monitoring Group

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringBulkAssign.yaml)

## Get Call Monitoring Group Members

HTTP GET /restapi/v1.0/account/{accountId}/call-monitoring-groups/{groupId}/members

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallMonitoringGroupMemberList.yaml)

## Get Call Queues

HTTP GET /restapi/v1.0/account/{accountId}/call-queues

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallQueues.yaml)

## Edit Call Queue Members

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
}
```

Response body is empty

## Get Call Queue Members

HTTP GET /restapi/v1.0/account/{accountId}/call-queues/{groupId}/members

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallQueueMembers.yaml)

## Get Call Recording Settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingSettingsResource.yaml)

## Update Call Recording Settings

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingSettingsResource.yaml)

## Update Call Recording Extension Settings

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
}
```

Response body is empty

## [Beta] Get Call Recording Custom Greetings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallRecordingCustomGreetings.yaml)

## Delete Call Recording Custom Greetings

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings`);
```

- `accountId`'s default value is `~`

Response body is empty

## Delete Call Recording Custom Greeting

HTTP DELETE /restapi/v1.0/account/{accountId}/call-recording/custom-greetings/{greetingId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/call-recording/custom-greetings/${greetingId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Get Call Recording Extension Settings

HTTP GET /restapi/v1.0/account/{accountId}/call-recording/extensions

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/call-recording/extensions`);
```

- `accountId`'s default value is `~`

Response body is empty

## Edit Department Members

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
}
```

Response body is empty

## Get Department Member List

HTTP GET /restapi/v1.0/account/{accountId}/department/{departmentId}/members

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DepartmentMemberList.yaml)

## Get Device Info

HTTP GET /restapi/v1.0/account/{accountId}/device/{deviceId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/device/${deviceId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetDeviceInfoResponse.yaml)

## Update Device

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DeviceResource.yaml)

## Get Company Directory Entries

HTTP GET /restapi/v1.0/account/{accountId}/directory/entries

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
      "default": "true"
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DirectoryResource.yaml)

## Search Company Directory Entries

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DirectoryResource.yaml)

## Get Account Federation

HTTP GET /restapi/v1.0/account/{accountId}/directory/federation

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/directory/federation`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/FederationResource.yaml)

## Get Extension List

HTTP GET /restapi/v1.0/account/{accountId}/extension

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionListResponse.yaml)

## Create Extension

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCreationResponse.yaml)

## Get Extension Info

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionInfoResponse.yaml)

## Update Extension

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionInfoResponse.yaml)

## Delete Extension

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

Response body is empty

## Get User Active Calls

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ActiveCallsResponse.yaml)

## Address Book Synchronization

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book-sync

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AddressBookSync.yaml)

## Get Contact List

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ContactList.yaml)

## Create Contact

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact`, personalContactResource, createContactParameters);
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

## Get Contact(s)

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

## Update Contact(s)

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/address-book/contact/{contactId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/address-book/contact/${contactId}`, personalContactResource, updateContactParameters);
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PersonalContactResource.yaml)

## Delete Contact(s)

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

Response body is empty

## Get Call Handling Rules

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserAnsweringRuleList.yaml)

## Create Custom Call Handling Rules

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

## Get Call Handling Rule

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/answering-rule/{ruleId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/answering-rule/${ruleId}`, loadAnsweringRuleParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`loadAnsweringRuleParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

## Update Custom Call Handling Rule

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AnsweringRuleInfo.yaml)

## Delete Call Handling Rule

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

Response body is empty

## Get User Permissions

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AuthProfileResource.yaml)

## Check User Permissions

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/authz-profile/check

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AuthProfileCheckResource.yaml)

## Get User Business Hours

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetUserBusinessHoursResponse.yaml)

## Update User Business Hours

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserBusinessHoursUpdateResponse.yaml)

## Get User Call Log Records

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log`, loadUserCallLogParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`loadUserCallLogParameters` is an **optional** object with the following definition:

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
      "description": "**Deprecated**. Supported for compatibility reasons only. `true` if only recorded calls are returned. The default value is `false`. If both `withRecording` and `recordingType` are specified, `withRecording` is ignored",
      "required": false,
      "type": "boolean"
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserCallLogResponse.yaml)

## Delete User Call Log Records

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log

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

## Sync User Call Log

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync

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
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallLogSync.yaml)

## Get User Call Record(s)

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/call-log/${callRecordId}`, getCallRecordsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`getCallRecordsParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserCallLogRecord.yaml)

## Get Caller Blocking Settings

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallerBlockingSettings.yaml)

## Update Caller Blocking Settings

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallerBlockingSettings.yaml)

## Get Blocked/Allowed Numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking/phone-numbers

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/caller-blocking/phone-numbers`, listBlockedAllowedPhoneNumberParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listBlockedAllowedPhoneNumberParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumbersList.yaml)

## Add Blocked/Allowed Number

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

## Add/Remove Blocked or Allowed Numbers using bulk request

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

Response body is empty

## Get Blocked/Allowed Number

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

## Delete Blocked Number

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

Response body is empty

## Update Blocked/Allowed Number

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/BlockedAllowedPhoneNumberInfo.yaml)

## Get Extension Caller ID

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCallerIdInfo.yaml)

## Update Extension Caller ID

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ExtensionCallerIdInfo.yaml)

## Create Internal Text Message

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

## Get User Conferencing Settings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/conferencing

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/conferencing`, loadConferencingInfoParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`loadConferencingInfoParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetConferencingInfoResponse.yaml)

## Update User Conferencing Settings

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetConferencingInfoResponse.yaml)

## Get User Device Info

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/device

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionDevicesResponse.yaml)

## Get Favorite Contact List

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

Response body is empty

## Update Favorite Contact List

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
}
```

Response body is empty

## Create Fax Message

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax

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
      "required": true,
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/FaxResponse.yaml)

## Get Forwarding Numbers

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/forwarding-number

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/forwarding-number`, listExtensionForwardingNumbersParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listExtensionForwardingNumbersParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionForwardingNumberListResponse.yaml)

## Create Forwarding Numbers

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberInfo.yaml)

## Get Forwarding Number

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberResource.yaml)

## Update Forwarding Numbers

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ForwardingNumberInfo.yaml)

## Delete Forwarding Number

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

Response body is empty

## Get Extension Grants

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionGrantListResponse.yaml)

## Create User Custom Greeting

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/greeting

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('audio', fs.readFileSync('./test.mp3'), { filename: 'text.mp3' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/greeting`, formData, customGreetingRequest);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
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
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CustomCompanyGreetingInfo.yaml)

## Get Custom Greeting Info

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CustomUserGreetingInfo.yaml)

## Get Scheduled Meetings

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MeetingsResource.yaml)

## Create Meetings

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
}
```

Response body is empty

## Get User Meeting Recordings

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting-recordings

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/meeting-recordings`, listUserMeetingRecordingsParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`listUserMeetingRecordingsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "meetingId": {
      "description": "Internal identifier of a meeting. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "meetingStartTimeFrom": {
      "description": "Recordings of meetings started after the time specified will be returned. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "meetingStartTimeTo": {
      "description": "Recordings of meetings started before the time specified will be returned. The default value is current time. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "page": {
      "description": "Page number",
      "in": "query",
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "description": "Number of items per page. The `max` value is supported to indicate the maximum size - 300",
      "default": 100,
      "maximum": 300,
      "in": "query",
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ListMeetingRecordingsResponse.yaml)

## Get Meeting Service Info

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MeetingServiceInfoResource.yaml)

## Get Meeting Info

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MeetingResponseResource.yaml)

## Update Meeting

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MeetingResponseResource.yaml)

## Delete Meeting

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

Response body is empty

## End Meeting

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

Response body is empty

## Get Message List

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageList.yaml)

## Delete Conversation(s)

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store`, deleteMessagesByFilterParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`deleteMessagesByFilterParameters` is an **optional** object with the following definition:

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

## Get Message(s)

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

## Update Message(s)

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

## Delete Message(s)

HTTP DELETE /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}

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

## Get Message Attachment

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store/{messageId}/content/{attachmentId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/message-store/${messageId}/content/${attachmentId}`, getMessageAttachmentByIdParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`getMessageAttachmentByIdParameters` is an **optional** object with the following definition:

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

## Sync Messages

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/message-sync

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageSyncResponse.yaml)

## Get Notification Settings

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/NotificationSettings.yaml)

## Update Notification Settings

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/NotificationSettings.yaml)

## Get Extension Phone Number List

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/phone-number

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetExtensionPhoneNumbersResponse.yaml)

## Get User Status

HTTP GET /restapi/v1.0/account/{accountId}/extension/{extensionId}/presence

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/extension/${extensionId}/presence`, getPresenceStatusParameters);
```

- `accountId`'s default value is `~`
- `extensionId`'s default value is `~`

`getPresenceStatusParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetPresenceInfo.yaml)

## Update User Status

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PresenceInfoResource.yaml)

## Get User Profile Image

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

You can get response binary data by `const buffer = await r.response().buffer()`

## Upload User Profile Image

HTTP POST /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

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

You can get response binary data by `const buffer = await r.response().buffer()`

## Update User Profile Image

HTTP PUT /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image

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

You can get response binary data by `const buffer = await r.response().buffer()`

## Get Extension Profile Image (Scaled)

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

You can get response binary data by `const buffer = await r.response().buffer()`

## Make RingOut Call

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

##  Get RingOut Call Status

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

## Cancel RingOut Call

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

Response body is empty

## Make RingOut Call

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponseIntId.yaml)

## Get RingOut Call Status

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetRingOutStatusResponse.yaml)

## Cancel RingOut Call

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

Response body is empty

## Create SMS Message

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetMessageInfoResponse.yaml)

## Create Custom Company Greeting

HTTP POST /restapi/v1.0/account/{accountId}/greeting

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', Buffer.from(JSON.stringify(body)), { filename: 'request.json' });
formData.append('audio', fs.readFileSync('./test.mp3'), { filename: 'text.mp3' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/greeting`, formData, customCompanyGreetingRequest);
```

- `accountId`'s default value is `~`

`body` is an object with the following definition:

```yaml
{
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
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CustomCompanyGreetingInfo.yaml)

## Create IVR Menu

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

## Get IVR Menu

HTTP GET /restapi/v1.0/account/{accountId}/ivr-menus/{ivrMenuId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-menus/${ivrMenuId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

## Update IVR Menu

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/IVRMenuInfo.yaml)

## Create IVR Prompts

HTTP POST /restapi/v1.0/account/{accountId}/ivr-prompts

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PromptInfo.yaml)

## Get IVR Prompts

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/IVRPrompts.yaml)

## Get IVR Prompt

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PromptInfo.yaml)

## Delete IVR Prompt

HTTP DELETE /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Update IVR Prompt

HTTP PUT /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Get IVR Prompt Content

HTTP GET /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/ivr-prompts/${promptId}/content`);
```

- `accountId`'s default value is `~`

Response body is empty

## Get Account Meeting Recordings

HTTP GET /restapi/v1.0/account/{accountId}/meeting-recordings

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/meeting-recordings`, listAccountMeetingRecordingsParameters);
```

- `accountId`'s default value is `~`

`listAccountMeetingRecordingsParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "meetingId": {
      "description": "Internal identifier of a meeting. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "meetingStartTimeFrom": {
      "description": "Recordings of meetings started after the time specified will be returned. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "meetingStartTimeTo": {
      "description": "Recordings of meetings started before the time specified will be returned. The default value is current time. Either `meetingId` or `meetingStartTime`/`meetingEndTime` can be specified",
      "in": "query",
      "required": false,
      "type": "string"
    },
    "page": {
      "description": "Page number",
      "in": "query",
      "required": false,
      "type": "integer"
    },
    "perPage": {
      "description": "Number of items per page. The `max` value is supported to indicate the maximum size - 300",
      "default": 100,
      "maximum": 300,
      "in": "query",
      "required": false,
      "type": "integer"
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ListMeetingRecordingsResponse.yaml)

## Get Message Store Configuration

HTTP GET /restapi/v1.0/account/{accountId}/message-store-configuration

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-configuration`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreConfiguration.yaml)

## Update Message Store Configuration

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreConfiguration.yaml)

## Create Message Store Report

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReport.yaml)

## Get Message Store Report Task

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReport.yaml)

## Get Message Store Report Archive

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/MessageStoreReportArchive.yaml)

## Get Message Store Report Archive Content

HTTP GET /restapi/v1.0/account/{accountId}/message-store-report/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/message-store-report/${taskId}/archive/${archiveId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Edit Paging Group Users and Devices

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
}
```

Response body is empty

## Get Paging Only Group Devices

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PagingOnlyGroupDevices.yaml)

## Get Paging Only Group Users

HTTP GET /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PagingOnlyGroupUsers.yaml)

## Get Company Phone Number List

HTTP GET /restapi/v1.0/account/{accountId}/phone-number

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AccountPhoneNumbers.yaml)

## Get Phone Number

HTTP GET /restapi/v1.0/account/{accountId}/phone-number/{phoneNumberId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/phone-number/${phoneNumberId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CompanyPhoneNumberInfo.yaml)

## Get User Presence Statuses List

HTTP GET /restapi/v1.0/account/{accountId}/presence

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/presence`, accountPresenceParameters);
```

- `accountId`'s default value is `~`

`accountPresenceParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/AccountPresenceInfo.yaml)

## Get Call Recording(s)

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetCallRecordingResponse.yaml)

## Get Call Recordings Data

HTTP GET /restapi/v1.0/account/{accountId}/recording/{recordingId}/content

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/recording/${recordingId}/content`);
```

- `accountId`'s default value is `~`

You can get response binary data by `const buffer = await r.response().buffer()`

## Get Account Service Info [Beta]

HTTP GET /restapi/v1.0/account/{accountId}/service-info

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/service-info`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetServiceInfoResponse.yaml)

## Get Call Session Status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`, getCallSessionStatusParameters);
```

- `accountId`'s default value is `~`

`getCallSessionStatusParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallSessionObject.yaml)

## Drop Call Session

HTTP DELETE /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}`);
```

- `accountId`'s default value is `~`

Response body is empty

## Get Call Party Status

HTTP GET /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Update Call Party

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Call Flip on Party

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
}
```

Response body is empty

## Forward Call Party

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Hold Call Party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/hold

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/hold`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Starts new call recording in a party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/recordings`);
```

- `accountId`'s default value is `~`

Response body is empty

## Pause/Resume Recording

HTTP PATCH /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/recordings/{recordingId}

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallRecording.yaml)

## Reject Call Party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/reject

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/reject`);
```

- `accountId`'s default value is `~`

Response body is empty

## Transfer Call Party

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Unhold Call Party

HTTP POST /restapi/v1.0/account/{accountId}/telephony/sessions/{sessionId}/parties/{partyId}/unhold

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/account/${accountId}/telephony/sessions/${sessionId}/parties/${partyId}/unhold`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CallParty.yaml)

## Get Templates

HTTP GET /restapi/v1.0/account/{accountId}/templates

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates`, listTemplatesParameters);
```

- `accountId`'s default value is `~`

`listTemplatesParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserTemplates.yaml)

## Get Template

HTTP GET /restapi/v1.0/account/{accountId}/templates/{templateId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/account/${accountId}/templates/${templateId}`);
```

- `accountId`'s default value is `~`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/TemplateInfo.yaml)

## Register SIP Device

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/CreateSipRegistrationResponse.yaml)

## Get Country List

HTTP GET /restapi/v1.0/dictionary/country

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetCountryListResponse.yaml)

## Get Country

HTTP GET /restapi/v1.0/dictionary/country/{countryId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/country/${countryId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetCountryInfoDictionaryResponse.yaml)

## Get Available Fax Cover Pages

HTTP GET /restapi/v1.0/dictionary/fax-cover-page

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ListFaxCoverPagesResponse.yaml)

## Get Standard Greetings

HTTP GET /restapi/v1.0/dictionary/greeting

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DictionaryGreetingList.yaml)

## Get Greeting Info

HTTP GET /restapi/v1.0/dictionary/greeting/{greetingId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/greeting/${greetingId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DictionaryGreetingInfo.yaml)

## Get Language List

HTTP GET /restapi/v1.0/dictionary/language

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/dictionary/language');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/LanguageList.yaml)

## Get Language

HTTP GET /restapi/v1.0/dictionary/language/{languageId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/language/${languageId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/LanguageInfo.yaml)

## Get Location List

HTTP GET /restapi/v1.0/dictionary/location

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
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "Npa",
          "City"
        ]
      },
      "collectionFormat": "multi"
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetLocationListResponse.yaml)

## Get State List

HTTP GET /restapi/v1.0/dictionary/state

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetStateListResponse.yaml)

## Get State

HTTP GET /restapi/v1.0/dictionary/state/{stateId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/state/${stateId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetStateInfoResponse.yaml)

## Get Timezone List

HTTP GET /restapi/v1.0/dictionary/timezone

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetTimezoneListResponse.yaml)

## Get Timezone

HTTP GET /restapi/v1.0/dictionary/timezone/{timezoneId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/dictionary/timezone/${timezoneId}`, loadTimezoneParameters);
```


`loadTimezoneParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetTimezoneInfoResponse.yaml)

## Create Card

HTTP POST /restapi/v1.0/glip/cards

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipMessageAttachmentInfo.yaml)

## Get Card

HTTP GET /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/cards/${cardId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipMessageAttachmentInfo.yaml)

## Update Card

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
}
```

Response body is empty

## Delete Card

HTTP DELETE /restapi/v1.0/glip/cards/{cardId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/cards/${cardId}`);
```


Response body is empty

## Get Chat List

HTTP GET /restapi/v1.0/glip/chats

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsList.yaml)

## Get Chat

HTTP GET /restapi/v1.0/glip/chats/{chatId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/chats/${chatId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipChatInfo.yaml)

## Add Chat to Favorites

HTTP POST /restapi/v1.0/glip/chats/{chatId}/favorite

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/favorite`);
```


Response body is empty

## Mark Chat as Read

HTTP POST /restapi/v1.0/glip/chats/{chatId}/read

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/read`);
```


Response body is empty

## Remove Chat from Favorites

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unfavorite

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unfavorite`);
```


Response body is empty

## Mark Chat as Unread

HTTP POST /restapi/v1.0/glip/chats/{chatId}/unread

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/chats/${chatId}/unread`);
```


Response body is empty

## Get Company Info

HTTP GET /restapi/v1.0/glip/companies/{companyId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/companies/${companyId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipCompany.yaml)

## Get User Conversation List

HTTP GET /restapi/v1.0/glip/conversations

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationsList.yaml)

## Create/Open Chat

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationInfo.yaml)

## Get Conversation

HTTP GET /restapi/v1.0/glip/conversations/{chatId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/conversations/${chatId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipConversationInfo.yaml)

## Create Data Export Task

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DataExportTask.yaml)

## Get Data Export Task

HTTP GET /restapi/v1.0/glip/data-export/{taskId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/DataExportTask.yaml)

## Get Glip Data Archive

HTTP GET /restapi/v1.0/glip/data-export/{taskId}/archive/{archiveId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/data-export/${taskId}/archive/${archiveId}`);
```


Response body is empty

## Get User Events List

HTTP GET /restapi/v1.0/glip/events

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/events', loadGlipEventsParameters);
```


`loadGlipEventsParameters` is an **optional** object with the following definition:

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventsInfo.yaml)

## Create Event

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

## Get Event

HTTP GET /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/events/${eventId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

## Update Event

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

## Delete Event

HTTP DELETE /restapi/v1.0/glip/events/{eventId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/events/${eventId}`);
```


Response body is empty

## Get Everyone Chat Info

HTTP GET /restapi/v1.0/glip/everyone

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/everyone');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEveryoneInfo.yaml)

## Update Everyone Сhat Info

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEveryoneInfo.yaml)

## Get Favorite Chats

HTTP GET /restapi/v1.0/glip/favorites

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsListWithoutNavigation.yaml)

## Upload File

HTTP POST /restapi/v1.0/glip/files

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const FormData = require('form-data');
const formData = new FormData();
formData.append('body', fs.readFileSync('./test.png'), { filename: 'text.png' });
const r = await platform.post('/restapi/v1.0/glip/files', formData, createGlipFileParameters);
```


`createGlipFileParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "groupId": {
      "type": "integer",
      "in": "query",
      "description": "Internal identifier of a group to which the post with attachement will be added to",
      "required": false
    },
    "name": {
      "type": "string",
      "in": "query",
      "description": "Name of a file attached",
      "required": false
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/PostGlipFile.yaml)

## Get User Groups

HTTP GET /restapi/v1.0/glip/groups

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupList.yaml)

## Create Group

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

## Get Group

HTTP GET /restapi/v1.0/glip/groups/{groupId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

## Edit Group Members

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipGroupInfo.yaml)

## Create Event by Group ID

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

## Get Group Events

HTTP GET /restapi/v1.0/glip/groups/{groupId}/events

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/events`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipEventInfo.yaml)

## Get Group Notes

HTTP GET /restapi/v1.0/glip/groups/{groupId}/notes

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/notes`, loadGroupNotesParameters);
```


`loadGroupNotesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "recordCount": {
      "in": "query",
      "description": "Number of groups to be fetched by one request, the maximum value is 250, the default is 30",
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
    },
    "status": {
      "in": "query",
      "description": "Status of notes to be fetched. If not specified all notes are returned",
      "required": false,
      "type": "string",
      "enum": [
        "Active",
        "Draft",
        "Unknown"
      ]
    },
    "creatorId": {
      "in": "query",
      "description": "Internal identifier of a note author",
      "required": false,
      "type": "string"
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNotesInfo.yaml)

## Create Group Note

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Get Group Posts

HTTP GET /restapi/v1.0/glip/groups/{groupId}/posts

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPosts.yaml)

## Create Post in Group

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

## Update Post

HTTP PUT /restapi/v1.0/glip/groups/{groupId}/posts/{postId}/text

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.put(`/restapi/v1.0/glip/groups/${groupId}/posts/${postId}/text`, text, {}, { headers: { 'Content-Type': 'text/plain' } });
```


- `text` is a string

Response body is empty

## Create Webhook in Group

HTTP POST /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookInfo.yaml)

## Get Webhooks in Group

HTTP GET /restapi/v1.0/glip/groups/{groupId}/webhooks

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/groups/${groupId}/webhooks`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

## Get User Notes

HTTP GET /restapi/v1.0/glip/notes

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/notes', loadUserNotesParameters);
```


`loadUserNotesParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "status": {
      "in": "query",
      "description": "Status of notes to be fetched. If not specified all notes are returned",
      "required": false,
      "type": "string",
      "enum": [
        "Active",
        "Draft"
      ]
    },
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNotesInfo.yaml)

## Create User Note

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Get Note

HTTP GET /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/notes/${noteId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNotesInfo.yaml)

## Delete Note

HTTP DELETE /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/notes/${noteId}`);
```


Response body is empty

## Patch Note

HTTP PATCH /restapi/v1.0/glip/notes/{noteId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.patch(`/restapi/v1.0/glip/notes/${noteId}`, glipNoteCreate, patchNoteParameters);
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
}
```

`patchNoteParameters` is an **optional** object with the following definition:

```yaml
{
  "properties": {
    "releaseLock": {
      "in": "query",
      "type": "boolean",
      "default": false,
      "description": "If true then note lock (if any) will be released upon request"
    }
  }
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Update Note

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Lock Note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/lock

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/lock`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Publish Note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/publish

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/publish`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Unlock Note

HTTP POST /restapi/v1.0/glip/notes/{noteId}/unlock

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/notes/${noteId}/unlock`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipNoteInfo.yaml)

## Get Person

HTTP GET /restapi/v1.0/glip/persons/{personId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/persons/${personId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPersonInfo.yaml)

## Get Posts

HTTP GET /restapi/v1.0/glip/posts

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPosts.yaml)

## Create Post

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPostInfo.yaml)

## Get User Preferences

HTTP GET /restapi/v1.0/glip/preferences

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/preferences');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipPreferencesInfo.yaml)

## Get Recent Chats

HTTP GET /restapi/v1.0/glip/recent/chats

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
      "description": "Type of chats to be fetched (by default, all type of chats will be fetched).",
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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipChatsListWithoutNavigation.yaml)

## Get Team List

HTTP GET /restapi/v1.0/glip/teams

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamsList.yaml)

## Create Team

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

## Get Team

HTTP GET /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/teams/${chatId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

## Update Team

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipTeamInfo.yaml)

## Delete Team

HTTP DELETE /restapi/v1.0/glip/teams/{chatId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/teams/${chatId}`);
```


Response body is empty

## Add Team Members

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
}
```

Response body is empty

## Archive Team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/archive

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/archive`);
```


Response body is empty

## Join Team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/join

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/join`);
```


Response body is empty

## Leave Team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/leave

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/leave`);
```


Response body is empty

## Remove Members from Team

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
}
```

Response body is empty

## Unarchive Team

HTTP POST /restapi/v1.0/glip/teams/{chatId}/unarchive

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/teams/${chatId}/unarchive`);
```


Response body is empty

## Get Webhooks

HTTP GET /restapi/v1.0/glip/webhooks

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/glip/webhooks');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

## Get Webhook

HTTP GET /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GlipWebhookList.yaml)

## Delete Webhook

HTTP DELETE /restapi/v1.0/glip/webhooks/{webhookId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/glip/webhooks/${webhookId}`);
```


Response body is empty

## Activate Webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/activate

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/activate`);
```


Response body is empty

## Suspend Webhook

HTTP POST /restapi/v1.0/glip/webhooks/{webhookId}/suspend

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/glip/webhooks/${webhookId}/suspend`);
```


Response body is empty

## Parse Phone Number [Beta]

HTTP POST /restapi/v1.0/number-parser/parse

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ParsePhoneNumberResponse.yaml)

## Get Service Status

HTTP GET /restapi/v1.0/status

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/status');
```


Response body is empty

## Get Subscriptions

HTTP GET /restapi/v1.0/subscription

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/restapi/v1.0/subscription');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/RecordsCollectionResourceSubscriptionResponse.yaml)

## Create Subscription

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

## Get Subscription

HTTP GET /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/v1.0/subscription/${subscriptionId}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

## Renew Subscription / Update Event Filters

HTTP PUT /restapi/v1.0/subscription/{subscriptionId}

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

## Cancel Subscription

HTTP DELETE /restapi/v1.0/subscription/{subscriptionId}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/restapi/v1.0/subscription/${subscriptionId}`);
```


Response body is empty

## Renew Subscription

HTTP POST /restapi/v1.0/subscription/{subscriptionId}/renew

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.post(`/restapi/v1.0/subscription/${subscriptionId}/renew`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/SubscriptionInfo.yaml)

## Get Version Info

HTTP GET /restapi/{apiVersion}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/restapi/${apiVersion}`);
```

- `apiVersion`'s default value is `v1.0`

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/GetVersionResponse.yaml)

## check health

HTTP GET /scim/health

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/health');
```


Response body is empty

## Get Service Provider Configuration

HTTP GET /scim/v2/ServiceProviderConfig

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/ServiceProviderConfig');
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/ServiceProviderConfig.yaml)

## Search or List Users

HTTP GET /scim/v2/Users

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

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserSearchResponse.yaml)

## Create User

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

## Search or List Users

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserSearchResponse.yaml)

## Get User

HTTP GET /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get(`/scim/v2/Users/${id}`);
```


You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

## Update/Replace User

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

## Delete User

HTTP DELETE /scim/v2/Users/{id}

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.delete(`/scim/v2/Users/${id}`);
```


Response body is empty

## Update/Patch User

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
}
```

You can get response json data by `const json = await r.json()`

- `json` is an object with [this definition](./definitions/UserResponse.yaml)

## check health

HTTP GET /scim/v2/health

```js
const SDK = require('ringcentral');
const rcsdk = new SDK({server: 'serverURL', appKey: 'clientId', appSecret: 'clientSecret'});
const platform = rcsdk.platform();
await platform.login({ username: 'username', extension: 'extension', password: 'password' });
const r = await platform.get('/scim/v2/health');
```


Response body is empty