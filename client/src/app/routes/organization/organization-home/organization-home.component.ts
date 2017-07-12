import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService, IOrganization } from 'app/routes/organization/organization.service';
import { Observable } from 'rxjs/Observable';


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
  private organization: IOrganization;
  public viewSchema: IWidgetSchema;
  public formSchema: IFormSchema;

  constructor(private http: Http, private route: ActivatedRoute, private organizationService: OrganizationService) { }
  setSchemas() {
    this.organizationService.getViewSchema().subscribe(s => {
      this.viewSchema = s;
      this.viewSchema.header.title = this.organization.name;
      this.viewSchema.header.subtitle = this.organization.description;
    });
    this.organizationService.getEditionSchema().subscribe(s => {
      this.formSchema = s;
      this.formSchema.controls[0].defaultValue = this.organization.name;
      this.formSchema.controls[1].defaultValue = this.organization.email;
      this.formSchema.controls[2].defaultValue = this.organization.phone;
      this.formSchema.controls[3].defaultValue = this.organization.url;
      this.formSchema.controls[4].defaultValue = this.organization.image;
      this.formSchema.controls[5].defaultValue = this.organization.standardPrice;
      this.formSchema.controls[6].defaultValue = this.organization.reducedPrice;
      this.formSchema.controls[7].defaultValue = this.organization.description;
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
        this.http
          .get(`${this.organizationsUrl}/${id}`)
          .subscribe(d => {
            this.organization = d.json();
            this.setSchemas();
          });
      });
  }

  onSend(organization) {
    if (this.showEdition) {
      let aux = this.organization._id;
      this.organization = Object.assign({}, organization);
      this.organization._id = aux;
      this.organizationService.updateOrganization(this.organization)
        .subscribe(org => {
          this.organization = org;
          this.setSchemas();
          //TODO replace param on url
        });
    }
    this.showEdition = !this.showEdition;
  }
}


