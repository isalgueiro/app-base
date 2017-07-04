import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationHomeComponent } from 'app/routes/organization/organization-home/organization-home.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
