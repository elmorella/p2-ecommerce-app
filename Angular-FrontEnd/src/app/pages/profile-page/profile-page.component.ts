import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyAddress } from 'src/app/model/my-address.model';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import { UserServiceTsService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  public user = new User();
  constructor(private orderService: OrderReceiptServiceTsService,
              private userService: UserServiceTsService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {

    this.user = this.authService.getAuthCert().user!;
    if(this.user.myAddress == null){
      this.user.myAddress = new MyAddress();
      this.user.myAddress.address1 = "street address";
      this.user.myAddress.address2 = "apt number"
      this.user.myAddress.zipcode = 123456;
      this.user.myAddress.country = "country";
      this.user.myAddress.state = "state";
    }
    
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe((user) =>{
      this.user = user;
    });
    this.router.navigate(['home'])
  }
}
