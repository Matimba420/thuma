import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerHomeComponent } from './runner-home.component';

describe('RunnerHomeComponent', () => {
  let component: RunnerHomeComponent;
  let fixture: ComponentFixture<RunnerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunnerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
