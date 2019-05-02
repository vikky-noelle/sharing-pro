import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
var PopUpService = /** @class */ (function () {
    function PopUpService() {
        this.ofCard = new ReplaySubject();
    }
    PopUpService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], PopUpService);
    return PopUpService;
}());
export { PopUpService };
//# sourceMappingURL=pop-up.service.js.map