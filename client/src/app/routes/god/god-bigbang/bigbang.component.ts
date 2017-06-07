import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/shared/bus.service';

@Component({
  selector: 'ab-god-bigbang',
  template: `
    <header>{{formSchema.title}}</header>
    <ab-form [formSchema]="formSchema"
             (send)="onSend($event)">
    </ab-form>
  `,
  styles: []
})
export class GodBigbangComponent implements OnInit {

  public formSchema: IFormSchema = {
    title: 'God creation',
    submitLabel: 'Big Bang!!!',
    controls: [
      {
        key: 'secret',
        type: 'password',
        label: 'Secret',
        defaultValue: 'secret',
        validators: [{ key: 'required', errorMessage: 'Secret is required' }]
      }
    ]
  };

  constructor(private http: Http, private bus: BusService) { }

  ngOnInit() { }

  onSend(credentials) {
    this.http
      .post('http://localhost:3000/credentials/bigbang', credentials)
      .subscribe(
      r => {
        console.warn(r.json());
        this.bus.navigateTo(['/god']);
      },
      error => {
        this.bus.emitHttpError(error);
      });
  }

}
