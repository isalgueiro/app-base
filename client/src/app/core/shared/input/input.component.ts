import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormControl, IForm } from 'app/core/shared/_data/schema.model';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor(public formTools: FormToolsService) { }

  ngOnInit() {
  }
}
