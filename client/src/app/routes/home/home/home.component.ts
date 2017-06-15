import { Component, OnInit } from '@angular/core';
import { IOrganization } from 'app/routes/home/_data/models/organization.model';
import { OrganizationsService } from 'app/routes/home/_data/organizations.service';
import { IPanelSchema, IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public schemas: IPanelSchema[] = [];

  constructor(private organizationsService: OrganizationsService) { }

  ngOnInit() {
    this.organizationsService
      .getAll()
      .subscribe(data => this.schemas = this.transformData(data));
  }

  transformData(organizations: IOrganization[]): IPanelSchema[] {
    const panels: IPanelSchema[] = [];

    organizations.forEach(organization => {
      const organizationPanel: IPanelSchema = {
        header: {
          title: organization.name,
          subtitle: organization.address
        },
        actions: [
          {
            label: 'Ver centro',
            link: 'ejej'
          }
        ]
      };

      panels.push(organizationPanel);
    });

    return panels;
  }

}
