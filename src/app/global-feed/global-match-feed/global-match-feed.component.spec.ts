import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMatchFeedComponent } from './global-match-feed.component';

describe('GlobalMatchFeedComponent', () => {
  let component: GlobalMatchFeedComponent;
  let fixture: ComponentFixture<GlobalMatchFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalMatchFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMatchFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
