import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_shared/services/auth.service';
import { ProductService } from 'src/app/_shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  auth!: boolean;

  constructor(private AuthService: AuthService,
    private ProductService:ProductService,
    private router:Router) {}

  ngOnInit(): void {
    this.AuthService.checkAuth();
    this.AuthService.auth.subscribe((auth) => {
      this.auth = auth;
    });
  }
 
  logout() {
    this.AuthService.logout();
    // localStorage.removeItem('token')
  }
  ToStore(){
    this.ProductService.getAll()
    this.router.navigate(['/store'])
  }
}
