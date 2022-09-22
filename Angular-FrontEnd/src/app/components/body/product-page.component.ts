import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { User } from 'src/app/model/user.model';
import { ItemServiceTsService } from 'src/app/services/item.service';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserServiceTsService } from 'src/app/services/user.service';
import { OrderReceipt } from 'src/app/model/order-receipt.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  items: Item[] = [];
  user: User = new User;

  constructor(private auth: AuthService, private itemService: ItemServiceTsService, 
    private orderService : OrderReceiptServiceTsService) { 
    this.user = auth.getAuthCert().user!
  }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((items: Item[]) => {
      this.items = items
      } 
    )
  }

  addToCart(id?: Number){
    console.log(id)
    this.itemService.getItemById(id!).subscribe(
      (item: Item) => {
        this.orderService.addToShoppingCart(item)
      }
    )
  }
}
