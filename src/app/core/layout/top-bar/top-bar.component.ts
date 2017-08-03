import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { IUser } from 'app/core/shared/_data/user.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'ab-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Input() public user: IUser = null;
  @Input() public title = environment.appTitle;

  @Output() public showResponsiveMenu = new EventEmitter<boolean>();

  public userInitials = '?';
  public showResponsive = false;

  constructor() { }

  ngOnInit() {
  }

  onShowResponsive() {
    this.showResponsive = true;
    this.showResponsiveMenu.emit(this.showResponsive);
  }

  onHideResponsive() {
    this.showResponsive = false;
    this.showResponsiveMenu.emit(this.showResponsive);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 960) {
      if (this.showResponsive) {
        this.showResponsive = false;
        this.showResponsiveMenu.emit(this.showResponsive);
      }
    }
    console.log('Width: ' + event.target.innerWidth);
  }

}
