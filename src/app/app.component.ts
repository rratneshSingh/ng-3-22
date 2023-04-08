import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _title = '';

  set title(value: string) {
    if ( value === 'ratnesh' ){
      this._title = 'Singh'; 
    } else {
      this._title = value;
    }
  }

  get title() {
    return this._title;
  }

  show(e: Event) {
    this.title = (e.target as HTMLInputElement)?.value;
  }
}