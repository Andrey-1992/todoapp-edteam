import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacesPipe } from './pipes/replace-spaces.pipe';



@NgModule({
  declarations: [
    ReplaceSpacesPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
