import { Module } from '@nestjs/common';
import { UsersModule } from "../users/users.module";
import { SharedModule } from './../../core/shared/shared.module';
import { OrganizationsController } from "./organizations.controller";
import { OrganizationsService } from "./organizations.service";

@Module({
  components: [OrganizationsService],
  controllers: [OrganizationsController],
  exports: [],
  modules: [SharedModule, UsersModule],
})
export class OrganizationsModule {

}
