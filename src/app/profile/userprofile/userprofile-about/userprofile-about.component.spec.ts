import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileAboutComponent } from './userprofile-about.component';

describe('UserprofileAboutComponent', () => {
  let component: UserprofileAboutComponent;
  let fixture: ComponentFixture<UserprofileAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
