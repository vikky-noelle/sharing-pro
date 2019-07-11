import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofilePlaymatesComponent } from './userprofile-playmates.component';

describe('UserprofilePlaymatesComponent', () => {
  let component: UserprofilePlaymatesComponent;
  let fixture: ComponentFixture<UserprofilePlaymatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofilePlaymatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofilePlaymatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
