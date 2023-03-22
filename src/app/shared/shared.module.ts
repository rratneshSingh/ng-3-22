import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    CommonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonComponent,FooterComponent]
})
export class SharedModule { }
