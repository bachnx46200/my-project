import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(  private router: Router, private tokenService: TokenService,) { }

  ngOnInit(): void {
    // if (this.tokenService.getToken() != null) {
    //   this.router.navigate(['/sign-in']);
    // }
  }
  // onLogout(): void {
  //   this.tokenService.logOut();
  //   this.router.navigate(['/sign-in']);
  // }
}
