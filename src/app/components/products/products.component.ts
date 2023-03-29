import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [
    {
      id: 'a1',
      title: 'Laptop',
      brand: 'Hp',
      price: 45000,
      description: '4GB Ram, 256 SSD, 15inch screen'
    },
    { id: 'a2', 
      title: 'Mobile',
      price: 20000,
      brand: 'Samsung',
      outOfStock: true,
      description: '4GB Ram, 256 SSD, 15inch screen'
    },
    new Product('a3', undefined, 20000, 'Apple', false, '4GB Ram, 256 SSD, 15inch screen' )
  ];

  cart: Array<{
    product: Product,
    count: number
  }> = [];

  addToCart( product: Product | null ) {
    if ( product === null ) return;
    const cItem = this.cart.find( (c) => {
      return c.product.id === product.id;
    });
    if (cItem) {
      cItem.count += 1;
    } else {
      this.cart.push({
        product: product,
        count: 1
      })
    }
  }

  removeFromCart(productId: string) {
    const cIndex = this.cart.findIndex( (c) => {
      return c.product.id === productId;
    });
    if (cIndex !== -1) {
      if ( this.cart[cIndex].count ===  1 ) {
        this.cart.splice(cIndex, 1);
      } else {
        this.cart[cIndex].count -= 1;
      }
    }
  }

  getProductCountInCart(id : string ) {
    const cItem = this.cart.find((c)=>{
      return c.product.id === id;
    });
    if ( cItem ) {
      return cItem.count;
    } else {
      return 0;
    }
  }

  get totalItemsInCart() {
    let totalCount = 0;
    this.cart.forEach( (c) => {
      totalCount = totalCount + c.count;
    });
    return totalCount;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
