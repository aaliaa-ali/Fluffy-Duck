import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_shared/models/category.model';
import { CategoryService } from 'src/app/_shared/services/category.service';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-cards.component.html',
  styleUrls: ['./categories-cards.component.css']
})
export class CategoriesCardsComponent implements OnInit {
categories!:Category[]
  constructor(private CategoryService:CategoryService) { }

  ngOnInit(): void {
   this.CategoryService.getAll().subscribe(categories=> this.categories=categories)
  }

}
