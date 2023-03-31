import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

export class ProductService {
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
      }
}