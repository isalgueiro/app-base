import { MeService } from '../_data/me.service';
import { BusService } from '../../../core/bus.service';
import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema, IFormSchema } from 'app/core/shared/_data/schema.model';
import { ROLE, STATUS } from 'app/core/shared/_data/user.model';

@Component({
  selector: 'ab-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
actionSchema: IWidgetSchema;
  reportSchema: IReportSchema;
  createFormSchema: IFormSchema;
  users: any[];
  constructor(private bus: BusService, private me: MeService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.actionSchema == null)
      .subscribe(schemas => {
        if (schemas && schemas.actions) {
          this.actionSchema = schemas.actions;
          this.createFormSchema = schemas.create;
          this.reportSchema = schemas.report;
          this.getUsers();
        }
      });
  }

  getUsers() {
    this.me.getAdministratedUsers().subscribe(
      users=> this.users=users);
  }

}
