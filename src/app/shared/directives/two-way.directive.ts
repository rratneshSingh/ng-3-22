import { Directive, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[twoWay]'
})
export class TwoWayDirective implements OnChanges {

  @Input() twoWay: string | undefined = ''

  @Output() twoWayChange = new EventEmitter();

  @HostBinding('value') value = '';

  @HostListener('input', ['$event']) valueChanged(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.twoWayChange.emit(this.value);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['twoWay'] &&  changes['twoWay'].firstChange ) {
      if ( changes['twoWay'].currentValue != this.value  ) {
        this.value = changes['twoWay'].currentValue;
        this.twoWayChange.emit(changes['twoWay'].currentValue);
      }
    }
  }
}
