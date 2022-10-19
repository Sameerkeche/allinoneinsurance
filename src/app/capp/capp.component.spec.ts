import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CappComponent } from './capp.component';

describe('CappComponent', () => {
  let component: CappComponent;
  let fixture: ComponentFixture<CappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
