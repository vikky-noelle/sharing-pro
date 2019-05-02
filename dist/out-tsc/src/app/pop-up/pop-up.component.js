import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
var PopUpComponent = /** @class */ (function () {
    function PopUpComponent(router) {
        this.router = router;
    }
    PopUpComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'AppDownload': null } }], { skipLocationChange: true });
    };
    PopUpComponent.prototype.ngOnInit = function () {
    };
    PopUpComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-pop-up',
            templateUrl: './pop-up.component.html',
            styleUrls: ['./pop-up.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], PopUpComponent);
    return PopUpComponent;
}());
export { PopUpComponent };
//# sourceMappingURL=pop-up.component.js.map