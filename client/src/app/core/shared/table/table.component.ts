import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IReportSchema, IKeyValue, IField } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() schema: IReportSchema;
  @Input() data: any[];
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowAction = new EventEmitter<IKeyValue>();

  constructor() { }

  ngOnInit() {
  }

  onRowClick(row) {
    this.rowClick.emit(row);
  }
  onHeaderClick(field: IField) {
    this.orderDataByKey(this.data, field.key)
  }

  orderDataByKey(values: any[], orderKey: any) {
    return values.sort((a, b) => {
      const valA = this.valueByPath(a, orderKey);
      const valB = this.valueByPath(b, orderKey);
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0
    });
  }
  // { key: action, value: row }
  onActionClick(event, row) {
    this.rowAction.emit({ key: event.key, value: row });
  }

  valueByPath(target, path) {
    if (!path) {
      return '';
    }
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


  // valueByPath(target, path) {
  //   path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  //   path = path.replace(/^\./, '');           // strip a leading dot
  //   const chunks = path.split('.');
  //   let result = '';
  //   chunks.array.forEach(element => {
  //     if (target) {
  //       target = this.getNewTarget(target, element);
  //       if (target) {
  //         result = target;
  //       } else {
  //         return;
  //       }
  //     } else {
  //       return;
  //     }
  //   });
  //   return result;
  // }
  // getNewTarget(target, element) {
  //   if (element in target) {
  //     return target[element];
  //   } else {
  //     return null;
  //   }
  // }

}

