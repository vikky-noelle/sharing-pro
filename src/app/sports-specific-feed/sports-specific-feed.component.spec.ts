import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsSpecificFeedComponent } from './sports-specific-feed.component';

describe('SportsSpecificFeedComponent', () => {
  let component: SportsSpecificFeedComponent;
  let fixture: ComponentFixture<SportsSpecificFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsSpecificFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsSpecificFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
