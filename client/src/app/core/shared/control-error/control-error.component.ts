import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { IFormControl, IForm } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-control-error',
  template: `
    <small *ngIf="formTools.hasErrorsToShow(form.group,control.key)" class="float-right">
      <em>{{ formTools.getErrors(form.group,control.key,form.schema) | json }}</em>
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
