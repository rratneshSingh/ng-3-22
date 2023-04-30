import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from 'src/app/services/product.service';
import { FormsModule } from '@angular/forms';
import { ProductResolver } from 'src/app/services/product.resolve';

@NgModule({
  declarations: [
     ProductComponent, 
     ProductsComponent,
    ProductDetailComponent 
    ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent, resolve: [ProductResolver] },
      { path: ':productId', component: ProductDetailComponent  }
    ])
  ],
  providers: []
})
export class ProductModule { }
