import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacesPipe } from './pipes/replace-spaces.pipe';
import { ImgBrokenDirective } from './directives/img-broken.directive';



@NgModule({
  declarations: [
    ReplaceSpacesPipe,
    ImgBrokenDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReplaceSpacesPipe
  ]
})
export class SharedModule { }
