import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products=new Subject<Product[]>()

  getAll(){
   this.http.get<Product[]>('http://localhost:8000/api/toys').subscribe(products=>this.products.next(products))
  }

  getProductByCatName(name:string){
    this.http.get<Product[]>(`http://localhost:8000/api/toys/${name}`).subscribe(products=>this.products.next(products))
   }
   getByAge(age:string){
    this.http.get<Product[]>(`http://localhost:8000/api/toys/age?ageRange=${age}`).subscribe(products=>this.products.next(products))
   }
   getMaxDiscount(){
  return  this.http.get<Product[]>('http://localhost:8000/api/toys')
   }

  constructor(private http:HttpClient) {}
}
