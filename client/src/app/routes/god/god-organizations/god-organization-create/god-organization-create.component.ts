import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { IFormSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-organization-create',
  templateUrl: './god-organization-create.component.html',
  styles: []
})
export class GodOrganizationCreateComponent implements OnInit {
  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  public formSchema: IFormSchema = {
    title: 'New Organization',
    submitLabel: 'Save Organization',
    controls: [
      {
        key: 'name',
        type: 'text',
        label: 'Name',
        validators: [{ key: 'required', errorMessage: 'Name is required' }]
      },
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        validators: [{ key: 'required', errorMessage: 'Email is required' }]
      },
    ]
  };
  constructor() {
  }

  ngOnInit() {
  }

  onClose() {
    this.active = false;
    this.close.emit(null);
  }

  onPostOrganization(newOrganization) {
    this.active = false;
    console.table(newOrganization);
    this.close.emit(newOrganization);
  }
}
