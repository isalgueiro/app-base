import { HttpClient } from '@angular/common/http';
import { IWidgetSchema } from '../../core/shared/_data/schema.model';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SchemaService } from 'app/core/shared/_data/schema.service';

@Injectable()
export class MeService {
  private organizationsUrl = 'organizations';
  private usersUrl = 'users';
  private credentialsUrl = 'credentials';

  constructor(private http: Http, private _http: HttpClient, private schemaService: SchemaService) { }

  getMeSchema(): Observable<any> {
    return this.schemaService.getSchema('me');
  }

  getChangePasswordSchema(): Observable<any> {
    return this.schemaService.getSchema('change_password');
  }

  getMeGodSchema(): Observable<any> {
    return this.schemaService.getSchema('me_god');
  }

  getMeOrganizationsSchema(): Observable<any> {
    return this.schemaService.getSchema('me_organizations');
  }

  getOrganizationsCount(): Observable<number> {
    return this._http
      .get<any>(`${this.organizationsUrl}/count`)
      .map(res => res.data);
  }

  getUsersCount(): Observable<number> {
    return this._http
      .get<any>(`${this.usersUrl}/count`)
      .map(res => res.data);
  }


  // TODO controlar si ninguna org
  getAdministratedOrganization(id): Observable<IOrganization> {
    return this._http
      .get<IOrganization>(`${this.organizationsUrl}/byId/${id}`);
  }

  changePassword(password: any): Observable<any> {
    return this.http.patch(`${this.credentialsUrl}/newPassword`, password).map(res => res.json());
  }
}



export interface IOrganization {
  name: string;
  slug: string;
  description: string
}
