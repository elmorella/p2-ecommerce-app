import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ItemServiceTsService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  item: Item = new Item();

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemServiceTsService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log('id: ' + id)
    this.itemService.getItemById(parseInt(id)).subscribe(
      (item: Item) => {
        this.item = item;
      }
    )
  }

}
