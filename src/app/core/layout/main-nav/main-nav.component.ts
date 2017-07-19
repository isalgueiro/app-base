import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() public user: IUser = null;
  @Input() menuLinks: IAction[];
  @Input() showResponsive: boolean;

  title = 'Menú';

  constructor() { }

  ngOnInit() {
  }

}
