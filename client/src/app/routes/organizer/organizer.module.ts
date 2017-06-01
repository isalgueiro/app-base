import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import { OrganizerEventsComponent } from './organizer-events/organizer-events.component';
import { OrganizerEventsCreateComponent } from './organizer-events-create/organizer-events-create.component';
import { OrganizerEventsEditComponent } from './organizer-events-edit/organizer-events-edit.component';
import { OrganizerHomeComponent } from './organizer-home/organizer-home.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizerRoutingModule
  ],
  declarations: [OrganizerEventsComponent, OrganizerEventsCreateComponent, OrganizerEventsEditComponent, OrganizerHomeComponent]
})
export class OrganizerModule { }
