import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILoadEmptyStateSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-load-empty-state',
  templateUrl: './load-empty-state.component.html',
  styles: []
})
export class LoadEmptyStateComponent implements OnInit {

  @Input() schema: ILoadEmptyStateSchema;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.action.emit(this.schema.action.value);
  }
}
