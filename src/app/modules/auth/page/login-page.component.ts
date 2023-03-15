import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-test.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  // constructor(private authService:AuthService, private router:Router) { }

  constructor(private authService:AuthService, private cookieService:CookieService) { }

  loginForm:FormGroup = new FormGroup({});


  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required, 
          Validators.minLength(5),
          Validators.maxLength(12)
        ])
      }
    )

    // this.taskService.getTask()
    // .subscribe((response) => {

    //   const {data} = response;
    //   this.groups = data;
    //   console.log('--->',response)

    // })

  }

  sendCredentials():void {
    const body = this.loginForm.value;
    this.authService.submitLogin(body)
    .subscribe((response) => {
      const {tokenSession} = response;
      this.cookieService.put('token_session', tokenSession, {
        path:'/'
      } )
      console.log(response)
      // this.router.navigate(['/','task'])
    })
    console.log(body)
  }

}
