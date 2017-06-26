import { Component, OnInit } from '@angular/core';
import { IOrganizationAdmin } from 'app/routes/god/_data/organization.model';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BusService } from 'app/core/bus.service';
import { Level } from 'app/core/shared/_data/message.model';
import { IFormSchema, IWidgetSchema, IReportSchema } from 'app/core/shared/_data/schema.model';
import { Http } from '@angular/http';
@Component({
  selector: 'ab-god-organizations',
  templateUrl: './god-organizations.component.html',
  styles: []
})
export class GodOrganizationsComponent implements OnInit {
  public organizations: any[];
  public activeSetAdminModal = false;
  public activeCreateOrganizationModal = false;
  public activeDeleteOrganizationModal = false;
  public activeOrganization;
  public loadedMetadata = false;
  loadingPanelSchema = {
    loading: true,
    empty: false
  };
  public createFormSchema: IFormSchema;
  public actionSchema: IWidgetSchema;
  public reportSchema: IReportSchema;
  public name = 'organizations';
  constructor(private godData: GodDataService, private bus: BusService, private http: Http) { }

  ngOnInit() {

    Observable.forkJoin(this.http
      .get('assets/schemas/god_organizations_create.json')
      .do(res => this.createFormSchema = res.json()),
      this.http
        .get('assets/schemas/god_organizations_actions.json')
        .do(res => this.actionSchema = res.json()),
      this.http
        .get('assets/schemas/god_organizations_report.json')
        .do(res => this.reportSchema = res.json()))
      .subscribe(res => this.loadedMetadata = true)
    this.getOrganizations();
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

