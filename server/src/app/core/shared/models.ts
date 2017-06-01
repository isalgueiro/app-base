export interface ISettings {
    port: number;
    secret: string;
    database: string;
    username: string;
    password: string;
    host: string;
    mailerSettings: IMailerSettings;

}

export interface IMailerSettings {
    service?: string;
    port?: number;
    host?: string;
    auth: {
        user: string;
        pass: string;
    };
    secure: boolean;
    ignoreTLS?: boolean;
    requireTLS?: boolean;
}