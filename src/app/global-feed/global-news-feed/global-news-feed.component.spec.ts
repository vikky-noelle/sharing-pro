import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNewsFeedComponent } from './global-news-feed.component';

describe('GlobalNewsFeedComponent', () => {
  let component: GlobalNewsFeedComponent;
  let fixture: ComponentFixture<GlobalNewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalNewsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
