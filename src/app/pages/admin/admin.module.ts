import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [
    AddProductComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-user', component: AddUserComponent }
    ])
  ]
})
export class AdminModule { }
