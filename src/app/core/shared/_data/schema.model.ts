import { FormGroup } from '@angular/forms';

export interface IFormSchema {
  title: string;
  submitLabel: string;
  buttonBlock?: boolean;
  controls: IFormControl[];
}

export interface IFormControl extends IField {
  key: string;
  type: 'email' | 'password' | 'radio' | 'select' | 'switch' | 'text' | 'textarea';
  label: string;
  actions?: IAction[];
  placeholder?: string;
  defaultValue?: any;
  validators?: IValidator[];
}

export interface IAction extends IKeyValue {
  label: string;
  link?: string;
  icon?: string;
  title?: string;
}

export interface IKeyValue {
  key?: string;
  value?: string;
}

export interface IValidator {
  key: 'required';
  args?: any[];
  errorMessage?: string;
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
  key: string;
  type: string;
}

export interface IHeader {
  title: string;
  subtitle?: string;
  icon?: string;
  counter?: number;
}

export interface IWidgetSchema {
  header: IHeader;
  type?: 'panel' | 'card' | 'tile';
  image?: string,
  counter?: number;
  fields?: IField[];
  actions?: IAction[];
}

export interface ILoadEmptyStateSchema {
  loading: boolean;
  empty: boolean;
  action?: IAction;
}

export interface IEvent {
  label: string;
  date?: Date;
  icon?: string;
  action?: IAction;
  items: IWidgetSchema[];
}

export interface ITimelineSchema {
  title: IWidgetSchema,
  events: IEvent[];
}
