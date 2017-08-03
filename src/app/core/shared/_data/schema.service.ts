import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SchemaService {
  constructor(private http: HttpClient) { }

  getSchema(schemaName: string) {
    return this.http
      .get<any>(`assets/schemas/${schemaName}.json`);
  }

  valueByPath(target, path) {
    if (!path) {
      return '';
    }
    path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    path = path.replace(/^\./, '');           // strip a leading dot
    const chunks = path.split('.');
    for (let index = 0, n = chunks.length; index < n; ++index) {
      const chunk = chunks[index];
      if (target) {
        if (chunk in target) {
          target = target[chunk];
        } else {
          return;
        }
      } else {
        return;
      }
    }
    return target;
  }

  orderDataByKey(values: any[], orderKey: any) {
    return values.sort((a, b) => {
      const valA = this.valueByPath(a, orderKey);
      const valB = this.valueByPath(b, orderKey);
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0
    });
  }

  populateDefaultValues(form: IFormSchema, target: any) {
    form.controls.forEach(c => c.defaultValue = this.valueByPath(target, c.key))
  }
}
