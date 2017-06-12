import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { IMessage, Level } from 'app/core/shared/toast/toast.component';
import { Router } from '@angular/router';
import { IUser } from 'app/routes/god/_data/user.model';

@Injectable()
export class BusService {

  private message$ = new Subject<IMessage>();
  private userToken$ = new Subject<string>();
  private user$ = new Subject<IUser>();
  private userTokenKey = 'userToken';
  constructor(private router: Router) {
    const userSavedToken = localStorage.getItem(this.userTokenKey);
    if (userSavedToken) {
      this.userToken$.next(userSavedToken);
    } else {
      this.userToken$.next(null);
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
    this.navigateTo(['/login']);
  }

  emitUserStatus(user) {
    this.user$.next(user);
    this.navigateTo(['/']);
  }

  getUser$(): Observable<IUser> {
    return this.user$.asObservable();
  }

  emitUserToken(userToken: string) {
    localStorage.setItem(this.userTokenKey, userToken);
    this.userToken$.next(userToken);
  }

  getUserToken$(): Observable<string> {
    return this.userToken$.asObservable();
  }

  getMessageFromError(error) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = this.getMessageFromResponse(error);
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.warn(errMsg);
    return errMsg;
  }

  getMessageFromResponse(error) {
    const body = error.json() || '';
    const errMsg = `${error.status} - ${error.statusText || ''} ${body}`;
    return errMsg;
  }

  getBodyError(body) {

  }
  navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }

}
