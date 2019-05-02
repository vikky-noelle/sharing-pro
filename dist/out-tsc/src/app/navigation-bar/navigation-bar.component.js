import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, ViewChild, Renderer2, HostListener, NgZone, } from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { ɵgetDOM, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(recieveHeight, reciveBottom, renderer, activatedRoute, zone, metaservice, title) {
        this.recieveHeight = recieveHeight;
        this.reciveBottom = reciveBottom;
        this.renderer = renderer;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.metaservice = metaservice;
        this.title = title;
        this.isHoverOnCaret = false;
        this.mobileNav = false;
        this.tempSports = [
            { id: 17, title: 'Cricket' },
            { id: 23, title: 'Football' },
            { id: 6, title: 'Basketball' },
            { id: 36, title: 'Lawn Tennis' },
            { id: 5, title: 'Badminton' },
            { id: 29, title: 'Hockey' },
            { id: 56, title: 'Table Tennis' },
            { id: 60, title: 'Volleyball' }
        ];
    }
    NavigationBarComponent.prototype.changeHomeIcon = function () {
        var _this = this;
        this.route = this.activatedRoute.snapshot.params.sport;
        this.activatedRoute.params.subscribe(function (param) {
            _this.route = param.sport;
            console.log('sports', _this.route);
        });
    };
    NavigationBarComponent.prototype.responsiveNavigationBar = function () {
        var width = ɵgetDOM().getBoundingClientRect(this.navbar.nativeElement).width;
        if (width > 1200) {
            this.sports = this.tempSports.slice(0, 9);
            this.moreSports = this.tempSports.slice(9, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width > 950 && width < 1200) {
            this.sports = this.tempSports.slice(0, 7);
            this.moreSports = this.tempSports.slice(7, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width > 800 && width < 950) {
            this.sports = this.tempSports.slice(0, 6);
            this.moreSports = this.tempSports.slice(6, this.tempSports.length);
            this.mobileNav = false;
        }
        if (width < 800 && width > 720) {
            this.sports = this.tempSports.slice(0, 5);
            this.moreSports = this.tempSports.slice(5, this.tempSports.length);
            console.log(this.sports);
            this.mobileNav = false;
        }
        if (width < 720) {
            this.sports = this.tempSports;
            this.mobileNav = true;
        }
    };
    NavigationBarComponent.prototype.openDropdown = function () {
        this.isHoverOnCaret = !this.isHoverOnCaret;
        this.scrollabledropdown();
    };
    NavigationBarComponent.prototype.closeDropdownByClick = function (event) {
        this.isHoverOnCaret = false;
        event.preventDefault();
    };
    NavigationBarComponent.prototype.closeDropdownByMouseleave = function () {
        this.isHoverOnCaret = false;
    };
    NavigationBarComponent.prototype.heightOfHeader = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (res) {
            // console.log(res);
            _this.HeightOfHeader = res;
        });
    };
    NavigationBarComponent.prototype.fixedNavbar = function () {
        var _this = this;
        this.reciveBottom.ofCarousel.subscribe(function (res) {
            _this.BottomOfCarousel = res;
            var top = ɵgetDOM().getBoundingClientRect(_this.navbar.nativeElement).top;
            var bottom = ɵgetDOM().getBoundingClientRect(_this.navbar.nativeElement).bottom;
            if (top <= _this.HeightOfHeader) {
                _this.renderer.setStyle(_this.navbar.nativeElement, 'position', 'fixed');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'top', _this.HeightOfHeader + 'px');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'left', '0px');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'right', '0px');
            }
            if (bottom <= _this.BottomOfCarousel) {
                _this.renderer.setStyle(_this.navbar.nativeElement, 'position', 'relative');
                _this.renderer.setStyle(_this.navbar.nativeElement, 'top', '0px');
            }
        });
    };
    NavigationBarComponent.prototype.scrollabledropdown = function () {
        if (this.mobileNavbar !== undefined) {
            var height = ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).height;
            var top_1 = ɵgetDOM().getBoundingClientRect(this.mobileNavbar.nativeElement).top;
            var scrollableHeight = innerHeight - top_1 - 48;
            if (height > scrollableHeight) {
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'height', scrollableHeight + 'px');
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'scroll');
            }
            else {
                this.renderer.setStyle(this.mobileNavbar.nativeElement, 'max-height', height + 'px');
                // this.renderer.setStyle(this.mobileNavbar.nativeElement, 'overflow-y', 'visible');
            }
        }
        if (this.dropdown !== undefined) {
            var height = ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).height;
            var top_2 = ɵgetDOM().getBoundingClientRect(this.dropdown.nativeElement).top;
            var scrollableHeight = innerHeight - top_2 - 40;
            if (height > scrollableHeight) {
                this.renderer.setStyle(this.dropdown.nativeElement, 'height', scrollableHeight + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'scroll');
            }
            else {
                this.renderer.setStyle(this.dropdown.nativeElement, 'max-height', height + 'px');
                // this.renderer.setStyle(this.dropdown.nativeElement, 'overflow-y', 'visible');
            }
        }
    };
    NavigationBarComponent.prototype.ngOnInit = function () {
        this.changeHomeIcon();
        this.responsiveNavigationBar();
        this.heightOfHeader();
        this.fixedNavbar();
    };
    NavigationBarComponent.prototype.onresize = function () {
        this.responsiveNavigationBar();
        this.heightOfHeader();
        this.fixedNavbar();
    };
    NavigationBarComponent.prototype.onscroll = function () {
        this.fixedNavbar();
        this.scrollabledropdown();
    };
    NavigationBarComponent.prototype.onHover = function (event) {
        this.scrollabledropdown();
    };
    tslib_1.__decorate([
        ViewChild('navbar'),
        tslib_1.__metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "navbar", void 0);
    tslib_1.__decorate([
        ViewChild('mobileNavbar'),
        tslib_1.__metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "mobileNavbar", void 0);
    tslib_1.__decorate([
        ViewChild('dropdown'),
        tslib_1.__metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "dropdown", void 0);
    tslib_1.__decorate([
        ViewChild('image'),
        tslib_1.__metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "image", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onresize", null);
    tslib_1.__decorate([
        HostListener('window:scroll', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onscroll", null);
    tslib_1.__decorate([
        HostListener('mouseover', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onHover", null);
    NavigationBarComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-navigation-bar',
            templateUrl: './navigation-bar.component.html',
            styleUrls: ['./navigation-bar.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [PropertyService,
            PropertyService,
            Renderer2,
            ActivatedRoute,
            NgZone,
            Meta,
            Title])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());
export { NavigationBarComponent };
//# sourceMappingURL=navigation-bar.component.js.map