import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  men: number;
  i: number = 0;
  total: number = 203728;

  constructor() { }

  ngOnInit() {

    setTimeout( () => {
      let i = this.i;

      while( i < 100 )
      {
          this.men = i;
          i ++;
      }

    }, 4000)
  }

}
