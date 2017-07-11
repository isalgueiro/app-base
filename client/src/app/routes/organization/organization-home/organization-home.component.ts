import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService, IOrganization } from 'app/routes/organization/organization.service';


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
  public organizationPanel: IWidgetSchema;
  public schemas: IWidgetSchema[];
  public formSchema: IFormSchema;

  constructor(private http: Http, private route: ActivatedRoute) { }
  setSchemas() {
    this.organizationPanel = {
      header: {
        title: this.organization.name,
        subtitle: this.organization.description
      },
      actions: [
        {
          label: 'Edit',
          icon: 'icon-edit'
        }
      ]
    };
    this.schemas = [this.organizationPanel];
    this.formSchema = {
      title: 'My organization data',
      submitLabel: 'Save Organization',
      controls: [
        {
          key: 'name',
          type: 'text',
          label: 'Name',
          defaultValue: this.organization.name,
          validators: [{ key: 'required', errorMessage: 'Name is required' }]
        },
        {
          key: 'email',
          type: 'email',
          label: 'Email',
          defaultValue: this.organization.email,
          validators: [{ key: 'required', errorMessage: 'Email is required' }]
        },
        {
          key: 'phone',
          type: 'text',
          label: 'Phone',
          defaultValue: this.organization.phone,
          validators: [{ key: 'required', errorMessage: 'Phone is required' }]
        },
        {
          key: 'url',
          type: 'text',
          label: 'Web Page',
          defaultValue: this.organization.url,
          validators: []
        },
        {
          key: 'image',
          type: 'text',
          label: 'Image Url',
          defaultValue: this.organization.image,
          validators: []
        },
        {
          key: 'standardPrice',
          type: 'text',
          label: 'Standar Price',
          defaultValue: this.organization.standardPrice,
          validators: [{ key: 'required', errorMessage: 'Standard price is required' }]
        },
        {
          key: 'reducedPrice',
          type: 'text',
          label: 'Reduced Price',
          defaultValue: this.organization.reducedPrice,
          validators: [{ key: 'required', errorMessage: 'Reduced price is required' }]
        },
        {
          key: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: this.organization.description,
          validators: [{ key: 'required', errorMessage: 'Description is required' }]
        }
      ]
    };

    this.loadingPanelSchema.loading = false;
    this.loadedMetadata = true;

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
      this.organization = Object.create(organization);
      this.organization._id = aux;
      this.setSchemas();
    }
    this.showEdition = !this.showEdition;
  }
}


