import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema, IFormSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/bus.service';
import { ROLE, STATUS } from 'app/core/shared/_data/user.model';

@Component({
  selector: 'ab-god-users',
  templateUrl: './god-users.component.html',
  styles: []
})
export class GodUsersComponent implements OnInit {
  actionSchema: IWidgetSchema;
  reportSchema: IReportSchema;
  createFormSchema: IFormSchema;
  users: any[];
  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.actionSchema == null)
      .subscribe(schemas => {
        if (schemas && schemas.metadata && schemas.metadata.name === 'god_users') {
          this.actionSchema = schemas.actions;
          this.createFormSchema = schemas.create;
          this.reportSchema = schemas.report;
          this.getUsers();
        }
      });
  }

  getUsers() {
    this.users = [
      {
        name: 'pepe perez',
        email: 'pp@per.es',
        phone: '345345765',
        status: STATUS.PENDING,
        roles: [ROLE.ADMIN]
      },
      {
        name: 'jhon doe',
        email: 'j@do.es',
        phone: '98734556',
        status: STATUS.ACTIVE,
        roles: [ROLE.GOD]
      }
    ]
  }
  onCreate(data) {
    console.log('creating user: ', data);
  }
  onDelete(data) {
    console.log('deleting user: ', data);
  }
  onRowAction(data) {
    console.log('action over user: ', data);
  }
}
