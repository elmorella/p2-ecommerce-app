import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(protected authService: AuthService) { }

  ngOnInit(): void {
  }

  protected logout(){
    console.log(this.authService.getAuthCert().valid);
    this.authService.logout();
    console.log(this.authService.getAuthCert().valid);
  }
}
