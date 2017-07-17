import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/routes/home/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  data: { title: 'App Base' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
