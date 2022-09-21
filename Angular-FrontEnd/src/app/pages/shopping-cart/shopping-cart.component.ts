import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
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
    this.orderService.addToShoppingCart(    {
      "id": 6,
      "name": "2003 Skyridge Holographic",
      "description": "This card is unique for several reasons as the holographic card was Colorless as opposed to the typical Fire-type.",
      "stock": 4024,
      "price": 12000.0,
      "imageUrl": "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Charizard-Cards-Most-Valuable-Pokemon-6.jpg"
  })
    this.shoppingCart = this.orderService.getShoppingCart()
    console.log(this.shoppingCart.user?.name + "'s shopping cart")
    console.log(this.shoppingCart.items)

    for(let item of this.shoppingCart.items){
      this.subtotal += item.price
    }
  }
}
