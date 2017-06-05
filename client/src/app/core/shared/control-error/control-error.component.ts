import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { IForm, IFormControl } from 'app/core/shared/schema';


@Component({
  selector: 'ab-control-error',
  template: `
    <small *ngIf="formTools.hasErrorsToShow(form.group,control.key)" class="float-right">
      <em>{{ formTools.getErrors(form.group,control.key) | json }}</em>
    </small>
  `,
  styles: []
})
export class ControlErrorComponent implements OnInit {
  @Input() control: IFormControl;
  @Input() form: IForm;
  constructor(public formTools: FormToolsService) { }

  ngOnInit() {

  }

}
