import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceTsService {

  BASE_URL = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  public getAllItems() : Observable<any[]>{
    return this.http.get<any[]>(`${this.BASE_URL}/item/all`);
  }

  public getItemById(id: Number) {
    return this.http.get<Item>(`${this.BASE_URL}/item/` + id);
  }
}
