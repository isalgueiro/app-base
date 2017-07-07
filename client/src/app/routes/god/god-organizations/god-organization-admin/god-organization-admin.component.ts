import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormToolsService } from 'app/core/shared/forms/form-tools.service';
import { IFormSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-organization-admin',
  templateUrl: './god-organization-admin.component.html',
  styles: []
})
export class GodOrganizationAdminComponent implements OnInit, OnChanges {


  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();

  public formSchema: IFormSchema = {
    title: 'Invite Administrator',
    submitLabel: 'Send invitation',
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

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.organization && changes.organization.currentValue) {
      this.formSchema.title = 'Set Administrator to ' + changes.organization.currentValue.name;
    }
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
