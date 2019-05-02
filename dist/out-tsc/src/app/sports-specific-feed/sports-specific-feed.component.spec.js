import { async, TestBed } from '@angular/core/testing';
import { SportsSpecificFeedComponent } from './sports-specific-feed.component';
describe('SportsSpecificFeedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SportsSpecificFeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SportsSpecificFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sports-specific-feed.component.spec.js.map