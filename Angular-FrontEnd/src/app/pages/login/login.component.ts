import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/model/user.model';
import { Credentials } from 'src/app/model/credentials.model';
import { Router } from '@angular/router';
import { AuthCertificate } from 'src/app/model/auth-certificate.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = new Credentials();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  public validateCredentials() {
    //let certificate: AuthCertificate = new AuthCertificate();
    this.authService.doLoginAttempt(this.credentials).subscribe((response: AuthCertificate) => {
      let certificate: AuthCertificate = response;
      this.authService.setAuthCert(certificate);
      this.router.navigate(['home']);
    })
  }
}
