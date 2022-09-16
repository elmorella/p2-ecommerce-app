import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';
import { ICredentials } from '../model/credentials.model';


@Injectable({
  providedIn: 'root'
})
export class UserServiceTsService {

  BASE_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  public doLoginAttempt(credentials: ICredentials) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/user/login`, credentials);
  }

  public getAllUsers() : Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/user/all`);
  }

  public addUser(user: IUser) {
    this.http.post(`${this.BASE_URL}/user/add`, user);
  }
}
