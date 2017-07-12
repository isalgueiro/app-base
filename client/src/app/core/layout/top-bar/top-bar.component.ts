import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() public user: IUser = null;
  public userInitials = '?';
  public title = environment.appTitle;


  constructor() { }

  ngOnInit() {
  }

}
