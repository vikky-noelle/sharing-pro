import { async, TestBed } from '@angular/core/testing';
import { HelpCenterHeaderComponent } from './help-center-header.component';
describe('HelpCenterHeaderComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HelpCenterHeaderComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HelpCenterHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=help-center-header.component.spec.js.map