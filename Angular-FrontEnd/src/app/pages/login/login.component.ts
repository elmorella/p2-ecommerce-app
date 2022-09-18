import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/data/services/auth.service';
import { User } from 'src/app/data/model/user.model';
import { Credentials } from 'src/app/data/model/credentials.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = new Credentials();
  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  public validateCredentials() {
    let resp = this.authService.doLoginAttempt(this.credentials);
    resp.subscribe((response: User) => { 
      this.user = response;
      console.log(this.credentials, this.user);

      this.router.navigate(['home', this.user])
    })
  }
}
