import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerJobComponent } from './manager-job.component';

describe('ManagerJobComponent', () => {
  let component: ManagerJobComponent;
  let fixture: ComponentFixture<ManagerJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
