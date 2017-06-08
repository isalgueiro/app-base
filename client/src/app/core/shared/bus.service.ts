import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IMessage, Level } from 'app/core/shared/toast/toast.component';
import { Router } from '@angular/router';
import { IUser } from 'app/routes/god/_data/user.model';

@Injectable()
export class BusService {

  private message$ = new Subject<IMessage>();
  private user$ = new Subject<IUser>();
  private userTokenKey = 'userToken';
  constructor(private router: Router) {
    const userSavedToken = localStorage.getItem(this.userTokenKey);
    if (userSavedToken) {
      const userToken: IUser = JSON.parse(userSavedToken);
      this.user$.next(userToken);
    } else {
      this.user$.next(null);
    }
  }

  getMessage$(): Observable<IMessage> {
    return this.message$.asObservable();
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
  }

  emitUserStatus(user) {
    this.user$.next(user);
  }

  getUser$(): Observable<IUser> {
    return this.user$.asObservable();
  }

  getMessageFromError(error) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.warn(errMsg);
    return errMsg;
  }
  navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }

}
