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
    if(!this.authService.verifyToken()){
      this.router.navigate(['login']);
    }
    this.shoppingCart = this.orderService.getShoppingCart()
    this.items = this.shoppingCart.items
    this.orderService.getCartAmount().subscribe((response) =>{
      this.itemCount = response;
    })

    this.calculatePrice();
  }

  removeItem(item: Item){
    this.orderService.removeItem(item);
    this.calculatePrice();
  }

  calculatePrice(){
    this.subtotal = 0
    this.taxAmount = 0
    this.total = 0
    for(let item of this.shoppingCart.items){
      this.subtotal += item.price * this.shoppingCart.cardQuantity.get(item.id!.toString())!;
    }

    this.taxAmount = this.subtotal * this.taxPercent
    this.total = this.subtotal + this.taxAmount
  }
}
