import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointsPageComponent } from './checkpoints-page.component';

describe('CheckpointsPageComponent', () => {
  let component: CheckpointsPageComponent;
  let fixture: ComponentFixture<CheckpointsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckpointsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
