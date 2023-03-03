import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  loginForm:FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.email]),
        password: new FormControl('', [Validators.email])
      }
    )

  }

  sendCredentials():void {
    const body = this.loginForm.value;
    console.log(body)
  }

}
