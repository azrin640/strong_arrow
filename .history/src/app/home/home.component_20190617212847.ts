import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Output() change = new EventEmitter<number>();

  count: number = 203728;
  i: number = 0;  
  private timer: any;
  mode: any;

  constructor() { }

  ngOnInit() {

    this.timer = setInterval( () => {
      if( this.i <= this.count){
        this.mode = 'indeterminate';
        this.i++;
        this.change.emit( this.i);
      }
      else this.mode = 'determinate';
    }, 1000);

  }

}
