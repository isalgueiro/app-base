import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, Router, ActivatedRoute } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';



const routes: Routes = [{
  path: '',
  component: MessagesComponent,
  data: { name: 'messages', title: 'Messages' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }

