import { FormGroup } from '@angular/forms';

export interface IFormControl {
  key: string;
  type: string;
  label: string;
  placeholder?: string;
  defaultValue?: any;
  validators: IValidator[];
}

export interface IValidator {
  key: string;
  args?: any[];
  errorMessage?: string;
}

export class FormSchema {
  title: string;
  submitLabel: string;
  controls: IFormControl[];
}

export interface IForm {
  group: FormGroup;
  schema: FormSchema
}
