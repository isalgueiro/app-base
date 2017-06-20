App-Base
===========

Base for a great Application

- Angular 4
- NodeJS with TypeScript

Development
-----------

> Start MongoDB localhost:2020

### Run Development Server
```bash
$cd server
$cp environment/environment.template.ts environment/environment.ts
$npm i
$npm start
```

### Run Development Client
```bash
$cd client
$npm i
$npm start
```

- http://localhost:4200
- http://localhost:4200/god/bigbang
- http://localhost:4200/god/


Distribution
------------
### Build Distribution Client
```bash
$cd client
$npm run build
```

### Build Distribution Client
```bash
$cd client
$npm run build
```

### Build Distribution Server
```bash
$cd server
$npm run build
```

### Init server with pm2 
More about [ecosystem.json](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#ecosystemjson)
```bash
$cd
$pm2 ecosystem.js
```
> Only first time

### Restart server with pm2
```bash
$pm2 restart 'id'
```