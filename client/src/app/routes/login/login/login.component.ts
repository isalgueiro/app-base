import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public schemma: any[];

  constructor(public http: Http, public formBuilder: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['admin@agorabinaria.com', Validators.required],
      password: ['secret', Validators.required]
    });
    this.schemma = ['email', 'password'];
  }

  onSend() {
    const credentials = this.loginForm.value;
    this.http
      .post('http://localhost:3000/credentials', credentials)
      .subscribe(r => {
        const userToken: IUserToken = r.json().access_token;
        localStorage.setItem('token', JSON.stringify(userToken));
        console.log(JSON.stringify(userToken));
        if (userToken.roles.findIndex(r => r === ROLE.GOD) >= 0) {
          this.router.navigate(['/god']);
        }
        else {
          this.router.navigate(['/']);
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
