import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IUserCredential } from 'app/core/security.service';
import { environment } from './../../../../environments/environment';
import { Http } from '@angular/http';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public panelSchema: IWidgetSchema;
  public formSchema: IFormSchema;

  constructor(private security: SecurityService, private http: Http) {
    this.http
      .get('assets/schemas/login_panel.json')
      .subscribe(res => this.panelSchema = res.json());
    this.http
      .get('assets/schemas/login_form.json')
      .subscribe(res => this.formSchema = res.json());
  }

  ngOnInit() {
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


