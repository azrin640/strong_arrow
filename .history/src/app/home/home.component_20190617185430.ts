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

    let i = 0;
      while( i < 100 )
      {
        setTimeout(() => {
          this.men = i;
        }, 5000);          
        i ++;
      }
  }

}
