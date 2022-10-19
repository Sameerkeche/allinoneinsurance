import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivecodeComponent } from './livecode.component';

describe('LivecodeComponent', () => {
  let component: LivecodeComponent;
  let fixture: ComponentFixture<LivecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivecodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
