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
  private urlToImage: string;

  public errorText: string;
  public headerText: string;
  public showError: boolean;
  public shouldHideUrlInput: boolean;

  constructor(
    private accountsService: AuthorizationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.actionType = this.route.snapshot.params['action'];
    this.headerText = TEXT[this.actionType];
    this.errorText = '';
    this.showError = false;
    this.shouldHideUrlInput = this.actionType === 'singUp';
  }

  onAccountNameChange(event: any) {
    this.accountName = event.target.value;
  }
  onPasswordChange(event: any) {
    this.password = event.target.value;
  }
  onUrlChange(event: any) {
    this.urlToImage = event.target.value;
  }

  handleEnter() {
    switch (this.actionType) {
      case 'logIn':
        this.accountsService
          .logIn({
            name: this.accountName,
            pass: this.password,
            imageUrl: this.urlToImage,
            isAdmin: true
          })
          .then(this.handleRes.bind(this));
        break;
      case 'singUp': {
        this.accountsService
          .singUp({
            name: this.accountName,
            pass: this.password,
            imageUrl: this.urlToImage,
            isAdmin: true
          })
          .then(this.handleRes.bind(this));
        break;
      }
    }
  }
  handleCancel() {
    window.location.href = 'http://localhost:4200/';
  }
  handleRes(resp: any) {
    console.log(resp);
    switch (resp.status) {
      case 'done':
        this.resSuccess(resp.userInfo);
        break;
      case 'failed':
        this.resFail(resp.text);
        break;
    }
  }
  resSuccess(info: { name: string; imageUrl: string; id: number }) {
    this.showError = false;
    this.accountsService.setActiveUser(info);
    window.location.href = 'http://localhost:4200/';
  }
  resFail(text: string) {
    this.errorText = text;
    this.showError = true;
  }
}
