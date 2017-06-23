import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { MeComponent } from './me/me.component';
import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MeRoutingModule,
    SharedModule
  ],
  declarations: [MeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MeModule { }
