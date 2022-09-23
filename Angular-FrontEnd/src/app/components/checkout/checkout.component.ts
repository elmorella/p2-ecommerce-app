import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { OrderReceipt } from 'src/app/model/order-receipt.model';
import { AuthCertificate } from 'src/app/model/auth-certificate.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { InvokeFunctionExpr } from '@angular/compiler';
import { MyAddress } from 'src/app/model/my-address.model';
import { UserServiceTsService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public lastOrder = new Observable;
  shoppingCart: OrderReceipt =  new OrderReceipt();
  user: User = new User();
  myAddress: MyAddress = new MyAddress();
  totalItems: number = 0;
  itemCount: number = 0
  subtotal: number = 0
  taxPercent: number = .0925
  taxAmount: number = 0
  total: number = 0
  saveAddress: boolean = false;


  constructor(private authService: AuthService,
              private orderService: OrderReceiptServiceTsService,
              private userService: UserServiceTsService,
              private router: Router) { }

  ngOnInit(): void {
    if(!this.authService.verifyToken()){
      this.router.navigate(['login']);
    }
    this.orderService.getCartAmount().subscribe((response) =>{
      this.totalItems = response;
    })
    this.shoppingCart = this.orderService.getShoppingCart();
    this.user = this.authService.getAuthCert().user!;
    if(!this.user.myAddress === undefined){
      this.myAddress = this.user.myAddress!;
    }
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

  submitPurchase(){
    if(this.saveAddress){
      this.user.myAddress = this.myAddress;
      this.userService.updateUser(this.user);
    }
    this.shoppingCart.orderDate = new Date();
    this.shoppingCart.userId = this.authService.getAuthCert().user?.id;
    this.orderService.addRecipt(this.shoppingCart);
    this.orderService.clearShoppingCart();
    this.router.navigate(['home']);
  }
}
