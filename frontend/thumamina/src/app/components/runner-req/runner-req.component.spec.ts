import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerReqComponent } from './runner-req.component';

describe('RunnerReqComponent', () => {
  let component: RunnerReqComponent;
  let fixture: ComponentFixture<RunnerReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
