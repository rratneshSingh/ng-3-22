import { Attribute, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {

  name: string = '';

  @Input() color = 'blue';

  @HostListener('mouseenter') 
  addColor() {
    this.element.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave') 
  removeColor() {
    this.element.nativeElement.style.color = "";
  }

  // @HostBinding('id') id: string = ''; 

  constructor(private element :ElementRef, @Attribute('name') name: string) {
    console.log(name);
    this.name = name;
   }


  ngOnInit() {
    // console.log(this.id);
  }

}
