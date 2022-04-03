import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/_shared/services/product.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
ages=['0-3','3-5','5-8','8-11','+11']
  goProducts(age:string) {
    this.router.navigate(
      ['/store'],
      { queryParams: { ageRange:age} }
    );
    this.product.getByAge(age)

  }
  constructor(private router:Router
    ,private product:ProductService){}
  ngOnInit(): void {
  }

}
