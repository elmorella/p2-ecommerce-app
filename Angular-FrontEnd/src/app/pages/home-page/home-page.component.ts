import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
//check to if token is valid
// send user and token to API
// API checks if the user and token is valid
// load product content if the token is valid
// redirect to login if the toke is not valid

// Logout
// on log out invalidate the token
// send the token and user name id back to api
// invalidate the toke

  user: User;
  constructor(private authService: AuthService, private router: Router) {
    if(!authService.verifyToken()){
      this.router.navigate(['login']);
    }
    this.user = authService.getAuthCert().user!;
   }

  ngOnInit(): void {
     }
}
