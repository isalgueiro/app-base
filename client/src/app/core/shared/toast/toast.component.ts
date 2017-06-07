import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-toast',
  templateUrl: './toast.component.html',
  styles: []
})
export class ToastComponent implements OnInit {

  @Input() show: boolean;
  @Input() closeButton: boolean;
  @Input() level: Level;
  @Input() text: string;

  constructor() { }

  ngOnInit() {
    if (!this.closeButton) {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    }
  }

  onCloseClick() {
    this.show = false;
  }

  getLevelClass(): string {
    switch (this.level) {
      case Level.PRIMARY:
        return 'toast-primary';
      case Level.SUCCESS:
        return 'toast-success';
      case Level.WARNING:
        return 'toast-warning';
      case Level.ERROR:
        return 'toast-error';
      default:
        return 'toast-primary';
    }
  }

}

export interface IMessage {
  level: Level;
  text: string;
}

// toast-primary, toast-success, toast-warning or toast-error
export enum Level {
  PRIMARY,
  SUCCESS,
  WARNING,
  ERROR
}
