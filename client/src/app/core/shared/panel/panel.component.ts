import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-panel',
  templateUrl: './panel.component.html',
  styles: []
})
export class PanelComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
