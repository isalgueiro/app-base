import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { BookinsEditComponent } from './bookins-edit/bookins-edit.component';

@NgModule({
  imports: [
    CommonModule,
    BookingsRoutingModule
  ],
  declarations: [BookinsEditComponent]
})
export class BookingsModule { }
