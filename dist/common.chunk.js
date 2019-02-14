webpackJsonp(["common"],{

/***/ "../../../../../src/app/cards/live-match-card/live-match-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/live-match-card/live-match-card.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  live-match-card works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/cards/live-match-card/live-match-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchCardComponent; });
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

var LiveMatchCardComponent = (function () {
    function LiveMatchCardComponent() {
    }
    LiveMatchCardComponent.prototype.ngOnInit = function () {
    };
    LiveMatchCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-live-match-card',
            template: __webpack_require__("../../../../../src/app/cards/live-match-card/live-match-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cards/live-match-card/live-match-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LiveMatchCardComponent);
    return LiveMatchCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cards/live-match-card/live-match-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveMatchCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_match_card_component__ = __webpack_require__("../../../../../src/app/cards/live-match-card/live-match-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LiveMatchCardModule = (function () {
    function LiveMatchCardModule() {
    }
    LiveMatchCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__live_match_card_component__["a" /* LiveMatchCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__live_match_card_component__["a" /* LiveMatchCardComponent */]
            ]
        })
    ], LiveMatchCardModule);
    return LiveMatchCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/cards/match-card/match-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.userImage{\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.userImage > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.matchDetails{\r\n    width: 48%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.userName{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    max-width: 60%;\r\n    color: #024771;\r\n    font-weight: 700;\r\n    font-size: 1em;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    margin-right: 2%;\r\n}\r\n\r\n.activity-name {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    max-width: 38%;\r\n    color: black;\r\n    font-size: 0.8em;\r\n    font-weight: 400 ;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n.gameName{\r\n    color: black;\r\n    font-size: 0.8em;\r\n    font-weight: 400 ;\r\n}\r\n.activityDate{\r\n    color: black;\r\n    font-size: 0.8em;\r\n    font-weight: 400 ;\r\n}\r\n.match-date{\r\n    min-width: 32%;\r\n    text-align: right;\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n\r\n}\r\n.match-date > img{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n.match-date > span{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 0.9em;\r\n    color: #888888;\r\n    text-align: left;\r\n}\r\n\r\n.restrictionCount{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: 5px;\r\n    color: black;\r\n    font-size: 0.9em;\r\n    font-weight: 700;\r\n}\r\n\r\n.matchText{\r\n    padding: 2%;\r\n    font-size: 0.95em;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.matchImage{\r\n    width: 100%;\r\n    max-height: 300px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.matchImage > img {\r\n    width: 100%;\r\n}\r\n.action-count{\r\n    padding: 2%;\r\n}\r\n\r\n.action-count > a {\r\n    text-decoration: none;\r\n    margin-right: 7px;\r\n    color: black;\r\n    font-size: 0.9em;\r\n    font-weight: 500\r\n}\r\n.action-count > a > span {\r\n    font-weight: 400;\r\n}\r\n\r\n.actions-match{\r\n    padding: 3%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.actions-match > button > img {\r\n    width: 30px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 2px;\r\n}\r\n\r\n.actions-match > button > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.actions-match > button > span:hover{\r\n    font-weight: 700\r\n}\r\n\r\n.remove {\r\n    position: absolute;\r\n}\r\n.gameName {\r\n    font-weight: 700 ;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/match-card/match-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-social-card\" >\r\n  <div class=\"sports-social-card-header\">\r\n    <div class=\"userImage\">\r\n      <img src=\"{{doerPic}}\"  (error)=\"defaultImage()\" #userImg>\r\n    </div>\r\n    <div class=\"matchDetails\">\r\n      <div class=\"userName\">{{doerName}} </div>\r\n      <span class=\"activity-name\">{{activityName}}</span>\r\n      <div class=\"gameName\">{{gameName}} Match</div>\r\n      <div class=\"activityDate\">{{matchDate}}</div>\r\n    </div>\r\n    <div class=\"match-date\">\r\n      <img src=\"/assets/images/sports-social-clock.png\" alt=\"\">\r\n     <span>{{activityDate}}</span> \r\n    </div>\r\n    <div class=\"restrictionCount\">{{joineeCount}} playing</div>\r\n  </div>\r\n  <div class=\"matchText\">{{matchText}}</div>\r\n  <div class=\"matchImage\" (click) = \"openPopUp(eventId, gameName, $event )\">\r\n    <img src=\"{{matchImage}}\" alt=\"\">\r\n  </div>\r\n  <div class=\"action-count\" #actionsCount>\r\n    <a href=\"#\" *ngIf=\"commentCount > 0\">\r\n      {{commentCount}} \r\n      <span>{{commentCount > 1 ? 'Comments' : 'Comment'}}</span>  \r\n    </a>\r\n    <a href=\"#\" *ngIf=\"promoteCount > 0\">\r\n      {{promoteCount}} \r\n      <span>{{promoteCount > 1 ? 'Promotes' : 'Promote'}}</span>  \r\n    </a>\r\n    <a href=\"#\" *ngIf=\"watchCount > 0\">\r\n      {{watchCount}} \r\n      <span>Watching</span> \r\n    </a>\r\n  </div>\r\n  <div class=\"actions-match\">\r\n    <button class=\"playButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-play.png\" alt=\"\"> <span>Play</span>  \r\n    </button>\r\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-match-talks.png\" alt=\"\"><span>Comment</span>  \r\n    </button>\r\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-promote.png\" alt=\"\"> <span>Promote</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-watching.png\" alt=\"\"> <span>Watch</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/cards/match-card/match-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_pop_up_service__ = __webpack_require__("../../../../../src/app/shared/services/pop-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchCardComponent = (function () {
    function MatchCardComponent(renderer, time, resolver, get, id, router, activatedRoute) {
        this.renderer = renderer;
        this.time = time;
        this.resolver = resolver;
        this.get = get;
        this.id = id;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isClicked = false;
        this.comments = [];
        this.activityid = {
            commentid: 1005,
            promoteid: 1004,
            watchid: 1009
        };
    }
    MatchCardComponent.prototype.removeActionsCountBar = function () {
        if (this.promoteCount === 0 && this.watchCount === 0 && this.commentCount === 0) {
            this.renderer.setStyle(this.actionsCount.nativeElement, 'display', 'none');
        }
    };
    MatchCardComponent.prototype.removeOpenCardFromDOM = function () {
        this.renderer.setStyle(this.openMatchcard.nativeElement, 'position', 'fixed');
    };
    MatchCardComponent.prototype.sendId = function (eventId) {
        this.isClicked = true;
        console.log(eventId);
        this.id.ofCard.next(eventId);
    };
    MatchCardComponent.prototype.openPopUp = function (id, gameName, event) {
        console.log(this.activatedRoute.outlet);
        event.preventDefault();
        console.log(id, gameName);
        this.router.navigate([{ outlets: { 'Match': [id] } }], { skipLocationChange: true });
    };
    MatchCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    MatchCardComponent.prototype.defaultImage = function () {
        this.renderer.setAttribute(this.userImg.nativeElement, 'src', '/assets/images/user-default.png');
    };
    MatchCardComponent.prototype.ngOnInit = function () {
        this.removeActionsCountBar();
        this.activityDate = this.time.relativeDate(this.activityDate);
        this.matchDate = this.time.exactDate(parseInt(this.matchDate, 10) * 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionsCount'),
        __metadata("design:type", Object)
    ], MatchCardComponent.prototype, "actionsCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openMatchCard'),
        __metadata("design:type", Object)
    ], MatchCardComponent.prototype, "openMatchcard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "creatorImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "eventId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerPic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "joineeCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MatchCardComponent.prototype, "commentCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MatchCardComponent.prototype, "promoteCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MatchCardComponent.prototype, "watchCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "activityName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "activityDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "gameName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "venueName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MatchCardComponent.prototype, "restrictionCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('userImg'),
        __metadata("design:type", Object)
    ], MatchCardComponent.prototype, "userImg", void 0);
    MatchCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-match-card',
            template: __webpack_require__("../../../../../src/app/cards/match-card/match-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cards/match-card/match-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_time_service__["a" /* TimeService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_pop_up_service__["a" /* PopUpService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], MatchCardComponent);
    return MatchCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cards/match-card/match-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_card_component__ = __webpack_require__("../../../../../src/app/cards/match-card/match-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__open_cards_open_match_card_open_match_card_module__ = __webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MatchCardModule = (function () {
    function MatchCardModule() {
    }
    MatchCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__open_cards_open_match_card_open_match_card_module__["a" /* OpenMatchCardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__match_card_component__["a" /* MatchCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__match_card_component__["a" /* MatchCardComponent */]
            ]
        })
    ], MatchCardModule);
    return MatchCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/cards/news-card/news-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.news-info {\r\n    \r\n}\r\n.source-img{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.source-img > img  {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.source-name {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 1.2em;\r\n    margin-right: 2%;\r\n    color: #024771;\r\n}\r\n.news-image-holder{\r\n    width: 100%;\r\n    max-height: 320px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n.news-image-holder > img {\r\n    width: 100%;\r\n}\r\n\r\n.desc{\r\n    margin-top: 5px;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    overflow: hidden;\r\n    position: relative; \r\n    line-height: 1.2em;\r\n    max-height: 2.4em;\r\n    text-align: left; \r\n    padding-left: 1em;\r\n    padding-right: 1em;\r\n}\r\n\r\n.desc > a {\r\n    color: black;\r\n}\r\n\r\n.desc :before{\r\n  content: '...';\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.desc :after{\r\n  content: '';\r\n  position: absolute;\r\n  right: 0;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: 0.2em;\r\n  background: white;\r\n}\r\n.action-count{\r\n    padding: 2%;\r\n}\r\n\r\n.action-count > a {\r\n    text-decoration: none;\r\n    margin-right: 7px;\r\n    color: black;\r\n    font-size: 0.9em;\r\n    font-weight: 500\r\n}\r\n.actionsCount  > a > span {\r\n    font-weight: 400;\r\n}\r\n\r\n.actions-news{\r\n    padding: 3%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.actions-news > button > img {\r\n    width: 16px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 3px;\r\n}\r\n\r\n.actions-news > button > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.actions-news > button > span:hover{\r\n    font-weight: 700\r\n}\r\n.news-date{\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n\r\n}\r\n.news-date > img{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 28px;\r\n    height: 28px;\r\n}\r\n.news-date > span{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 0.9em;\r\n    color: #888888;\r\n}\r\n@media ( max-width: 720px) {\r\n    .source-img{\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n    .source-name {\r\n        font-size: 1em;\r\n    }\r\n}\r\n@media ( max-width: 980px) and ( min-width: 720px) {\r\n    .source-img{\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n    .source-name {\r\n        font-size: 1.1em;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/news-card/news-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-social-card\">\r\n  <div class=\"sports-social-card-header\">\r\n        <div class=\"source-img\">\r\n          <img src=\"{{sourceImage}}\" alt=\"\">\r\n        </div>\r\n        <h1 class=\"source-name\">{{sourceName}}</h1>\r\n        <div class=\"news-date\">\r\n            <img src=\"/assets/images/sports-social-clock.png\" alt=\"\">\r\n          <span>{{publishedAt}}</span>\r\n        </div>\r\n  </div>\r\n  <div class=\"news-image-holder\">\r\n    <img src=\"{{newsImage}}\" alt=\"\" (error)= \"defaultImage()\" (click)=\"openPopUp(newsId)\">\r\n  </div>\r\n  <h2 class=\"desc\">\r\n      <a href=\"{{url}}\" target=\"_blank\">{{desc}}</a>\r\n  </h2>\r\n  <div class=\"action-count\" #actionsCount>\r\n    <a href=\"\" *ngIf = \"likeCount > 0\">{{likeCount}} {{likeCount > 1 ? 'Likes': 'Like' }}</a>\r\n    <a href=\"\" *ngIf = \"shareCount > 0\">{{shareCount}} {{shareCount > 1 ? 'Shares': 'Share'}}</a>\r\n    <a href=\"\" *ngIf = \"commentCount > 0\">{{commentCount}} {{commentCount > 1 ? 'Comments': 'Comment' }}</a>\r\n  </div>\r\n  <div class=\"actions-news\">\r\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\"><span>Comment</span>  \r\n    </button>\r\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\"> <span>Like</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-share-black.png\" alt=\"\"> <span>Share</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n        <img src=\"/assets/images/sports-social-save-black.png\" alt=\"\"> <span>Save</span>\r\n      </button>\r\n  </div>\r\n</div>\r\n\r\n<template #openNewsCard></template>"

/***/ }),

/***/ "../../../../../src/app/cards/news-card/news-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsCardComponent = (function () {
    function NewsCardComponent(renderer, router, time) {
        this.renderer = renderer;
        this.router = router;
        this.time = time;
    }
    NewsCardComponent.prototype.defaultImage = function () {
        if (this.sourceName === 'BBC Sport') {
            this.newsImage = '/assets/images/bbc-default.jpg';
        }
        if (this.sourceName === 'The Sport Bible') {
            this.newsImage = '/assets/images/sports-bible-default.jpg';
        }
        if (this.sourceName === 'TalkSport') {
            this.newsImage = '/assets/images/talksport-default.jpg';
        }
    };
    NewsCardComponent.prototype.removeActionsCountBar = function () {
        if (this.likeCount === 0 && this.shareCount === 0 && this.commentCount === 0) {
            this.renderer.setStyle(this.actionsCount.nativeElement, 'display', 'none');
        }
    };
    NewsCardComponent.prototype.openPopUp = function (id) {
        this.router.navigate([{ outlets: { 'News': [id] } }], { skipLocationChange: true });
    };
    NewsCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    NewsCardComponent.prototype.ngOnInit = function () {
        this.removeActionsCountBar();
        this.publishedAt = this.time.newsDate(this.publishedAt);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "newsId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "newsImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "sourceImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "sourceName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsCardComponent.prototype, "likeCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsCardComponent.prototype, "shareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewsCardComponent.prototype, "commentCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "publishedAt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewsCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('actionsCount'),
        __metadata("design:type", Object)
    ], NewsCardComponent.prototype, "actionsCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openNewsCard', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", Object)
    ], NewsCardComponent.prototype, "openNewsCardContainer", void 0);
    NewsCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-news-card',
            template: __webpack_require__("../../../../../src/app/cards/news-card/news-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cards/news-card/news-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_time_service__["a" /* TimeService */]])
    ], NewsCardComponent);
    return NewsCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cards/news-card/news-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_card_component__ = __webpack_require__("../../../../../src/app/cards/news-card/news-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__open_cards_open_news_card_open_news_card_module__ = __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__open_cards_open_news_card_open_news_card_component__ = __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NewsCardModule = (function () {
    function NewsCardModule() {
    }
    NewsCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__open_cards_open_news_card_open_news_card_module__["a" /* OpenNewsCardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_card_component__["a" /* NewsCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__news_card_component__["a" /* NewsCardComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__open_cards_open_news_card_open_news_card_component__["a" /* OpenNewsCardComponent */]
            ]
        })
    ], NewsCardModule);
    return NewsCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.carousel{\r\n    width:100%;\r\n    height: 300px;\r\n    background-color: #4372a0;\r\n}\r\n.carousel > p {\r\n    position: relative;\r\n    top: 45%;\r\n    -webkit-transform: translateY(-50%);\r\n            transform: translateY(-50%); \r\n    width: 100%;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 1.8em;\r\n    font-weight: 500;\r\n}\r\n.carousel a{\r\n    color: #ffffff;\r\n    font-weight: 300;\r\n}\r\n@media ( max-width: 720px) {\r\n    .carousel {\r\n        height: 200px;\r\n    }\r\n    .carousel > p{\r\n        font-size: 1.4em;\r\n    }\r\n}\r\n@media ( max-width: 980px) and ( min-width: 720px) {\r\n    .carousel {\r\n        height: 250px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\" #carousel>\r\n  <p>See What's Going Around</p>\r\n  <p><a href=\"https://goo.gl/qrgCz5\" target=\"_blank\">Download The App</a></p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__ = __webpack_require__("../../../../../src/app/shared/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselComponent = (function () {
    function CarouselComponent(renderer, recieveHeight, sendBottom) {
        this.renderer = renderer;
        this.recieveHeight = recieveHeight;
        this.sendBottom = sendBottom;
    }
    CarouselComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (data) {
            _this.renderer.setStyle(_this.carousel.nativeElement, 'margin-top', data + 'px');
        });
    };
    CarouselComponent.prototype.sendBottomOfCarousel = function () {
        var bottom = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.carousel.nativeElement).bottom;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('carousel'),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "carousel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onresize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CarouselComponent.prototype, "onscroll", null);
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-carousel',
            template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */]])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "../../../../../src/app/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarouselModule = (function () {
    function CarouselModule() {
    }
    CarouselModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_component__["a" /* CarouselComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__carousel_carousel_component__["a" /* CarouselComponent */]
            ]
        })
    ], CarouselModule);
    return CarouselModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nfooter{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    z-index: 20;\r\n    background-color: white;\r\n    padding: 0.5%;\r\n    box-shadow: -1px -1px 4px #888888;\r\n}\r\nfooter > .social-handle> img{\r\n    width: 30px;\r\n    height: 30px;\r\n    vertical-align: 55px;\r\n    cursor: pointer;\r\n}\r\nfooter img:hover{\r\n   -webkit-transform: scale(1.1);\r\n           transform: scale(1.1)\r\n}\r\n\r\nfooter > p{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-top: 0.6%;\r\n    font-size: 0.9em;\r\n    \r\n}\r\na{\r\n    color: #024771;\r\n    font-weight: 500;\r\n    text-decoration: none;\r\n}\r\na:hover{\r\n    font-weight: 700\r\n}\r\n.social-handle {\r\n    text-align: center;\r\n    height: 30px;\r\n}\r\n.social-handle>img {\r\n    margin-right: 10px\r\n}\r\n\r\n\r\n\r\n@media ( max-width: 720px) {\r\n   \r\n}\r\n@media ( max-width: 980px)/*  and ( min-width: 720px) */ {\r\n    footer {\r\n        display: block;\r\n        text-align: center;\r\n    }\r\n    p{\r\n        margin-right: 2%\r\n    }\r\n    .social-handle {\r\n         width: 100%;\r\n         display: -webkit-box;\r\n         display: -ms-flexbox;\r\n         display: flex;\r\n         -ms-flex-pack: distribute;\r\n             justify-content: space-around\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer #footer>\r\n  <p>\r\n    <a routerLink=\"/about\">About</a> \r\n  </p>\r\n  <p>\r\n    <a href=\"#\">App</a> \r\n  </p>\r\n  <p>\r\n    <a href=\"https://www.chaseyoursport.com\" target=\"_blank\">Blog</a> \r\n  </p>\r\n  <p>\r\n    <a routerLink=\"/Terms Of Service\">Terms and conditions</a>   \r\n  </p>\r\n  <p>\r\n    <a routerLink=\"/Privacy Policy\">Privacy Policy</a> \r\n  </p>\r\n  <p>\r\n    <a routerLink=\"/OpenArena\">Open Arena</a>   \r\n  </p>\r\n  <p> \r\n    <a routerLink=\"/AroundTheWorld\">Around The Globe</a>   \r\n  </p>\r\n  <div class=\"social-handle\">\r\n    <img src=\"/assets/images/facebook.png\" alt=\"\">\r\n    <img src=\"/assets/images/twitter.png\" alt=\"\">\r\n    <img src=\"/assets/images/youtube.png\" alt=\"\">\r\n    <img src=\"/assets/images/instagram.png\" alt=\"\">\r\n    <img src=\"/assets/images/quora.png\" alt=\"\">\r\n  </div>\r\n  \r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onscroll = function () {
        // console.log(screenY, scrollY);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('footer'),
        __metadata("design:type", Object)
    ], FooterComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window: scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FooterComponent.prototype, "onscroll", null);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */]
            ]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nheader{\r\n    width: 100%;\r\n    padding: 0.4% 1% 0.4% 1%;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n    z-index: 10;\r\n    background-color: #ffffff;\r\n    box-shadow: 1px 1px 2px #bbbbbb;\r\n}\r\n.brand, .search, .brand-image, .brand-title{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.brand-image{\r\n    width: 45px;\r\n    height: 45px;\r\n}\r\n.brand-image > img {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.brand-title > span{\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n}\r\n.brand-title > span:first-child{\r\n    color: #024771;\r\n    margin-right: 5px;\r\n}\r\n.brand-title > span:nth-of-type(2){\r\n    color: #ffa600;\r\n}\r\n.brand-title > p{\r\n    text-align: center;\r\n    color: #024771;\r\n    font-size: 0.8em;\r\n    font-style: italic;\r\n}\r\n.search{\r\n    width: 40%;\r\n    margin-left: 4%;\r\n    margin-right: 2%;\r\n}\r\ninput{\r\n    width: 100%;\r\n    display: block;\r\n    border: none;\r\n    background-image: url('/assets/images/sports-social-search.png');\r\n    background-size: 18px;\r\n    background-repeat: no-repeat;\r\n    background-position: left;\r\n    background-position-x: 5px;\r\n    height: 35px;\r\n    text-align: center;\r\n    box-shadow: 1px 1px 2px #bbbbbb;\r\n    border-radius: 25px;\r\n    outline: none;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\nli{\r\n    display: inline-block;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\n.menu{\r\n    position: fixed;\r\n    right: 20px;\r\n    top: 17px;\r\n    width: 25%;\r\n    text-align: right;\r\n}\r\n.menu li  {\r\n    margin-left: 5%;\r\n}\r\n.menu li > a{\r\n    color: #024771;\r\n    font-size: 0.9em;\r\n    font-weight: 500;\r\n}\r\n.menu li > a:hover{\r\n    font-weight: 700;\r\n    color: #ffa600;\r\n}\r\n.dropdown-menu-image-holder{\r\n    position: fixed;\r\n    top:12px;\r\n    right: 20px;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.dropdown-menu-image-holder > img {\r\n    width: 100%;\r\n    height: 100%;\r\n    cursor: pointer;\r\n}\r\n.dropdown-cancel-image-holder {\r\n    width: 95%;\r\n    height: 10px;\r\n    text-align: right;\r\n    margin: 0% auto;\r\n}\r\n.dropdown-cancel-image-holder > img {\r\n   \r\n    width: 12px;\r\n    height: 12px;\r\n    cursor: pointer;\r\n}\r\n.dropdown-menu{\r\n    width: 60%;\r\n    position: fixed;\r\n    top:60px;\r\n    left: 20%;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n\r\n}\r\n.dropdown-menu > ul > li{\r\n    display: block;\r\n    text-align: center;\r\n    padding: 1%;\r\n    color: #024771;\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n    border-bottom: 1px solid #bbbbbb;\r\n    width: 95%;\r\n    margin: 0% auto;\r\n}\r\n.dropdown-search{\r\n    width: 100%;\r\n}\r\n.dropdown-search > input {\r\n    width: 95%;\r\n    margin: 1% auto; \r\n    background-image: unset;\r\n    border-radius: 0px;\r\n}\r\nbutton{\r\n    display: block;\r\n    margin: 1% auto;\r\n    color: #ffffff;\r\n    background-color: #ffa600;\r\n    padding: 1.5%;\r\n    width: 20%;\r\n    border: none;\r\n    outline: none;\r\n    border-radius: 4px;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n}\r\n.active{\r\n    color: #ffa600 !important\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header #header>\r\n  <div class=\"brand\">\r\n    <a routerLink=\"/\">\r\n      <div class=\"brand-image\">\r\n        <img src=\"/assets/images/sports-social-logo.png\" alt=\"Sport-Social-logo\">\r\n      </div>\r\n      <div class=\"brand-title\">\r\n        <span>Sports</span>\r\n        <span>Social</span>\r\n        <p>ChaseYourSport</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"search\" *ngIf=\"!isSearchInDropdown\">\r\n    <input type=\"text\" placeholder=\"Search Sport Social\">\r\n  </div>\r\n  <div class=\"menu\" *ngIf=\"!isMenuInDropdown\">\r\n    <ul>\r\n      <li>\r\n        <a routerLink=\"/about\" class=\"About btn btn-responsive\">About</a>\r\n      </li>\r\n      <li>\r\n        <a href=\"#\">App</a> \r\n      </li>\r\n      <li>\r\n        <a href=\"/HelpCenter\" routerLinkActive=\"active\">Help Center</a> \r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"mobile-view\" *ngIf=\"mobileView\">\r\n    <div class=\"dropdown-menu-image-holder\">\r\n      <img src=\"/assets/images/sports-social-menu.png\" (click)=\"openDropdown()\">\r\n    </div>\r\n    <div class=\"dropdown-menu\" *ngIf=\"isDropdownIconclicked\">\r\n      <div class=\"dropdown-cancel-image-holder\">\r\n        <img src=\"/assets/images/sports-social-cancel-black.png\"  (click)=\"closeDropdown()\">\r\n      </div>\r\n      <ul  *ngIf=\"isMenuInDropdown\">\r\n          <li>\r\n            <a routerLink=\"/about\">About</a> \r\n          </li>\r\n          <li>\r\n            <a href=\"#\">App</a> \r\n          </li>\r\n          <li>\r\n            <a routerLink=\"/HelpCenter\" routerLinkActive=\"active\">Help Center</a> \r\n          </li>\r\n      </ul>\r\n      <ng-container  *ngIf=\"isSearchInDropdown\">\r\n        <div class=\"dropdown-search\">\r\n          <input type=\"text\" placeholder=\"Search Sports Social\">\r\n        </div>\r\n        <button>Search</button>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__ = __webpack_require__("../../../../../src/app/shared/services/property.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
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
        if (width < 800 && width > 720) {
            this.mobileView = true;
            this.isMenuInDropdown = true;
            this.isSearchInDropdown = false;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('header'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onresize", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    text-align: center;\r\n    z-index: 8;\r\n    position: relative;\r\n    \r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nli{\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding: 10px 20px 10px 20px;\r\n    border-left: 1px solid #bbbbbb;\r\n}\r\n\r\nimg {\r\n    width: 16px;\r\n}\r\n.nav {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #024771;\r\n    font-size: 1.1em;\r\n    font-weight: 500;\r\n    text-align: center\r\n}\r\n\r\n.more{\r\n    cursor: pointer;\r\n    text-align: center;\r\n}\r\n\r\n.dropdown{\r\n    position: absolute;\r\n    top:40px;\r\n    right:10%;\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    z-index: 10;\r\n    overflow-y: visible;\r\n}\r\n\r\n.dropdown li{\r\n    display: block;\r\n    padding: 10px;\r\n}\r\n\r\n.active   {\r\n    color: #ffa600 !important;\r\n}\r\nli :hover{\r\n    color: #ffa600\r\n}\r\n.mobile-nav {\r\n    position: relative;\r\n}\r\n.mobile-nav > .active-route {\r\n    background-color: #ffffff;\r\n    box-shadow: 2px 2px 4px #bbbbbb;\r\n    width: 100%;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n.active-route  div {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right:20px; \r\n    color: #ffa600;\r\n    font-weight: 500;\r\n}\r\n\r\n.mobile-nav > ul {\r\n    position: absolute;\r\n    width: 300px;\r\n    top: 44px;\r\n    left: 0px;\r\n    z-index: 10;\r\n    background-color: white;\r\n    box-shadow: 1px 1px 4px #bbbbbb;\r\n    overflow-y: visible;\r\n}\r\n\r\n.mobile-nav > ul > li {\r\n    display: block;\r\n    padding: 10px;\r\n    text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\" #navbar>\r\n  <ng-container *ngIf = \"!mobileNav\">  \r\n    <ul >\r\n      <li>\r\n        <a routerLink=\"/\" class=\"nav\">\r\n          <img src=\"{{route === undefined ? '/assets/images/sports-social-home-clicked.png': '/assets/images/sports-social-home.png'}}\" #image>\r\n        </a>\r\n      </li>\r\n      <li *ngFor=\"let sport of sports; let i = index\" (mouseover)=\"closeDropdownByMouseleave(i)\">\r\n        <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\" >\r\n          {{sport.title}}\r\n        </a>\r\n      </li>\r\n      <li class=\"more\"  *ngIf = \"moreSports.length>0\">\r\n          <img src=\"/assets/images/sports-social-caret-down-blue.png\" (click)=\"openDropdown()\" (mouseover)=\"openDropdown()\" >\r\n      </li>\r\n    </ul>\r\n\r\n    <ng-container *ngIf=\"isHoverOnCaret\">\r\n        <ul  class=\"dropdown\" (mouseleave)=\"closeDropdownByMouseleave()\" #dropdown>\r\n            <li *ngFor=\"let sport of moreSports\" >\r\n              <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\">\r\n                {{sport.title}}\r\n              </a>\r\n            </li>\r\n        </ul>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n\r\n<div class=\"mobile-nav\" >\r\n   <ng-container *ngIf = \"mobileNav\">\r\n      <div class=\"active-route\" > \r\n          <div  *ngIf= \"route === undefined\" >\r\n              <img src=\"{{ '/assets/images/sports-social-home-clicked.png'}}\" #image>\r\n          </div>\r\n          <ng-container *ngIf= \"route !== 'Popular'\">\r\n              <div >{{route}}</div>\r\n          </ng-container>\r\n        <img  src=\"/assets/images/sports-social-caret-down-blue.png\" (click)=\"openDropdown()\" (mouseover)=\"openDropdown()\" >\r\n      </div>\r\n      <ng-container *ngIf=\"isHoverOnCaret\">\r\n        <ul (mouseleave)=\"closeDropdownByMouseleave()\" #mobileNavbar>\r\n            <li>\r\n                <a routerLink=\"/\" class=\"nav\">\r\n                  <img src=\"{{route === undefined ? '/assets/images/sports-social-home-clicked.png': '/assets/images/sports-social-home.png'}}\" #image>\r\n                </a>\r\n              </li>\r\n          <li *ngFor=\"let sport of sports; let i = index\" >\r\n            <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\" >\r\n              {{sport.title}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n   </ng-container>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__ = __webpack_require__("../../../../../src/app/shared/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationBarComponent = (function () {
    function NavigationBarComponent(recieveHeight, reciveBottom, renderer, activatedRoute, zone) {
        this.recieveHeight = recieveHeight;
        this.reciveBottom = reciveBottom;
        this.renderer = renderer;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
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
        var width = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.navbar.nativeElement).width;
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
            var top = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(_this.navbar.nativeElement).top;
            var bottom = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(_this.navbar.nativeElement).bottom;
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
            var height = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.mobileNavbar.nativeElement).height;
            var top_1 = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.mobileNavbar.nativeElement).top;
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
            var height = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.dropdown.nativeElement).height;
            var top_2 = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* ɵgetDOM */])().getBoundingClientRect(this.dropdown.nativeElement).top;
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navbar'),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "navbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mobileNavbar'),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "mobileNavbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dropdown'),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "dropdown", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('image'),
        __metadata("design:type", Object)
    ], NavigationBarComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onresize", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onscroll", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NavigationBarComponent.prototype, "onHover", null);
    NavigationBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-navigation-bar',
            template: __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_bar_navigation_bar_component__ = __webpack_require__("../../../../../src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationBarModule = (function () {
    function NavigationBarModule() {
    }
    NavigationBarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__navigation_bar_navigation_bar_component__["a" /* NavigationBarComponent */]
            ]
        })
    ], NavigationBarModule);
    return NavigationBarModule;
}());



/***/ }),

/***/ "../../../../desandro-matches-selector/matches-selector.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "../../../../ev-emitter/ev-emitter.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "../../../../fizzy-ui-utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("../../../../desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( matchesSelector ) {
      return factory( window, matchesSelector );
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "../../../../get-size/get-size.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory();
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "../../../../imagesloaded/imagesloaded.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("../../../../ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter ) {
      return factory( window, EvEmitter );
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "../../../../masonry-layout/masonry.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__("../../../../outlayer/outlayer.js"),
        __webpack_require__("../../../../get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "../../../../ng-masonry-grid/ng-masonry-grid.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-masonry-grid-item {\t\r\n\tdisplay: inline-block;\r\n}\r\n.grid {\r\n\tmax-width: 100%;\r\n\tlist-style: none;\r\n\tmargin: 30px auto;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\n.grid ng-masonry-grid-item {\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n\twidth: 31%;\r\n\tmargin: 1%;\r\n} \r\n\r\n.grid ng-masonry-grid-item.shown,\r\n.no-js .grid ng-masonry-grid-item,\r\n.no-cssanimations .grid ng-masonry-grid-item {\r\n\topacity: 1;\r\n}\r\n\r\n.grid ng-masonry-grid-item a,\r\n.grid ng-masonry-grid-item img {\r\n\toutline: none;\r\n\tborder: none;\r\n\tdisplay: block;\r\n\tmax-width: 100%;\r\n}\r\n\r\n\r\n@media ( max-width: 980px) and ( min-width: 720px) {\r\n\t.grid ng-masonry-grid-item {\r\n\t\twidth: 47%;\r\n\t\tmargin: 1%\r\n\t}\r\n}\r\n\r\n@media ( max-width: 720px) {\r\n\t.grid ng-masonry-grid-item {\r\n\t\twidth: 96%;\r\n\t\tmargin: 2%;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../ng-masonry-grid/ng-masonry-grid.umd.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("../../../core/esm5/core.js"), __webpack_require__("../../../common/esm5/common.js"), __webpack_require__("../../../../rxjs/_esm5/Observable.js"), __webpack_require__("../../../../rxjs/_esm5/observable/EmptyObservable.js")) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'rxjs/Observable', 'rxjs/observable/EmptyObservable'], factory) :
	(factory((global['ng-masonry-grid'] = {}),global.core,global.common,global.Observable,global.EmptyObservable));
}(this, (function (exports,core,common,Observable,EmptyObservable) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridService = (function () {
    function NgMasonryGridService(_platformId) {
        this._platformId = _platformId;
        this.items = [];
        this.isAnimate = false;
        this.docElem = window.document.documentElement;
        /**
         * Default animation options of grid items on scroll
         */
        this.animationDefaults = {
            animationEffect: 'effect-1',
            // default animation effect-1
            // Minimum and a maximum duration of the animation (random value is chosen)
            minDuration: 0,
            maxDuration: 0,
            // The viewportFactor defines how much of the appearing item has to be visible in order to trigger the animation
            // if we'd use a value of 0, this would mean that it would add the animation class as soon as the item is in the viewport.
            // If we were to use the value of 1, the animation would only be triggered when we see all of the item in the viewport (100% of it)
            viewportFactor: 0
        };
        /**
         * Default masonry options
         */
        this.masonryDefaults = {
            // Set default itemSelector: mandatory
            itemSelector: '[ng-masonry-grid-item], ng-masonry-grid-item, [ng-masonry-grid-item].animate, ng-masonry-grid-item.animate',
            addStatus: 'append' // 'prepend' or 'add'
        };
        this._onScrollHandler = this._onScrollFn.bind(this);
        this._onResizeHandler = this._resizeHandler.bind(this);
    }
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype.getViewportH = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ client = this.docElem['clientHeight'], /** @type {?} */
        inner = window['innerHeight'];
        if (client < inner) {
            return inner;
        }
        else {
            return client;
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype.scrollY = /**
     * @return {?}
     */
    function () {
        return window.pageYOffset || this.docElem.scrollTop;
    };
    /**
     * @param {?} el
     * @return {?}
     */
    NgMasonryGridService.prototype.getOffset = /**
     * @param {?} el
     * @return {?}
     */
    function (el) {
        var /** @type {?} */ offsetTop = 0, /** @type {?} */ offsetLeft = 0;
        do {
            if (!isNaN(el.offsetTop)) {
                offsetTop += el.offsetTop;
            }
            if (!isNaN(el.offsetLeft)) {
                offsetLeft += el.offsetLeft;
            }
        } while (el = el.offsetParent);
        return {
            top: offsetTop,
            left: offsetLeft
        };
    };
    /**
     * @param {?} el
     * @param {?=} h
     * @return {?}
     */
    NgMasonryGridService.prototype.inViewport = /**
     * @param {?} el
     * @param {?=} h
     * @return {?}
     */
    function (el, h) {
        if (h === void 0) { h = 0; }
        var /** @type {?} */ elH = el.offsetHeight, /** @type {?} */
        scrolled = this.scrollY(), /** @type {?} */
        viewed = scrolled + this.getViewportH(), /** @type {?} */
        elTop = this.getOffset(el).top, /** @type {?} */
        elBottom = elTop + elH;
        // if 0, the element is considered in the viewport as soon as it enters.
        // if 1, the element is considered in the viewport only when it's fully inside
        // value in percentage (1 >= h >= 0)
        // h = h || 0;
        return (elTop + elH * h) <= viewed && (elBottom - elH * h) >= scrolled;
    };
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    NgMasonryGridService.prototype.extend = /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function (a, b) {
        for (var /** @type {?} */ key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    };
    /**
     * Initialize and extend all options
     * @param {?} el
     * @param {?} masonryOptions
     * @param {?=} useAnimation
     * @param {?=} animationOptions
     * @param {?=} useImagesLoaded
     * @return {?}
     */
    NgMasonryGridService.prototype.init = /**
     * Initialize and extend all options
     * @param {?} el
     * @param {?} masonryOptions
     * @param {?=} useAnimation
     * @param {?=} animationOptions
     * @param {?=} useImagesLoaded
     * @return {?}
     */
    function (el, masonryOptions, useAnimation, animationOptions, useImagesLoaded) {
        this.useAnimation = useAnimation;
        this.el = el;
        this.isAnimate = this.useAnimation || (animationOptions ? true : false);
        this.useImagesLoaded = useImagesLoaded;
        this.masonryOptions = this.extend(this.masonryDefaults, masonryOptions);
        this.animationOptions = this.extend(this.animationDefaults, animationOptions);
        return this._init();
    };
    /**
     * @param {?} _element
     * @param {?} options
     * @return {?}
     */
    NgMasonryGridService.prototype.initializeMasonry = /**
     * @param {?} _element
     * @param {?} options
     * @return {?}
     */
    function (_element, options) {
        var /** @type {?} */ Masonry = __webpack_require__("../../../../masonry-layout/masonry.js");
        return new Masonry(_element, options);
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._init = /**
     * @return {?}
     */
    function () {
        if (this.isAnimate) {
            // add animation effect
            this.el.classList.add(this.animationOptions.animationEffect);
        }
        // get imagesloaded libary instance
        if (this.useImagesLoaded) {
            this.imagesLoaded = __webpack_require__("../../../../imagesloaded/imagesloaded.js");
        }
        // check if browser and then intialize Masonry
        if (common.isPlatformBrowser(this._platformId)) {
            return this._initMasonry();
        }
        return null;
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._initMasonry = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize masonry
        this._msnry = this.initializeMasonry(this.el, this.masonryOptions);
        // use animation options if useAnimation is true
        if (this.isAnimate && this._msnry) {
            // animate on scroll the items inside the viewport
            window.addEventListener('scroll', this._onScrollHandler, false);
            window.addEventListener('resize', this._onResizeHandler, false);
            /**
                   * Remove scroll animations to remove conflicts between Masonry Transitions and Scroll Animations
                   */
            this._msnry.on('layoutComplete', function (items) {
                Array.prototype.slice.call(_this.el.children).forEach(function (element) {
                    element.classList.remove('animate');
                });
            });
            this._msnry.on('removeComplete', function (items) {
                Array.prototype.slice.call(_this.el.children).forEach(function (element) {
                    element.classList.remove('animate');
                });
                _this._msnry.layout();
            });
        }
        return this._msnry;
    };
    /**
     * @param {?} items
     * @return {?}
     */
    NgMasonryGridService.prototype._layoutComplete = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        this.items = items.map(function (item) { return item.element; });
        this.itemsCount = this.items.length;
        this.didScroll = false;
        this.itemsRenderedCount = 0;
        // the items already shown...
        this.items.forEach(function (el, i) {
            if (_this.inViewport(el)) {
                _this._checkTotalRendered();
            }
        });
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._onScrollFn = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        if (!this.didScroll) {
            this.didScroll = true;
            setTimeout(function () { self._scrollPage(); }, 100);
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._scrollPage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ self = this;
        var /** @type {?} */ items = this._msnry.items.map(function (item) { return item.element; });
        if (items.length) {
            items.forEach(function (el, i) {
                if (_this.inViewport(el, self.animationOptions.viewportFactor)) {
                    // setTimeout( () => {
                    var /** @type {?} */ perspY = _this.scrollY() + _this.getViewportH() / 2;
                    self.el.style.WebkitPerspectiveOrigin = '50% ' + perspY + 'px';
                    self.el.style.MozPerspectiveOrigin = '50% ' + perspY + 'px';
                    self.el.style.perspectiveOrigin = '50% ' + perspY + 'px';
                    if (self.animationOptions.minDuration && self.animationOptions.maxDuration) {
                        var /** @type {?} */ randDuration = (Math.random() * (self.animationOptions.maxDuration - self.animationOptions.minDuration)
                            + self.animationOptions.minDuration) + 's';
                        el.style.WebkitAnimationDuration = randDuration;
                        el.style.MozAnimationDuration = randDuration;
                        el.style.animationDuration = randDuration;
                    }
                    el.classList.add('animate');
                    // }, 25 );
                }
                else {
                    el.classList.remove('animate');
                }
            });
        }
        this.didScroll = false;
    };
    /**
     * @return {?}
     */
    NgMasonryGridService.prototype._resizeHandler = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        Array.prototype.slice.call(this.el.children).forEach(function (element) {
            element.classList.remove('animate');
        });
        /**
         * @return {?}
         */
        function delayed() {
            self._scrollPage();
            self.resizeTimeout = null;
        }
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(delayed, 500);
    };
    /**
     * Check if total grid items are redered in the DOM
     * @return {?}
     */
    NgMasonryGridService.prototype._checkTotalRendered = /**
     * Check if total grid items are redered in the DOM
     * @return {?}
     */
    function () {
        ++this.itemsRenderedCount;
        if (this.itemsRenderedCount === this.itemsCount) {
            window.removeEventListener('scroll', this._onScrollHandler, false);
        }
    };
    /**
     * On Destroy remove Scroll and Resize event Listeners
     * @return {?}
     */
    NgMasonryGridService.prototype.onDestory = /**
     * On Destroy remove Scroll and Resize event Listeners
     * @return {?}
     */
    function () {
        window.removeEventListener('scroll', this._onScrollHandler, false);
        window.removeEventListener('resize', this._onResizeHandler, false);
    };
    /**
     * Remove scroll animations
     * @return {?}
     */
    NgMasonryGridService.prototype.removeAnimation = /**
     * Remove scroll animations
     * @return {?}
     */
    function () {
        if (this.isAnimate) {
            Array.prototype.slice.call(this.el.children).forEach(function (element) {
                element.classList.remove('animate');
            });
        }
    };
    /**
     * Add Each grid item to Masonry based on Masony addStatus property
     * @param {?} element Element - Grid item
     * @param {?} count  A unique count of each added grid item
     * @return {?}
     */
    NgMasonryGridService.prototype.add = /**
     * Add Each grid item to Masonry based on Masony addStatus property
     * @param {?} element Element - Grid item
     * @param {?} count  A unique count of each added grid item
     * @return {?}
     */
    function (element, count) {
        var _this = this;
        var /** @type {?} */ addStatus = this.masonryOptions.addStatus.toLowerCase();
        // set margin bottom of gutter value.
        if (this.masonryOptions.gutter) {
            element.style.marginBottom = this.masonryOptions.gutter + 'px';
        }
        if (this.el.hasChildNodes() && this.el.contains(element)) {
            this.el.removeChild(element);
        }
        if (this.useImagesLoaded) {
            setTimeout(function () {
                _this.imagesLoaded(element, function (instance) {
                    // append or prepend based on masonry option
                    if (addStatus === 'prepend') {
                        if (_this._msnry.items.length !== 0) {
                            _this.el.insertBefore(element, _this._msnry.items[0].element);
                            _this._msnry.prepended(element);
                        }
                        else {
                            _this.el.appendChild(element);
                            _this._msnry.appended(element);
                        }
                    }
                    else if (addStatus === 'append') {
                        _this.el.appendChild(element);
                        _this._msnry.appended(element);
                    }
                    else {
                        _this.el.appendChild(element);
                        _this._msnry.addItems(element);
                    }
                    _this._msnry.layout();
                });
            }, 0);
        }
        else {
            if (addStatus === 'prepend') {
                if (this._msnry.items.length !== 0) {
                    this.el.insertBefore(element, this._msnry.items[0].element);
                    this._msnry.prepended(element);
                }
                else {
                    this.el.appendChild(element);
                    this._msnry.appended(element);
                }
            }
            else if (addStatus === 'append') {
                this.el.appendChild(element);
                this._msnry.appended(element);
            }
            else {
                this.el.appendChild(element);
                this._msnry.addItems(element);
            }
            this._msnry.layout();
        }
    };
    /**
     * Set add status to Masonry before adding or appending
     * @param {?} value 'append' or 'prepend' or 'add'
     * @return {?}
     */
    NgMasonryGridService.prototype.setAddStatus = /**
     * Set add status to Masonry before adding or appending
     * @param {?} value 'append' or 'prepend' or 'add'
     * @return {?}
     */
    function (value) {
        this.masonryOptions.addStatus = value;
    };
    /**
     * Remove grid item from Masonry
     * @param {?} item Element: Removed Grid Item DOM
     * @return {?}
     */
    NgMasonryGridService.prototype.removeItem = /**
     * Remove grid item from Masonry
     * @param {?} item Element: Removed Grid Item DOM
     * @return {?}
     */
    function (item) {
        var _this = this;
        this.removeAnimation();
        if (item) {
            item.classList.remove('animate');
            var /** @type {?} */ obsv = new Observable.Observable(function (observer) {
                var /** @type {?} */ count = item.getAttribute('data-count');
                var /** @type {?} */ index = _this._msnry.items.findIndex(function (masonryItem) {
                    return masonryItem.element.getAttribute('data-count') === count;
                });
                setTimeout(function () {
                    var /** @type {?} */ elem = _this._msnry.items[index].element;
                    _this._onTransitionEnd(observer, elem);
                }, 10);
            });
            return obsv;
        }
        return new EmptyObservable.EmptyObservable();
    };
    /**
     * Remove first grid item from the Masonry List
     * @return {?}
     */
    NgMasonryGridService.prototype.removeFirstItem = /**
     * Remove first grid item from the Masonry List
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeAnimation();
        if (this._msnry.items.length) {
            this._msnry.items[0].element.classList.remove('animate');
            var /** @type {?} */ obsv = new Observable.Observable(function (observer) {
                setTimeout(function () {
                    _this._onTransitionEnd(observer, _this._msnry.items[0].element);
                }, 10);
            });
            return obsv;
        }
        return new EmptyObservable.EmptyObservable();
    };
    /**
     * Empty the Masonry list
     * @return {?}
     */
    NgMasonryGridService.prototype.removeAllItems = /**
     * Empty the Masonry list
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeAnimation();
        var /** @type {?} */ obsv = new Observable.Observable(function (observer) {
            setTimeout(function () {
                var /** @type {?} */ items = [];
                _this._msnry.items.forEach(function (masonryItem, index) {
                    items.push({ element: masonryItem.element, index: index });
                    _this.addTransition(masonryItem.element);
                });
                var /** @type {?} */ elem = _this._msnry.items[_this._msnry.items.length - 1].element;
                var /** @type {?} */ transitionEnd = function () {
                    observer.next(items);
                    setTimeout(function () {
                        _this._msnry.reloadItems();
                        _this._msnry.layout();
                    }, 10);
                    elem.removeEventListener('transitionend', transitionEnd, false);
                };
                elem.addEventListener('transitionend', transitionEnd, false);
            }, 10);
        });
        return obsv;
    };
    /**
     * Add transition effect on DOM Node removal
     * @param {?} elem
     * @return {?}
     */
    NgMasonryGridService.prototype.addTransition = /**
     * Add transition effect on DOM Node removal
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        elem.style.transition = 'transform ' + this.masonryOptions.transitionDuration + ', opacity ' + this.masonryOptions.transitionDuration;
        elem.style.transform = 'scale(0.001)';
        elem.style.opacity = '0';
    };
    /**
     * On transition End, remove eventListener
     * @param {?} observer Subscriber<MasonryGridItem>
     * @param {?} elem
     * @return {?}
     */
    NgMasonryGridService.prototype._onTransitionEnd = /**
     * On transition End, remove eventListener
     * @param {?} observer Subscriber<MasonryGridItem>
     * @param {?} elem
     * @return {?}
     */
    function (observer, elem) {
        var _this = this;
        if (elem) {
            this.addTransition(elem);
            var /** @type {?} */ transitionEnd_1 = function () {
                var /** @type {?} */ isindex = Array.prototype.slice.call(_this.el.children).findIndex(function (element) {
                    return element.getAttribute('data-count') === elem.getAttribute('data-count');
                });
                if (isindex !== -1) {
                    observer.next({ element: elem, index: isindex });
                }
                setTimeout(function () {
                    _this._msnry.reloadItems();
                    _this._msnry.layout();
                }, 10);
                elem.removeEventListener('transitionend', transitionEnd_1, false);
            };
            elem.addEventListener('transitionend', transitionEnd_1, false);
        }
    };
    NgMasonryGridService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    NgMasonryGridService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    ]; };
    return NgMasonryGridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridComponent = (function () {
    function NgMasonryGridComponent(_platformId, _element, masonryGridService) {
        this._platformId = _platformId;
        this._element = _element;
        this.masonryGridService = masonryGridService;
        this.gridItemCount = 0;
        // Inputs
        this.masonryOptions = {};
        this.useAnimation = false;
        this.useImagesLoaded = false;
        // Outputs
        this.layoutComplete = new core.EventEmitter();
        this.removeComplete = new core.EventEmitter();
        this.onNgMasonryInit = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._element.nativeElement.classList.add('grid');
        this.initializeMasonry();
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // initialize masonry after View Initialization
        // this.initializeMasonry();
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._msnry) {
            this._msnry.destroy();
            this.masonryGridService.onDestory();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.layout();
        }, 50);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryGridComponent.prototype.remove = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this._msnry.remove(element);
        this.layout();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgMasonryGridComponent.prototype.add = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        this.masonryGridService.add(element, this.gridItemCount);
    };
    /**
     * @return {?}
     */
    NgMasonryGridComponent.prototype.initializeMasonry = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // initialize Masonry with Animation effects
        this._msnry = this.masonryGridService
            .init(this._element.nativeElement, this.masonryOptions, this.useAnimation, this.scrollAnimationOptions, this.useImagesLoaded);
        // Bind to Masonry events
        this._msnry.on('layoutComplete', function (items) {
            _this.layoutComplete.emit(items);
        });
        this._msnry.on('removeComplete', function (items) {
            _this.removeComplete.emit(items);
        });
        this._msnry.removeAnimation = function () {
            _this.masonryGridService.removeAnimation();
        };
        this._msnry.setAddStatus = function (value) {
            _this.masonryGridService.setAddStatus(value);
        };
        this._msnry.removeItem = function (item) {
            return _this.masonryGridService.removeItem(item);
        };
        this._msnry.removeFirstItem = function () {
            return _this.masonryGridService.removeFirstItem();
        };
        this._msnry.removeAllItems = function () {
            return _this.masonryGridService.removeAllItems();
        };
        // emit Masonry Initialization event
        this.onNgMasonryInit.emit(this._msnry);
        this.layout();
    };
    NgMasonryGridComponent.decorators = [
        { type: core.Component, args: [{
                    selector: '[ng-masonry-grid], ng-masonry-grid',
                    template: '<ng-content></ng-content>',
                    styles: [
                        "\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"
                    ]
                },] },
    ];
    /** @nocollapse */
    NgMasonryGridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
        { type: core.ElementRef, },
        { type: NgMasonryGridService, },
    ]; };
    NgMasonryGridComponent.propDecorators = {
        "masonryOptions": [{ type: core.Input },],
        "useAnimation": [{ type: core.Input },],
        "scrollAnimationOptions": [{ type: core.Input },],
        "useImagesLoaded": [{ type: core.Input },],
        "layoutComplete": [{ type: core.Output },],
        "removeComplete": [{ type: core.Output },],
        "onNgMasonryInit": [{ type: core.Output },],
    };
    return NgMasonryGridComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridDirective = (function () {
    function NgMasonryGridDirective(_element, _parent, platformId) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // this._parent.add(this._element.nativeElement);
    };
    /**
     * Add Masonry grid item after view initialization
     */
    /**
     * Add Masonry grid item after view initialization
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngAfterViewInit = /**
     * Add Masonry grid item after view initialization
     * @return {?}
     */
    function () {
        if (common.isPlatformBrowser(this.platformId)) {
            this._parent.gridItemCount++;
            // set count attribute for every grid item
            this._element.nativeElement.setAttribute('data-count', this._parent.gridItemCount);
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    };
    /**
     * @return {?}
     */
    NgMasonryGridDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * When HTML in brick changes dynamically, observe that and change layout
     * @return {?}
     */
    NgMasonryGridDirective.prototype.watchForHtmlChanges = /**
     * When HTML in brick changes dynamically, observe that and change layout
     * @return {?}
     */
    function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /**
             * Watch for any changes to subtree
             */
            var /** @type {?} */ self_1 = this;
            var /** @type {?} */ observer = new MutationObserver(function (mutations, observerFromElement) {
                self_1._parent.layout();
            });
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    NgMasonryGridDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[ng-masonry-grid-item], ng-masonry-grid-item'
                },] },
    ];
    /** @nocollapse */
    NgMasonryGridDirective.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: NgMasonryGridComponent, decorators: [{ type: core.Inject, args: [core.forwardRef(function () { return NgMasonryGridComponent; }),] },] },
        { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    ]; };
    return NgMasonryGridDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shailendra Kumar <shailu.snist@gmail.com>
 * @ignore
 */
var NgMasonryGridModule = (function () {
    function NgMasonryGridModule() {
    }
    NgMasonryGridModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    exports: [NgMasonryGridComponent, NgMasonryGridDirective],
                    declarations: [NgMasonryGridComponent, NgMasonryGridDirective],
                    providers: [NgMasonryGridService]
                },] },
    ];
    /** @nocollapse */
    NgMasonryGridModule.ctorParameters = function () { return []; };
    return NgMasonryGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Masonry Grid item
 */
var MasonryGridItem = (function () {
    function MasonryGridItem() {
    }
    return MasonryGridItem;
}());
/**
 * Masonry Options
 * @record
 */

/**
 * Masonry Object
 */
var Masonry = (function () {
    function Masonry(selector, options) {
    }
    
    return Masonry;
}());
/**
 * Scroll Animation options
 * @record
 */

/**
 * interface for an image currently loading or completed
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

exports.NgMasonryGridModule = NgMasonryGridModule;
exports.NgMasonryGridComponent = NgMasonryGridComponent;
exports.NgMasonryGridDirective = NgMasonryGridDirective;
exports.NgMasonryGridService = NgMasonryGridService;
exports.Masonry = Masonry;
exports.MasonryGridItem = MasonryGridItem;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "../../../../outlayer/item.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__("../../../../ev-emitter/ev-emitter.js"),
        __webpack_require__("../../../../get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "../../../../outlayer/outlayer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__("../../../../ev-emitter/ev-emitter.js"),
        __webpack_require__("../../../../get-size/get-size.js"),
        __webpack_require__("../../../../fizzy-ui-utils/utils.js"),
        __webpack_require__("../../../../outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ })

});
//# sourceMappingURL=common.chunk.js.map