import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routeBase = './../../routes/';
const routes: Routes = [
  {
    path: '',
    loadChildren: routeBase + 'home/home.module#HomeModule'
  },
  {
    path: 'god',
    loadChildren: routeBase + 'god/god.module#GodModule'
  },
  {
    path: 'login',
    loadChildren: routeBase + 'login/login.module#LoginModule'
  },
  {
    path: 'me',
    loadChildren: routeBase + 'me/me.module#MeModule'
  },
  {
    path: 'organization/:id',
    loadChildren: routeBase + 'organization/organization.module#OrganizationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
