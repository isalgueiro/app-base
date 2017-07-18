import { SchemaService } from '../../../core/shared/_data/schema.service';
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
  public schemas: IWidgetSchema[] = [];
  public userSchema;
  public changePasswordSchema;
  public logoutSchema;
  public organizationsSchema;
  public organization: IOrganization = null;
  public godSchema;
  constructor(
    private security: SecurityService,
    private me: MeService,
    private bus: BusService,
    private schemaService: SchemaService) {
  }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .subscribe(schemas => {
        if (schemas != null) {
          this.godSchema = schemas.godSchema;
          this.userSchema = schemas.userSchema;
          this.organizationsSchema = schemas.organizationsSchema;
          this.changePasswordSchema = schemas.changePassword;
          this.logoutSchema = schemas.logoutSchema;
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
          this.userSchema.header.title = this.user.name;
          this.userSchema.header.subtitle = this.user.email;
          this.schemas.push(this.userSchema);
          this.configureDashBoard(this.user.roles[0].toString());
        }
      });
  }

  configureDashBoard(role: string) {
    if (role === ROLE.GOD) {
      this.configureDashBoardForGod();
    } else if (role === ROLE.ADMIN) {
      this.configureDashBoardForAdmin();
    }
  }

  configureDashBoardForGod() {
    this.schemas.push(this.godSchema);
    this.me.getOrganizationsCount()
      .subscribe(count => this.organizationsSchema.header.title = count + ' ' + this.organizationsSchema.header.title);
    this.me.getUsersCount()
      .subscribe(count => this.userSchema.header.title = count + ' ' + this.userSchema.header.title);
  }

  configureDashBoardForAdmin() {
    this.me.getAdministratedOrganization(this.user.organizationId).subscribe(organization => {
      this.organization = organization;
      if (this.organization) {
        // this.schemaService.populateDefaultValues(this.organizationsSchema, organization);
        this.organizationsSchema.header.title = this.organization.name;
        this.organizationsSchema.header.subtitle = this.organization.description;
        this.organizationsSchema.actions[0].link = `/organization/${this.organization.slug}`;
        this.schemas.push(this.organizationsSchema);
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
