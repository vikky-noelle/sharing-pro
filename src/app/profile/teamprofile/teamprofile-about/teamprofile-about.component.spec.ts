import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamprofileAboutComponent } from './teamprofile-about.component';

describe('TeamprofileAboutComponent', () => {
  let component: TeamprofileAboutComponent;
  let fixture: ComponentFixture<TeamprofileAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamprofileAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamprofileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
