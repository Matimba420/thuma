import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrandsComponent } from './errands.component';

describe('ErrandsComponent', () => {
  let component: ErrandsComponent;
  let fixture: ComponentFixture<ErrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
