import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrganizationService {
  private url = 'organizations';
  constructor(private http: HttpClient, private schemaService: SchemaService) {
  }

  updateOrganization(organization: IOrganization): Observable<IOrganization> {
    return this.http.patch<IOrganization>(`${this.url}`, organization);
  }

  getEditionSchema(): Observable<IFormSchema> {
    return this.schemaService.getSchema('organization_edition');
  }

  getViewSchema(): Observable<IWidgetSchema> {
    return this.schemaService.getSchema('organization_view');
  }

  getSchemaValues(form: IFormSchema, target: any) {
    return this.schemaService.populateDefaultValues(form, target)
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
