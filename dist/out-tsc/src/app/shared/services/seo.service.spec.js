import { TestBed, inject } from '@angular/core/testing';
import { SeoService } from './seo.service';
describe('SeoService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [SeoService]
        });
    });
    it('should be created', inject([SeoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=seo.service.spec.js.map