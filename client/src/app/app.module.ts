import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from 'app/core/layout/layout.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { BusService } from 'app/core/shared/bus.service';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { HttpService } from 'app/core/shared/_data/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    BusService,
    {
      provide: Http,
      useClass: HttpService,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
