import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'ab-toast',
  templateUrl: './toast.component.html',
  styles: []
})
export class ToastComponent implements OnInit, OnChanges {

  @Input() show: boolean;
  @Input() closeButton?: boolean;
  @Input() level: Level;
  @Input() text: string;

  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(change: SimpleChanges) {
    if (change.show && change.show.currentValue === true) {
      if (!this.closeButton) {
        setTimeout(() => {
          this.show = false;
          this.close.emit(false);
        }, 3000);
      }
    }
  }

  onCloseClick() {
    this.show = false;
    this.close.emit(false);
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
