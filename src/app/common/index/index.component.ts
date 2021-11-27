import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor( private router: Router,
    private tokenService: TokenService,) { }

  ngOnInit(): void {
    // if (this.tokenService.getToken() != null) {
    //   this.router.navigate(['sign-in']);
    // }
  }

}
