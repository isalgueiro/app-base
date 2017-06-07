import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { IFormSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-organization-admin',
  templateUrl: './god-organization-admin.component.html',
  styles: []
})
export class GodOrganizationAdminComponent implements OnInit {
  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  public formSchema: IFormSchema = {
    title: '',
    submitLabel: 'Set Administrator',
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

  constructor() { }

  ngOnInit() {
    this.formSchema.title = this.organization ? this.organization.name : '';
  }

  onClose() {
    this.active = false;
    this.close.emit(null);
  }

  onSetAdmin(newAdmin) {
    this.active = false;
    this.close.emit(newAdmin);
  }
}
