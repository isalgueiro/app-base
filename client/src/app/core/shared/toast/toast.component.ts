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
    if (this.changedToShow(change)) {
      this.autoCloseIfNoButton();
    }
  }

  changedToShow(change) {
    return change.show && change.show.currentValue === true
  }

  autoCloseIfNoButton() {
    if (!this.closeButton) {
      setTimeout(() => {
        this.show = false;
        this.close.emit(false);
      }, 3000);
    }
  }

  onCloseClick() {
    this.show = false;
    this.close.emit(false);
  }

  getLevelClass(): string {
    let levelClass = 'toast-primary';
    switch (this.level) {
      case Level.PRIMARY:
        levelClass = 'toast-primary';
        break;
      case Level.SUCCESS:
        levelClass = 'toast-success';
        break;
      case Level.WARNING:
        levelClass = 'toast-warning';
        break;
      case Level.ERROR:
        levelClass = 'toast-error';
        break;
    }
    return levelClass;
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
