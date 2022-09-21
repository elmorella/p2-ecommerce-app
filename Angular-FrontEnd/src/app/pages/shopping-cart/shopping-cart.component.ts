import { Component, OnInit } from '@angular/core';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: OrderReceipt = new OrderReceipt();
  subtotal: number = 0;
  taxPercent: number = .0925
  taxAmount: number = 0;
  total: number = 0;
  constructor(private orderService: OrderReceiptServiceTsService) {
   }

  ngOnInit(): void {
    console.log('SHOPPING CART')
    this.shoppingCart = this.orderService.getShoppingCart()
    console.log(this.shoppingCart.user?.name + "'s shopping cart")
    console.log(this.shoppingCart.items)

    for(let item of this.shoppingCart.items){
      this.subtotal += item.price
    }

    this.taxAmount = this.subtotal * this.taxPercent
    this.total = this.subtotal + this.taxAmount
  }
}
