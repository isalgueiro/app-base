import { BusService } from './bus.service';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { HTTP_STATUS } from './http-status.enum';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${environment.apiUrl}${req.url}`
    })
    return next.handle(req);
  }
}

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private authorization;

  constructor(private bus: BusService) {
    this.subscribeToTokenChanges();
  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: this.authorization
      }
    });
    return next.handle(req);
  }

  private subscribeToTokenChanges() {
    this.bus
      .getUserToken$()
      .subscribe(token => this.authorization = 'Bearer ' + token);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private bus: BusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch(this.onCatch.bind(this)) as Observable<HttpEvent<any>>;
  }

  private onCatch(res) {
    if (this.isSecurityError(res)) {
      this.bus.emitSecurityError(res);
    } else {
      this.bus.emitHttpError(res);
    }
    return Observable.throw(res);
  }
  private isSecurityError(res) {
    return (
      res.status === HTTP_STATUS.UNAUTHORIZED ||
      res.status === HTTP_STATUS.AUTHENTICATION_TIMEOUT);
  }
  private isNotAllowed(res) {
    return res.status === HTTP_STATUS.FORBIDDEN;
  }
}
