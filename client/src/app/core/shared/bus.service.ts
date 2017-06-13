import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IMessage, Level } from 'app/core/shared/toast/toast.component';
import { IUser } from 'app/routes/god/_data/user.model';

@Injectable()
export class BusService {

  private message$ = new Subject<IMessage>();
  private securityErr$ = new Subject<string>();
  private userToken$ = new Subject<string>();
  private user$ = new Subject<IUser>();

  constructor() {
  }

  getMessage$(): Observable<IMessage> {
    return this.message$.asObservable();
  }
  getSecurityErr$(): Observable<string> {
    return this.securityErr$.asObservable();
  }
  getUser$(): Observable<IUser> {
    return this.user$.asObservable();
  }
  getUserToken$(): Observable<string> {
    return this.userToken$.asObservable();
  }

  emit(message: IMessage) {
    this.message$.next(message);
  }
  emitHttpError(error) {
    const errMsg = this.getMessageFromError(error);
    this.emit({ level: Level.ERROR, text: errMsg });
  }
  emitSecurityError(error) {
    const errMsg = this.getMessageFromError(error);
    this.emit({ level: Level.WARNING, text: errMsg });
    this.securityErr$.next(errMsg);
  }
  emitUser(user) {
    console.log('emitUser:', JSON.stringify(user));
    this.user$.next(user);
  }
  emitUserToken(userToken: string) {
    console.log('emitUserToken:', userToken);
    this.userToken$.next(userToken);
  }

  private getMessageFromError(error) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = this.getMessageFromResponse(error);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.warn(errMsg);
    return errMsg;
  }
  private getMessageFromResponse(error) {
    const body = error.json() || '';
    const errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
    return errMsg;
  }


}
