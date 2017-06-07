import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IOrganization } from 'app/routes/home/_data/models/organization.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class OrganizationsService {
  private organizationsSeed: IOrganization[] = [];
  private organizations: IOrganization[];
  private url: 'http://localhost:3000/organizations';
  constructor(private http: Http) { }

  getAll(): Observable<IOrganization[]> {
    if (this.organizations && this.organizations.length > 0) {
      return Observable.of(this.organizations);
    } else {
      return this.http
        .get(this.url)
        .map(r => {
          const _data = r.json();
          this.organizations = _data;
          return _data;
        });
    }
  }

  postSeed(): Observable<any> {
    const o$ = this.organizationsSeed.map(o => this.http.post('http://localhost:3000/organizations', o));
    return Observable.forkJoin(o$);
  }
}
