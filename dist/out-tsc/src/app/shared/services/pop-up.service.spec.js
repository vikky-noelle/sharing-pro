import { TestBed, inject } from '@angular/core/testing';
import { PopUpService } from './pop-up.service';
describe('PopUpService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PopUpService]
        });
    });
    it('should be created', inject([PopUpService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=pop-up.service.spec.js.map