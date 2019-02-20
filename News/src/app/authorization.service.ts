import { Injectable, EventEmitter } from '@angular/core';
import { AccAPI } from './acc-api/Accounts.API';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public activeUser: { name: string; imageUrl: string; id: number };
  public appearedActiveUser: EventEmitter<any> = new EventEmitter();

  constructor() {
    AccAPI.getActiveUser().then(activeUser => {
      if (!!activeUser) {
        this.activeUser = activeUser;
        this.appearedActiveUser.emit(activeUser);
      }
    });
  }

  setActiveUser(user: { name: string; imageUrl: string; id: number }) {
    this.activeUser = user;
    this.appearedActiveUser.emit(user);
  }

  getUserName(): string {
    return this.activeUser.name;
  }

  isThereActiveUser() {
    return !!this.activeUser;
  }
  logIn(user: any): Promise<any> {
    return AccAPI.logIn(user);
  }
  singUp(user: any): Promise<any> {
    return AccAPI.singUp(user);
  }
  logOut(): Promise<any> {
    this.setActiveUser(null);
    return AccAPI.logOut();
  }
}
