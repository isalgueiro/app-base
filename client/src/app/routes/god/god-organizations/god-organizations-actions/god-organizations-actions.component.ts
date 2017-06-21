import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-god-organizations-actions',
  templateUrl: './god-organizations-actions.component.html',
  styles: []
})
export class GodOrganizationsActionsComponent implements OnInit {

  @Output() public create = new EventEmitter<void>();
  public schema: IWidgetSchema;
  constructor() { }

  ngOnInit() {
    this.schema = {
      header: {
        title: 'Organizations',
        subtitle: 'Manage your organizations and its administrators',
        icon: 'icon-flag'
      }
    }
  }
  onCreateOrganizationClick() {
    this.create.emit();
  }

}
