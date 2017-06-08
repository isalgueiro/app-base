import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'app/core/shared/shared.module';
import { LoginService } from 'app/routes/login/_data/login.service';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
