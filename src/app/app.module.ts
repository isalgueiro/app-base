import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from 'app/core/layout/layout.module';
import { SharedModule } from 'app/core/shared/shared.module';
import { BusService } from 'app/core/bus.service';
import { SecurityService } from 'app/core/security.service';
import { Interceptor, JWTInterceptor, ErrorInterceptor } from 'app/core/interceptor.service';
import { MessagesService } from 'app/core/messages.service';

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
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    MessagesService,
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
