import { async, TestBed } from '@angular/core/testing';
import { GlobalOpenArenaFeedComponent } from './global-open-arena-feed.component';
describe('GlobalOpenArenaFeedComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GlobalOpenArenaFeedComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GlobalOpenArenaFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=global-open-arena-feed.component.spec.js.map