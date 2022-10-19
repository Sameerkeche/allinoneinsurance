import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudappComponent } from './crudapp.component';

describe('CrudappComponent', () => {
  let component: CrudappComponent;
  let fixture: ComponentFixture<CrudappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
