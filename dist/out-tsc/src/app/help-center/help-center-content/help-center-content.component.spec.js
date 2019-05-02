import { async, TestBed } from '@angular/core/testing';
import { HelpCenterContentComponent } from './help-center-content.component';
describe('HelpCenterContentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HelpCenterContentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HelpCenterContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=help-center-content.component.spec.js.map