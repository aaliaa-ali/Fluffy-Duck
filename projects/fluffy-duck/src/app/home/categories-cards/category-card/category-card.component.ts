import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/_shared/models/category.model';
import { ProductService } from 'src/app/_shared/services/product.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
@Input() category!:Category
  constructor(private ProductService:ProductService,
    private router:Router) { }

  ngOnInit(): void {
  }

  getProductByCatName(name:string){
    this.ProductService.getProductByCatName(name)
    this.router.navigate(['/store'])
  }

}
