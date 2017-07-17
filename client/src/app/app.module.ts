import { Interceptor, JWTInterceptor, ErrorInterceptor } from './core/interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from 'app/core/layout/layout.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { BusService } from 'app/core/bus.service';
import { HttpService } from 'app/core/http.service';
import { SecurityService } from 'app/core/security.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    BusService,
    /*     {
          provide: Http,
          useClass: HttpService,
          deps: [XHRBackend, RequestOptions, BusService]
        }, */
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
