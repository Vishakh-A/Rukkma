import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStockComponent } from './total-stock.component';

describe('TotalStockComponent', () => {
  let component: TotalStockComponent;
  let fixture: ComponentFixture<TotalStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalStockComponent]
    });
    fixture = TestBed.createComponent(TotalStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
