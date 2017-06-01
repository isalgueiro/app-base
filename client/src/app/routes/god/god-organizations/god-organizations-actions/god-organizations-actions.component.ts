import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ab-god-organizations-actions',
  templateUrl: './god-organizations-actions.component.html',
  styles: []
})
export class GodOrganizationsActionsComponent implements OnInit {
  @Output() public create = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onCreateOrganizationClick() {
    this.create.emit();
  }
}
