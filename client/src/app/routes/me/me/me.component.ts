import { Component, OnInit } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { MeService, IOrganization } from 'app/routes/me/me.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  user: IUser = null;
  logOutActive: Boolean;
  changePasswordActive: Boolean;
  public schemas: IWidgetSchema[] = [];
  organization: IOrganization = null;
  constructor(private security: SecurityService, private me: MeService) { }

  ngOnInit() {
    this.getMe();
  }

  onSend(event) {
    console.log('onSend', event);
    if (event.key === 'logout') {
      this.logOutActive = true;
    } else if (event.key === 'change_password') {
      this.changePasswordActive = true;
    }
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
        if (this.user) {
          this.me
            .getSchema()
            .subscribe(s => {
              this.schemas = s;
              this.configureDashBoard(this.user.roles[0].toString());
            });
        }
      });
  }

  configureDashBoard(role: string) {
    // this.schemas = [
    //   {
    //     header: {
    //       title: this.user.name,
    //       subtitle: this.user.email
    //     },
    //     actions: [
    //       {
    //         label: 'Log Out',
    //         key: 'logout',
    //         icon: 'icon-shutdown'
    //       },
    //       {
    //         label: 'Change Password',
    //         key: 'change_password',
    //         icon: 'icon-people'
    //       }
    //     ]
    //   }
    // ];
    if (role === 'GOD') {
      this.configureDashBoardForGod();
    } else if (role === 'ADMIN') {
      this.configureDashBoardForAdmin();
    }
  }

  configureDashBoardForGod() {
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
    this.me.getUsersCount().subscribe(count => {
      this.schemas.push(
        {
          header: {
            title: count + ' Users',
            subtitle: 'Users, statuses and roles',
            icon: 'icon-people'
          },
          actions: [
            {
              label: 'Manage Users',
              link: '/god/users'
            }
          ]
        });
    });
  }

  configureDashBoardForAdmin() {
    this.me.getAdministratedOrganization(this.user.organizationId).subscribe(organization => {
      this.organization = organization;
      this.schemas.push(
        {
          header: {
            title: this.organization.name,
            subtitle: 'Entities with an administrator, several organizers and its own events and users',
            icon: 'icon-flag'
          },
          actions: [
            {
              label: 'Manage my Org',
              link: `/organization/${this.organization.slug}`
            }
          ]
        });
    });
  }
}
