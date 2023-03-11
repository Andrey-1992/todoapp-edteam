import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {

  // showText = true;
  // case:number = 0;
  // listUser:Array<{id:string, name:string}> = [];
  groups:Array<any> = [];

  ngOnInit(): void {
    this.groups = [
      {
        label: "Nuevos",
        color: "tomato",
        list: [
          {
            order: "Como instalar Angular",
            items: [
              {
                key: "price",
                value: 152
              },
              {
                key: "time",
                value: 152
              }
            ]
          }
        ]
      },
      {
        label: "Trabajando",
        color: "green",
        list: [
          {
            order: "Como instalar Angular",
            items: [
              {
                key: "price",
                value: 152
              },
              {
                key: "time",
                value: 152
              }
            ]
          }
        ]
      },
    ]

    // this.taskService.getTask()
    // .subscribe((response) => {

    //   const {data} = response;
    //   this.groups = data;
    //   console.log('--->',response)

    // })

  }

  // changeText():void {
  //   this.showText = !this.showText;
  // }

}
