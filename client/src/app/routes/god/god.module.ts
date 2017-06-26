import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodRoutingModule } from './god.routing';
import { SharedModule } from 'app/core/shared/shared.module';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import { GodOrganizationAdminComponent } from './god-organizations/god-organization-admin/god-organization-admin.component';
import { GodBigbangComponent } from 'app/routes/god/god-bigbang/bigbang.component';
import { GodUsersComponent } from './god-users/god-users.component';
import { GodOrganizationsComponent } from 'app/routes/god/god-organizations/god-organizations.component';

@NgModule({
  imports: [
    CommonModule,
    GodRoutingModule,
    SharedModule
  ],
  declarations: [
    GodBigbangComponent,
    GodOrganizationsComponent,
    GodOrganizationAdminComponent,
    GodUsersComponent],
  providers: [GodDataService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GodModule { }
