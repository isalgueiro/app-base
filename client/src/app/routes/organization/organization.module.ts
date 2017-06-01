import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationEventsComponent } from './organization-events/organization-events.component';
import { OrganizationEventsBookComponent } from './organization-events-book/organization-events-book.component';
import { OrganizationHomeComponent } from './organization-home/organization-home.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [OrganizationEventsComponent, OrganizationEventsBookComponent, OrganizationHomeComponent]
})
export class OrganizationModule { }
