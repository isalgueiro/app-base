import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class FormToolsService {
  constructor() { }

  hasErrorsToShow(form: FormGroup, field: string) {
    const control = this.getControl(form, field);
    return control && control.invalid && this.shouldBeValid(control);
  }

  getErrors(form: FormGroup, field: string) {
    const control = this.getControl(form, field);
    return control && control.errors;
  }

  getControl(form: FormGroup, field: string) {
    return form.get(field);
  }

  shouldBeValid(control) {
    return (control.touched || control.dirty);
  }

}
