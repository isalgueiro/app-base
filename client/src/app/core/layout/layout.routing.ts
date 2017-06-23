import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routeBase = './../../routes/';
const routes: Routes = [
  {
    path: '',
    loadChildren: routeBase + 'home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: routeBase + 'admin/admin.module#AdminModule'
  },
  {
    path: 'bookings',
    loadChildren: routeBase + 'bookings/bookings.module#BookingsModule'
  },
  {
    path: 'client',
    loadChildren: routeBase + 'client/client.module#ClientModule'
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
    path: 'org/:organizationName',
    loadChildren: routeBase + 'organization/organization.module#OrganizationModule'
  },
  {
    path: 'organizer',
    loadChildren: routeBase + 'organizer/organizer.module#OrganizerModule'
  },
  {
    path: 'usher',
    loadChildren: routeBase + 'usher/usher.module#UsherModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
