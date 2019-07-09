import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileTeamsComponent } from './userprofile-teams.component';

describe('UserprofileTeamsComponent', () => {
  let component: UserprofileTeamsComponent;
  let fixture: ComponentFixture<UserprofileTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
