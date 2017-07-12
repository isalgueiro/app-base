import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SchemaService {
  constructor(private http: Http) { }

  getSchema(schemaName: string) {
    return this.http
      .get(`assets/schemas/${schemaName}.json`)
      .map(res => res.json());
  }
}
