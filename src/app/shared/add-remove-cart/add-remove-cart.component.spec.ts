import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveCartComponent } from './add-remove-cart.component';

describe('AddRemoveCartComponent', () => {
  let component: AddRemoveCartComponent;
  let fixture: ComponentFixture<AddRemoveCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRemoveCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
