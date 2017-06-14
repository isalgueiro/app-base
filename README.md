# App-Base
Base for a great Application

- Angular 4
- NodeJS with TypeScript


## Build Distribution Client
```bash
$cd client
$npm run build
```

## Build Distribution Server
```bash
$cd server
$npm run build
```

## Init server with pm2 [ecosystem.json](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/#ecosystemjson)
```bash
$cd
$pm2 ecosystem.js
```
> Only first time

## Restart server with pm2
```bash
$pm2 restart 'id'
```