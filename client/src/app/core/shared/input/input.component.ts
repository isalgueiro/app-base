import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IForm, IFormControl } from 'app/core/shared/schema';

@Component({
  selector: 'ab-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor() { }

  ngOnInit() {
  }
}
