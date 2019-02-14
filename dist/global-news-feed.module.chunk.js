webpackJsonp(["global-news-feed.module"],{

/***/ "../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<sports-social-header></sports-social-header>\r\n<sports-social-carousel></sports-social-carousel>\r\n<sports-social-navigation-bar></sports-social-navigation-bar>\r\n<ng-masonry-grid  \r\n      [masonryOptions]=\"{ transitionDuration: '0.4s', gutter: 2 }\"\r\n      [useAnimation]=\"true\"\r\n      [useImagesLoaded]=\"true\">\r\n    <img class=\"spinner\" src=\"/assets/images/sports-social-loading.gif\" *ngIf = \"News.length == 0\" alt=\"\">\r\n    <ng-masonry-grid-item class=\"col-4\" *ngFor = \"let feed of News; let i = index\">\r\n      <sports-social-news-card\r\n        [newsId] = \"feed.newsId\"\r\n        [sourceName]= \"feed.source\"\r\n        [sourceImage] = \"feed.sourceImage\"\r\n        [newsImage] = \"feed.newsImage\"\r\n        [title] = \"feed.title\"\r\n        [desc] = \"feed.desc\"\r\n        [url] = \"feed.url\"\r\n        [insertedDate] = \"feed.insertedDate\"\r\n        [likeCount] = \"feed.likeCount\"\r\n        [shareCount] = \"feed.shareCount\"\r\n        [commentCount] = \"feed.commentCount\"\r\n        [publishedAt] = \"feed.publishedAt\">\r\n      </sports-social-news-card>\r\n    </ng-masonry-grid-item>\r\n</ng-masonry-grid>\r\n<sports-social-footer></sports-social-footer>"

/***/ }),

/***/ "../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalNewsFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_news_service__ = __webpack_require__("../../../../../src/app/shared/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalNewsFeedComponent = (function () {
    function GlobalNewsFeedComponent(newsData, renderer) {
        this.newsData = newsData;
        this.renderer = renderer;
        this.News = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalNewsFeedComponent.prototype.globalNewsFeed = function (pageNo) {
        var _this = this;
        this.newsData.globalNewsFeed(this.nextPageNo, 'all').then(function (news) {
            _this.News = _this.News.concat(news);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalNewsFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalNewsFeed(pageNo);
    };
    GlobalNewsFeedComponent.prototype.onWindowScroll = function (event) {
        console.log(Math.floor(scrollY / 700), scrollY);
        this.nextPageNo = Math.floor(scrollY / 700);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalNewsFeedComponent.prototype.ngOnInit = function () {
        this.globalNewsFeed(this.nextPageNo);
    };
    GlobalNewsFeedComponent.prototype.ngOnDestroy = function () {
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
    ], GlobalNewsFeedComponent.prototype, "onWindowScroll", null);
    GlobalNewsFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-global-news-feed',
            template: __webpack_require__("../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.css"), __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], GlobalNewsFeedComponent);
    return GlobalNewsFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global-feed/global-news-feed/global-news-feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalNewsFeedModule", function() { return GlobalNewsFeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_news_card_news_card_module__ = __webpack_require__("../../../../../src/app/cards/news-card/news-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_news_feed_routes__ = __webpack_require__("../../../../../src/app/global-feed/global-news-feed/global-news-feed.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_bar_navigation_bar_module__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_news_feed_component__ = __webpack_require__("../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__ = __webpack_require__("../../../../../src/app/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_masonry_grid__ = __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_masonry_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_masonry_grid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var GlobalNewsFeedModule = (function () {
    function GlobalNewsFeedModule() {
    }
    GlobalNewsFeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__cards_news_card_news_card_module__["a" /* NewsCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__global_news_feed_routes__["a" /* NewsRoutes */],
                __WEBPACK_IMPORTED_MODULE_6__navigation_bar_navigation_bar_module__["a" /* NavigationBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_9_ng_masonry_grid__["NgMasonryGridModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__global_news_feed_component__["a" /* GlobalNewsFeedComponent */]
            ]
        })
    ], GlobalNewsFeedModule);
    return GlobalNewsFeedModule;
}());



/***/ }),

/***/ "../../../../../src/app/global-feed/global-news-feed/global-news-feed.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_news_feed_component__ = __webpack_require__("../../../../../src/app/global-feed/global-news-feed/global-news-feed.component.ts");


var News_Routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__global_news_feed_component__["a" /* GlobalNewsFeedComponent */]
    }
];
var NewsRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(News_Routes);


/***/ })

});
//# sourceMappingURL=global-news-feed.module.chunk.js.map