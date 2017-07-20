import { Component, OnInit, Input, EventEmitter, Output, SimpleChanges, OnChanges } from '@angular/core';
import { Level } from 'app/core/shared/_data/message.model';

@Component({
  selector: 'ab-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
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
      const timeout = this.level === Level.ERROR ? 5000 : 3000;
      setTimeout(() => {
        this.show = false;
        this.close.emit(false);
      }, timeout);
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
