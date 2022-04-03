import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {

  AllFevarouites=new Subject<any>()
  favourites: Array<any> = [
  ];

  getAll(){
return this.favourites  }
  addToFavourite(product:any){
   this.favourites.push(product)
   this.AllFevarouites.next(this.favourites)
  }
  deleteFavourite(product:any){
    this.favourites.splice( this.favourites.findIndex(fev =>fev.id== product.id),1)
    this.AllFevarouites.next(this.favourites)
   }
  constructor() {}
}
