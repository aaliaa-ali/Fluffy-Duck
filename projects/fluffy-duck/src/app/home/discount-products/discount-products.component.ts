import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/_shared/models/product.model';
import { ProductService } from 'src/app/_shared/services/product.service';

@Component({
  selector: 'app-discount-products',
  templateUrl: './discount-products.component.html',
  styleUrls: ['./discount-products.component.css']
})
export class DiscountProductsComponent implements OnInit {
  @ViewChild('next') next!:HTMLElement
  i=1
  products!:any
  shownProducts!:any
  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.ProductService.getMaxDiscount().subscribe(products=>{
        this.products=products
        if( window.innerWidth>=1250){
          this.shownProducts=this.products.slice(0,4) 
        }else if( window.innerWidth>=1000 &&window.innerWidth<=1250){
          this.shownProducts=this.products.slice(0,3) 
        }else if( window.innerWidth>=500){
          this.shownProducts=this.products.slice(0,2)
        }else{
          this.shownProducts=this.products.slice(0,1)
        }
            })
    // this.ProductService.products
  
  }
  nextProduct(){
    console.log( window.innerWidth)
    console.log(this.shownProducts)
    this.i++
   this.shownProducts=this.products.slice(0+this.i,4+this.i)
  }
  brevProduct(){
    this.i--
   this.shownProducts=this.products.slice(0+this.i,4+this.i)
   console.log(this.shownProducts)

  }

}
