import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsherRoutingModule } from './usher.routing';
import { UsherEventsComponent } from './usher-events/usher-events.component';
import { UsherEventsBookingsComponent } from './usher-events-bookings/usher-events-bookings.component';

@NgModule({
  imports: [
    CommonModule,
    UsherRoutingModule
  ],
  declarations: [UsherEventsComponent, UsherEventsBookingsComponent]
})
export class UsherModule { }
