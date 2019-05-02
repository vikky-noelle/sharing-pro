import { async, TestBed } from '@angular/core/testing';
import { AddQueAnsComponent } from './add-que-ans.component';
describe('AddQueAnsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddQueAnsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddQueAnsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-que-ans.component.spec.js.map