import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQueAnsComponent } from './add-que-ans.component';

describe('AddQueAnsComponent', () => {
  let component: AddQueAnsComponent;
  let fixture: ComponentFixture<AddQueAnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQueAnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQueAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
