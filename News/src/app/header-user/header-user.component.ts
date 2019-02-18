import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  public thereIsActiveUser: boolean;
  public activeUser: any;

  constructor() {
    this.thereIsActiveUser = false;
  }

  ngOnInit() {}
}
