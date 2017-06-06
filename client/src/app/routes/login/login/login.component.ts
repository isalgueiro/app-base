import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { IFormSchema } from 'app/core/shared/_data/schema.model';
import { BusService } from 'app/core/shared/bus.service';

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

  constructor(public http: Http, public bus: BusService) { }

  ngOnInit() {
  }

  onSend(credentials) {
    this.http
      .post('http://localhost:3000/credentials', credentials)
      .subscribe(r => {
        const userToken: IUserToken = r.json().access_token;
        localStorage.setItem('token', JSON.stringify(userToken));
        console.log(JSON.stringify(userToken));
        if (userToken.roles.findIndex(r2 => r2 === ROLE.GOD) >= 0) {
          this.bus.navigateTo(['/god']);
        } else {
          this.bus.navigateTo(['/']);
        }
      });
  }

}


export interface IUserCredential {
  email: string;
  password: string;
}

export interface IUserToken {
  email: string;
  name: string;
  organizationId: string;
  roles: ROLE[];
  token: string;
}

export enum ROLE {
  ADMIN,
  CLIENT,
  GOD,
  ORGANIZER,
  PUBLIC,
  USHER,
}

export enum STATUS {
  PENDING,
  CONFIRMED,
  ACTIVE,
  DISABLED,
  CANCELED
}
