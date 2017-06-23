import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GodRoutingModule } from './god.routing';
import { GodHomeComponent } from './god-home/god-home.component';
import { GodOrganizationsComponent } from './god-organizations/god-organizations.component';
import { SharedModule } from 'app/core/shared/shared.module';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import { GodOrganizationAdminComponent } from './god-organizations/god-organization-admin/god-organization-admin.component';
import { GodBigbangComponent } from 'app/routes/god/god-bigbang/bigbang.component';
import { GodOrganizationCreateComponent } from './god-organizations/god-organization-create/god-organization-create.component';
import { GodOrganizationsListComponent } from './god-organizations/god-organizations-list/god-organizations-list.component';
import { GodOrganizationsActionsComponent } from './god-organizations/god-organizations-actions/god-organizations-actions.component';
import { GodOrganizationDeleteComponent } from './god-organizations/god-organization-delete/god-organization-delete.component';

@NgModule({
  imports: [
    CommonModule,
    GodRoutingModule,
    SharedModule
  ],
  declarations: [
    GodBigbangComponent,
    GodHomeComponent,
    GodOrganizationsComponent,
    GodOrganizationAdminComponent,
    GodOrganizationCreateComponent,
    GodOrganizationsListComponent,
    GodOrganizationsActionsComponent,
    GodOrganizationDeleteComponent],
  providers: [GodDataService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class GodModule { }
