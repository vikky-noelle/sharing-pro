import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsMatchCardComponent } from './ss-match-card.component';

describe('SsMatchCardComponent', () => {
  let component: SsMatchCardComponent;
  let fixture: ComponentFixture<SsMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
