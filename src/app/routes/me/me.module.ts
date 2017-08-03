import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MeComponent } from './me/me.component';
import { SharedModule } from 'app/core/shared/shared.module';

import { MeRegisterComponent } from './me-register/me-register.component';
import { MeRoutingModule } from 'app/routes/me/me.routing';
import { MeService } from 'app/routes/me/_data/me.service';
import { UsersComponent } from 'app/routes/me/users/users.component';

@NgModule({
  imports: [
    CommonModule,
    MeRoutingModule,
    SharedModule
  ],
  declarations: [MeComponent, MeRegisterComponent, UsersComponent],
  providers: [MeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MeModule { }
