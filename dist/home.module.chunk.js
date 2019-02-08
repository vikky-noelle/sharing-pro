webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-masonry-grid  \n    [masonryOptions]=\"{ transitionDuration: '0.4s', gutter: 2 }\"\n    [useAnimation]=\"true\"\n    [useImagesLoaded]=\"true\">\n    <img class=\"spinner\" src=\"/assets/images/sports-social-loading.gif\" *ngIf = \"globalArena.length === 0\" alt=\"\">\n    <ng-masonry-grid-item class=\"col-4\" *ngFor = \"let feed of globalArena; let i = index\">\n      <ng-container *ngIf = \"feed.type === 1\">\n          <h1 class=\"type\"> \n            <a routerLink=\"/OpenArena\">Open Arena >></a>  \n          </h1>\n            <sports-social-match-card class=\"cards\"\n              [eventId] = \"feed.eventId\"\n              [creatorImage] = \"feed.creatorImage\"\n              [creatorName] = \"feed.creatorName\"\n              [doerId] = \"feed.doerId\"\n              [doerName] = \"feed.doerName\"\n              [doerPic] = \"feed.doerPic\"\n              [matchImage] = \"feed.matchImage\"\n              [matchText] = \"feed.matchText\"\n              [joineeCount] = \"feed.joineeCount\"\n              [commentCount] = \"feed.commentCount\"\n              [promoteCount] = \"feed.promoteCount\"\n              [watchCount] = \"feed.watchCount\"\n              [matchDate] = \"feed.matchDate\"\n              [activityDate] = \"feed.activityDate\"\n              [venueName] = \"feed.venueName\"\n              [gameName] = \"feed.gameName\"\n              [activityName] = \"feed.activityName\"\n              [restrictionCount] = \"feed.restrictionCount\"   #matchCard>\n            </sports-social-match-card>\n      </ng-container>\n      <ng-container *ngIf = \"feed.type === 0\">\n          <h1 class=\"type\">\n            <a routerLink=\"/AroundTheWorld\">Around The World >></a> \n          </h1>\n          <sports-social-news-card class=\"cards\"\n            [newsId] = \"feed.newsId\"\n            [sourceName]= \"feed.source\"\n            [sourceImage] = \"feed.sourceImage\"\n            [newsImage] = \"feed.newsImage\"\n            [title] = \"feed.title\"\n            [desc] = \"feed.desc\"\n            [url] = \"feed.url\"\n            [insertedDate] = \"feed.insertedDate\"\n            [likeCount] = \"feed.likeCount\"\n            [shareCount] = \"feed.shareCount\"\n            [commentCount] = \"feed.commentCount\"\n            [publishedAt] = \"feed.publishedAt\">\n          </sports-social-news-card>\n      </ng-container>\n    </ng-masonry-grid-item>\n</ng-masonry-grid>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalOpenArenaFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_match_data_service__ = __webpack_require__("../../../../../src/app/shared/services/match-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_news_service__ = __webpack_require__("../../../../../src/app/shared/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GlobalOpenArenaFeedComponent = (function () {
    function GlobalOpenArenaFeedComponent(matchData, newsData, renderer) {
        this.matchData = matchData;
        this.newsData = newsData;
        this.renderer = renderer;
        this.globalArena = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalOpenArenaFeedComponent.prototype.globalFeed = function () {
        var _this = this;
        var matchPomise = this.matchData.globalMatchFeed(this.nextPageNo, 0);
        var newsPromise = this.newsData.globalNewsFeed(this.nextPageNo, 'all');
        Promise.all([matchPomise, newsPromise]).then(function (data) {
            console.log(data);
            _this.globalArena = _this.globalArena.concat(data['0']).concat(data['1']);
            console.log(_this.globalArena);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    GlobalOpenArenaFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalFeed();
    };
    GlobalOpenArenaFeedComponent.prototype.onWindowScroll = function (event) {
        this.nextPageNo = Math.floor(scrollY / 2200);
        // console.log(this.nextPageNo, scrollY);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalOpenArenaFeedComponent.prototype.ngOnInit = function () {
        this.globalFeed();
    };
    GlobalOpenArenaFeedComponent.prototype.ngOnDestroy = function () {
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
    ], GlobalOpenArenaFeedComponent.prototype, "onWindowScroll", null);
    GlobalOpenArenaFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-global-open-arena-feed',
            template: __webpack_require__("../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css"), __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_match_data_service__["a" /* MatchDataService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], GlobalOpenArenaFeedComponent);
    return GlobalOpenArenaFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalOpenArenaFeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_match_card_match_card_module__ = __webpack_require__("../../../../../src/app/cards/match-card/match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cards_news_card_news_card_module__ = __webpack_require__("../../../../../src/app/cards/news-card/news-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards_live_match_card_live_match_card_module__ = __webpack_require__("../../../../../src/app/cards/live-match-card/live-match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_open_arena_feed_component__ = __webpack_require__("../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__ = __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GlobalOpenArenaFeedModule = (function () {
    function GlobalOpenArenaFeedModule() {
    }
    GlobalOpenArenaFeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__cards_match_card_match_card_module__["a" /* MatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__cards_news_card_news_card_module__["a" /* NewsCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__cards_live_match_card_live_match_card_module__["a" /* LiveMatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__["NgMasonryGridModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__global_open_arena_feed_component__["a" /* GlobalOpenArenaFeedComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__global_open_arena_feed_component__["a" /* GlobalOpenArenaFeedComponent */]
            ]
        })
    ], GlobalOpenArenaFeedModule);
    return GlobalOpenArenaFeedModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<sports-social-header></sports-social-header>\n<sports-social-carousel></sports-social-carousel>\n<sports-social-navigation-bar></sports-social-navigation-bar>\n<sports-social-global-open-arena-feed></sports-social-global-open-arena-feed>\n<sports-social-footer></sports-social-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_module__ = __webpack_require__("../../../../../src/app/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_bar_navigation_bar_module__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_feed_global_open_arena_feed_global_open_arena_feed_module__ = __webpack_require__("../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_router__ = __webpack_require__("../../../../../src/app/home/home.router.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_2__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_bar_navigation_bar_module__["a" /* NavigationBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__global_feed_global_open_arena_feed_global_open_arena_feed_module__["a" /* GlobalOpenArenaFeedModule */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_8__home_router__["a" /* HomeRouter */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__home_component__["a" /* HomeComponent */],
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");


var Home_Router = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
    }
];
var HomeRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(Home_Router);


/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map