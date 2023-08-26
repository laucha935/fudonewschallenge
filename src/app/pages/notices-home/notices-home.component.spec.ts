import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticesHomeComponent } from './notices-home.component';

describe('NoticesHomeComponent', () => {
  let component: NoticesHomeComponent;
  let fixture: ComponentFixture<NoticesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticesHomeComponent]
    });
    fixture = TestBed.createComponent(NoticesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
