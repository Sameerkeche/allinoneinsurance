import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrformComponent } from './rrform.component';

describe('RrformComponent', () => {
  let component: RrformComponent;
  let fixture: ComponentFixture<RrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
