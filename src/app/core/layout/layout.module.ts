import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing';
import { ShellComponent } from './shell.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SharedModule } from 'app/core/shared/shared.module';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent, MainNavComponent],
  exports: [ShellComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule { }
