import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  @Input() public loadedMetadata: boolean;
  constructor() { }

  ngOnInit() {
  }

}
