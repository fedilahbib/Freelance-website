import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerListingComponent } from './manager-listing.component';

describe('ManagerListingComponent', () => {
  let component: ManagerListingComponent;
  let fixture: ComponentFixture<ManagerListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
