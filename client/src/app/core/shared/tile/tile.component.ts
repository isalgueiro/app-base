import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-tile',
  templateUrl: './tile.component.html',
  styles: []
})
export class TileComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
