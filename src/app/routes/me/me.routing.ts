import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from 'app/routes/me/me/me.component';
import { MeRegisterComponent } from 'app/routes/me/me-register/me-register.component';
import { UsersComponent } from 'app/routes/me/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MeComponent,
    data: { name: 'me', title: 'My profile' }
  },
  {
    path: ':hash',
    component: MeRegisterComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { name: 'users', title: 'Users' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
