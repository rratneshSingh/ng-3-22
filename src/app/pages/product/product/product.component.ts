import { Component, Input, OnInit, EventEmitter, Output, ViewChild, AfterViewInit, ViewChildren, QueryList, ContentChild, AfterContentInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { AddRemoveCartComponent } from 'src/app/shared/add-remove-cart/add-remove-cart.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  exportAs: 'pc'
})
export class ProductComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  @Input() product: Product | null = null;
  @Input() noOfItemInTheCart = 0;

  @Output() onAddToCart = new EventEmitter<Product | null >();
  @Output() onRemoveFromCart = new EventEmitter<number>();

  @ViewChildren(AddRemoveCartComponent) arc: QueryList<AddRemoveCartComponent> | null = null;
  @ContentChild('button') button: HTMLButtonElement | null = null; 

  constructor() { 
    console.log('constructor');
  }

  ngOnChanges() {
    console.log('ngOnChanges')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    // console.log(this.button);
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    // console.log(this.arc?.get(1));
    // console.log(this.button);
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  show(value: any) {
    console.log(value);
  }

}
