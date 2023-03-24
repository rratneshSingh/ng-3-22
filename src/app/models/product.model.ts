export class Product {
    title: string;
    price: number;
    brand?: string;
    outOfStock?: boolean;
  
    constructor(title?: string, price?: number, brand?: string, outOfStock?: boolean) {
      this.title = title || '';
      this.price = price || 0;
      this.brand = brand || '';
      this.outOfStock = outOfStock || false;
    }
  }
  