import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, HostListener, ViewChild } from '@angular/core';
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onscroll = function () {
        // console.log(screenY, scrollY);
    };
    tslib_1.__decorate([
        ViewChild('footer'),
        tslib_1.__metadata("design:type", Object)
    ], FooterComponent.prototype, "footer", void 0);
    tslib_1.__decorate([
        HostListener('window: scroll', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], FooterComponent.prototype, "onscroll", null);
    FooterComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map