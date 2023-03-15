import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieModule } from 'ngx-cookie';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { ReplaceSpacePipe } from './module/pipes/replace-space.pipe';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenSessionInterceptor } from './core/interceptors/token-session.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    ReplaceSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [
    {
      useClass:TokenSessionInterceptor,
      provide:HTTP_INTERCEPTORS,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
