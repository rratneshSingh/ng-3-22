import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { UserGuard } from './guard/user.guard';



@NgModule({
  declarations: [
    AddProductComponent,
    AddUserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'add-product', component: AddProductComponent },
      { path: 'add-user', component: AddUserComponent, canDeactivate: [ UserGuard ] },
      { path: 'users', component: UsersComponent },
    ])
  ], providers: [ UserGuard ]
})
export class AdminModule { }
