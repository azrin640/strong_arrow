import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  count: number = 203728;
  i: number = 0;
  total: number;

  constructor() { }

  ngOnInit() {

  }

}
