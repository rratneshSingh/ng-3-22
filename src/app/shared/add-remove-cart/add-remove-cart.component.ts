import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-remove-cart',
  templateUrl: './add-remove-cart.component.html',
  styleUrls: ['./add-remove-cart.component.css']
})
export class AddRemoveCartComponent implements OnInit {

  @Input() count = 0;
  @Output() onAdd = new EventEmitter();
  @Output() onSubstract = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
