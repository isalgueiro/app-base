import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { BusService } from 'app/core/bus.service';
import { MessagesService } from 'app/core/messages.service';
@Component({
  selector: 'ab-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {
  public schema;

  constructor(
    private bus: BusService,
    private messages: MessagesService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.metadata && schema.metadata.name === 'messages') {
          this.schema = schema;
          this.schema.timeline.events = this.messages.populateEventsFromMessages();
        }
      });
  }




}
