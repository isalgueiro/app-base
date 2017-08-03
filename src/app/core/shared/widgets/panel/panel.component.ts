import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() public schema: IWidgetSchema;
  @Output() send = new EventEmitter<IKeyValue>();

  constructor() { }

  ngOnInit() {
  }

  onClick(keyValue) {
    this.send.emit(keyValue);
  }

}
