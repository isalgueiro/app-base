import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BusService } from './bus.service';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { IUser } from 'app/core/shared/_data/user.model';
import { Level } from 'app/core/shared/_data/message.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class SecurityService {
  private userTokenKey = 'userToken';
  private userKey = 'user';
  private url = 'credentials';

  constructor(private bus: BusService, private http: HttpClient, private router: Router) {
    this.onSecurityErrNavigateToLogin();
    this.emitUserStatus();
  }

  logInUser(credentials: IUserCredential) {
    this.http
      .post(this.url, credentials)
      .subscribe(r => {
        this.saveUserToken(r);
        this.getMe()
          .subscribe(this.emitLogin.bind(this));
      });
  }

  logOutUser() {
    localStorage.removeItem(this.userTokenKey);
    this.bus.emitUserToken(null);
    localStorage.removeItem(this.userKey);
    this.bus.emitUser(null);
    this.bus.emit({ level: Level.SUCCESS, text: 'logged out!!' });
    this.navigateTo(['/login']);
  }

  createBigbang(secret: string) {
    this.http
      .post(`${this.url}/bigbang`, secret)
      .subscribe(
      r => {
        this.logInUser({ email: environment.godEmail, password: environment.secret });
        this.bus.emit({ level: Level.SUCCESS, text: 'Big Bang!!' });
      }
      );
  }

  public getMe(): Observable<IUser> {
    return this.http
      .get<IUser>('users/me')
      .do(this.saveUser.bind(this));
  }

  private onSecurityErrNavigateToLogin() {
    this.bus
      .getSecurityErr$()
      .subscribe(err => this.navigateTo(['/login']));
  }

  private emitUserStatus() {
    const userToken: string = localStorage.getItem(this.userTokenKey);
    this.bus.emitUserToken(userToken);
    const user = this.getUserFromLocalStorage();
    this.bus.emitUser(user);
  }
  private getUserFromLocalStorage() {
    let user: IUser = null;
    const userStorage = localStorage.getItem(this.userKey);
    if (userStorage) {
      user = JSON.parse(userStorage);
    }
    return user;
  }

  private saveUserToken(response) {
    const userToken: string = response.access_token;
    localStorage.setItem(this.userTokenKey, userToken);
    this.bus.emitUserToken(userToken);
  }

  private saveUser(user: IUser) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  private emitLogin(user) {
    this.bus.emitUser(user);
    this.bus.emit({ level: Level.SUCCESS, text: user.name + ' logged in!!' });
    this.navigateTo(['/me']);
  }

  private navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }

  acceptInvitation(credentials: IInvitationCredential) {
    this.http.post(`${this.url}/aceptInvitation`, credentials).subscribe(d => {
      this.saveUserToken(d);
      this.getMe()
        .subscribe(this.emitLogin.bind(this));
    });
  }
}

export interface IUserCredential {
  email: string;
  password: string;
}

export interface IInvitationCredential {
  hash: string;
  password: string;
  passwordBis: string;
}
