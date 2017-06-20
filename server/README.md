# Servidor 



# Prerequisites
* Node 7.6 or better.

> Note: Node with support for async/await.

# Recomended
* Visual Studio Code

## Plugins
* [TS Lint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)
* [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
* [Auto import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
* [API Elements](https://marketplace.visualstudio.com/items?itemName=vncz.vscode-apielements)

# Install dependencies
```bash
$npm install
```

# Configure
Generate enviroments.ts, and fill with your configuration.
```
$cp environment/environment.template.ts environment/environment.ts
```

# Start server
```bash
$npm run reload 
```
> Note: Auto refresh when changes files on src
```bash
$npm run start
```

# Enviroments
Can set NODE_ENV to execute production or develpment. If NODE_ENV is 'prod' then execute with production settings othercase execute with deveploment settings.

By default using npm run start execute dev mode, if run npm run start:prod execute prod mode.

# Project Structure
```bash
server
|-- src
|    |-- modules
|    |   |-- application: 'Main module'
|    |          |-- application.module.ts: 'The main module to start all modules'
|    |   |-- users: 'Content users controller and respository'
|    |          |-- users.controller.ts: 'The controller for routes'
|    |          |-- users.service.ts: 'The service to access to data'
|    |          |-- users.service.ts: 'The middleware to users routes'
|    |          |-- users.module.ts: 'The module, import depencencies and export services'
|    |          |-- users.exceptions.ts: 'This file provide all exceptions for users.'
|    |-- utils
|    |    |-- exceptions.ts: 'Exceptions constructor'
|    |-- index.ts : 'Content server init logic'
|-- index.js : 'Launch app, calling ts-node and our init server'
```


# Test
```bash
$npm run test
```

# Generate bundle and transpile
```bash
$npm run build:complete
$npm run start:prod
```

# Why exceptions file
To provide a common errors for HTTP request.



