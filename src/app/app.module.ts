import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { AddRemoveCartComponent } from './components/add-remove-cart/add-remove-cart.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    AddRemoveCartComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
