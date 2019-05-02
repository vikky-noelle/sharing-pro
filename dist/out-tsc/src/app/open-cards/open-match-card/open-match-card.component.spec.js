import { async, TestBed } from '@angular/core/testing';
import { OpenMatchCardComponent } from './open-match-card.component';
describe('OpenMatchCardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OpenMatchCardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OpenMatchCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=open-match-card.component.spec.js.map