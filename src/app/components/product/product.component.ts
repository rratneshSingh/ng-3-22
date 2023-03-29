import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | null = null;
  @Input() noOfItemInTheCart = 0;

  @Output() onAddToCart = new EventEmitter<Product | null >();
  @Output() onRemoveFromCart = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
