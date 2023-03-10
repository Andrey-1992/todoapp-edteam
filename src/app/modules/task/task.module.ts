import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskPageComponent } from './page/task-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';


@NgModule({
  declarations: [
    TaskPageComponent,
    HeaderComponent,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
