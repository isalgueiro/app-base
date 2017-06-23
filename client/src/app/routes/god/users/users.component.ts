import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  actionSchema: IWidgetSchema;
  reportSchema: IReportSchema;
  users: any[];
  constructor() { }

  ngOnInit() {
    this.actionSchema = {
      header: {
        title: 'Users',
        subtitle: 'Users, statuses and roles',
        icon: 'icon-people'
      },
      actions: [
        {
          label: 'Create New',
          key: 'create_new'
        }
      ]
    };
    this.reportSchema = {
      header: {
        title: 'List of Users'
      },
      emptyMessage: 'There aren\'t any users to display :(',
      fields: [
        {
          label: 'User',
          key: 'name',
          type: 'string'
        },
        {
          label: 'Email',
          key: 'email',
          type: 'string'
        },
        ,
        {
          label: 'Status',
          key: 'status',
          type: 'string'
        },
        ,
        {
          label: 'Roles',
          key: 'roles',
          type: 'string'
        }
      ], actions: [
        {
          label: 'In',
          value: 'aprobe',
          icon: 'icon-check'
        },
        {
          label: 'Out',
          value: 'reject',
          icon: 'icon-cross'
        },
        {
          label: 'Del',
          value: 'delete',
          icon: 'icon-delete'
        },
      ]
    };
    this.users = [
      {
        name: 'pepe',
        email: 'p@p-es'
      }
    ]
  }

  onCreate() {
    console.log('creating users');
  }
  onRowAction() {
    console.log('action over users');
  }
}
