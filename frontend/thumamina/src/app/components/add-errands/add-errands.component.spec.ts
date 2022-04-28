import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddErrandsComponent } from './add-errands.component';

describe('AddErrandsComponent', () => {
  let component: AddErrandsComponent;
  let fixture: ComponentFixture<AddErrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddErrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddErrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
