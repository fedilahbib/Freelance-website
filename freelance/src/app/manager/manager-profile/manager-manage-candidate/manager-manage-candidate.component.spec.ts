import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerManageCandidateComponent } from './manager-manage-candidate.component';

describe('ManagerManageCandidateComponent', () => {
  let component: ManagerManageCandidateComponent;
  let fixture: ComponentFixture<ManagerManageCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerManageCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerManageCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
