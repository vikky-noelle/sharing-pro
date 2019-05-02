import { async, TestBed } from '@angular/core/testing';
import { OpenNewsCardComponent } from './open-news-card.component';
describe('OpenNewsCardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OpenNewsCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OpenNewsCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=open-news-card.component.spec.js.map