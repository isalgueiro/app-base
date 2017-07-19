import { Component, OnInit } from '@angular/core';
import { IUser, ROLE } from 'app/core/shared/_data/user.model';
import { SecurityService } from 'app/core/security.service';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/bus.service';
import 'rxjs/add/operator/takeWhile';
import { IOrganization, MeService } from 'app/routes/me/_data/me.service';
import { SchemaService } from 'app/core/shared/_data/schema.service';

@Component({
  selector: 'ab-me',
  templateUrl: './me.component.html',
  styles: []
})
export class MeComponent implements OnInit {
  public schema;
  public widgetsSchema: IWidgetSchema[];

  public user: IUser = null;
  public logOutActive: Boolean;
  public changePasswordActive: Boolean;

  public organization: IOrganization = null;

  constructor(
    private security: SecurityService,
    private me: MeService,
    private bus: BusService,
    private schemaService: SchemaService) {
  }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.userSchema) {
          this.schema = null;
          this.schema = Object.assign({}, schema);
          this.getMe();
        }
      });
  }

  getMe() {
    this.security
      .getMe()
      .subscribe(user => {
        if (user) {
          this.user = user;
          this.widgetsSchema = [];
          const userSchema = this.schema.userSchema;
          userSchema.header.title = this.user.name;
          userSchema.header.subtitle = this.user.email;
          this.widgetsSchema.push(userSchema);
          const userRole = this.user.roles[0].toString().toLowerCase();
          const roleSchema = this.schema[userRole];
          this.configureRoleSchema(userRole, roleSchema);
          this.widgetsSchema = this.widgetsSchema.concat(roleSchema);
        }
      });
  }



  configureRoleSchema(userRole, roleSchema) {
    if (userRole === ROLE.GOD.toString().toLowerCase()) {
      this.me.getOrganizationsCount()
        .subscribe(count => roleSchema[0].header.title = count + ' ' + roleSchema[0].header.title);
      this.me.getUsersCount()
        .subscribe(count => roleSchema[1].header.title = count + ' ' + roleSchema[1].header.title);
    } else {
      this.me.getAdministratedOrganization(this.user.organizationId)
        .subscribe(organization => {
          this.organization = organization;
          if (this.organization) {
            roleSchema.header.title = this.organization.name;
            roleSchema.header.subtitle = this.organization.description;
            roleSchema.actions[0].link = `/organization/${this.organization.slug}`;
          }
        });
    }
  }

  onSend(event) {
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
