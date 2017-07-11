import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrganizationService {
  private url = 'organization';
  constructor(private http: Http) {

  }
  updateOrganization(organization: IOrganization): Observable<IOrganization> {
    return this.http.patch(`${this.url}`, organization)
      .map(o => o.json());
  }
}

export interface IOrganization {
  _id?: string;
  slug: string;
  name: string;
  email: string;
  phone: string;
  url: string;
  address: any;
  description: string;
  image: string;
  standardPrice: string;
  reducedPrice: string;
}
