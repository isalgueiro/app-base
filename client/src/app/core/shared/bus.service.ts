import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IMessage, LEVEL } from 'app/core/shared/toast/toast.component';
import { Router } from '@angular/router';

@Injectable()
export class BusService {

  private message$ = new Subject<IMessage>();

  constructor(private router: Router) {
    console.log('new BUS');
  }

  getMessage$(): Observable<IMessage> {
    return this.message$.asObservable();
  }
  emit(message: IMessage) {
    this.message$.next(message);
  }

  emitHttpError(error) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    this.message$.next({ level: LEVEL.ERROR, text: errMsg });
  }

  navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }

}
