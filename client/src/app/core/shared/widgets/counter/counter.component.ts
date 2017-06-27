import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() schema: IWidgetSchema;
  @Output() send = new EventEmitter<IKeyValue>();
  constructor() { }

  ngOnInit() {
  }
  onClick(keyValue) {
    this.send.emit(keyValue);
  }

}
