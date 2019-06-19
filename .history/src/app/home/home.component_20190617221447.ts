import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {  
  
  @Output() change: EventEmitter<number> = new EventEmitter();
  count: number = 203728;
  i: number = 0;  
  mode: string;
  total: number = 0;
  value: number = 0;
  

  constructor() { }

  ngOnInit() {

    setInterval( () => {
      if( this.i <= this.count){
        this.mode = 'indeterminate';
        this.i = this.i + 500;
        this.change.emit(this.i);
        this.change.subscribe(
          response => this.total = response
        )
      }
      else{
        this.mode = 'determinate';
        this.value = 100;
      } 
    }, 30);

  }

}
