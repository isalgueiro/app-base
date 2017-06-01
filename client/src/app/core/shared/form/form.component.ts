import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ab-form',
  template: `
  <form [formGroup]="formGroup"
        class="container">
    <ng-content>
    </ng-content>
    <button type="submit"
          (click)="onClick()"
          [disabled]="formGroup.invalid">{{ submitLabel}}</button>
  </form>
  <em>{{formGroup.value | json}}</em>
  `,
  styles: []
})
export class FormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() submitLabel: string;
  @Output() send: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {

  }
  onClick() {
    this.send.emit();
  }
}
