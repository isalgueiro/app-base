import { Component, OnInit } from '@angular/core';
import { IOrganization } from 'app/routes/home/_data/models/organization.model';
import { OrganizationsService } from 'app/routes/home/_data/organizations.service';
import { IWidgetSchema, IAction, ILoadEmptyStateSchema, ITimelineSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/bus.service';
import 'rxjs/add/operator/takeWhile';
import { SchemaService } from 'app/core/shared/_data/schema.service';

@Component({
  selector: 'ab-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public schema: IWidgetSchema
  public widgets: IWidgetSchema[] = [];

  constructor(
    private bus: BusService,
    private organizationsService: OrganizationsService,
    private schemaService: SchemaService
  ) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.metadata && schema.metadata.name === 'home') {
          this.schema = schema;
          this.organizationsService
            .getAll()
            .subscribe(data => this.createWidgets(data));
        }
      });
  }

  createWidgets(organizations: IOrganization[]) {
    this.widgets = [];
    organizations.forEach(organization => {
      const organizationWidget: IWidgetSchema = JSON.parse(JSON.stringify(this.schema));
      this.pupulateWidget(organizationWidget, organization);
      this.widgets.push(organizationWidget);
    });
  }

  pupulateWidget(widget, target) {
    // To Do: autopopulate using reflection...)
    widget.header.title = this.schemaService.valueByPath(target, 'name');
    widget.header.subtitle = this.schemaService.valueByPath(target, 'address');
    widget.actions[0].label = `edit ${this.schemaService.valueByPath(target, 'name')}`;
    widget.actions[0].link = `/organization/${this.schemaService.valueByPath(target, 'slug')}`;
  }

}
