import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEmptyStateSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-empty-state',
  templateUrl: './empty-state.component.html',
  styles: []
})
export class EmptyStateComponent implements OnInit {

  @Input() schema: IEmptyStateSchema;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.action.emit(this.schema.action.value);
  }

}
