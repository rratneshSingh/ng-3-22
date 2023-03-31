import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<{
    product: Product,
    count: number
  }> = [];
  
  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
    })
  }
}
