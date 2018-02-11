import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenNewsCardComponent } from './open-news-card.component';

describe('OpenNewsCardComponent', () => {
  let component: OpenNewsCardComponent;
  let fixture: ComponentFixture<OpenNewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenNewsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
