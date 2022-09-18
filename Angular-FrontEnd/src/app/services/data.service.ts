import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'https://apolis-grocery.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/category`)
  }

  }

