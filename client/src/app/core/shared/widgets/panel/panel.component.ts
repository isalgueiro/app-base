import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() schema: IWidgetSchema;
  @Output() send = new EventEmitter<IKeyValue>();

  constructor() { }

  ngOnInit() {
  }

  onClick(key: string, value: string) {
    this.send.emit({ key, value });
  }

}
