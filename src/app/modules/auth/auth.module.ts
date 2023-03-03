import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './page/login-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ // Declarations: Components / Pipes / Directives
    LoginPageComponent
  ],
  imports: [ // Imports: Modules
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
