import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeService {
  private organizationsUrl = 'organizations';
  private usersUrl = 'users';

  constructor(private http: Http) { }

  getOrganizationsCount(): Observable<number> {
    return this.http
      .get(`${this.organizationsUrl}/count`)
      .map(res => res.json().data);
  }

  getUsersCount(): Observable<number> {
    return this.http
      .get(`${this.usersUrl}/count`)
      .map(res => res.json().data);
  }
}
