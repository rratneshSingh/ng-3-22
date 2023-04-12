import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product | null = null;

  constructor(private ps: ProductService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = this.ar.snapshot.params['productId'];
    this.ps.getProductById(productId).subscribe( product => {
      this.product = product;
    })
  }
}
