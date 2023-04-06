import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export class ProductService {

    search = '';

    search$ = new BehaviorSubject(this.search);

    products: Array<Product> = [
        {
          id: 'a1',
          title: 'Laptop',
          brand: 'Hp',
          price: 45000,
          description: '4GB Ram, 256 SSD, 15inch screen'
        },
        {
          id: 'a2',
          title: 'Mobile',
          price: 20000,
          brand: 'Samsung',
          outOfStock: true,
          description: '4GB Ram, 256 SSD, 15inch screen'
        },
        new Product('a3', undefined, 20000, 'Apple', false, '4GB Ram, 256 SSD, 15inch screen')
      ];
    
      cart: Array<{
        product: Product,
        count: number
      }> = [];

      cart$ = new BehaviorSubject<Array<{
        product: Product,
        count: number
      }>>(this.cart);
    
      addToCart(product: Product | null) {
        if (product === null) return;
        const cItem = this.cart.find((c) => {
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
        this.cart$.next(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    
      removeFromCart(productId: string) {
        const cIndex = this.cart.findIndex((c) => {
          return c.product.id === productId;
        });
        if (cIndex !== -1) {
          if (this.cart[cIndex].count === 1) {
            this.cart.splice(cIndex, 1);
          } else {
            this.cart[cIndex].count -= 1;
          }
        }
        this.cart$.next(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }


      updateSearch(search: string) {
        this.search = search;
        this.search$.next(this.search);
      }

      getProductById(id: string) {
        return this.products.find( p => p.id === id) || null
      }

      constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.cart$.next(this.cart);
      }
}