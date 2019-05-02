import { async, TestBed } from '@angular/core/testing';
import { HelpCenterFooterComponent } from './help-center-footer.component';
describe('HelpCenterFooterComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HelpCenterFooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HelpCenterFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=help-center-footer.component.spec.js.map