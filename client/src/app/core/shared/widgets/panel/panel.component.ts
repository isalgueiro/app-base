import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() schema: IWidgetSchema;
  @Output() send = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.send.emit(name);
  }

}
