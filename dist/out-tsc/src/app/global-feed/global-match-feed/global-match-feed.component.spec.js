import { async, TestBed } from '@angular/core/testing';
import { GlobalMatchFeedComponent } from './global-match-feed.component';
describe('GlobalMatchFeedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GlobalMatchFeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GlobalMatchFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=global-match-feed.component.spec.js.map