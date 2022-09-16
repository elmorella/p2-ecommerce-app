import { Component, OnInit } from '@angular/core';
import { UserServiceTsService } from '../data/services/user.service';
import { User } from '../data/model/user.model';
import { Credentials } from '../data/model/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials= new Credentials;
  user: User = new User();

  constructor(private service: UserServiceTsService) { }

  ngOnInit(): void {}

  public validateCredentials() {
    let resp = this.service.doLoginAttempt(this.credentials);
    resp.subscribe((response: User) => { 
      this.user = response;
    })
  }
}
