import { STAGES } from './../app/core/shared/enums';
import { ISettings } from './../app/core/shared/models';

const settings: ISettings = {
  env: STAGES[process.env.env] || STAGES.dev,
  port: process.env.port || 2000,
  secret: 'secret',
  godEmail: 'admin@agorabinaria.com',
  database: {
    database: process.env.database_name || 'base',
    username: process.env.database_username || '',
    password: process.env.database_password || '',
    host: process.env.database_host || 'localhost',
    port: process.env.database_port || 27017,
  },
  mailerSettings: {
    port: process.env.mailer_port || 0,
    host: process.env.mailer_host || "",
    secure: process.env.mailer_secure || false,
    ignoreTLS: process.env.mailer_ignoreTLS || true,
    auth: {
      user: process.env.mailer_user || "",
      pass: process.env.mailer_pass || ""
    },
  },
  path: process.env.prod_path || '',
};

export const SETTINGS = settings;
