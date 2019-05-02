import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
var PropertyService = /** @class */ (function () {
    function PropertyService() {
        this.ofHeader = new ReplaySubject();
        this.ofCarousel = new ReplaySubject();
        this.ofNavigationBar = new ReplaySubject();
    }
    PropertyService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], PropertyService);
    return PropertyService;
}());
export { PropertyService };
//# sourceMappingURL=property.service.js.map