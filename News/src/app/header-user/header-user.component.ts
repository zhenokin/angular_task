import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  public thereIsActiveUser: boolean;
  public activeUser: any;

  constructor(private accountsService: AuthorizationService) {
    this.thereIsActiveUser = false;
  }

  ngOnInit() {}

  handleLogIn() {
    window.location.href = 'http://localhost:4200/authorization/logIn';
  }
  handleSingUp() {
    window.location.href = 'http://localhost:4200/authorization/singUp';
  }
}
