import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenMatchCardComponent } from './open-match-card.component';

describe('OpenMatchCardComponent', () => {
  let component: OpenMatchCardComponent;
  let fixture: ComponentFixture<OpenMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
