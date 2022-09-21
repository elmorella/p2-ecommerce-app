import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceTsService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item.model';
import { OrderReceiptServiceTsService } from 'src/app/services/order-receipt.service'
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
              private orderService: OrderReceiptServiceTsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('id: ' + id)
    this.itemService.getItemById(parseInt(id)).subscribe(
      (item: Item) => {
        this.item = item;
      }
    )
  }

  addToCart(id?: Number){
    console.log(id)
    this.itemService.getItemById(id!).subscribe(
      (item: Item) => {
        console.log(item.name)
        this.orderService.addToShoppingCart(item)
        let cart: OrderReceipt = this.orderService.getShoppingCart()
        console.log(cart.user?.name)
        console.log(cart.items.length)
        console.log(cart.items[0].description)
      }
    )
  }
}
