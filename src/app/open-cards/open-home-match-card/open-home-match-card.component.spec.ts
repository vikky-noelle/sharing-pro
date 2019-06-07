import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHomeMatchCardComponent } from './open-home-match-card.component';

describe('OpenHomeMatchCardComponent', () => {
  let component: OpenHomeMatchCardComponent;
  let fixture: ComponentFixture<OpenHomeMatchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHomeMatchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHomeMatchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
