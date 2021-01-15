import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboardMessageComponent } from './manager-dashboard-message.component';

describe('ManagerDashboardMessageComponent', () => {
  let component: ManagerDashboardMessageComponent;
  let fixture: ComponentFixture<ManagerDashboardMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashboardMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboardMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
