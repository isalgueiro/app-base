import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-tile',
  templateUrl: './tile.component.html',
  styles: []
})
export class TileComponent implements OnInit {

  @Input() schema: IWidgetSchema;

  @Output() send = new EventEmitter<IKeyValue>();
  constructor() { }

  ngOnInit() {
  }

}
