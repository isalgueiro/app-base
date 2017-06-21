import { Component, OnInit } from '@angular/core';
import { IOrganizationAdmin } from 'app/routes/god/_data/organization.model';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import 'rxjs/add/operator/do';
import { BusService } from 'app/core/bus.service';
import { Level } from 'app/core/shared/_data/message.model';
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
  setOrganizationAdmin(newAdmin) {
    newAdmin.organizationId = this.activeOrganization._id;
    this.godData
      .setOrganizationAdmin(newAdmin)
      .subscribe(res => {
        this.bus.emit({ level: Level.SUCCESS, text: newAdmin.name + ' asiggned!!' });
        this.getOrganizations();
      });
  }

  onCreateOrganization() {
    this.activeCreateOrganizationModal = true;
  }

  onCloseCreateOrganizationModal(newOrganization) {
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

  onDeleteOrganization(organization) {
    this.activeOrganization = organization;
    this.activeDeleteOrganizationModal = true;
  }

  onCloseDeleteOrganizationModal(organization) {
    this.activeOrganization = organization;
    this.activeDeleteOrganizationModal = false;
  }

  onConfirmDeleteOrganizationModal(oldOrganization) {
    this.activeDeleteOrganizationModal = false;
    this.godData
      .deleteOrganization(oldOrganization)
      .subscribe(res => {
        this.bus.emit({ level: Level.SUCCESS, text: oldOrganization.name + ' deleted!!' });
        this.getOrganizations();
      });
  }
}

