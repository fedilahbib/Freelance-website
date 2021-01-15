import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDashboardPricingComponent } from './manager-dashboard-pricing.component';

describe('ManagerDashboardPricingComponent', () => {
  let component: ManagerDashboardPricingComponent;
  let fixture: ComponentFixture<ManagerDashboardPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerDashboardPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerDashboardPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
