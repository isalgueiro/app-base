import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';
import { IOrganization, OrganizationService } from 'app/routes/organization/_data/organization.service';



@Component({
  selector: 'ab-organization-home',
  templateUrl: './organization-home.component.html',
  styles: []
})
export class OrganizationHomeComponent implements OnInit {
  organizationsUrl = 'organizations';
  public showEdition = false;
  loadedMetadata = false;
  loadingPanelSchema = {
    loading: true,
    empty: false
  };
  public organization: IOrganization;
  public viewSchema: IWidgetSchema;
  public formSchema: IFormSchema;

  constructor(
    private route: ActivatedRoute,
    private organizationService: OrganizationService,
    private location: Location) { }
  setSchemas() {
    this.organizationService.getViewSchema().subscribe(s => {
      this.viewSchema = s;
      this.viewSchema.header.title = this.organization.name;
      this.viewSchema.header.subtitle = this.organization.description;
    });
    this.organizationService.getEditionSchema().subscribe(s => {
      this.formSchema = s;
      this.organizationService.getSchemaValues(this.formSchema, this.organization);
      this.loadingPanelSchema.loading = false;
      this.loadedMetadata = true;
    });
  }

  ngOnInit() {
    // TO DO:
    /*
    - get schemas from assets
     */
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.organizationService
          .getOrganization(id)
          .subscribe(organization => {
            this.organization = organization;
            if (this.organization) {
              this.setSchemas();
            } else {
              this.loadingPanelSchema.loading = false;
              this.loadedMetadata = true;
              this.loadingPanelSchema.empty = true;
            }
          });
      });
  }

  onSend(organization) {
    if (this.showEdition) {
      const aux = this.organization._id;
      const auxName = this.organization.name;
      this.organization = Object.assign({}, organization);
      this.organization._id = aux;
      this.organizationService.updateOrganization(this.organization)
        .subscribe(org => {
          this.organization = org;
          if (!(auxName === this.organization.name)) {
            this.location.go(`/${this.organization.slug}`);
          }
          this.setSchemas();
        });
    }
    this.showEdition = !this.showEdition;
  }
}


