import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild } from '@angular/core';
var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent() {
        this.togglableNav = false;
    }
    HelpCenterComponent_1 = HelpCenterComponent;
    HelpCenterComponent.prototype.ngOnInit = function () {
        console.log(this.helpCenter);
    };
    HelpCenterComponent.prototype.onScreenResize = function () {
    };
    var HelpCenterComponent_1;
    tslib_1.__decorate([
        ViewChild(HelpCenterComponent_1),
        tslib_1.__metadata("design:type", Object)
    ], HelpCenterComponent.prototype, "helpCenter", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HelpCenterComponent.prototype, "onScreenResize", null);
    HelpCenterComponent = HelpCenterComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'app-help-center',
            templateUrl: './help-center.component.html',
            styleUrls: ['./help-center.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HelpCenterComponent);
    return HelpCenterComponent;
}());
export { HelpCenterComponent };
//# sourceMappingURL=help-center.component.js.map