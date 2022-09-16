import { Component, OnInit } from '@angular/core';
import { UserServiceTsService } from '../data/services/user.service';
import { IUser } from '../data/model/user.model';
import { ICredentials } from '../data/model/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {email:"", name: "", username:"", password:"", orderReceipts:[], userId:0}
  users: any[] = []

  constructor(private service: UserServiceTsService) { }

  ngOnInit(): void {}

  credentials: ICredentials = { username: "miss.marvel", password: "avengers" };

  public validateCredentials() {
    let resp = this.service.doLoginAttempt(this.credentials);
    resp.subscribe((response: IUser) => { 
      this.user = response;
    })
  }

  public getAllUsers() {
    console.log('clicked')
    this.service.getAllUsers().subscribe((response: any[]) => {
      this.users = response;
      console.log(response);
    })
  }

  public addUser(){
    this.service.addUser(this.user);
  }
}
