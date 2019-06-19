import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Output() menChange: EventEmitter<number> = new EventEmitter();
  @Output() percentChange: EventEmitter<number> = new EventEmitter();
  
  
  // Men Count
  count: number = 203728;
  i: number = 0;  
  mode: string;
  total: number = 0;
  value: number = 0;

  // Percent Count
  percentCount: number = 99;
  p: number = 0;  
  percentMode: string;
  percentTotal: number = 0;
  percentValue: number = 0; 

  constructor() { }

  ngOnInit() {

    setInterval( () => {
      if( this.i < this.count){
        this.mode = 'indeterminate';
        this.i = this.i + 500;
        this.menChange.emit(this.i);
        this.menChange.subscribe(
          response => this.total = response
        )
      }
      else{
        this.mode = 'determinate';
        this.value = 100;
      } 
    }, 20);

    setInterval( () => {
      if( this.p < this.percentCount){
        this.percentMode = 'indeterminate';
        this.p++;
        this.percentChange.emit(this.p);
        this.percentChange.subscribe(
          response => this.percentTotal = response
        )
      }
      else{
        this.percentValue = 99;
        this.percentMode = 'determinate';        
      } 
    }, 100);

  }

}
