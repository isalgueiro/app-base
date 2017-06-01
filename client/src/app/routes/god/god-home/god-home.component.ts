import { Component, OnInit } from '@angular/core';
import { GodDataService } from 'app/routes/god/_data/god-data.service';
import { BusService } from 'app/core/shared/bus.service';

@Component({
  selector: 'ab-god-home',
  templateUrl: './god-home.component.html',
  styles: []
})
export class GodHomeComponent implements OnInit {
  public organizationsCount = 0;
  constructor(private godData: GodDataService, private bus: BusService) { }

  ngOnInit() {
    this.godData
      .getOrganizationsCount()
      .subscribe(
      data => this.organizationsCount = data
      ,
      err => {
        this.bus.emit({ level: 'toast-error', text: err });
      });
  }

}
