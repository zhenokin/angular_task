import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public activePage: any;

  constructor() {
    this.activePage = {
      name: 'TEST'
    };
  }

  ngOnInit() {}
}
