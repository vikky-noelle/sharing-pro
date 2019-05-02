import { async, TestBed } from '@angular/core/testing';
import { LiveMatchCardComponent } from './live-match-card.component';
describe('LiveMatchCardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LiveMatchCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LiveMatchCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=live-match-card.component.spec.js.map