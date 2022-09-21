import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
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
    console.log('SHOPPING CART')
    this.orderService.addToShoppingCart(    {
      "id": 6,
      "name": "2003 Skyridge Holographic",
      "description": "This card is unique for several reasons as the holographic card was Colorless as opposed to the typical Fire-type.",
      "stock": 4024,
      "price": 12000.0,
      "imageUrl": "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Charizard-Cards-Most-Valuable-Pokemon-6.jpg"
  })
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
