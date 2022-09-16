import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { Credentials } from '../model/credentials.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceTsService {

  BASE_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  public doLoginAttempt(credentials: Credentials) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/user/login`, credentials);
  }

  public getAllUsers() : Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/user/all`);
  }

  public addUser(user: User) {
    return this.http.post(`${this.BASE_URL}/user/add`, user);
  }

  public getUserById(id: Number) {
    return this.http.get(`${this.BASE_URL}/user/` + id);
  }

  public updateUser(user: User) {
    return this.http.put(`${this.BASE_URL}/user/update`, user);
  }

  public deleteUser(id: Number) {
    return this.http.delete(`${this.BASE_URL}/user/delete/` + id);
  }
}
