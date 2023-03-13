import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestCourseService {

  public datTest:string = 'Hola mundo!'

  constructor() { }

  setDSata(msg:string):void {
    this.datTest = msg;
  }
}
