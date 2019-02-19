import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  public isThereActiveUser: boolean;
  public activeUser: any;

  public appearedActiveUser: any;

  constructor(private accountsService: AuthorizationService) {
    this.isThereActiveUser = false;
  }

  ngOnInit() {
    this.accountsService.appearedActiveUser.subscribe((user: any) => {
      console.log(user);
      this.activeUser = user;
      this.isThereActiveUser = !!user;
    });
  }

  handleLogIn() {
    window.location.href = 'http://localhost:4200/authorization/logIn';
  }
  handleSingUp() {
    window.location.href = 'http://localhost:4200/authorization/singUp';
  }
  handleLogOut() {
    this.accountsService.logOut();
  }
}
