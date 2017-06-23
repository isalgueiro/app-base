import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MeService {
  private organizationsUrl = 'organizations';

  constructor(private http: Http) { }

  getOrganizationsCount(): Observable<number> {
    return this.http
      .get(`${this.organizationsUrl}/count`)
      .map(res => res.json().data);
  }
}
