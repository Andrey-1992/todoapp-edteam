import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  showText = true;
  case:number = 0;

  listUser:Array<{id:string, name:string}> = [

  ];
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // changeText():void {
  //   this.showText = !this.showText;
  // }

}
