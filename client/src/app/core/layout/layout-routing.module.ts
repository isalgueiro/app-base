import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './../../routes/home/home.module#HomeModule'
  },
  {
    path: 'admin',
    loadChildren: './../../routes/admin/admin.module#AdminModule'
  },
  {
    path: 'bookings',
    loadChildren: './../../routes/bookings/bookings.module#BookingsModule'
  },
  {
    path: 'client',
    loadChildren: './../../routes/client/client.module#ClientModule'
  },
  {
    path: 'god',
    loadChildren: './../../routes/god/god.module#GodModule'
  },
  {
    path: 'login',
    loadChildren: './../../routes/login/login.module#LoginModule'
  },
  {
    path: 'org/:organizationName',
    loadChildren: './../../routes/organization/organization.module#OrganizationModule'
  },
  {
    path: 'organizer',
    loadChildren: './../../routes/organizer/organizer.module#OrganizerModule'
  },
  {
    path: 'usher',
    loadChildren: './../../routes/usher/usher.module#UsherModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
