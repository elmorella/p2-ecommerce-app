import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../model/item.model';
import { OrderReceipt } from '../model/order-receipt.model';
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class OrderReceiptServiceTsService {

  private orderList: OrderReceipt = new OrderReceipt()
  public productAmount = new BehaviorSubject<any>([]);
  BASE_URL = 'http://localhost:8080/order'
  private qIncrease = false;
  private header = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(private http: HttpClient) {}

  addToShoppingCart(item: Item){
    this.orderList.items.map((orderItem: Item, index: number)=>{
      if(item.id === orderItem.id){
        this.orderList.cardQuantity.set(orderItem.id!.toString(), (this.orderList.cardQuantity.get(orderItem.id!.toString())! + 1));
        this.qIncrease = true;
      }
    });
    if(this.qIncrease){
      this.qIncrease = false;
    } else {
      this.orderList.cardQuantity.set(item.id!.toString(), 1)
      this.orderList.items?.push(item);
    }
    this.productAmount.next(this.getQuantity());
  }

  getCartAmount(){
    return this.productAmount.asObservable();
  }

  getQuantity(){
    let quatity = 0;
    this.orderList.cardQuantity.forEach((value)=>{
      quatity += value;
    })
    return quatity;
  }

  getShoppingCart(){
    return this.orderList;
  }

  clearShoppingCart(){
    this.orderList = new OrderReceipt();
    this.productAmount.next(this.getQuantity());
  }


  removeItem(item: Item){
    this.orderList.items.map((orderItem: Item, index: number)=>{
      if(item.id === orderItem.id){
        if(this.orderList.cardQuantity.get(item.id!.toString())! > 1){
          this.orderList.cardQuantity.set(orderItem.id!.toString(), (this.orderList.cardQuantity.get(orderItem.id!.toString())! - 1));
        } else {
          this.orderList.items.splice(index,1);
        }
      }
    })
    this.productAmount.next(this.getQuantity());
  }
  
  getUserRecipts(userId: number){
    return this.http.get<OrderReceipt[]>(`${this.BASE_URL}/all/` + userId);

  }

  addRecipt(receipt: OrderReceipt){
    let cardQ = JSON.stringify(Object.fromEntries(receipt.cardQuantity))
    let jsonReceipt = JSON.stringify(receipt)
    .replace("\"cardQuantity\":{}", "\"cardQuantity\":" + cardQ);
    this.http.post(`${this.BASE_URL}/add`, jsonReceipt,{ headers: this.header }).subscribe();
  }
}
