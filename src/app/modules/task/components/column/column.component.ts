import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit, OnChanges{
  
  @Input() data:Array<any> = [];
  @Input() name:string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('---->', changes)
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
