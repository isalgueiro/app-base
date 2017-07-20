import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { BusService } from 'app/core/bus.service';
import { Level, IMessage } from 'app/core/shared/_data/message.model';
import { IEvent } from 'app/core/shared/_data/schema.model';
@Component({
  selector: 'ab-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {
  public schema;
  private icons = [
    'icon-minus',
    'icon-check',
    'icon-search',
    'icon-stop'
  ]
  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.schema == null)
      .subscribe(schema => {
        if (schema && schema.metadata && schema.metadata.name === 'messages') {
          this.populateEventsFromMessages(schema);
        }
      });
  }

  populateEventsFromMessages(schema) {
    const messages = JSON.parse(localStorage.getItem('messages'));
    if (messages) {
      schema.timeline.events = [];
      messages.forEach((message: IMessage) => {
        const event: IEvent = {
          label: '',
          date: message.timestamp,
          icon: this.icons[message.level],
          items: [
            {
              header: {
                title: message.text
              }
            }
          ]
        }
        schema.timeline.events.push(event);
      });
    }
    this.schema = schema;
  }


}
