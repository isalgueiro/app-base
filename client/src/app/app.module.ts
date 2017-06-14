import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutModule } from 'app/core/layout/layout.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { BusService } from 'app/bus.service';
import { HttpService } from 'app/http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    BusService,
    {
      provide: Http,
      useClass: HttpService,
      deps: [XHRBackend, RequestOptions, BusService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
