import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterHeaderComponent } from './help-center-header.component';

describe('HelpCenterHeaderComponent', () => {
  let component: HelpCenterHeaderComponent;
  let fixture: ComponentFixture<HelpCenterHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
