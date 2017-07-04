import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization.routing';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ],
  declarations: [OrganizationHomeComponent]
})
export class OrganizationModule { }
