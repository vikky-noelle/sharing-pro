webpackJsonp(["sports-specific-feed.module"],{

/***/ "../../../../../src/app/sports-specific-feed/sports-specific-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sports-specific-feed/sports-specific-feed.component.html":
/***/ (function(module, exports) {

module.exports = "<sports-social-header></sports-social-header>\r\n<sports-social-carousel></sports-social-carousel>\r\n<sports-social-navigation-bar></sports-social-navigation-bar>\r\n<ng-masonry-grid  \r\n    [masonryOptions]=\"{ transitionDuration: '0.4s', gutter: 2 }\"\r\n    [useAnimation]=\"true\"\r\n    [useImagesLoaded]=\"true\">\r\n    <img class=\"spinner\" src=\"/assets/images/sports-social-loading.gif\" *ngIf = \"globalArena.length === 0\" alt=\"\">\r\n    \r\n    <ng-container *ngIf = \"globalArena.length > 0\">\r\n      <ng-masonry-grid-item  *ngFor = \"let feed of globalArena; let i = index\">\r\n        <ng-container *ngIf = \"feed.type === 1\">\r\n            <h1 class=\"type\"> \r\n              <a routerLink=\"/OpenArena\">Open Arena >></a>  \r\n            </h1>\r\n              <sports-social-match-card class=\"cards\"\r\n                [eventId] = \"feed.eventId\"\r\n                [creatorImage] = \"feed.creatorImage\"\r\n                [creatorName] = \"feed.creatorName\"\r\n                [doerId] = \"feed.doerId\"\r\n                [doerName] = \"feed.doerName\"\r\n                [doerPic] = \"feed.doerPic\"\r\n                [matchImage] = \"feed.matchImage\"\r\n                [matchText] = \"feed.matchText\"\r\n                [joineeCount] = \"feed.joineeCount\"\r\n                [commentCount] = \"feed.commentCount\"\r\n                [promoteCount] = \"feed.promoteCount\"\r\n                [watchCount] = \"feed.watchCount\"\r\n                [matchDate] = \"feed.matchDate\"\r\n                [activityDate] = \"feed.activityDate\"\r\n                [venueName] = \"feed.venueName\"\r\n                [gameName] = \"feed.gameName\"\r\n                [activityName] = \"feed.activityName\"\r\n                [restrictionCount] = \"feed.restrictionCount\"   #matchCard>\r\n              </sports-social-match-card>\r\n        </ng-container>\r\n        <ng-container *ngIf = \"feed.type === 0\">\r\n            <h1 class=\"type\">\r\n              <a routerLink=\"/AroundTheWorld\">Around The World >></a> \r\n            </h1>\r\n            <sports-social-news-card class=\"cards\"\r\n              [newsId] = \"feed.newsId\"\r\n              [sourceName]= \"feed.source\"\r\n              [sourceImage] = \"feed.sourceImage\"\r\n              [newsImage] = \"feed.newsImage\"\r\n              [title] = \"feed.title\"\r\n              [desc] = \"feed.desc\"\r\n              [url] = \"feed.url\"\r\n              [insertedDate] = \"feed.insertedDate\"\r\n              [likeCount] = \"feed.likeCount\"\r\n              [shareCount] = \"feed.shareCount\"\r\n              [commentCount] = \"feed.commentCount\"\r\n              [publishedAt] = \"feed.publishedAt\">\r\n            </sports-social-news-card>\r\n        </ng-container>\r\n      </ng-masonry-grid-item>\r\n    </ng-container>\r\n    \r\n</ng-masonry-grid>\r\n<sports-social-footer></sports-social-footer>\r\n\r\n  "

/***/ }),

/***/ "../../../../../src/app/sports-specific-feed/sports-specific-feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsSpecificFeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_match_data_service__ = __webpack_require__("../../../../../src/app/shared/services/match-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_news_service__ = __webpack_require__("../../../../../src/app/shared/services/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SportsSpecificFeedComponent = (function () {
    function SportsSpecificFeedComponent(matchData, newsData, renderer, activeRoute, router, zone) {
        this.matchData = matchData;
        this.newsData = newsData;
        this.renderer = renderer;
        this.activeRoute = activeRoute;
        this.router = router;
        this.zone = zone;
        this.globalArena = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
        this.urlChanged = false;
        this.Sports = [
            { id: 0, title: 'Popular' },
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
    SportsSpecificFeedComponent.prototype.reloadPage = function () {
        this.zone.runOutsideAngular(function () {
            location.reload();
        });
    };
    SportsSpecificFeedComponent.prototype.globalFeed = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            if (_this.gameName !== params.sport && _this.gameName !== undefined) {
                // this.urlChanged = true;
                console.log("true", _this.gameName, params.sport);
                _this.reloadPage();
            }
            _this.gameName = params.sport;
            _this.gameId = _this.Sports.find(function (sport) {
                return sport.title === _this.gameName;
            }).id;
            console.log(_this.gameName, _this.gameId);
            var matchPomise = _this.matchData.globalMatchFeed(_this.nextPageNo, _this.gameId);
            var newsPromise = _this.newsData.globalNewsFeed(_this.nextPageNo, _this.gameName.toLowerCase());
            Promise.all([matchPomise, newsPromise]).then(function (data) {
                console.log(data);
                _this.globalArena = _this.globalArena.concat(data['0']).concat(data['1']);
                console.log(_this.globalArena);
            }).catch(function (err) {
                console.log('err', err);
            });
        });
    };
    SportsSpecificFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalFeed();
    };
    SportsSpecificFeedComponent.prototype.onWindowScroll = function (event) {
        this.nextPageNo = Math.floor(scrollY / 2400);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
            console.log('nextPage', this.nextPageNo, event);
        }
    };
    SportsSpecificFeedComponent.prototype.ngOnInit = function () {
        this.globalFeed();
    };
    SportsSpecificFeedComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
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
    ], SportsSpecificFeedComponent.prototype, "onWindowScroll", null);
    SportsSpecificFeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-sports-specific-feed',
            template: __webpack_require__("../../../../../src/app/sports-specific-feed/sports-specific-feed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sports-specific-feed/sports-specific-feed.component.css"), __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_match_data_service__["a" /* MatchDataService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_news_service__["a" /* NewsService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], SportsSpecificFeedComponent);
    return SportsSpecificFeedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sports-specific-feed/sports-specific-feed.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsSpecificFeedModule", function() { return SportsSpecificFeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sports_router__ = __webpack_require__("../../../../../src/app/sports-specific-feed/sports.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sports_specific_feed_component__ = __webpack_require__("../../../../../src/app/sports-specific-feed/sports-specific-feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards_news_card_news_card_module__ = __webpack_require__("../../../../../src/app/cards/news-card/news-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_match_card_match_card_module__ = __webpack_require__("../../../../../src/app/cards/match-card/match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_live_match_card_live_match_card_module__ = __webpack_require__("../../../../../src/app/cards/live-match-card/live-match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__ = __webpack_require__("../../../../../src/app/carousel/carousel.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigation_bar_navigation_bar_module__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_masonry_grid__ = __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng_masonry_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng_masonry_grid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var SportsSpecificFeedModule = (function () {
    function SportsSpecificFeedModule() {
    }
    SportsSpecificFeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__sports_router__["a" /* SportsRouter */],
                __WEBPACK_IMPORTED_MODULE_4__cards_news_card_news_card_module__["a" /* NewsCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__cards_match_card_match_card_module__["a" /* MatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__cards_live_match_card_live_match_card_module__["a" /* LiveMatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_8__carousel_carousel_module__["a" /* CarouselModule */],
                __WEBPACK_IMPORTED_MODULE_9__navigation_bar_navigation_bar_module__["a" /* NavigationBarModule */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng_masonry_grid__["NgMasonryGridModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sports_specific_feed_component__["a" /* SportsSpecificFeedComponent */]
            ]
        })
    ], SportsSpecificFeedModule);
    return SportsSpecificFeedModule;
}());



/***/ }),

/***/ "../../../../../src/app/sports-specific-feed/sports.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportsRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sports_specific_feed_component__ = __webpack_require__("../../../../../src/app/sports-specific-feed/sports-specific-feed.component.ts");


var Sports_Router = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__sports_specific_feed_component__["a" /* SportsSpecificFeedComponent */],
    }
];
var SportsRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(Sports_Router);


/***/ })

});
//# sourceMappingURL=sports-specific-feed.module.chunk.js.map