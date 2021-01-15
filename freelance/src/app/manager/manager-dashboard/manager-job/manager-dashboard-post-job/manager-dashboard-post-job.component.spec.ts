import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboardPostJobComponent } from './manager-dashboard-post-job.component';

describe('ManagerDashboardPostJobComponent', () => {
  let component: ManagerDashboardPostJobComponent;
  let fixture: ComponentFixture<ManagerDashboardPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashboardPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboardPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
