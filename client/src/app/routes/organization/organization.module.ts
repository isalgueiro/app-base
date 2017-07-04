import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization.routing';
import { OrganizationEventsComponent } from './organization-events/organization-events.component';
import { OrganizationEventsBookComponent } from './organization-events-book/organization-events-book.component';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';
import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule
  ],
  declarations: [OrganizationEventsComponent, OrganizationEventsBookComponent, OrganizationHomeComponent]
})
export class OrganizationModule { }
