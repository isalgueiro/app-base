import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IForm } from 'app/core/shared/schema';

@Component({
  selector: 'ab-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  @Input() form: IForm;
  @Output() send: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {

  }
  onClick() {
    this.send.emit();
  }
}
