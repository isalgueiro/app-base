import { Component, OnInit } from '@angular/core';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import { BusService } from 'app/bus.service';
import { IPanelSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-home',
  templateUrl: './god-home.component.html',
  styles: []
})
export class GodHomeComponent implements OnInit {
  public schemas: IPanelSchema[] = [];
  constructor(private godData: GodDataService, private bus: BusService) { }

  ngOnInit() {
    this.createSchema();
    this.godData
      .getOrganizationsCount()
      .subscribe(count => {
        this.schemas[0].header.title = count + ' Organizations';
      });
  }

  createSchema() {
    this.schemas = [
      {
        header: {
          title: 'Organizations',
          subtitle: 'Entities with an administrator, several organizers and its own events and users',
          icon: 'icon-flag'
        },
        actions: [
          {
            label: 'Manage organizations',
            link: 'organizations'
          }
        ]
      },
      {
        header: {
          title: ' Users',
          subtitle: 'Users and roles',
          icon: 'icon-people'
        },
        actions: [
          {
            label: 'Manage users',
            link: 'users'
          }
        ]
      }
    ]
  }
}
