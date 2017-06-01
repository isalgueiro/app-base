import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-toast',
  templateUrl: './toast.component.html',
  styles: []
})
export class ToastComponent implements OnInit {
  @Input() show: boolean;
  @Input() closeButton: boolean;
  @Input() level: string;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    this.show = false;
  }
}

export interface IMessage {
  level: string;
  text: string;
}
