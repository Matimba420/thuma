import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerProfileComponent } from './runner-profile.component';

describe('RunnerProfileComponent', () => {
  let component: RunnerProfileComponent;
  let fixture: ComponentFixture<RunnerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
