import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnResponsiveComponent } from './btn-responsive.component';

describe('BtnResponsiveComponent', () => {
  let component: BtnResponsiveComponent;
  let fixture: ComponentFixture<BtnResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnResponsiveComponent]
    });
    fixture = TestBed.createComponent(BtnResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
