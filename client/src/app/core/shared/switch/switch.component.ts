import { Component, OnInit, Input } from '@angular/core';
import { IForm, IFormControl } from 'app/core/shared/_data/schema.model';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-switch',
  templateUrl: './switch.component.html',
  styles: []
})
export class SwitchComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor(public formTools: FormToolsService) { }

  ngOnInit() {
  }

}
