import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { BusService } from 'app/core/bus.service';
@Component({
  selector: 'ab-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {
  public schema;

  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.metadata && schema.metadata.name === 'messages') {
          this.schema = schema;
        }
      });
  }

}
