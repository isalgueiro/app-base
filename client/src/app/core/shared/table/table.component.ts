import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IReportSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() schema: IReportSchema;
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

