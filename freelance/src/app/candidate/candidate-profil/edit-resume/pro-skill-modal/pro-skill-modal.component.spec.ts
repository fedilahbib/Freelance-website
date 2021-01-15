import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProSkillModalComponent } from './pro-skill-modal.component';

describe('ProSkillModalComponent', () => {
  let component: ProSkillModalComponent;
  let fixture: ComponentFixture<ProSkillModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProSkillModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProSkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
