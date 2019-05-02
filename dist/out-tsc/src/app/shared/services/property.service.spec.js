import { TestBed, inject } from '@angular/core/testing';
import { PropertyService } from './property.service';
describe('PropertyService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PropertyService]
        });
    });
    it('should be created', inject([PropertyService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=property.service.spec.js.map