import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAction, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-action',
  templateUrl: './action.component.html',
  styles: []
})
export class ActionComponent implements OnInit {
  @Input() schema: IAction;
  @Output() action = new EventEmitter<IKeyValue>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('onClick', this.schema);
    this.action.emit({ key: this.schema.key, value: this.schema.value });
  }
}
