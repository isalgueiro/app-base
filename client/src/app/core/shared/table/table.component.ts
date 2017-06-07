import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IReportSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  @Input() schema: IReportSchema[];
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

