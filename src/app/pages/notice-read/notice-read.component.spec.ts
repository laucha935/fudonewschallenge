import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeReadComponent } from './notice-read.component';

describe('NoticeReadComponent', () => {
  let component: NoticeReadComponent;
  let fixture: ComponentFixture<NoticeReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeReadComponent]
    });
    fixture = TestBed.createComponent(NoticeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
