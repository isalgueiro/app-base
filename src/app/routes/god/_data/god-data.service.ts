import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
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

  /* getOrganizationsFull(): Observable<any[]> {
    return this.http
      .get<any[]>(this.organizationsUrl)
      .map(data => data.map(d => {
        const org = { _id: d._id, name: d.name, admin: { name: '', email: '', userId: '' } };
        return org;
      }))
      .switchMap(orgs => {
        const observables = orgs.map(org => {
          return this
            .getOrganizationAdmin(org.id)
            .map(users => { org.admin = users && users[0]; return org; })
        });
        return Observable.forkJoin(observables);
      })
  } */

  getOrganizations(): Observable<any[]> {
    return this.http
      .get<any>(this.organizationsUrl)
      .map(data => data.map(d => {
        const org = { _id: d._id, name: d.name, admin: { name: '', email: '', userId: '' } };
        return org;
      }))
  }

  getOrganizationAdmin(organizationId: number): Observable<any> {
    const search = new URLSearchParams();
    search.set('role', ROLE.ADMIN.toString());
    return this.http
      .get<any>(`${this.organizationsUrl}/${organizationId}/users?${search.toString()}`);
  }

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

  createBigbang(secret) {
    this.security.createBigbang(secret);
  }
}
