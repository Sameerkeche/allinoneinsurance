import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive1Component } from './directive1.component';

describe('Directive1Component', () => {
  let component: Directive1Component;
  let fixture: ComponentFixture<Directive1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directive1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
