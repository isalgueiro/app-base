import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ab-organization-home',
  templateUrl: './organization-home.component.html',
  styles: []
})
export class OrganizationHomeComponent implements OnInit {
  organizationsUrl = 'organizations';
  org: any;
  public showEdition = false;
  loadedMetadata = false;
  loadingPanelSchema = {
    loading: true,
    empty: false
  };
  private organization: Organization = {
    name: 'My organization',
    description: 'My description',
    img: '/myImgUrl'
  };

  public organizationPanel: IWidgetSchema = {
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

  public schemas: IWidgetSchema[] = [this.organizationPanel];

  public formSchema: IFormSchema = {
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
        key: 'imageUrl',
        type: 'text',
        label: 'Image',
        defaultValue: this.organization.img,
        validators: [{ key: 'required', errorMessage: 'Image url is required' }]
      },
      {
        key: 'description',
        type: 'textarea',
        label: 'Description',
        defaultValue: this.organization.description,
        validators: [{ key: 'required', errorMessage: 'Description is required' }]
      },
    ]
  };
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    // TO DO:
    /*
    - get organization from url
    - get schemas from assets
     */


    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.http
          .get(`${this.organizationsUrl}/${id}`)
          .subscribe(d => {
            this.org = d.json();
          });
      });
  }


  onSend(organization) {
    if (this.showEdition) {
      this.organization.name = organization.name;
      this.organization.description = organization.description;
      this.organization.img = organization.imageUrl;
      this.organizationPanel.header.title = this.organization.name;
      this.organizationPanel.header.subtitle = this.organization.description;
      this.formSchema.controls[0].defaultValue = this.organization.name;
      this.formSchema.controls[1].defaultValue = this.organization.img;
      this.formSchema.controls[2].defaultValue = this.organization.description;
    }
    this.showEdition = !this.showEdition;
  }


}

interface Organization {
  name: string;
  description: string;
  img: string;
}
