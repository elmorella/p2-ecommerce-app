import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : any[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((response: any) => {
      this.categories = response.data;
    })
  }

}
