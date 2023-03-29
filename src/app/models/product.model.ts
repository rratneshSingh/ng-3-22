export class Product {
    id: string;
    title: string;
    price: number;
    brand?: string;
    outOfStock?: boolean;
    description?: string;
  
    constructor(id: string, title = 'No Title', price = 0, brand = '', outOfStock = false, description = '') {
      this.title = title;
      this.price = price;
      this.brand = brand;
      this.id = id;
      this.outOfStock = outOfStock;
      this.description = description;
    }
  }
  