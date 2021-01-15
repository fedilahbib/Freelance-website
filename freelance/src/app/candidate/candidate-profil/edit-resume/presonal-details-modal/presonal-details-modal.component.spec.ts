import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresonalDetailsModalComponent } from './presonal-details-modal.component';

describe('PresonalDetailsModalComponent', () => {
  let component: PresonalDetailsModalComponent;
  let fixture: ComponentFixture<PresonalDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresonalDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresonalDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
