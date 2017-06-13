import { Component, OnInit } from '@angular/core';
import { IMenuLink } from 'app/core/layout/_data/models/menu-link.model';
import { BusService } from 'app/core/shared/bus.service';

@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInitials = '';
  user = null;
  title = 'Angular Base';
  menuLinks: IMenuLink[] = [
    {
      title: 'Home',
      href: ''
    }
  ];

  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus.getUser$()
      .subscribe(user => {
        this.user = user;
        if (this.user && this.user.name) {
          this.userInitials = this.user.name.substr(0, 2);
        }
      })
  }

}
