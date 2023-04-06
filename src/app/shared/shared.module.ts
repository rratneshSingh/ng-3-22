import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { AddRemoveCartComponent } from './add-remove-cart/add-remove-cart.component';
import { ProductService } from '../services/product.service';

@NgModule({
  declarations: [
    CommonComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    AddRemoveCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  exports: [CommonComponent,FooterComponent, HeaderComponent, AddRemoveCartComponent]
})
export class SharedModule { }
