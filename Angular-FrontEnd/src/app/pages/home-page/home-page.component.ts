import { Component, OnInit } from '@angular/core';
import { AuthCertificate } from 'src/app/model/authCertificate.model';
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
  constructor(private authService: AuthService) {
    let certificate: AuthCertificate = this.authService.getAuthCert();
    // console.log('HOME PAGE');
    // console.log('Authorization token: ' + certificate.authToken);
    // console.log('home page. Username: ' + certificate.user?.username + " isAuthorized: " + certificate.isAuthorized)
    this.user = certificate.user!;
   }

  ngOnInit(): void {
     }
}
