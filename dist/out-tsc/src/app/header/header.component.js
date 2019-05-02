import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, HostListener, ViewChild } from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(height) {
        this.height = height;
        this.mobileView = false;
        this.isMenuInDropdown = false;
        this.isSearchInDropdown = false;
        this.isDropdownIconclicked = false;
    }
    HeaderComponent.prototype.setMobileView = function () {
        var width = this.header.nativeElement.getBoundingClientRect().width;
        if (width > 800) {
            this.mobileView = false;
            this.isMenuInDropdown = false;
            this.isSearchInDropdown = false;
        }
        if (width > 800 && width < 1220) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = true;
        }
        if (width < 800 && width > 720) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = true;
        }
        if (width < 720) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = true;
        }
    };
    HeaderComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HeaderComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HeaderComponent.prototype.sendHeightOfHeader = function () {
        var height = this.header.nativeElement.getBoundingClientRect().height;
        this.height.ofHeader.next(height);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.setMobileView();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        this.sendHeightOfHeader();
    };
    HeaderComponent.prototype.onresize = function () {
        this.setMobileView();
        this.sendHeightOfHeader();
    };
    tslib_1.__decorate([
        ViewChild('header'),
        tslib_1.__metadata("design:type", Object)
    ], HeaderComponent.prototype, "header", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onresize", null);
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [PropertyService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map