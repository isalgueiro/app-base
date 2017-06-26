import { Component, OnInit } from '@angular/core';
import { IWidgetSchema, IReportSchema, IFormSchema } from 'app/core/shared/_data/schema.model';

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
          key: 'aprobe',
          icon: 'icon-check'
        },
        {
          label: 'Out',
          key: 'reject',
          icon: 'icon-cross'
        },
        {
          label: 'Del',
          key: 'delete',
          icon: 'icon-delete'
        },
      ]
    };
    this.createFormSchema = {
      title: 'New User',
      submitLabel: 'Save User',
      controls: [
        {
          key: 'name',
          type: 'text',
          label: 'Name',
          validators: [{ key: 'required', errorMessage: 'Name is required' }]
        },
        {
          key: 'phone',
          type: 'text',
          label: 'Phone',
          validators: []
        }
        ,
        {
          key: 'email',
          type: 'email',
          label: 'Email',
          validators: [{ key: 'required', errorMessage: 'Email is required' }]
        },
      ]
    };
    this.users = [
      {
        name: 'pepe perez',
        email: 'pp@per.es'
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
