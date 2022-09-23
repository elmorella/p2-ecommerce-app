import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import {AuthService} from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: OrderReceipt[] = [];
  quantity: Map<number, number> = new Map();
  price: Map<number, number> = new Map();
  constructor(private orderService: OrderReceiptServiceTsService,
              private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {
    if(!this.authService.verifyToken()){
      this.router.navigate(['login']);
    }
    const map = new Map([
      ['name', 'Tim'],
      ['country', 'Chile'],
    ]);
  this.orderService.getUserRecipts(this.authService.getAuthCert().user!.id!).subscribe((orders) =>{
    this.orders = orders;
    for(let order of this.orders){
      console.log(map)
      order.cardQuantity = new Map(Object.entries(order.cardQuantity));
      let tempQ = this.getItemQuantity(order);
      let tempP = this.calculatePrice(order);
      this.quantity.set(order.id!, tempQ);
      this.price.set(order.id!,tempP);
    }
  })

   
  }

  getItemQuantity(order: OrderReceipt): number{
    let result = 0;
    console.log(order)
    for(let item of order.items){
      result += order.cardQuantity.get(item.id!.toString())!;
    }
    return result;
  }

  calculatePrice(order: OrderReceipt): number{
    console.log(order)
    let subtotal = 0;
    let taxAmount = 0;
    let total = 0;
    for(let item of order.items){
      console.log(item)
      subtotal += item.price * order.cardQuantity.get(item.id!.toString())!;
    }

    taxAmount = subtotal * .0925;
    total = subtotal + taxAmount;

    return total;
  }
}
