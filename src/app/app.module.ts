import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { ReplaceSpacePipe } from './module/pipes/replace-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HomeComponent,
    ReplaceSpacePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
