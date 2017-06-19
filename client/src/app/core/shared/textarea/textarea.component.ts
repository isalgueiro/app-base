import { Component, OnInit, Input } from '@angular/core';
import { IFormControl, IForm } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-textarea',
  templateUrl: './textarea.component.html',
  styles: []
})
export class TextareaComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor() { }

  ngOnInit() {
  }

}
