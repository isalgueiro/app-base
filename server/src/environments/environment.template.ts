import { ISettings } from './../app/core/shared/models';

const isProd = (process.env.NODE_ENV === 'prod');

const settingsProd: ISettings = {
  port: 2000,
  secret: 'secret',
  database: 'bookings',
  username: '',
  password: '',
  host: 'localhost',
  mailerSettings: {
    port: 0,
    host: "",
    secure: false,
    ignoreTLS: true,
    auth: {
      user: "",
      pass: ""
    },
  }
};

const settingsDev: ISettings = {
  port: 3000,
  secret: 'secret',
  database: 'base',
  username: '',
  password: '',
  host: 'localhost',
  mailerSettings: {
    host: "",
    port: 0,
    secure: false,
    ignoreTLS: true,
    auth: {
      user: "",
      pass: ""
    },
  }
};

export const SETTINGS = (isProd) ? settingsProd : settingsDev;
