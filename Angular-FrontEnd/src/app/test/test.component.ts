import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserServiceTsService } from '../services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  user: User = new User();
  users: any[] = [];

  constructor(private service: UserServiceTsService) { }

  ngOnInit(): void {
  }

  public getAllUsers() {
    this.service.getAllUsers().subscribe((response: any[]) => {
      this.users = response;
    })
  }

  public addUserTest(user: User){
    let newUser: User = new User();

    newUser
    newUser.username = "captain.america";
    newUser.email = "captain@america.com";
    newUser.name = "Steve Rogers";
    newUser.password = "avengers";

    this.service.addUser(newUser).subscribe((response: any) => {
      this.user = response;
    })
  }

  public getUserById(id: Number) {
    this.service.getUserById(id).subscribe((response: any) => {
      this.user = response;
    })
  }

  public updateUser(user: User) {
    this.service.updateUser(user).subscribe((response: any) => {
      this.user = response;
    })
  }

  public deleteUser(id: Number) {
    this.service.deleteUser(id).subscribe((response: any) => {
    })
  }
}
