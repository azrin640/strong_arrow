import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  men: number;

  constructor() { }

  ngOnInit() {

    for(let i=0; i>=203728; i++){
      this.men = i/203728*100;
    }
    
  }

}
