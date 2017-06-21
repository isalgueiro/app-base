import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IReportSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-organizations-list',
  templateUrl: './god-organizations-list.component.html',
  styles: []
})
export class GodOrganizationsListComponent implements OnInit {
  @Input() public organizations: any[];
  @Output() public setAdmin = new EventEmitter<any>();
  @Output() public deleteOrganization = new EventEmitter<any>();
  public schema: IReportSchema;

  constructor() { }

  ngOnInit() {
    this.schema = {
      header: {
        title: 'List of Organizations'
      },
      emptyMessage: 'There aren\'t any organizations to display :(',
      fields: [
        {
          label: 'Organization',
          key: 'name',
          type: 'string'
        },
        {
          label: 'Administrator',
          key: 'admin.name',
          type: 'string'
        },
        {
          label: 'Email',
          key: 'admin.email',
          type: 'string'
        }
      ], actions: [
        {
          label: 'Adm',
          value: 'setAdmin',
          icon: 'icon-people'
        },
        {
          label: 'Del',
          value: 'delete',
          icon: 'icon-delete'
        },
      ]
    }
  }
  onRowAction(rowAction) {
    if (rowAction.action.value === 'setAdmin') {
      this.setAdmin.emit(rowAction.row);
    } else if (rowAction.action.value === 'delete') {
      this.deleteOrganization.emit(rowAction.row);
    }
  }

  onSetAdminClick(organization) {
    this.setAdmin.emit(organization);
  }


}
