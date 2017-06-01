import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormToolsService } from 'app/core/shared/form-tools.service';


@Component({
  selector: 'ab-control-error',
  template: `
    <small *ngIf="formTools.hasErrorsToShow(formGroup,field)" class="float-right">
      <em>{{ formTools.getErrors(formGroup,field) | json }}</em>
    </small>
  `,
  styles: []
})
export class ControlErrorComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() field: string;
  constructor(public formTools: FormToolsService) { }

  ngOnInit() {

  }

}
