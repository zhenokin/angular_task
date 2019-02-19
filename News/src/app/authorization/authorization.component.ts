import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { ActivatedRoute } from '@angular/router';

const TEXT = {
  logIn: 'Log in',
  singUp: 'Sing Up'
};

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  private actionType: string;
  private accountName: string;
  private password: string;

  public headerText: string;

  constructor(
    private accountsService: AuthorizationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actionType = this.route.snapshot.params['action'];
    this.headerText = TEXT[this.actionType];
  }

  onAccountNameChange(event: any) {
    this.accountName = event.target.value;
  }
  onPasswordChange(event: any) {
    this.password = event.target.value;
  }

  handleEnter() {
    switch (this.actionType) {
      case 'logIn':
        this.accountsService.logIn({
          name: this.accountName,
          pass: this.password,
          isAdmin: true
        });
        break;
      case 'singUp': {
        this.accountsService.singUp({
          name: this.accountName,
          pass: this.password,
          isAdmin: true
        });
        break;
      }
    }
  }
  handleCancel() {
    window.location.href = 'http://localhost:4200/';
  }
}
