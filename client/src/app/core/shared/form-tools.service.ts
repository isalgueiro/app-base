import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { IValidator } from 'app/core/shared/schema';

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
    return form && form.get(field);
  }

  shouldBeValid(control) {
    return (control.touched || control.dirty);
  }

  getValidator(validation: IValidator) {
    switch (validation.key) {
      case 'required':
        return Validators.required
      default:
        break;
    }

  }
}
