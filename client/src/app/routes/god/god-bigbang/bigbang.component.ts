import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'ab-god-bigbang',
  template: `
    <ab-form [formGroup]="form"
          submitLabel="Create!!!"
          (send)="onSend()">
      <ab-input label="Secret"
        [formGroup]="form"
        [formControlName]="schemma[0]"
        type="password"
      ></ab-input>
    </ab-form>
  `,
  styles: []
})
export class GodBigbangComponent implements OnInit {

  public form: FormGroup;
  public schemma: any[];
  constructor(public http: Http, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      secret: ['', Validators.required],
    });
    this.schemma = ['secret'];
  }

  ngOnInit() {

  }

  onSend() {
    const credentials = this.form.value;
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
