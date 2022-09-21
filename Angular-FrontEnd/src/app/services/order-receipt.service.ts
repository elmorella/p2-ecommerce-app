import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item.model';
import { OrderReceipt } from '../model/order-receipt.model';
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class OrderReceiptServiceTsService {

  private orderList: OrderReceipt = new OrderReceipt()
  public productAmount = new BehaviorSubject<any>([]);
  private qIncrease = false;
  constructor() {}

  addToShoppingCart(item: Item){
    this.orderList.items.map((orderItem: Item, index: number)=>{
      if(item.id === orderItem.id){
        this.orderList.items[index].inCartQuantity! += 1;
        this.qIncrease = true;
      }
    });
    if(this.qIncrease){
      this.qIncrease = false;
    } else {
      item.inCartQuantity = 1;
      this.orderList.items?.push(item);
    }
    this.productAmount.next(this.getQuantity());
  }

  getCartAmount(){
    return this.productAmount.asObservable();
  }

  getQuantity(){
    let quatity = 0;
    for(let item of this.orderList.items){
      quatity += item.inCartQuantity!;
    }
    return quatity;
  }

  getShoppingCart(){
    return this.orderList;
  }

  clearShoppingCart(){
    this.orderList = new OrderReceipt();
  }

  shoppingCartInit(user: User) {
    this.orderList.user = user;
    return this.orderList;
  }

  removeItem(item: Item){
    this.orderList.items.map((orderItem: Item, index: number)=>{
      if(item.id === orderItem.id){
        if(item.inCartQuantity! > 1){
          this.orderList.items[index].inCartQuantity! -= 1;
        } else {
          this.orderList.items.splice(index,1);
        }
      }
    })
    this.productAmount.next(this.getQuantity());
  }
}
