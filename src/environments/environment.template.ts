// production
export const environment1 = {
  production: true,
  appName: 'AppBase',
  appTitle: 'App Base',
  apiUrl: 'http://beta.appbase.agorabinaria.com/api/',
  assetsUrl: 'http://beta.appbase.agorabinaria.com/',
  secret: 'secret',
  godEmail: 'admin@agorabinaria.com'
};

// dev, remote server
export const environment2 = {
  production: false,
  appName: 'AppBase',
  appTitle: 'App Base',
  apiUrl: 'http://beta.appbase.agorabinaria.com/api/',
  assetsUrl: 'http://localhost:4200/',
  secret: 'secret',
  godEmail: 'admin@agorabinaria.com'
};

// dev, local server
export const environment3 = {
  production: false,
  appName: 'AppBase',
  appTitle: 'App Base',
  apiUrl: 'http://localhost:2000/api/',
  assetsUrl: 'http://localhost:4200/',
  secret: 'secret',
  godEmail: 'admin@agorabinaria.com'
};
