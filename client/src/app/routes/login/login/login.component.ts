import { Component, OnInit } from '@angular/core';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { SecurityService, IUserCredential } from 'app/core/shared/security.service';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public formSchema: IFormSchema = {
    title: 'Log In',
    submitLabel: 'Send',
    buttonBlock: true,
    controls: [
      {
        key: 'email',
        type: 'email',
        label: 'Email',
        defaultValue: environment.godEmail,
        validators: [{ key: 'required', errorMessage: 'Email is required' }]
      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
        defaultValue: environment.secret,
        validators: [{ key: 'required', errorMessage: 'Password is required' }]
      }
    ]
  };

  constructor(private security: SecurityService) { }

  ngOnInit() {
  }

  onSend(credentials: IUserCredential) {
    this.security
      .logInUser(credentials);
  }

}


