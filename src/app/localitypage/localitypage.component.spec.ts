import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitypageComponent } from './localitypage.component';


describe('LocalitypageComponent', () => {
  let component: LocalitypageComponent;
  let fixture: ComponentFixture<LocalitypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
