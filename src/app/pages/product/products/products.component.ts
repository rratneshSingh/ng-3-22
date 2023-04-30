import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { CartItem, Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  print$ = new Subject();

  products: Product[] = [];
  filteredProducts: Product[] = [];

  cart: CartItem[] = [];

  get totalItemsInCart() {
    let totalCount = 0;
    this.cart.forEach((c) => {
      totalCount = totalCount + c.count;
    });
    return totalCount;
  }

  getProductCountInCart(id: number) {
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

  constructor(public ps: ProductService, private activatedRoute: ActivatedRoute) {
    console.log(ps);
  }

  ngOnInit(): void {
    this.print$.pipe(debounceTime(2000)).subscribe( v => {
      console.log(v);
    })
    this.activatedRoute.data.subscribe( (data) => {
      this.products = data[0] as Product[];
      this.filteredProducts = [this.products[0]];
      console.log(data);
    })
    // this.ps.getAllProducts().subscribe( products => {
    //   this.products = products;
    //   this.filteredProducts = this.products;
    //   console.log('Next');
    // },error => {
    //   console.log('Error');
    // }, () => {
    //   console.log('Complete');
    // });

    this.ps.cart$.subscribe((cart)=>{
      this.cart = cart;
    });
    this.ps.search$.subscribe((search)=>{
      this.search = search;
      // this.searchProduct();
    })
  }

  searchProduct() {
    this.filteredProducts = this.products.filter( (p) => {
      return p.title.toLowerCase().includes(this.search.toLowerCase());
    });
  }

  print( e: any ) {
    this.print$.next(e.target.value);
  }
}
