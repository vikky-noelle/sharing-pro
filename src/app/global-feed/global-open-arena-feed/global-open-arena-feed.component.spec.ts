import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOpenArenaFeedComponent } from './global-open-arena-feed.component';

describe('GlobalOpenArenaFeedComponent', () => {
  let component: GlobalOpenArenaFeedComponent;
  let fixture: ComponentFixture<GlobalOpenArenaFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalOpenArenaFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalOpenArenaFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
