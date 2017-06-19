import { Component, OnInit, Input } from '@angular/core';
import { IFormControl, IForm } from 'app/core/shared/_data/schema.model';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-radio',
  templateUrl: './radio.component.html',
  styles: []
})
export class RadioComponent implements OnInit {

  @Input() control: IFormControl;
  @Input() form: IForm;

  constructor(public formTools: FormToolsService) { }

  ngOnInit() {
  }

}
