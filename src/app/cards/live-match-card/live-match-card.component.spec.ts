import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMatchCardComponent } from './live-match-card.component';

describe('LiveMatchCardComponent', () => {
  let component: LiveMatchCardComponent;
  let fixture: ComponentFixture<LiveMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
