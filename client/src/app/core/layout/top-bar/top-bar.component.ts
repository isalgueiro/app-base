import { Component, OnInit } from '@angular/core';
import { BusService } from 'app/bus.service';
import { IUser } from 'app/core/shared/_data/user.model';
import { IMenuLink } from 'app/core/layout/_data/menu-link.model';
import { environment } from './../../../../environments/environment';
import { SecurityService } from 'app/core/shared/security.service';
@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInitials = '?';
  user: IUser = null;
  title = environment.appTitle;
  logOutActive: Boolean;
  menuLinks: IMenuLink[] = [
    {
      title: 'Home',
      href: ''
    }
  ];

  constructor(private bus: BusService, private security: SecurityService) { }

  ngOnInit() {
    this.onUserChange();
  }

  onLogOutClick() {
    this.logOutActive = false;
    this.security.logOutUser();
  }

  private onUserChange() {
    this.bus.getUser$()
      .subscribe(user => {
        this.user = user;
        if (this.user && this.user.name) {
          this.userInitials = this.user.name.substr(0, 2);
        }
      })
  }
}
