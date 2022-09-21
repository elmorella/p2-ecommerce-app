import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: OrderReceipt = new OrderReceipt()
  items: Array<Item> = []
  itemCount: number = 0
  subtotal: number = 0
  taxPercent: number = .0925
  taxAmount: number = 0
  total: number = 0
  constructor(private orderService: OrderReceiptServiceTsService,
              private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {
    this.shoppingCart = this.orderService.getShoppingCart()
    this.items = this.shoppingCart.items

    for(let item of this.shoppingCart.items){
      this.subtotal += item.price
      this.itemCount++
    }

    this.taxAmount = this.subtotal * this.taxPercent
    this.total = this.subtotal + this.taxAmount
  }
}
