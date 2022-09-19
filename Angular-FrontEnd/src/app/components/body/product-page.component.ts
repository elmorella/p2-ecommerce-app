import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemServiceTsService } from 'src/app/services/item.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  items: Item[] = [];
  constructor(private itemService: ItemServiceTsService) {  }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((items: Item[]) => {
      this.items = items
      } 
    )
  }
}
