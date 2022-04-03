import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CategoryCardComponent } from './home/categories-cards/category-card/category-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CategoriesCardsComponent } from './home/categories-cards/categories-cards.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './account/login/login.component';
import { RegisterComponent } from './account/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { FirstCategoriesComponent } from './home/first-categories/first-categories.component';
import { ProductCardComponent } from './store/products/product-card/product-card.component';
import { ProductsComponent } from './store/products/products.component';
import { FavouriteDirective } from './_shared/directives/favourite.directive';
import { DiscountPipe } from './_shared/pipes/discount.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgeComponent } from './home/age/age.component';
import { AuthInterceptorService } from './_shared/interceptor/auth-interceptor.service';
import { TryComponent } from './try/try.component';
import { DiscountProductsComponent } from './home/discount-products/discount-products.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    CategoryCardComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesCardsComponent,
    StoreComponent,
    LoginComponent,
    RegisterComponent,
    ImageComponent,
    AboutusComponent,
    FirstCategoriesComponent,
    ProductCardComponent,
    ProductsComponent,
    FavouriteDirective,
    DiscountPipe,
    AgeComponent,
    TryComponent,
    DiscountProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
