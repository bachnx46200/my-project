import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import { JwtDTO } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public login(login: Login): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', login);
  }
}
