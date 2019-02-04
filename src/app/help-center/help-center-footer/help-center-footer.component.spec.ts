import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterFooterComponent } from './help-center-footer.component';

describe('HelpCenterFooterComponent', () => {
  let component: HelpCenterFooterComponent;
  let fixture: ComponentFixture<HelpCenterFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCenterFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
