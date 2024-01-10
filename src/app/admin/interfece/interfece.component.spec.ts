import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfeceComponent } from './interfece.component';

describe('InterfeceComponent', () => {
  let component: InterfeceComponent;
  let fixture: ComponentFixture<InterfeceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfeceComponent]
    });
    fixture = TestBed.createComponent(InterfeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
