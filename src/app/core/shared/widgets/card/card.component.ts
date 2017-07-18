import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema, IKeyValue } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-card',
  templateUrl: './card.component.html',
  styles: []
})
export class CardComponent implements OnInit {
  @Input() public schema: IWidgetSchema;
  @Input() public data: any;
  @Output() send = new EventEmitter<IKeyValue>();
  constructor() { }

  ngOnInit() {
  }

}
