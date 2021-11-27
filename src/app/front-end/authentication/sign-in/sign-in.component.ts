import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/model/login';
import { JwtClientService } from 'src/app/service/jwt-client.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { MessageNotification } from 'src/app/service/common.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  [x: string]: any;
  isSpinning = false;
  login = new Login();
  response!: any;
  constructor(private service: JwtClientService,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    private messageNotification: MessageNotification) { }
  ngOnInit(): void {

  }
  onLogin(): void {
    this.isSpinning = true;
    this.authService.login(this.login).subscribe(
      data => {
        this.response = data;
        if (this.response.status.code == 1) {
          this.tokenService.setToken(this.response.token.token);
          this.tokenService.setAuthorities(this.response.token.roles);
          this.tokenService.setUserName(this.response.token.userName);
          this.tokenService.setUserId(this.response.token.manguoidung);
          if (this.tokenService.getToken() != null) {
            this.router.navigate(['/index']);
          }
        } else if (this.response.status.code == 0) {
          this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
        }
        this.isSpinning = false;
      },
      err => {
        this.isSpinning = false;
        this.messageNotification.createNotification(this.response.status.code, this.response.status.message);
      }
    );
  }
}
