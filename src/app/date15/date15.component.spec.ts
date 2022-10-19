import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Date15Component } from './date15.component';

describe('Date15Component', () => {
  let component: Date15Component;
  let fixture: ComponentFixture<Date15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Date15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Date15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
