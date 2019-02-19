import { Injectable } from '@angular/core';
import { AccAPI } from './acc-api/Accounts.API';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  logIn(user: any) {
    AccAPI.logIn(user);
  }
  singUp(user: any) {
    AccAPI.singUp(user);
  }
}
