webpackJsonp(["global-match-feed.module"],{

/***/ "../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<sports-social-header></sports-social-header>\r\n<sports-social-carousel></sports-social-carousel>\r\n<sports-social-navigation-bar></sports-social-navigation-bar>\r\n<ng-masonry-grid  \r\n      [masonryOptions]=\"{ transitionDuration: '0.4s', gutter: 2 }\"\r\n      [useAnimation]=\"true\"\r\n      [useImagesLoaded]=\"true\">\r\n    <img class=\"spinner\" src=\"/assets/images/sports-social-loading.gif\" *ngIf = \"Match.length == 0\" alt=\"\">\r\n    <ng-masonry-grid-item class=\"col-4\" *ngFor = \"let feed of Match; let i = index\">\r\n      <sports-social-match-card \r\n        [eventId] = \"feed.eventId\"\r\n        [creatorImage] = \"feed.creatorImage\"\r\n        [creatorName] = \"feed.creatorName\"\r\n        [doerId] = \"feed.doerId\"\r\n        [doerName] = \"feed.doerName\"\r\n        [doerPic] = \"feed.doerPic\"\r\n        [matchImage] = \"feed.matchImage\"\r\n        [matchText] = \"feed.matchText\"\r\n        [joineeCount] = \"feed.joineeCount\"\r\n        [commentCount] = \"feed.commentCount\"\r\n        [promoteCount] = \"feed.promoteCount\"\r\n        [watchCount] = \"feed.watchCount\"\r\n        [matchDate] = \"feed.matchDate\"\r\n        [activityDate] = \"feed.activityDate\"\r\n        [gameName] = \"feed.gameName\"\r\n        [venueName] = \"feed.venueName\"\r\n        [activityName] = \"feed.activityName\"\r\n        [restrictionCount] = \"feed.restrictionCount\"   #matchCard  >\r\n      </sports-social-match-card>\r\n    </ng-masonry-grid-item>\r\n</ng-masonry-grid >\r\n<sports-social-footer></sports-social-footer>\r\n\r\n\r\n<template #openMatchCard></template>"

/***/ }),

/***/ "../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalMatchFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_match_data_service__ = __webpack_require__("../../../../../src/app/shared/services/match-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalMatchFeedComponent = (function () {
    function GlobalMatchFeedComponent(renderer, matchData) {
        this.renderer = renderer;
        this.matchData = matchData;
        this.Match = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalMatchFeedComponent.prototype.globalMatchFeed = function (pageNo) {
        var _this = this;
        this.matchData.globalMatchFeed(this.nextPageNo, 0).then(function (match) {
            _this.Match = _this.Match.concat(match);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalMatchFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalMatchFeed(pageNo);
    };
    GlobalMatchFeedComponent.prototype.onWindowScroll = function (event) {
        // console.log(Math.floor(scrollY / 1200));
        this.nextPageNo = Math.floor(scrollY / 1200);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalMatchFeedComponent.prototype.ngOnInit = function () {
        this.globalMatchFeed(this.nextPageNo);
    };
    GlobalMatchFeedComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GlobalMatchFeedComponent.prototype, "onWindowScroll", null);
    GlobalMatchFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-global-match-feed',
            template: __webpack_require__("../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.css"), __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_match_data_service__["a" /* MatchDataService */]])
    ], GlobalMatchFeedComponent);
    return GlobalMatchFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-feed/global-match-feed/global-match-feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalMatchFeedModule", function() { return GlobalMatchFeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_match_card_match_card_module__ = __webpack_require__("../../../../../src/app/cards/match-card/match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__global_match_feed_component__ = __webpack_require__("../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_match_feed_routes__ = __webpack_require__("../../../../../src/app/global-feed/global-match-feed/global-match-feed.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_bar_navigation_bar_module__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carousel_carousel_module__ = __webpack_require__("../../../../../src/app/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_masonry_grid__ = __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_masonry_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_masonry_grid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var GlobalMatchFeedModule = (function () {
    function GlobalMatchFeedModule() {
    }
    GlobalMatchFeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__cards_match_card_match_card_module__["a" /* MatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_7__global_match_feed_routes__["a" /* MatchRoutes */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_bar_navigation_bar_module__["a" /* NavigationBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_masonry_grid__["NgMasonryGridModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__global_match_feed_component__["a" /* GlobalMatchFeedComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__global_match_feed_component__["a" /* GlobalMatchFeedComponent */]
            ]
        })
    ], GlobalMatchFeedModule);
    return GlobalMatchFeedModule;
}());



/***/ }),

/***/ "../../../../../src/app/global-feed/global-match-feed/global-match-feed.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_match_feed_component__ = __webpack_require__("../../../../../src/app/global-feed/global-match-feed/global-match-feed.component.ts");


var Match_Routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__global_match_feed_component__["a" /* GlobalMatchFeedComponent */]
    }
];
var MatchRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(Match_Routes);


/***/ })

});
//# sourceMappingURL=global-match-feed.module.chunk.js.map