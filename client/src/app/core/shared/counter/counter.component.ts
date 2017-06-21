import { Component, OnInit, Input } from '@angular/core';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() schema: IWidgetSchema;
  constructor() { }

  ngOnInit() {
  }

}
