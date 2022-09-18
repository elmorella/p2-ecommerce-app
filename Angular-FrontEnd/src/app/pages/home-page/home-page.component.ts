import { Component, OnInit } from '@angular/core';
import { AuthCertificate } from 'src/app/model/authCertificate.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService) {
    let certificate: AuthCertificate = this.authService.getAuthCert();
    console.log('HOME PAGE');
    console.log('Authorization token: ' + certificate.authToken);
    console.log('home page. Username: ' + certificate.user?.name + " isAuthorized: " + certificate.isAuthorized)
   }

  ngOnInit(): void {
     }
}
