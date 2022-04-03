import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_shared/models/product.model';
import { FavouriteService } from 'src/app/_shared/services/favourite.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  favourites!: any[];
  inFavourites: boolean = false;
  constructor(private FavouriteService: FavouriteService) {}

  ngOnInit(): void {
    this.favourites=this.FavouriteService.getAll()
    this.check( this.favourites)
     this.FavouriteService.AllFevarouites.subscribe(fev=>{
      this.check( fev)
     })
    
  }
  addToFavourite(product: Product) {
    if(this.inFavourites){
      this.FavouriteService.deleteFavourite(product);

    }else
    this.FavouriteService.addToFavourite(product);
  }
  
  check(fev:Product[]){
    if (fev.find((product:Product)=>product.id==this.product.id)) {
      this.inFavourites = true;
    }else{
      this.inFavourites = false
    }
  }
}
