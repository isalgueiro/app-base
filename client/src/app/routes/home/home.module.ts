import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { OrganizationsService } from 'app/routes/home/_data/organizations.service';
import { SharedModule } from 'app/core/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent],
  providers: [OrganizationsService],
  exports: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
