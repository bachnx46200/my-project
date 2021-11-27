import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const USERID_KEY = 'AuthUserId';
const AUTHORITIES_KEY = 'AuthAuthorities'
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles!: string;
  constructor() { }
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }
  public setUserId(usetId: string): void {
    window.sessionStorage.removeItem(USERID_KEY);
    window.sessionStorage.setItem(USERID_KEY, usetId);
  }

  public getUserName(){
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities: string): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,authorities);
  }

  public getAuthorities() {   
    return  sessionStorage.getItem(AUTHORITIES_KEY)
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }
}
