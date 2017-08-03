import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GodOrganizationsComponent } from 'app/routes/god/god-organizations/god-organizations.component';
import { GodUsersComponent } from './god-users/god-users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'organizations',
    pathMatch: 'full'
  },
  {
    path: 'organizations',
    component: GodOrganizationsComponent,
    data: { name: 'god_organizations', title: 'Organizations' }
  },
  {
    path: 'users',
    component: GodUsersComponent,
    data: { name: 'god_users', title: 'Users' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GodRoutingModule { }
