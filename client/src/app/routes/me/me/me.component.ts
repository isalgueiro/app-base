import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { MeService } from 'app/routes/me/me.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  user: IUser = null;
  logOutActive: Boolean;
  public schemas: IWidgetSchema[] = [];

  constructor(private security: SecurityService, private me: MeService) { }

  ngOnInit() {
    this.getMe();
  }

  onSend(event) {
    this.onLogOutClick();
  }
  onLogOutClick() {
    this.logOutActive = false;
    this.security.logOutUser();
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => {
        this.user = user;
        this.configureDashBoard(this.user.roles[0].toString())
      });
  }

  configureDashBoard(role: string) {
    // To Do: swith by Role
    this.schemas = [
      {
        header: {
          title: this.user.name,
          subtitle: this.user.email
        },
        actions: [
          {
            label: 'Log Out',
            value: 'logout'
          }
        ]
      }
    ];
    this.me.getOrganizationsCount().subscribe(count => {
      this.schemas.push(
        {
          header: {
            title: count + ' Organizations',
            subtitle: 'Entities with an administrator, several organizers and its own events and users',
            icon: 'icon-flag'
          },
          actions: [
            {
              label: 'Manage organizations',
              link: '/god/organizations'
            }
          ]
        });
    });
  }
}
