import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  change = new EventEmitter<number>();
  count: number = 10;
  i: number = 0;  
  private timer: any;
  mode: any;

  constructor() { }

  ngOnInit() {

    this.timer = setInterval( () => {
      if( this.i <= this.count){
        this.mode = 'indeterminate';
        this.i++;
        let changes = this.change.emit(this.i);
        console.log(changes);
      }
      else this.mode = 'determinate';
    }, 1000);

  }

}
