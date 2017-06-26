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
$cp src/environment/environment.template.ts src/environment/environment.ts
```

# Start server
```bash
$npm run start
```

# Enviroments
Can set NODE_ENV to execute production or develpment. If NODE_ENV is 'prod' then execute with production settings othercase execute with deveploment settings.

By default using npm run start execute dev mode, if run npm run start:prod execute prod mode.

# Test
```bash
$npm run test
```

# Generate bundle and transpile
```bash
$npm run build
$pm2 start ecosystem.json
```

# Why exceptions file
To provide a common errors for HTTP request.

# [Ecosystem](http://pm2.keymetrics.io/docs/usage/deployment/)
Use ecosystem json provide a better manage of app configuration
```json
{
  "apps" : [
        {
            "name"        : "app-base",
            "script"      : "backend.js",
            "merge_logs"  : true,
            "cwd"         : "absolute path to dist/server",
            "env" : {
               "NODE_ENV": "prod"
            }
        }
  ]
}
```


