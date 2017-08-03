import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-main-nav-responsive',
  templateUrl: './main-nav-responsive.component.html',
  styleUrls: ['./main-nav-responsive.component.css']
})
export class MainNavResponsiveComponent implements OnInit {

  @Input() public user: IUser = null;
  @Input() menuLinks: IAction[];
  @Input() showResponsive: boolean;
  @Input() public numMessages: number;

  constructor() { }

  ngOnInit() {
  }

}
