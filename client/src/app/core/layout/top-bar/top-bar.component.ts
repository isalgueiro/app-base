import { Component, OnInit } from '@angular/core';
import { BusService } from 'app/core/bus.service';
import { IUser } from 'app/core/shared/_data/user.model';
import { environment } from './../../../../environments/environment';
@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInitials = '?';
  user: IUser = null;
  title = environment.appTitle;


  constructor(private bus: BusService) { }

  ngOnInit() {
    this.onUserChange();
  }

  private onUserChange() {
    this.bus.getUser$()
      .subscribe(user => {
        this.user = user;
        if (this.user && this.user.name) {
          this.userInitials = this.user.name.substr(0, 2);
        }
      })
  }
}
