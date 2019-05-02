import { async, TestBed } from '@angular/core/testing';
import { GlobalNewsFeedComponent } from './global-news-feed.component';
describe('GlobalNewsFeedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GlobalNewsFeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GlobalNewsFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=global-news-feed.component.spec.js.map