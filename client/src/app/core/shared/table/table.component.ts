import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() schema: IField[];
  @Input() actions: IAction[];
  @Input() data: any[];
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRowClick(row) {
    this.rowClick.emit(row);
  }

  onActionClick(action, row) {
    this.rowAction.emit({ action, row });
  }

  valueByPath(target, path) {
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    const a = path.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (target) {
        if (k in target) {
          target = target[k];
        } else {
          return;
        }
      } else {
        return;
      }
    }
    return target;
  }
}

export interface IField {
  label: string;
  name: string;
  type: string;
}

export interface IAction {
  label: string;
  name: string;
  icon: string;
}
