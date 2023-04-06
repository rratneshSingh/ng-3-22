import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'add-product', component: AddProductComponent }
    ])
  ]
})
export class AdminModule { }
