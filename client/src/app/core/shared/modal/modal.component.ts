import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ab-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  onClose() {
    this.close.emit();
  }
}
