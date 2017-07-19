import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  @Input() schemas: IWidgetSchema[];
  @Output() send = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick(keyValue) {
    this.send.emit(keyValue);
  }
}
