import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { AuthCertificate } from 'src/app/model/auth-certificate.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  shoppingCart: OrderReceipt =  new OrderReceipt();
  user: User = new User();
  totalItems: number = 0;
  itemCount: number = 0
  subtotal: number = 0
  taxPercent: number = .0925
  taxAmount: number = 0
  total: number = 0

  constructor(private authService: AuthService,
              private orderService: OrderReceiptServiceTsService,
              private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.verifyToken()){
      this.router.navigate(['login']);
    }
    this.orderService.getCartAmount().subscribe((response) =>{
      this.totalItems = response;
    })
    this.shoppingCart = this.orderService.getShoppingCart();
    this.user = this.shoppingCart.user!;
    this.calculatePrice();
  }
  calculatePrice(){
    this.subtotal = 0
    this.taxAmount = 0
    this.total = 0
    for(let item of this.shoppingCart.items){
      this.subtotal += item.price * item.inCartQuantity!;
    }

    this.taxAmount = this.subtotal * this.taxPercent
    this.total = this.subtotal + this.taxAmount
  }
}
