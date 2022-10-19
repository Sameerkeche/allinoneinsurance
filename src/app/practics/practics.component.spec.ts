import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticsComponent } from './practics.component';

describe('PracticsComponent', () => {
  let component: PracticsComponent;
  let fixture: ComponentFixture<PracticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
