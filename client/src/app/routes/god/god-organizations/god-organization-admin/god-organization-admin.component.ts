import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ab-god-organization-admin',
  templateUrl: './god-organization-admin.component.html',
  styles: []
})
export class GodOrganizationAdminComponent implements OnInit {
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

  onSetAdmin() {
    this.active = false;
    this.close.emit(this.form.value);
  }
}
