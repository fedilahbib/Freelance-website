import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboardManageJobComponent } from './manager-dashboard-manage-job.component';

describe('ManagerDashboardManageJobComponent', () => {
  let component: ManagerDashboardManageJobComponent;
  let fixture: ComponentFixture<ManagerDashboardManageJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashboardManageJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboardManageJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
