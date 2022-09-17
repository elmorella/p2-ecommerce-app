import { Component, OnInit } from '@angular/core';
import { UserServiceTsService } from '../../data/services/user.service';
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

  constructor(private service: UserServiceTsService, private router: Router) { }

  ngOnInit(): void {}

  public validateCredentials() {
    let resp = this.service.doLoginAttempt(this.credentials);
    resp.subscribe((response: User) => { 
      this.user = response;
      console.log(this.credentials, this.user);

      this.router.navigate(['home', this.user])
    })
  }
}
