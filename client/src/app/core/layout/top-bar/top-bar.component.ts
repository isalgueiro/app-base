import { Component, OnInit } from '@angular/core';
import { IMenuLink } from 'app/core/layout/_data/models/menu-link.model';
import { BusService } from 'app/core/shared/bus.service';

@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInitials = 'AY';
  title = 'Angular Base';
  menuLinks: IMenuLink[] = [
    {
      title: 'Home',
      href: ''
    },
    {
      title: 'Log in',
      href: 'login'
    }
  ];

  constructor(private bus: BusService) { }

  ngOnInit() {
    this.bus.getUser$()
      .subscribe(user => this.userInitials = user ? user.name.substr(0, 2) : '')
  }

}
