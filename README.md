App-Base
===========

Base for a great Application

- Angular 4
- NodeJS with TypeScript

Forks:
TO DO: clone or fork????
https://github.com/app-booking


Requirements
-----------
* npm 4.6 **no npm 5**
* See Install problems on Windows at the bottom
* Start MongoDB
* Edit configuration in [server](https://github.com/AgoraBinaria/app-base/blob/master/server/README.md#configure)

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
- http://localhost:4200/god/organizations
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
$pm2 start ecosystem.json
```
> Only first time

### Restart server with pm2
```bash
$pm2 restart 'id'
```


## Install Problems
* [node-gyp](https://github.com/nodejs/node-gyp)
* [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools/issues/20)
