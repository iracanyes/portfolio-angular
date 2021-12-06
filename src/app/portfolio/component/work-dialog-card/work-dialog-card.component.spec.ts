import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDialogCardComponent } from './work-dialog-card.component';

describe('WorkDialogCardComponent', () => {
  let component: WorkDialogCardComponent;
  let fixture: ComponentFixture<WorkDialogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDialogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDialogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
