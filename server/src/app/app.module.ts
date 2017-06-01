import { Module } from '@nestjs/common';
import { SharedModule } from './core/shared/shared.module';
import { CredentialsModule } from './routes/credentials/credentials.module';
import { MailsModule } from './routes/mails/mails.module';
import { OrganizationsModule } from "./routes/organizations/organizations.module";
import { UsersModule } from './routes/users/users.module';

@Module({
  modules: [SharedModule, CredentialsModule, OrganizationsModule, UsersModule, MailsModule],
})
export class AppModule { }
// CredentialsModule, OrganizationsModule, UsersModule, MailsModule
