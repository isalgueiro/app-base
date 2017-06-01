import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ab-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  @Input() counter: number;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() label: string;
  @Input() link: string;

  constructor() { }

  ngOnInit() {
  }

}
