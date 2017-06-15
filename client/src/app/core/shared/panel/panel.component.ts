import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPanelSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() schema: IPanelSchema;
  @Output() send = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onclick(name: string) {
    this.send.emit(name);
  }

}
