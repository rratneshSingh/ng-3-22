import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  cart: Array<{
    product: Product,
    count: number
  }> = [];

  get totalItemsInCart() {
    let totalCount = 0;
    this.cart.forEach((c) => {
      totalCount = totalCount + c.count;
    });
    return totalCount;
  }

  getProductCountInCart(id: string) {
    const cItem = this.cart.find((c) => {
      return c.product.id === id;
    });
    if (cItem) {
      return cItem.count;
    } else {
      return 0;
    }
  }

  search = '';

  constructor(public ps: ProductService) { }

  ngOnInit(): void {
    this.products = this.ps.products;
    this.filteredProducts = this.products;
    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
    });
    this.ps.search$.subscribe((search)=>{
      this.search = search;
      this.searchProduct();
    })
  }

  searchProduct() {
    this.filteredProducts = this.products.filter( (p) => {
      return p.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
