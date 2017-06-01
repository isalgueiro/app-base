import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IMessage } from 'app/core/shared/toast/toast.component';

@Injectable()
export class BusService {

  private message$ = new Subject<IMessage>();

  constructor() {
    console.log('new BUS');
  }

  getMessage$(): Observable<IMessage> {
    return this.message$.asObservable();
  }
  emit(message: IMessage) {
    this.message$.next(message);
  }

}
