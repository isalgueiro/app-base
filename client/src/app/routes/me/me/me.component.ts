import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  user: IUser = null;
  logOutActive: Boolean;

  // To Do: Dashboard based on roles

  constructor(private security: SecurityService) { }

  ngOnInit() {
    this.getMe();
  }

  onLogOutClick() {
    this.logOutActive = false;
    this.security.logOutUser();
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => this.user = user);
  }
}
