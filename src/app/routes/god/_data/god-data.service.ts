import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import { BusService } from 'app/core/bus.service';
import { SecurityService } from 'app/core/security.service';
import { ROLE } from 'app/core/shared/_data/user.model';

@Injectable()
export class GodDataService {
  private organizationsUrl = 'organizations';
  private credentialsUrl = 'credentials';

  constructor(private http: HttpClient, private bus: BusService, private security: SecurityService) { }

  getOrganizationsCount(): Observable<number> {
    return this.http
      .get<any>(`${this.organizationsUrl}/count`)
      .map(res => res.data);
  }

  getOrganizations(): Observable<any[]> {
    return this.http
      .get<any>(this.organizationsUrl)
      .map(data => data.map(d => {
        const org = { _id: d._id, name: d.name, admin: { name: '', email: '', userId: '' } };
        return org;
      }))
  }

  getOrganizationAdmin(organizationId: number): Observable<any> {
    return this.http
      .get<any>(`${this.organizationsUrl}/${organizationId}/users?role=ADMIN`);
  }

  /**
const params = new HttpParams();
    params.set('role', 'ADMIN');
    const options = { params: params };
    console.log(options);
    return this.http
      .get<any>(`${this.organizationsUrl}/${organizationId}/users`, options);
   * / */

  setOrganizationAdmin(newAdmin) {
    newAdmin.role = ROLE.ADMIN;
    return this.http
      .post(`${this.credentialsUrl}/invitation`, newAdmin);
  }

  postOrganization(newOrganization) {
    return this.http
      .post(this.organizationsUrl, newOrganization);
  }

  deleteOrganization(oldOrganization) {
    return this.http
      .delete(`${this.organizationsUrl}/${oldOrganization._id}`);
  }
}
