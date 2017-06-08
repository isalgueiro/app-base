import { Component, OnInit } from '@angular/core';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { LoginService, IUserCredential } from 'app/routes/login/_data/login.service';

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
        defaultValue: 'admin@agorabinaria.com',
        validators: [{ key: 'required', errorMessage: 'Email is required' }]
      },
      {
        key: 'password',
        type: 'password',
        label: 'Password',
        defaultValue: '1234',
        validators: [{ key: 'required', errorMessage: 'Password is required' }]
      }
    ]
  };

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSend(credentials: IUserCredential) {
    this.loginService
      .postLogIn(credentials);
  }

}


