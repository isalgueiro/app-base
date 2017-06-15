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
  buttonBlock?: boolean;
  controls: IFormControl[];
}

export interface IForm {
  group: FormGroup;
  schema: IFormSchema
}

export interface IReportSchema {
  title: string;
  emptyMessage?: string;
  subtitle?: string;
  fields: IField[];
  actions: IAction[];
}

export interface IField {
  label: string;
  name: string;
  type: string;
}

export interface IAction {
  label: string;
  name: string;
  icon: string;
}

export interface IHeader {
  title: string;
  subtitle?: string;
}

export interface IPanelSchema {
  header: IHeader;
  actions: IAction[];
}
