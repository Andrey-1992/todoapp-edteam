import { Component } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent {
  showText = true;

  ngOnInti(): void {

  }

  // changeText():void {
  //   this.showText = !this.showText;
  // }

}
