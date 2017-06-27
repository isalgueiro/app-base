import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { BusService } from "app/core/bus.service";
import { IUser } from "app/core/shared/_data/user.model";
import { IAction } from "app/core/shared/_data/schema.model";

@Component({
  selector: 'ab-main-nav',
  templateUrl: './main-nav.component.html',
  styles: []
})
export class MainNavComponent implements OnInit {
  title = environment.appTitle;
  user: IUser = null;
  menuLinks: IAction[] = [
    {
      icon: 'icon-apps',
      label: 'Home',
      link: ''
    }
  ];
  constructor(private bus: BusService) { }

  ngOnInit() {
    this.onUserChange();
  }

  private onUserChange() {
    this.bus.getUser$()
      .subscribe(user => {
        this.user = user;
      })
  }

}
