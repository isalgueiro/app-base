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

export interface IFormSchema {
  title: string;
  submitLabel: string;
  buttonBlock: boolean;
  controls: IFormControl[];
}

export interface IForm {
  group: FormGroup;
  schema: IFormSchema
}
