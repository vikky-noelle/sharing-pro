import { async, TestBed } from '@angular/core/testing';
import { TermsAndConditionComponent } from './terms-and-condition.component';
describe('TermsAndConditionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TermsAndConditionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TermsAndConditionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=terms-and-condition.component.spec.js.map