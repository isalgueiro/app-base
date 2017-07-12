import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';

@Injectable()
export class OrganizationService {
  private url = 'organizations';
  constructor(private http: Http, private schemaService: SchemaService) {
  }

  updateOrganization(organization: IOrganization): Observable<IOrganization> {
    return this.http.patch(`${this.url}`, organization)
      .map(o => o.json());
  }

  getEditionSchema(): Observable<IFormSchema> {
    return this.schemaService.getSchema('organization_edition');
  }

  getViewSchema(): Observable<IWidgetSchema> {
    return this.schemaService.getSchema('organization_view');
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
