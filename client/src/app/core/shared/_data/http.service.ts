import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BusService } from 'app/core/shared/bus.service';

@Injectable()
export class HttpService extends Http {
  public apiProxyUrl = '';
  private authorization = '';

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private bus: BusService
  ) {
    super(backend, defaultOptions);
    this.authorization = 'Basic ' + localStorage.getItem('token');
  }

  request(request: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this.configureRequest(request, options);
    return super.request(request, options);
  }
  private configureRequest(request: string | Request, options: RequestOptionsArgs) {
    if (typeof request === 'string') {
      request = this.getApiUrl(request);
      this.setHeaders(options);
    } else {
      request['url'] = this.getApiUrl(request['url']);
      this.setHeaders(request);
    }
  }
  private interceptResponse(url: string | Request, options: RequestOptionsArgs): Observable<Response> {
    const observableRequest = super
      .request(url, options)
      .catch(this.onCatch());
    return observableRequest;
  }
  private getApiUrl(currentUrl) {
    if (currentUrl.includes('/assets/')) {
      return currentUrl;
    } else {
      return this.apiProxyUrl + currentUrl;
    }
  }
  private setHeaders(request: Request | RequestOptionsArgs) {
    const headers = request.headers;
    headers.set('Authorization', this.authorization);
  }
  private onCatch() {
    return (res: Response) => {
      if (this.isSecurityError(res)) {
        this.bus.emitSecurityError(res);
        this.bus.navigateTo(['/login']);
      } else {
         this.bus.emitHttpError(res);
      }
      return Observable.throw(res);
    };
  }
  private isSecurityError(res) {
    return res.status === 401 || res.status === 403 || res.status === 419;
  }

}
