import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from 'app/routes/login/login/login.component';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  data: { name: 'login' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

