import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  men: number;
  i: number = 0;

  constructor() { }

  ngOnInit() {

    let i = this.i;
    while(i < 203728){
      this.men = i / 203728 * 100;
      i++;
    }

  }

}
