import { Component, OnInit } from '@angular/core';
import { IFormSchema, IWidgetSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IUserCredential } from 'app/core/security.service';
import { environment } from './../../../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  loadedMetadata = false;
  loadingPanelSchema = {
    loading: true,
    empty: false
  };
  public panelSchema: IWidgetSchema;
  public formSchema: IFormSchema;

  constructor(private security: SecurityService, private http: Http) {
    Observable.forkJoin(
      this.http
        .get('assets/schemas/login_panel.json')
        .do(res => this.panelSchema = res.json()),
      this.http
        .get('assets/schemas/login_form.json')
        .do(res => this.formSchema = res.json())
    ).subscribe(res => this.loadedMetadata = true);
  }

  ngOnInit() {
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


