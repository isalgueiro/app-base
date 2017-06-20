import { FormGroup } from '@angular/forms';

export interface IFormControl {
  key: string;
  type: string;
  label: string;
  actions?: IAction[];
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
  header: IHeader;
  emptyMessage?: string;
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
  value?: string;
  link?: string;
  icon?: string;
}

export interface IHeader {
  title: string;
  subtitle?: string;
  icon?: string;
}

export interface IPanelSchema {
  header: IHeader;
  actions?: IAction[];
}

export interface IEmptyStateSchema {
  loading: boolean;
  action: IAction;
}
