import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './page/login-page.component';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';


@NgModule({
  declarations: [ // Declarations: Components / Pipes / Directives
    LoginPageComponent, RegisterFormComponent
  ],
  imports: [ // Imports: Modules
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
