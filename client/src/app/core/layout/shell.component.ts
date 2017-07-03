import { Component, OnInit } from '@angular/core';
import { BusService } from 'app/core/bus.service';
import { Level, IMessage } from 'app/core/shared/_data/message.model';
import { IUser } from 'app/core/shared/_data/user.model';
import { IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  public user: IUser = null;
  public show: boolean;
  public text = '';
  public level: Level;
  public menuLinks: IAction[];
  constructor(private bus: BusService) { }

  ngOnInit() {
    this.menuLinks = [
      {
        icon: 'icon-apps',
        label: 'Home',
        link: ''
      }
    ];
    this.bus
      .getMessage$()
      .subscribe((message: IMessage) => {
        console.log(JSON.stringify(message));
        this.text = message.text;
        this.level = message.level;
        this.show = true;
      });
    this.bus
      .getUser$()
      .subscribe(user => {
        this.user = user;
        // To Do: Menú links by Role
      }
      );
  }

}
