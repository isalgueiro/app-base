import { Module } from '@nestjs/common';
import { SharedModule } from '../../core/shared/shared.module';
import { UsersModule } from '../users/users.module';
import { CredentialsController } from './credentials.controller';
import { CredentialsLogic } from "./credentials.logic";
import { CredentialsService } from './credentials.service';

@Module({
  components: [CredentialsLogic, CredentialsService],
  controllers: [CredentialsController],
  exports: [CredentialsLogic],
  modules: [UsersModule, SharedModule],
})
export class CredentialsModule {

}
