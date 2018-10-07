import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromProductsComponent } from './prom-products.component';

describe('PromProductsComponent', () => {
  let component: PromProductsComponent;
  let fixture: ComponentFixture<PromProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
