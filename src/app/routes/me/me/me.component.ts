import { Component, OnInit } from '@angular/core';
import { IUser, ROLE } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/bus.service';
import 'rxjs/add/operator/takeWhile';
import { IOrganization, MeService } from 'app/routes/me/_data/me.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  public user: IUser = null;
  public logOutActive: Boolean;
  public changePasswordActive: Boolean;
  public schemas: IWidgetSchema[];
  public changePassSchema;
  public organization: IOrganization = null;

  constructor(
    private security: SecurityService,
    private me: MeService,
    private bus: BusService) {
    console.log('constructor');
  }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schemas == null)
      .subscribe(schema => {
        if (schema[0] && schema[0].header) {
          this.schemas = schema;
          this.getMe();
        }
      });
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => {
        this.user = user;
        if (this.user) {
          this.configureDashBoard(this.user.roles[0].toString());
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
        this.me.getOrganizationsCount()
          .subscribe(count => this.schemas[1].header.title = count + ' ' + this.schemas[1].header.title);
        this.me.getUsersCount()
          .subscribe(count => this.schemas[2].header.title = count + ' ' + this.schemas[2].header.title);
      });
  }

  configureDashBoardForAdmin() {
    this.me.getAdministratedOrganization(this.user.organizationId).subscribe(organization => {
      this.organization = organization;
      if (this.organization) {
        this.me
          .getMeOrganizationsSchema()
          .subscribe(s => {
            this.schemas = this.schemas.concat(s);
            // TODO factorize this
            this.schemas[1].header.title = this.organization.name;
            this.schemas[1].header.subtitle = this.organization.description;
            this.schemas[1].actions[0].label = `Manage ${this.organization.name}`;
            this.schemas[1].actions[0].link = `/organization/${this.organization.slug}`;
          });
      }

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
    this.me.changePassword(newPassword).subscribe();
    this.changePasswordActive = false;
  }
}
