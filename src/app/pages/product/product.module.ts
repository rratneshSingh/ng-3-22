import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from 'src/app/services/product.service';

@NgModule({
  declarations: [
     ProductComponent, 
     ProductsComponent,
    ProductDetailComponent 
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ProductsComponent },
      { path: ':productId', component: ProductDetailComponent  }
    ])
  ],
  providers: []
})
export class ProductModule { }
