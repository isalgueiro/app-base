import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IUserCredential } from 'app/core/security.service';
import { environment } from './../../../../environments/environment';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { Observable } from 'rxjs/Observable';
import { BusService } from 'app/core/bus.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public formSchema: IFormSchema;

  constructor(
    private security: SecurityService,
    private bus: BusService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .takeWhile(() => this.formSchema == null)
      .subscribe(schemas => {
        if (schemas && schemas.form) {
          this.formSchema = schemas.form;
        }
      });
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


