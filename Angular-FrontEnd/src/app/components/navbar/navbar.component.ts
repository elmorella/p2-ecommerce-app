import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public totalItems: number = 0;
  constructor(protected authService: AuthService,
              private cartService: OrderReceiptServiceTsService) { }

  ngOnInit(): void {
    this.cartService.getCartAmount().subscribe((response) =>{
      this.totalItems = response;
    })
  }

  protected logout(){
    this.authService.logout();
  }
}
