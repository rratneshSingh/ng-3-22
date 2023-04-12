import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  search = '';

  productUrl = `${environment.baseUrl}/product`;
  cartUrl = `${environment.baseUrl}/cart`;

  search$ = new BehaviorSubject(this.search);

  cart: CartItem[] = [];

  cart$ = new BehaviorSubject<Array<CartItem>>(this.cart);

  addToCart(product: Product | null) {
    if (product === null) return;
    const cItem = this.cart.find((c) => {
      return c.id === product.id;
    });
    if (cItem) {
      this.updateItemOfCart({
        ...cItem,
        count: cItem.count + 1
      }).subscribe(()=>{
        this.updateCartItems();
      })
    } else {
      this.addItemToCart({
        id: product.id,
        product: product,
        count: 1
      }).subscribe( () => {
        this.updateCartItems();
      })
    }
  }

  removeFromCart(productId: number) {
    const cItem = this.cart.find((c) => {
      return c.product.id === productId;
    });
    if (cItem) {
      if (cItem.count === 1) {
        this.deleteCartItem(productId).subscribe(()=>{
          this.updateCartItems();
        })
      } else {
        this.updateItemOfCart({
          ...cItem,
          count: cItem.count - 1
        }).subscribe(()=>{
          this.updateCartItems();
        })
      }
    }
  }

  updateSearch(search: string) {
    this.search = search;
    this.search$.next(this.search);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productUrl}`);
  }

  getAllCartItems() {
    return this.http.get<CartItem[]>(`${this.cartUrl}`)
  }

  addItemToCart(cartItem: CartItem) {
    return this.http.post(`${this.cartUrl}`, cartItem);
  }

  updateItemOfCart(cartItem: CartItem) {
    return this.http.put(`${this.cartUrl}/${cartItem.id}`, cartItem);
  }

  deleteCartItem(cartItemId: number) {
    return this.http.delete(`${this.cartUrl}/${cartItemId}`);
  }

  updateCartItems() {
    this.getAllCartItems().subscribe( cartItems => {
      this.cart = cartItems;
      this.cart$.next(this.cart);
    });
  }

  constructor(private http: HttpClient) {
    this.updateCartItems();
  }
}