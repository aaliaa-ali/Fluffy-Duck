import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  getAll(){
   return this.http.get<Category[]>('http://localhost:8000/api/categories')
  }

  constructor(private http:HttpClient) {}
}
