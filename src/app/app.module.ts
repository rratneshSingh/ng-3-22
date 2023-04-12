import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CartComponent } from './pages/cart/cart/cart.component';
import { ProductService } from './services/product.service';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', loadChildren: () => import('./pages/product/product.module').then((m)=>m.ProductModule) },
      { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then((m)=>m.CartModule) },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m)=>m.AdminModule) },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
