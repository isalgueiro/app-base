import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IForm, IFormControl } from 'app/core/shared/schema';

@Component({
  selector: 'ab-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit, OnChanges {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('input.ngOnChanges: ');
    if (changes.control.currentValue) {
      console.log('input.ngOnChanges.control: ');
      console.table(changes.control.currentValue);
    }
    if (changes.form.currentValue) {
      console.log('input.ngOnChanges.form: ');
      console.table(changes.form.currentValue);
    }
  }
}
