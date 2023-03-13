import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCourseService {

  public datTest:string = 'Hola mundo!'

  constructor() { }

  setData(msg:string):void {
    this.datTest = msg;
  }
}
