import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
var SendService = /** @class */ (function () {
    function SendService() {
        this.data = new ReplaySubject();
        this.requestForData = new ReplaySubject();
        this.height = new ReplaySubject();
        this.innerHeight = new ReplaySubject();
    }
    SendService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], SendService);
    return SendService;
}());
export { SendService };
//# sourceMappingURL=send.service.js.map