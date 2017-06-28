interface IConfiguration {
  host?: string;
  port?: any;
  database?: string;
  username?: string;
  password?: string;
}

export enum STAGES {
  prod = 'prod',
  dev = 'dev'
}

export interface ISettings {
  env: STAGES;
  port: any;
  secret: string;
  database: IConfiguration;
  mailerSettings: IMailerSettings;
  path: string;
}

export interface IMailerSettings {
  service?: string;
  port?: any;
  host?: string;
  auth: {
    user: string;
    pass: string;
  };
  secure: any;
  ignoreTLS?: any;
  requireTLS?: any;
}
