import { Component, OnInit } from '@angular/core';
import { IOrganizationAdmin } from 'app/routes/god/_data/organization.model';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import 'rxjs/add/operator/do';
import { BusService } from 'app/core/bus.service';
import { Level } from 'app/core/shared/_data/message.model';
import { IFormSchema, IWidgetSchema, IReportSchema } from 'app/core/shared/_data/schema.model';
@Component({
  selector: 'ab-god-organizations',
  templateUrl: './god-organizations.component.html',
  styles: []
})
export class GodOrganizationsComponent implements OnInit {
  public organizations: any[];
  // public organizationsFull: any[];
  public activeSetAdminModal = false;
  public activeCreateOrganizationModal = false;
  public activeDeleteOrganizationModal = false;
  public activeOrganization;

  public createFormSchema: IFormSchema = {
    title: 'New Organization',
    submitLabel: 'Save Organization',
    controls: [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        validators: [{ key: 'required', errorMessage: 'Name is required' }]
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [{ key: 'required', errorMessage: 'Email is required' }]
      },
    ]
  };

  public actionSchema: IWidgetSchema = {
    header: {
      title: 'Organizations',
      subtitle: 'Manage your organizations and its administrators',
      icon: 'icon-flag'
    },
    actions: [
      {
        label: 'Create New',
        key: 'create_new'
      }
    ]
  }

  public reportSchema: IReportSchema = {
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
        key: 'setAdmin',
        icon: 'icon-people'
      },
      {
        label: 'Del',
        key: 'delete',
        icon: 'icon-delete'
      },
    ]
  }

  constructor(private godData: GodDataService, private bus: BusService) { }

  ngOnInit() {
    this.getOrganizations();
    // this.godData
    //   .getOrganizationsFull()
    //   .subscribe(data => this.organizationsFull = data);
  }

  getOrganizations() {
    this.godData
      .getOrganizations()
      .do(data => this.organizations = data)
      .subscribe(this.getOrganizationsAdmins.bind(this));
  }

  getOrganizationsAdmins() {
    this.organizations.forEach(this.getOrganizationAdmin.bind(this));
  }

  getOrganizationAdmin(organization) {
    this.godData
      .getOrganizationAdmin(organization._id)
      .subscribe(user => organization.admin = user[0]);
  }

  onSetAdmin(organization) {
    this.activeOrganization = organization;
    this.activeSetAdminModal = true;
  }

  onCloseSetAdminModal(newAdmin) {
    if (newAdmin) {
      this.setOrganizationAdmin(newAdmin);
    }
    this.activeOrganization = null;
    this.activeSetAdminModal = false;
  }
  onRowAction(data) {
    console.log('onRowAction Receibed', data);
    if (data.action === 'setAdmin') {
      this.onSetAdmin(data.row);
    }
  }
  setOrganizationAdmin(newAdmin) {
    newAdmin.organizationId = this.activeOrganization._id;
    this.godData
      .setOrganizationAdmin(newAdmin)
      .subscribe(res => {
        this.bus.emit({ level: Level.SUCCESS, text: newAdmin.name + ' asiggned!!' });
        this.getOrganizations();
      });
  }

  onCreate(newOrganization) {
    console.log('onCreate', newOrganization);
    this.activeCreateOrganizationModal = false;
    if (newOrganization) {
      this.godData
        .postOrganization(newOrganization)
        .subscribe(res => {
          this.bus.emit({ level: Level.SUCCESS, text: newOrganization.name + ' created!!' });
          this.getOrganizations();
        });
    }
  }


  onDelete(oldOrganization) {
    console.log('onDelete', oldOrganization);
    this.activeDeleteOrganizationModal = false;
    this.godData
      .deleteOrganization(oldOrganization)
      .subscribe(res => {
        this.bus.emit({ level: Level.SUCCESS, text: oldOrganization.name + ' deleted!!' });
        this.getOrganizations();
      });
  }
}

