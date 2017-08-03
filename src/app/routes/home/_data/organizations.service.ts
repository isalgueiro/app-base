import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IOrganization } from 'app/routes/home/_data/models/organization.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class OrganizationsService {
  private url = 'organizations';
  constructor(private http: HttpClient) { }

  getAll(): Observable<IOrganization[]> {
    return this.http
      .get<IOrganization[]>(this.url);
  }

}
