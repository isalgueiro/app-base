import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSchema, IForm } from 'app/core/shared/schema';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-god-organization-create',
  templateUrl: './god-organization-create.component.html',
  styles: []
})
export class GodOrganizationCreateComponent implements OnInit {
  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  public form: IForm = { group: null, schema: null };
  constructor(public formBuilder: FormBuilder, private formTools: FormToolsService) {
    this.form.schema = {
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
    }
    const controlsGroup = {};
    this.form.schema.controls.forEach(c => {
      controlsGroup[c.key] = [
        c.defaultValue,
        c.validators.map(this.formTools.getValidator)
      ]
    });
    this.form.group = this.formBuilder.group(controlsGroup);
  }

  ngOnInit() {
  }

  onClose() {
    this.active = false;
    this.close.emit(null);
  }

  onPostOrganization() {
    this.active = false;
    console.table(this.form.group.value);
    this.close.emit(this.form.group.value);
  }
}
