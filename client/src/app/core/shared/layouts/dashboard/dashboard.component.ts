import { Component, OnInit, Input } from '@angular/core';
import { IPanelSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  @Input() schemas: IPanelSchema[];

  constructor() { }

  ngOnInit() {
  }

}
