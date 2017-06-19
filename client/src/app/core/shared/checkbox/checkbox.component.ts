import { Component, OnInit, Input } from '@angular/core';
import { IForm, IFormControl } from 'app/core/shared/_data/schema.model';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor(public formTools: FormToolsService) { }

  ngOnInit() {
  }

}
