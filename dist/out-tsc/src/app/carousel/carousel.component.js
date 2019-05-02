import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { ɵgetDOM, Title, Meta } from '@angular/platform-browser';
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(renderer, recieveHeight, sendBottom, pagetitle, metaservice) {
        this.renderer = renderer;
        this.recieveHeight = recieveHeight;
        this.sendBottom = sendBottom;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.one = document.getElementsByClassName('one');
        this.two = document.getElementsByClassName('two');
        this.three = document.getElementsByClassName('three');
        this.four = document.getElementsByClassName('four');
        this.first1 = true;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = false;
    }
    CarouselComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (data) {
            _this.renderer.setStyle(_this.carousel.nativeElement, 'margin-top', data + 'px');
        });
    };
    CarouselComponent.prototype.sendBottomOfCarousel = function () {
        var bottom = ɵgetDOM().getBoundingClientRect(this.carousel.nativeElement).bottom;
        this.sendBottom.ofCarousel.next(bottom);
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.onresize = function () {
        this.setTopMargin();
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.onscroll = function () {
        this.sendBottomOfCarousel();
    };
    CarouselComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
    };
    CarouselComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
    };
    CarouselComponent.prototype.first = function () {
        this.one[0].style.color = "black";
        this.two[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = true;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.second = function () {
        this.two[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = true;
        this.third1 = false;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.third = function () {
        this.three[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.two[0].style.color = "#696969";
        this.four[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = false;
        this.third1 = true;
        this.fourth1 = false;
    };
    CarouselComponent.prototype.fourth = function () {
        this.four[0].style.color = "black";
        this.one[0].style.color = "#696969";
        this.two[0].style.color = "#696969";
        this.three[0].style.color = "#696969";
        this.first1 = false;
        this.second1 = false;
        this.third1 = false;
        this.fourth1 = true;
    };
    tslib_1.__decorate([
        ViewChild('carousel'),
        tslib_1.__metadata("design:type", Object)
    ], CarouselComponent.prototype, "carousel", void 0);
    tslib_1.__decorate([
        ViewChild('blog'),
        tslib_1.__metadata("design:type", ElementRef)
    ], CarouselComponent.prototype, "blog", void 0);
    tslib_1.__decorate([
        ViewChild('blogImg'),
        tslib_1.__metadata("design:type", ElementRef)
    ], CarouselComponent.prototype, "blogImg", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onresize", null);
    tslib_1.__decorate([
        HostListener('window:scroll', []),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onscroll", null);
    CarouselComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            PropertyService,
            PropertyService,
            Title,
            Meta])
    ], CarouselComponent);
    return CarouselComponent;
}());
export { CarouselComponent };
//# sourceMappingURL=carousel.component.js.map