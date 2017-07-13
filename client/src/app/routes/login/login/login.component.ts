import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IUserCredential } from 'app/core/security.service';
import { environment } from './../../../../environments/environment';
import { SchemaService } from 'app/core/shared/_data/schema.service';
import { Observable } from 'rxjs/Observable';
import { BusService } from 'app/core/bus.service';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public panelSchema: IWidgetSchema;
  public formSchema: IFormSchema;

  constructor(private security: SecurityService, private bus: BusService) { }

  ngOnInit() {
    this.bus
      .getPageSchema$()
      .subscribe(schemas => {
        this.panelSchema = schemas.panel;
        this.formSchema = schemas.form;
      });
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


