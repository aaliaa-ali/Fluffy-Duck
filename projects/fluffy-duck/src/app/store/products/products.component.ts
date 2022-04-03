import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/_shared/models/product.model';
import { ProductService } from 'src/app/_shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  mainProducts!:Product[]
  products!:Product[]
 pagination:Array<number>=[]
  constructor(private ProductService:ProductService,
   private router:Router  ) { }

  ngOnInit(): void {
    this.ProductService.products.subscribe(products=>{
      this.mainProducts=products
      let pagesNum = Math.ceil(this.mainProducts.length/6);
      this.pagination=[]
      for(let i=1;i<= pagesNum;i++){
        this.pagination.push(i)
      }  
          this.nextPage(1)
    })
  
  }
  nextPage(i:number){
    this.router.navigate(
      ['/store'],
      { queryParams: { page: i } }
    );
      this.products=this.mainProducts.slice((i-1)*6,6*(i))
  }

}
