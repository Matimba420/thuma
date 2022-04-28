import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetErrandsComponent } from './get-errands.component';

describe('GetErrandsComponent', () => {
  let component: GetErrandsComponent;
  let fixture: ComponentFixture<GetErrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetErrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetErrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
