import { Component, OnInit, Input } from '@angular/core';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-tile',
  templateUrl: './tile.component.html',
  styles: []
})
export class TileComponent implements OnInit {

  @Input() schema: IWidgetSchema;

  constructor() { }

  ngOnInit() {
  }

}
