import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ab-god-organization-delete',
  templateUrl: './god-organization-delete.component.html',
  styles: []
})
export class GodOrganizationDeleteComponent implements OnInit {
  @Input() organization;
  @Input() active: false;
  @Output() close = new EventEmitter<any>();
  @Output() confirm = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.active = false;
    this.close.emit(null);
  }

  onDeleteClick() {
    this.confirm.emit(this.organization);
  }
}
