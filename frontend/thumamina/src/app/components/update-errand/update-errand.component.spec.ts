import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateErrandComponent } from './update-errand.component';

describe('UpdateErrandComponent', () => {
  let component: UpdateErrandComponent;
  let fixture: ComponentFixture<UpdateErrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateErrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateErrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
