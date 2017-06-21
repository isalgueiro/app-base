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
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { PanelComponent } from './widgets/panel/panel.component';
import { SecurityService } from 'app/core/shared/security.service';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { SelectComponent } from './forms/select/select.component';
import { RadioComponent } from './forms/radio/radio.component';
import { SwitchComponent } from './forms/switch/switch.component';
import { TextareaComponent } from './forms/textarea/textarea.component';
import { EmptyStateComponent } from './empty-state/empty-state.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ControlErrorComponent, FormComponent, InputComponent, TableComponent,
    CounterComponent, TileComponent, ModalComponent, ToastComponent, PanelComponent,
    DashboardComponent, SelectComponent, RadioComponent, SwitchComponent, TextareaComponent, EmptyStateComponent
  ],
  exports: [
    ControlErrorComponent,
    CounterComponent,
    DashboardComponent,
    FormComponent,
    InputComponent,
    ModalComponent,
    PanelComponent,
    ReactiveFormsModule,
    TableComponent,
    ToastComponent,
    TileComponent],
  providers: [FormToolsService, SecurityService]
})
export class SharedModule { }
