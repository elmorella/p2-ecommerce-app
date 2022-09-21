import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items:  Item[] =[{
    "id": 1,
    "name": "1999 Holographic First Edition",
    "description": "A PSA 10-mint condition version of the 1999 holographic First Edition Base Set Charizard is the actual Holy Grail of Charizard cards and Pokemon cards in general",
    "stock": 532,
    "price": 36000.0,
    "imageUrl": "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/02/Charizard-Cards-Most-Valuable-Pokemon-1.jpg"
}
];

  ngOnInit(): void {
    console.log('SHOPPING CART')
    this.shoppingCart = this.orderService.getShoppingCart()
    console.log(this.shoppingCart.user?.name + "'s shopping cart")
    console.log(this.shoppingCart.items)

    for(let item of this.shoppingCart.items){
      this.subtotal += item.price
    }

}
