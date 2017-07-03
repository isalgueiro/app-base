import { Component, OnInit, Input } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { IUser } from 'app/core/shared/_data/user.model';
import { IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-main-nav',
  templateUrl: './main-nav.component.html',
  styles: []
})
export class MainNavComponent implements OnInit {
  @Input() public user: IUser = null;
  title = environment.appTitle;
  @Input() menuLinks: IAction[];

  constructor() { }

  ngOnInit() {
  }

}
