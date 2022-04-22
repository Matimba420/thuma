import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMassageComponent } from './success-massage.component';

describe('SuccessMassageComponent', () => {
  let component: SuccessMassageComponent;
  let fixture: ComponentFixture<SuccessMassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
