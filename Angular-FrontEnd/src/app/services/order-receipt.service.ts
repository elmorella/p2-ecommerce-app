import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { OrderReceipt } from '../model/order-receipt.model';
import { User } from '../model/user.model'

@Injectable({
  providedIn: 'root'
})
export class OrderReceiptServiceTsService {

  private orderList: OrderReceipt = new OrderReceipt()

  constructor() {}

  addToShoppingCart(item: Item){
    this.orderList.items?.push(item)
  }

  getShoppingCart(){
    return this.orderList
  }

  clearShoppingCart(){
    this.orderList = new OrderReceipt()
  }

  shoppingCartInit(user: User) {
    this.orderList.user = user
    return this.orderList
  }
}
