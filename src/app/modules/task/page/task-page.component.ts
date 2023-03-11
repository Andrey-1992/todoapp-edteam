import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  showText = true;
  case:number = 0;

  ngOnInti(): void {

  }

  // changeText():void {
  //   this.showText = !this.showText;
  // }

}
