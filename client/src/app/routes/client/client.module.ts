import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client.routing';
import { ClientBookingsComponent } from './client-bookings/client-bookings.component';
import { ClientBookingsEditComponent } from './client-bookings-edit/client-bookings-edit.component';
import { ClientHomeComponent } from './client-home/client-home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [ClientBookingsComponent, ClientBookingsEditComponent, ClientHomeComponent]
})
export class ClientModule { }
