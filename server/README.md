# Servidor reserva-escola
Reservas para Escolas de Hostelaría


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

# Start server
```bash
$npm run reload 
```
> Note: Auto refresh when changes files on src
```bash
$npm run start
```

# Enviroments
Can set NODE_ENV to execute production or develpment. If NODE_ENV is 'production' then execute with production settings othercase execute with deveploment settings.

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

# Why exceptions file
To provide a common errors for HTTP request.

# Middleware
There is a [middleware](https://github.com/AgoraBinaria/reserva-escola/blob/master/server/src/modules/users/users.middleware.ts) for users routes. This middleware validate that in request header appear a field 'name' which contain the name from one of the users in the database. This is apply to all users routes.

The other [middleware](https://github.com/AgoraBinaria/reserva-escola/blob/master/server/src/modules/users/users2.middleware.ts) only validate in delete route, and test if the user will delete himself.

# TODO
* Validate and test the transpile.
