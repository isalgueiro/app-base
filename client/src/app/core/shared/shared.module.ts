import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import { HttpModule } from '@angular/http';
import { ControlErrorComponent } from './control-error/control-error.component';
import { FormToolsService } from 'app/core/shared/form-tools.service';
import { CounterComponent } from './counter/counter.component';
import { RouterModule } from '@angular/router';
import { TileComponent } from './tile/tile.component';
import { ModalComponent } from './modal/modal.component';
import { ToastComponent } from './toast/toast.component';
import { BusService } from 'app/core/shared/bus.service';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ControlErrorComponent, FormComponent, InputComponent, TableComponent,
    CounterComponent, TileComponent, ModalComponent, ToastComponent, PanelComponent
  ],
  exports: [
    ControlErrorComponent,
    CounterComponent,
    FormComponent,
    HttpModule,
    InputComponent,
    ModalComponent,
    PanelComponent,
    ReactiveFormsModule,
    TableComponent,
    ToastComponent,
    TileComponent],
  providers: [FormToolsService]
})
export class SharedModule { }
