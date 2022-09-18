import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthCertificate } from 'src/app/data/model/authCertificate.model';
import { User } from 'src/app/data/model/user.model';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // user: User = new User();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.certificate = this.authService.getAuthCert();
    // console.log('home page. User: ' + this.certificate.user?.name + " isAuthorized: ")
  }
}
