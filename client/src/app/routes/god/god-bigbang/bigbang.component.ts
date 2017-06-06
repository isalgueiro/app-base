import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { IFormSchema } from 'app/core/shared/_data/schema.model';

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
  constructor(public http: Http) {
  }

  ngOnInit() {

  }

  onSend(credentials) {
    this.http
      .post('http://localhost:3000/credentials/bigbang', credentials)
      .subscribe(
      r => {
        console.warn(r.json());
      },
      e => {
        console.error(e);
      });
  }

}


/*

 <ab-form [formGroup]="form"
          submitLabel="Create!!!"
          (submit)="onSubmit()">
      <section>
        <label for="secret">Secret:</label>
        <input formControlName="secret"
              type="password" />
        <ab-control-error [formGroup]="form" field="secret">
        </ab-control-error>
      </section>
      <ab-input label="Secret: "
        [formGroup]="form"
        formControlName="secret"
        type="password"
      ></ab-input>
    </ab-form>
*/
