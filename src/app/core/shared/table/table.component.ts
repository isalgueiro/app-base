import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IReportSchema, IKeyValue, IField } from 'app/core/shared/_data/schema.model';
import { SchemaService } from 'app/core/shared/_data/schema.service';

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

  constructor(private schemaService: SchemaService) { }

  ngOnInit() {
  }

  onRowClick(row) {
    this.rowClick.emit(row);
  }
  onHeaderClick(field: IField) {
    this.orderDataByKey(this.data, field.key)
  }

  orderDataByKey(values: any[], orderKey: any) {
    return this.schemaService.orderDataByKey(values, orderKey);
  }
  // { key: action, value: row }
  onActionClick(event, row) {
    this.rowAction.emit({ key: event.key, value: row });
  }

  valueByPath(target, path) {
    return this.schemaService.valueByPath(target, path);
  }


}

