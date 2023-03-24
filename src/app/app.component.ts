import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  name = 'Random';
  
  products: Product[] = [
    {
      title: 'Laptop',
      brand: 'Hp',
      price: 45000
    },
    {
      title: 'Mobile',
      price: 20000,
      brand: 'Samsung',
      outOfStock: true
    },
    new Product('Ipad', 20000, 'Apple')
  ];

  displaySomething(e: any) {
    debugger;
    console.log(e)
  }
}