import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { GodDataService } from 'app/routes/god/_data/god-data.service';

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

  constructor(private godData: GodDataService) { }

  ngOnInit() { }

  onSend(secret) {
    this.godData
      .createBigbang(secret);
  }

}
