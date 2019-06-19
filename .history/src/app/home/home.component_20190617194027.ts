import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  i: number[] = [];
  total: number = 203728;

  constructor() { }

  ngOnInit() {

  }

}
