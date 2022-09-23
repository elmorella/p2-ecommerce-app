import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemServiceTsService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service';
import { OrderReceipt } from 'src/app/model/order-receipt.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  item: Item = new Item();

  constructor(private activatedRoute: ActivatedRoute,
              private itemService: ItemServiceTsService, 
              private authService: AuthService, 
              private router: Router,
              private orderService: OrderReceiptServiceTsService) {
    
   }

  ngOnInit(): void {
    if(!this.authService.verifyToken()){
      this.router.navigate(['login']);
    }
    let id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.itemService.getItemById(parseInt(id)).subscribe(
      (item: Item) => {
        this.item = item;
      }
    )
  }
  addToCart(id?: Number){
    this.itemService.getItemById(id!).subscribe(
      (item: Item) => {
        this.orderService.addToShoppingCart(item)
      }
    )
  }
}
