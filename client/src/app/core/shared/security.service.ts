import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BusService } from 'app/core/shared/bus.service';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { IUser } from 'app/core/shared/_data/user.model';

@Injectable()
export class SecurityService {
  private userTokenKey = 'userToken';
  private userKey = 'user';
  private url = 'credentials';

  constructor(private bus: BusService, private http: Http, private router: Router) {
    this.bus
      .getSecurityErr$()
      .subscribe(err => this.navigateTo(['/login']));
    this.bus.emitUserToken(localStorage.getItem(this.userTokenKey));
    const savedUSer = localStorage.getItem(this.userKey);
    if (savedUSer) {
      console.table(savedUSer);
      const user: IUser = JSON.parse(savedUSer);
      this.bus.emitUser(user);
    } else {
      this.bus.emitUser(null);
    }
  }

  logInUser(credentials: IUserCredential) {
    this.http
      .post(this.url, credentials)
      .subscribe(r => {
        this.saveUserToken(r);
        this.getLoggedUser();
      });
  }

  logOutUser() {
    localStorage.removeItem(this.userTokenKey);
    this.bus.emitUserToken(null);
    localStorage.removeItem(this.userKey);
    this.bus.emitUser(null);
    this.navigateTo(['/']);
  }

  createBigbang(secret: string) {
    this.http
      .post(`${this.url}/bigbang`, secret)
      .subscribe(
      r => this.logInUser({ email: environment.godEmail, password: environment.secret })
      );
  }

  private saveUserToken(response) {
    const userToken: string = response.json().access_token;
    localStorage.setItem(this.userTokenKey, userToken);
    this.bus.emitUserToken(userToken);
  }

  private getLoggedUser() {
    this.http
      .get('users/me')
      .subscribe(res => this.saveUser(res));
  }

  private saveUser(res) {
    const user: IUser = res.json();
    console.table(user);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.bus.emitUser(user);
    this.navigateTo(['/']);
  }

  private navigateTo(target: any, args?: any) {
    this.router.navigate(target);
  }
}

export interface IUserCredential {
  email: string;
  password: string;
}
