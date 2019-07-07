import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileMatchesComponent } from './userprofile-matches.component';

describe('UserprofileMatchesComponent', () => {
  let component: UserprofileMatchesComponent;
  let fixture: ComponentFixture<UserprofileMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
