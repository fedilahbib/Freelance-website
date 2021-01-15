import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboardManageCandidateComponent } from './manager-dashboard-manage-candidate.component';

describe('ManagerDashboardManageCandidateComponent', () => {
  let component: ManagerDashboardManageCandidateComponent;
  let fixture: ComponentFixture<ManagerDashboardManageCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashboardManageCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboardManageCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
