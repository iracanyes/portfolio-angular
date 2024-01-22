import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpansionPanelComponent } from './work-expansion-panel.component';

describe('WorkExpansionPanelComponent', () => {
  let component: WorkExpansionPanelComponent;
  let fixture: ComponentFixture<WorkExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
