import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IWidgetSchema, IKeyValue, IReportSchema, IFormSchema, IHeader, IAction } from 'app/core/shared/_data/schema.model';

@Component({
  selector: 'ab-editor',
  templateUrl: './editor.component.html',
  styles: []
})
export class EditorComponent implements OnInit {
  @Input() public actionSchema: IWidgetSchema;
  @Input() public reportSchema: IReportSchema;
  @Input() public tableData: IWidgetSchema;
  @Input() public createFormSchema: IFormSchema;
  @Input() public cardSchema: IWidgetSchema;

  @Output() public create = new EventEmitter<IKeyValue>();
  @Output() public delete = new EventEmitter<IKeyValue>();
  @Output() public rowAction = new EventEmitter<IKeyValue>();

  public createModalActive = false;
  public deleteModalActive = false;
  public selectedItem: any;
  constructor() { }

  ngOnInit() {
  }

  onAction(data: IKeyValue) {
    console.log('onAction', data);
    if (data.key === 'create_new') {
      this.createModalActive = true;
    } else {
      this.rowAction.emit(data);
    }
  }
  onRowAction(data: IKeyValue) {
    console.log('onRowAction', data);
    if (data.key === 'delete') {
      this.deleteModalActive = true;
      this.selectedItem = data.value;
    } else {
      this.rowAction.emit(data);
    }
  }
  onCreate(data) {
    this.createModalActive = false;
    this.create.emit(data);
  }
  onDelete(data) {
    this.deleteModalActive = false;
    this.delete.emit(data);
  }
  onCancelCreate() {
    this.createModalActive = false;
  }
  onCancelDelete() {
    this.deleteModalActive = false;
  }
}
