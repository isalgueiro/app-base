import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { ControlErrorComponent } from './control-error/control-error.component';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { PanelComponent } from './panel/panel.component';
import { SecurityService } from 'app/core/shared/security.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectComponent } from './select/select.component';
import { RadioComponent } from './radio/radio.component';
import { SwitchComponent } from './switch/switch.component';
import { TextareaComponent } from './textarea/textarea.component';
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
