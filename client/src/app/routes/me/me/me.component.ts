import { Component, OnInit } from '@angular/core';
import { IUser, ROLE } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { MeService, IOrganization } from 'app/routes/me/me.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  loadedMetadata = false;
  user: IUser = null;
  logOutActive: Boolean;
  changePasswordActive: Boolean;
  public schemas: IWidgetSchema[] = [];
  public changePassSchema;
  organization: IOrganization = null;
  constructor(private security: SecurityService, private me: MeService) { }

  ngOnInit() {
    this.getMe();
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => {
        this.user = user;
        if (this.user) {
          this.me
            .getMeSchema()
            .subscribe(s => {
              this.schemas = s;
              this.configureDashBoard(this.user.roles[0].toString());
            });
          this.me.getChangePasswordSchema()
            .subscribe(s => this.changePassSchema = s);
        }
      });
  }

  configureDashBoard(role: string) {
    this.schemas[0].header.title = this.user.name;
    this.schemas[0].header.subtitle = this.user.email;

    if (role === ROLE.GOD) {
      this.configureDashBoardForGod();
    } else if (role === ROLE.ADMIN) {
      this.configureDashBoardForAdmin();
    }
  }

  configureDashBoardForGod() {
    this.me
      .getMeGodSchema()
      .subscribe(s => {
        this.schemas = this.schemas.concat(s);
        this.loadedMetadata = true;
        this.me.getOrganizationsCount()
          .subscribe(count => this.schemas[1].header.title = count + ' ' + this.schemas[1].header.title);
        this.me.getUsersCount()
          .subscribe(count => this.schemas[2].header.title = count + ' ' + this.schemas[2].header.title);
      });
  }

  configureDashBoardForAdmin() {
    // TO DO: use schema for each role
    this.me.getAdministratedOrganization(this.user.organizationId).subscribe(organization => {
      this.organization = organization;
      this.schemas.push(
        {
          header: {
            title: this.organization.name,
            subtitle: this.organization.description,
            icon: 'icon-flag'
          },
          actions: [
            {
              label: `Manage ${this.organization.name}`,
              link: `/organization/${this.organization.slug}`
            }
          ]
        });
    });
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
  onChangePasswordClick(newPassword) {
    this.changePasswordActive = false;
    console.warn('onChangePasswordClick', newPassword);
  }
}
