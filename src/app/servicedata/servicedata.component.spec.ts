import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedataComponent } from './servicedata.component';

describe('ServicedataComponent', () => {
  let component: ServicedataComponent;
  let fixture: ComponentFixture<ServicedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
