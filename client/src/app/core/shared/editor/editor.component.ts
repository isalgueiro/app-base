import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IWidgetSchema, IKeyValue, IReportSchema } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-editor',
  templateUrl: './editor.component.html',
  styles: []
})
export class EditorComponent implements OnInit {
  @Input() public actionSchema: IWidgetSchema;
  @Input() public reportSchema: IReportSchema;
  @Input() public tableData: IWidgetSchema;

  @Output() public create = new EventEmitter<IKeyValue>();
  @Output() public rowAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
}
