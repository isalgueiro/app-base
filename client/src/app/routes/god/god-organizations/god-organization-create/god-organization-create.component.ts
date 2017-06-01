import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ab-god-organization-create',
  templateUrl: './god-organization-create.component.html',
  styles: []
})
export class GodOrganizationCreateComponent implements OnInit {
  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  public form: FormGroup;
  public schemma: any[];
  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.schemma = ['name', 'email'];
  }

  ngOnInit() {
  }

  onClose() {
    this.active = false;
    this.close.emit(null);
  }

  onPostOrganization() {
    this.active = false;
    console.table(this.form.value);
    this.close.emit(this.form.value);
  }
}
