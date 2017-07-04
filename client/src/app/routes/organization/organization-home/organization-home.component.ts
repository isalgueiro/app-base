import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormToolsService } from 'app/core/shared/forms/form-tools.service';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-organization-home',
  templateUrl: './organization-home.component.html',
  styles: []
})
export class OrganizationHomeComponent implements OnInit {
  public showEdition: boolean = false;

  private organization: Organization = {
    name: "My organization",
    description: "My description",
    img: "/myImgUrl"
  };

  public organizationPanel: IWidgetSchema = {
    header: {
      title: this.organization.name,
      subtitle: this.organization.description
    },
    actions: [
      {
        label: 'Editar',
        icon: 'icon-edit'
      }
    ]
  };

  public schemas: IWidgetSchema[] = [this.organizationPanel];

  public formSchema: IFormSchema = {
    title: 'My organization data',
    submitLabel: 'save',
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
        validators: [{ key: 'required', errorMessage: 'Image urll is required' }]
      },
      {
        key: 'description',
        type: 'textarea',
        label: 'Descripción',
        defaultValue: this.organization.description,
        validators: [{ key: 'required', errorMessage: 'description is required' }]
      },
    ]
  };
  constructor() { }

  ngOnInit() {

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
