import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IFormSchema, IForm } from 'app/core/shared/schema';
import { FormToolsService } from 'app/core/shared/form-tools.service';

@Component({
  selector: 'ab-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit, OnChanges {
  @Input() formSchema: IFormSchema;
  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  form: IForm;
  constructor(private formBuilder: FormBuilder, private formTools: FormToolsService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('form.ngOnChanges: ' + JSON.stringify(changes));
    if (changes.formSchema) {
      const formSchema = changes.formSchema.currentValue;
      const controlsGroup = {};
      formSchema.controls.forEach(c => {
        controlsGroup[c.key] = [
          c.defaultValue,
          c.validators.map(this.formTools.getValidator)
        ]
      });
      const formGroup = this.formBuilder.group(controlsGroup);
      this.form = {
        schema: formSchema,
        group: formGroup
      };
      this.formSchema = formSchema;
    }
  }

  onClick() {
    this.send.emit(this.form.group.value);
  }
}
