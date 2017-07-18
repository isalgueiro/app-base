import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './forms/form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './forms/input/input.component';
import { ControlErrorComponent } from './forms/control-error/control-error.component';
import { FormToolsService } from 'app/core/shared/forms/form-tools.service';
import { CounterComponent } from './widgets/counter/counter.component';
import { RouterModule } from '@angular/router';
import { TileComponent } from './widgets/tile/tile.component';
import { ModalComponent } from './layouts/modal/modal.component';
import { ToastComponent } from './widgets/toast/toast.component';
import { PanelComponent } from './widgets/panel/panel.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SelectComponent } from './forms/select/select.component';
import { RadioComponent } from './forms/radio/radio.component';
import { SwitchComponent } from './forms/switch/switch.component';
import { TextareaComponent } from './forms/textarea/textarea.component';
import { LoadEmptyStateComponent } from './layouts/load-empty-state/load-empty-state.component';
import { EditorComponent } from './layouts/editor/editor.component';
import { ActionComponent } from './layouts/action/action.component';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { PageComponent } from './layouts/page/page.component';
import { CardComponent } from './widgets/card/card.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ControlErrorComponent, FormComponent, InputComponent, TableComponent,
    CounterComponent, TileComponent, ModalComponent, ToastComponent, PanelComponent,
    DashboardComponent, SelectComponent, RadioComponent, SwitchComponent,
    TextareaComponent, LoadEmptyStateComponent, EditorComponent, ActionComponent, PageComponent, CardComponent
  ],
  exports: [
    ActionComponent,
    ControlErrorComponent,
    CounterComponent,
    DashboardComponent,
    EditorComponent,
    FormComponent,
    InputComponent,
    LoadEmptyStateComponent,
    ModalComponent,
    PageComponent,
    PanelComponent,
    ReactiveFormsModule,
    TableComponent,
    ToastComponent,
    TileComponent],
  providers: [FormToolsService, SchemaService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
