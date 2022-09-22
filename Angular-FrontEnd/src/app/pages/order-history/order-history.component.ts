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
  constructor(private orderService: OrderReceiptServiceTsService,
              private authService: AuthService,
              private router: Router) {
   }

  ngOnInit(): void {

  this.orderService.getUserRecipts(this.authService.getAuthCert().user!.id!).subscribe((orders) =>{
    this.orders = orders;
  })

   
  }

  getItemQuantity(order: OrderReceipt){
    let result = 0;
    for(let item of order.items){
      result += item.inCartQuantity!;
    }
    return result;
  }

  calculatePrice(order: OrderReceipt){
    let subtotal = 0;
    let taxAmount = 0;
    let total = 0;
    for(let item of order.items){
      subtotal += item.price * item.inCartQuantity!;
    }

    taxAmount = subtotal * .0925;
    total = subtotal + taxAmount;

    return total;
  }
}
