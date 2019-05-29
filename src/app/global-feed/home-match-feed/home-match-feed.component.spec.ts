import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMatchFeedComponent } from './home-match-feed.component';

describe('HomeMatchFeedComponent', () => {
  let component: HomeMatchFeedComponent;
  let fixture: ComponentFixture<HomeMatchFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMatchFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMatchFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
