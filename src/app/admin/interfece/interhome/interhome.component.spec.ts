import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterhomeComponent } from './interhome.component';

describe('InterhomeComponent', () => {
  let component: InterhomeComponent;
  let fixture: ComponentFixture<InterhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterhomeComponent]
    });
    fixture = TestBed.createComponent(InterhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
