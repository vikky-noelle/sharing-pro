import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamprofileMatchesComponent } from './teamprofile-matches.component';

describe('TeamprofileMatchesComponent', () => {
  let component: TeamprofileMatchesComponent;
  let fixture: ComponentFixture<TeamprofileMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamprofileMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamprofileMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
