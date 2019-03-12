# Sample code generator

## Setup

```
yarn install
cp .env.sample .env
```

Edit `.env` file to specify the path to swagger spec file.


## Run


```
yarn generate
```


## todo

- Support query parameters

```
{ tags: [ 'Posts' ],
  summary: 'Update Post',
  operationId: 'updateGlipPostText',
  description: 'Modifies text of a post.',
  produces: [ 'text/plain', 'application/json' ],
  consumes: [ 'text/*' ],
  parameters:
   [ { name: 'groupId',
       in: 'path',
       description: 'Internal identifier of a group',
       required: true,
       type: 'string' },
     { name: 'postId',
       in: 'path',
       description: 'Internal identifier of a post',
       required: true,
       type: 'string' },
     { name: 'text', in: 'body', required: true, schema: [Object] } ],
  responses:
   { '200': { description: 'OK', schema: [Object] },
     '400':
      { description: 'Some of parameters are missing or have invalid format.' },
     '403': { description: 'Forbidden' } },
  'x-api-group': 'glip/posts',
  'x-metered-api': true,
  'x-metering-group': 'System',
  'x-rewrite-uri-from': '/restapi/v1.0/glip/groups/([0-9]+)/posts/([0-9]+)/text',
  'x-rewrite-uri-to': '/glip/v1/groups/$1/posts/$2/text',
  'x-docs-level': 'Public',
  'x-app-permission': 'Glip',
  'x-user-permission': 'Glip',
  'x-throttling-group': 'Medium' }
```
