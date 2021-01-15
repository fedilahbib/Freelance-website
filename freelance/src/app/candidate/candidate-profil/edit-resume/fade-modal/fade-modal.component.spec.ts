import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeModalComponent } from './fade-modal.component';

describe('FadeModalComponent', () => {
  let component: FadeModalComponent;
  let fixture: ComponentFixture<FadeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
