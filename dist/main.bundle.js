webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/global-feed/global-match-feed/global-match-feed.module": [
		"../../../../../src/app/global-feed/global-match-feed/global-match-feed.module.ts",
		"common",
		"global-match-feed.module"
	],
	"app/global-feed/global-news-feed/global-news-feed.module": [
		"../../../../../src/app/global-feed/global-news-feed/global-news-feed.module.ts",
		"common",
		"global-news-feed.module"
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"common",
		"home.module"
	],
	"app/privacy-policy/privacy-policy.module": [
		"../../../../../src/app/privacy-policy/privacy-policy.module.ts",
		"common",
		"privacy-policy.module"
	],
	"app/sports-specific-feed/sports-specific-feed.module": [
		"../../../../../src/app/sports-specific-feed/sports-specific-feed.module.ts",
		"common",
		"sports-specific-feed.module"
	],
	"app/terms-and-condition/terms-and-condition.module": [
		"../../../../../src/app/terms-and-condition/terms-and-condition.module.ts",
		"common",
		"terms-and-condition.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*media=\"only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)\"*/\r\nbody {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n.nav {\r\n  background-color: #fff;\r\n  height: auto;\r\n  width: 100%;\r\n  position: fixed;\r\n  top: 0px;\r\n  z-index: 1000;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n  .nav li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .nav ul {\r\n    list-style: none;\r\n  }\r\n\r\n.brand {\r\n  width: auto;\r\n  padding: 0.6% 0.5% 0.5% 0.7%;\r\n}\r\n\r\n.brand-img {\r\n  width: 65px;\r\n  display: inline-block;\r\n}\r\n\r\n.brand-title {\r\n  font-family: 'Roboto',sans-serif;\r\n-  font-size: 1.7em;\r\n  font-weight: 400;\r\n  color: #024771;\r\n  display: inline-block;\r\n  position: relative;\r\n  top: -6px;\r\n  text-shadow:2px 2px 2px;\r\n}\r\n\r\n.button {\r\n  display: inline-block;\r\n  width: auto;\r\n  padding: 0px;\r\n  text-align: right;\r\n  position: absolute;\r\n  top: 20%;\r\n  margin-top: .6%;\r\n  right: 0.5%;\r\n}\r\n\r\n  .button > a {\r\n    border: 1px solid #fafafa;\r\n    padding: 8px 20px 8px 20px;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    color: #fafafa;\r\n    background-color:#024771;\r\n    border-radius: 5px;\r\n    font-weight: 300;\r\n  }\r\n\r\n/* \r\n  ##Device = Most of the Smartphones Mobiles (Portrait)\r\n  ##Screen = B/w 320px to 479px\r\n*/\r\n\r\n@media (max-width: 800px) {\r\n  ul {\r\n    padding: 0;\r\n  }\r\n\r\n  .brand {\r\n    width: auto;\r\n    text-align: left;\r\n    margin-left: 1%;\r\n    padding-top: 1.5%;\r\n    padding-bottom: 1.5%;\r\n  }\r\n  .brand-title{\r\n    text-shadow:2px 2px 2px;\r\n    margin-left:-10px;\r\n    font-size:20px;\r\n  }\r\n\r\n  .button {\r\n    width: auto;\r\n    height:10px;\r\n    position: absolute;\r\n    right: 2%;\r\n    top: 10%;\r\n  }\r\n  .brand-img {\r\n    width: 50px;\r\n  }\r\n\r\n  .button > a {\r\n    font-size: 0.8em;\r\n    padding: 2px 8px 2px 8px;\r\n    margin:auto;\r\n    margin-top:8%;\r\n    \r\n  }\r\n}\r\n\r\n/*===========body========================*/\r\n.app{\r\n    width: 100px;\r\n    height: 100px;\r\n    margin:auto;\r\n}\r\n.app-icon{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius:10px;\r\n    margin-top:100px;\r\n}\r\n.app-mantra{\r\n    width: 60%;\r\n    margin: 3% auto;\r\n    height: auto;\r\n    padding: 1%;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1.2em;\r\n    font-weight: 300;\r\n    color: #101010;\r\n    text-align: justify;\r\n    text-align-last: center;\r\n}\r\n.app-desc{\r\n    width:65%;\r\n    height:auto;\r\n    padding:1%;\r\n    text-align:justify;\r\n    text-align-last:center;\r\n    margin:8% auto;\r\n    background-color: none;\r\n    color: #024771;\r\n    font-size:1em;\r\n    font-family:'Times New Roman', Times;\r\n    height:450px;\r\n    line-height:0.2em;\r\n }\r\n.app-desc>p:first-child{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 2em;\r\n    line-height: 2em;\r\n    text-align: left;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding:0;\r\n}\r\n.app-desc>p:last-child{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.9em;\r\n    font-weight: 500;\r\n    line-height: 1.7em;\r\n}\r\n  /*testin*/\r\n\r\n.scroll-down {\r\n  opacity: 1;\r\n  transition: all .5s ease-in 3s;\r\n  margin-top:-3%;\r\n  \r\n  \r\n}\r\n\r\n.scroll-down {\r\n  position: relative;\r\n  cursor:pointer;\r\n  bottom: 30px;\r\n  left: 50%;\r\n  margin-left: -16px;\r\n  display: block;\r\n  width: 32px;\r\n  height: 32px;\r\n  border: 2px solid red;\r\n  background-size: 14px auto;\r\n  border-radius: 50%;\r\n  z-index: 2;\r\n  -webkit-animation: bounce 2s infinite 2s;\r\n  animation: bounce 2s infinite 2s;\r\n  transition: all .2s ease-in;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n  .scroll-down:before {\r\n    position: absolute;\r\n    top: calc(50% - 8px);\r\n    left: calc(50% - 6px);\r\n    -webkit-transform: rotate(-45deg);\r\n            transform: rotate(-45deg);\r\n    display: block;\r\n    width: 12px;\r\n    height: 12px;\r\n    content: \"\";\r\n    border: 2px solid red;\r\n    border-width: 0px 0 2px 2px;\r\n  }\r\n\r\n@-webkit-keyframes bounce {\r\n  0%, 100%, 20%, 50%, 80% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateY(-10px);\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  0%, 100%, 20%, 50%, 80% {\r\n    -webkit-transform: translateY(0);\r\n    transform: translateY(0);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: translateY(-10px);\r\n    transform: translateY(-10px);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translateY(-5px);\r\n    transform: translateY(-5px);\r\n  }\r\n}\r\n  /*testing*/\r\n.bit-desc {\r\n    height: 200px;\r\n    width:auto;\r\n    background-color: #2d57de;\r\n    margin-top:10%;\r\n  }\r\n.blogFeed{\r\n    z-index: 10;\r\n    margin: 0px;\r\n}\r\n.blog{\r\n    width: 90%;\r\n    max-height: 400px;\r\n    margin: 5% auto;\r\n    overflow: hidden;\r\n    white-space: nowrap !important;\r\n}\r\n.blog>div{\r\n    display: inline-block;\r\n    width: 50%;\r\n    height: 400px; \r\n}\r\n.blog>div>img{\r\n    height: 100%;\r\n    width: 100%;\r\n    padding-right: 2%;\r\n    \r\n}\r\n.blog .left{\r\n    position: absolute;\r\n    top:45%;\r\n    left: 6%;\r\n}\r\n.blog .right{\r\n    position: absolute;\r\n    top:45%;\r\n    right: 7%;\r\n}\r\n.feed{\r\n    z-index: 800;\r\n    margin: 0px;\r\n}\r\n.feedHeading{\r\n    font-family: 'Roboto',sans-serif;\r\n    font-size: 1.8em;\r\n    font-weight: 500;\r\n    color: #101010;\r\n    margin:3% 0% 3% 0%;\r\n    text-align: center\r\n}\r\n.socialFeed{\r\n    max-height: 500px;\r\n    margin: 5% auto;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    white-space: nowrap !important;\r\n  \r\n}\r\n.socialFeed>div{\r\n    display: inline-block;\r\n    width:50%;\r\n    height: 500px;\r\n    margin: 0px;\r\n}\r\n.socialFeed>div>img{\r\n    max-width: 100%;\r\n    height: 100%;\r\n    padding-right: 2%;\r\n}\r\n.socialFeed .left{\r\n    position: absolute;\r\n    top:45%;\r\n    left: 2%;\r\n}\r\n.socialFeed .right{\r\n    position: absolute;\r\n    top:45%;\r\n    right: 3%;\r\n}\r\n.sport-icon{\r\n    display: block;\r\n    margin: auto;\r\n    width: 200px;\r\n    height: 300px;\r\n}\r\nfooter{\r\n    background-color: #024771;\r\n}\r\n.col-md-3 h3 ,.col-md-3 h3>a{\r\n    line-height: .2em;\r\n    color: white;\r\n    font-family: 'Robot',sans-serif;\r\n    font-size: 1em;\r\n    display: inline;\r\n}\r\n.col-md-3>h4>u{\r\n  margin-right: -70%;\r\n  \r\n  color:red;\r\n}\r\n\r\n  .col-md-3 h4, .col-md-3 h4 > a {\r\n    line-height: 1.5em;\r\n    color: white;\r\n    font-family: 'Robot',sans-serif;\r\n    font-size: 1em;\r\n    display: inline-block;\r\n    padding:10px;\r\n  }\r\n.col-md-3 h4:first-child{\r\n    font-weight: 700;\r\n}\r\n\r\n\r\n\r\n@media (max-width:500px) {\r\n  .app>img{\r\n    margin-top:60px;\r\n  }\r\n  .app-desc {\r\n    width: 250px;\r\n    height:330px;\r\n    text-align: center;\r\n    margin-left: 15%;\r\n    margin-top: 31%;\r\n    padding-top: 2%;\r\n    line-height:0.7em;\r\n    font-weight:180;\r\n  }\r\n    .app-desc > p:first-child {\r\n      font-family: 'Roboto',sans-serif;\r\n      font-size: 1.6em;\r\n      line-height: 1em;\r\n      text-align: center;\r\n      margin-top:-8%;\r\n    }\r\n    .app-desc > p:last-child {\r\n      font-family: 'Roboto',sans-serif;\r\n      font-size: 1.5em;\r\n      font-weight: 270;\r\n      line-height: 1.3em;\r\n      text-align:center;\r\n    }\r\n\r\n  .col-md-3 h4{\r\n    line-height: 0.7em;\r\n    padding:7px;\r\n    color: #fafafa;\r\n    font-family: 'Robot',sans-serif;\r\n    font-size: .8em;\r\n    display:inline-block;\r\n  }\r\n  .col-md-3 h3>img {\r\n    border-radius:5px;\r\n    margin-top: 7%;\r\n    padding: 5px;\r\n  }\r\n   .col-md-3 h3 > a {\r\n    line-height: .7em;\r\n    color: white;\r\n    margin-left: -13%;\r\n    font-family: 'Robot',sans-serif;\r\n    font-size: 0.8em;\r\n  }\r\n    \r\n    .col-md-3 h4:first-child {\r\n      font-weight: 500;\r\n    }\r\n    .col-md-3>h4>u{\r\n      margin-right: -40%;\r\n      color:yellow;\r\n    }\r\n\r\n    .blog > div {\r\n      display: inline-block;\r\n      width: 100%;\r\n      height: 400px;\r\n    }\r\n  .socialFeed > div {\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 500px;\r\n    margin: 0px;\r\n    \r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js\"></script>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\r\n  </head>\r\n<body>\r\n  \r\n  <header>\r\n    <div class=\"nav\" #header>\r\n      <ul>\r\n        <li class=\"brand\">\r\n          <a routerLink=\"/\">\r\n            <img src=\"/assets/images/blue_logo.png\" class=\"brand-img img--responsine img-circle\">\r\n            <h4 class=\"brand-title\">Sports Social</h4>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"button\">\r\n          <a routerLink=\"/About\" class=\"About btn btn-responsive\">About</a>\r\n          <a routerLink=\"/App\" class=\"app1  btn btn-responsive\">App</a>\r\n          <a routerLink=\"/HelpCenter\" class=\"help  btn btn-responsive\">Help Center</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </header>\r\n\r\n  <div class=\"app\">\r\n    <img src=\"/assets/images/app_icon.png\" class=\"img-responsive app-icon\">\r\n  </div>\r\n\r\n  <h4 class=\"app-desc\">\r\n    <p><u>{{descTitleDisplay}}</u></p>\r\n    <p>{{descDisplay}}</p>\r\n  </h4>\r\n\r\n  <div id=\"sec\">\r\n    <a onclick=\"document.getElementById('bitdes').scrollIntoView();\" class=\"scroll-down\"></a>\r\n  </div>\r\n   \r\n  <div class=\"bit-desc\" id=\"bitdes\">  </div>\r\n\r\n  <h4 class=\"app-mantra\">\r\n    Our Mission is to give everyone opportunity for\r\n    play and self-expression and Show them to World.\r\n  </h4>\r\n  <img src=\"/assets/images/sport-icon.jpg\" class=\"sport-icon\">\r\n\r\n  <h4 class=\"app-mantra\">\r\n    <b>\"A world where everyone is welcome to play and enjoy their favourite sports without any barrirers\"</b>\r\n  </h4>\r\n  <h4 class=\"app-mantra\">\r\n    We believe that everyone deserve an opportunity for\r\n    self-expression and that the world is better place when we play, express ourselves\r\n    and build communities through Sports.\r\n  </h4>\r\n\r\n  <div class=\"blogFeed\" id=\"blg-feed\">\r\n    <p class=\"feedHeading\">The Latest from our Blog</p>\r\n    <div style=\"position:relative\">\r\n      <div class=\"blog\" #blog>\r\n        <div *ngFor=\"let img of image\" #blogImg>\r\n\r\n          <img src=\"{{img}}\">\r\n        </div>\r\n        <img src=\"/assets/images/left.png\" class=\"left\" (click)=\"leftScroll()\">\r\n        <img src=\"/assets/images/right.png\" class=\"right\" (click)=\"rightScroll()\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"feed\">\r\n    <p class=\"feedHeading\">The Social Feed</p>\r\n    <div style=\"position:relative\">\r\n      <div class=\"socialFeed\" #socialFeed>\r\n        <div *ngFor=\"let img of image\">\r\n          <img src=\"{{img}}\" #socialFeedImg>                                                        \r\n        </div>\r\n        <img src=\"/assets/images/left.png\" class=\"left\" (click)=\"leftScroll()\">\r\n        <img src=\"/assets/images/right.png\" class=\"right\" (click)=\"rightScroll()\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <footer>\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <h4>About</h4>\r\n          <h4>Company</h4>\r\n          <h4>Values</h4>\r\n          <h4>Blog</h4>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <h4>Help Center</h4>\r\n          <h4>Getting Started</h4>\r\n          <h4>My Account</h4>\r\n          <h4>Using My Locality</h4>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <h4>What's Going Around</h4>\r\n          <h4>Open Arena</h4>\r\n          <h4>Around The World</h4>\r\n        </div>\r\n\r\n        <div class=\"col-md-3 col-sm-6\">\r\n          <h4><u>For Tips and Insight</u></h4>\r\n\r\n          <h3>\r\n            <img href=\"#\" src=\"/assets/images/twitter1.png\">\r\n            <a href=\"#\" style=\"margin:1.2%\">Follow us on Twitter</a>\r\n          </h3>\r\n          <h3>\r\n            <img src=\"/assets/images/facebook.jpg\">\r\n            <a href=\"#\" style=\"margin:1.2%\">Like us on Facebook</a>\r\n          </h3>\r\n          <h3>\r\n            <img src=\"/assets/images/youtube.jpg\">\r\n            <a href=\"#\" style=\"margin:1.2%\">Suscribe our Youtube Channel</a>\r\n          </h3>\r\n          <h3>\r\n            <img src=\"/assets/images/insta.png\">\r\n            <a href=\"#\" style=\"margin:1.2%\">Follow us on Instagram </a>\r\n          </h3>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_send_service__ = __webpack_require__("../../../../../src/app/shared/services/send.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(margin, renderer) {
        var _this = this;
        this.margin = margin;
        this.renderer = renderer;
        this.descTitle = "Sports social is";
        this.descTitleDisplay = "";
        this.desc = "Sports digital media and Networking Service that helps you to see\
   what's going around in your locality and around the globe right now & let's\
    you chase your passion to play your favourite sport.";
        this.descDisplay = "";
        //@ViewChild('desc') desc:ElementRef;
        this.image = ["/assets/images/car1.jpg",
            "/assets/images/car2.jpg",
            "/assets/images/car3.jpeg",
            "/assets/images/car4.jpg",
            "/assets/images/car5.jpg",
            "/assets/images/car6.jpg"];
        this.margin.height.subscribe(function (top) { return _this.marginTop = top; });
    }
    AboutComponent.prototype.ngOnInit = function () {
        // console.log(this.desc.nativeElement.textContent);
        this.typeWriterTitle(this.descTitle, 0);
        setTimeout(function () {
            var i = 0;
            i++;
            if (i <= 5) { }
            console.log(i);
        }, 1000);
        this.typeWriter(this.desc, 0);
    };
    AboutComponent.prototype.onResize = function (event) {
        var _this = this;
        this.margin.height.subscribe(function (top) {
            _this.marginTop = top;
        });
    };
    AboutComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
        this.socialFeed.nativeElement.scrollLeft -= this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
        this.socialFeed.nativeElement.scrollLeft += this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.typeWriter = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descDisplay += (this.desc[n]);
            n++;
            setTimeout(function () {
                _this.typeWriter(_this.desc, n);
            }, 30);
        }
    };
    AboutComponent.prototype.typeWriterTitle = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descTitleDisplay += (text[n]);
            n++;
            setTimeout(function () {
                _this.typeWriterTitle(text, n);
            }, 40);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blog'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutComponent.prototype, "blog", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('blogImg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutComponent.prototype, "blogImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('socialFeed'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutComponent.prototype, "socialFeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('socialFeedImg'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutComponent.prototype, "socialFeedImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onResize", null);
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_send_service__["a" /* SendService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    /* padding: 0px;\r\n    margin: 0px; */\r\n    font-family: 'Roboto',sans-serif;\r\n   /* width: 100%;\r\n   height: 100%; */\r\n}\r\n.qabody{\r\n    margin-top: 6%;\r\n    border: 1px solid black;\r\n    overflow: hidden;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n}\r\n\r\n.QA{\r\n    border-top: 1px solid #bbbbbb;\r\n    /* white-space: nowrap; */\r\n}\r\n\r\n.side-nav{\r\n   padding: 0px;\r\n   width: 250px;\r\n   list-style-type: none;\r\n   display: inline-block;\r\n}\r\n.side-nav li{\r\n    border: 1px solid #bbbbbb;\r\n    border-top:none;\r\n    padding: 5% 5% 5% 1.5%;\r\n}\r\n.side-nav li >button>img{\r\n    margin-left: 3%;\r\n    width: 30%;\r\n    height: 30%;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n}\r\n.side-nav li >button{\r\n    margin-left: 2%;\r\n    width: 200px;\r\n    height: auto;\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: 200;\r\n    background:transparent;\r\n    text-align: left;\r\n    border: none;\r\n}\r\n.side-nav li>button:hover{\r\n    font-weight: 700;\r\n    text-decoration:none;\r\n}\r\n/*Answers*/\r\n\r\n.answers{\r\n    margin-top: 5%;\r\n    max-width: 74%;\r\n    height: auto;\r\n    margin-left:5%; \r\n    vertical-align: top;\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n    text-align: left;\r\n}\r\n\r\n@media  (max-width:500px)\r\n{\r\n  .qabody {\r\n    margin-top: 6%;\r\n    width:100%;\r\n    border: 1px solid black;\r\n    overflow: hidden;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n  }\r\n\r\n  .QA {\r\n    border-top: 1px solid #bbbbbb;\r\n    /* white-space: nowrap; */\r\n  }\r\n\r\n  .side-nav {\r\n    padding: 0px;\r\n    width: 95px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n  }\r\n\r\n    .side-nav li {\r\n      border: 1px solid #bbbbbb;\r\n      border-top: none;\r\n      padding: 2% 2% 2% .5%;\r\n    }\r\n\r\n      .side-nav li > button > img {\r\n        margin-left: 3%;\r\n        width: 18%;\r\n        height: 18%;\r\n        text-align: center;\r\n        border-radius: 3px;\r\n      }\r\n\r\n      .side-nav li > button {\r\n        width: 85px;\r\n        height: auto;\r\n        color: black;\r\n        font-size: .8em;\r\n        font-weight: 100;\r\n        background: transparent;\r\n        text-align: left;\r\n        border: none;\r\n      }\r\n\r\n        .side-nav li > button:hover {\r\n          font-weight: bold;\r\n          text-decoration:none;\r\n        }\r\n\r\n  .answers {\r\n    margin-top: 5%;\r\n    height: auto;\r\n    margin-left: 1%;\r\n    vertical-align: top;\r\n    font-size: .9em;\r\n    font-weight: 300;\r\n    text-align: left;\r\n  }\r\n  .answers>p{\r\n    width:100%;\r\n    height:auto;\r\n    margin-left:2%;\r\n   \r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.html":
/***/ (function(module, exports) {

module.exports = "  <meta name=\"description\" content=\"How use sportsocial\">\r\n  <meta name=\"description\" content=\"Sport social\">\r\n  <meta name=\"description\" content=\"How to find locality in sportsocial?\">\r\n\r\n  <SportSocial-help-center-header></SportSocial-help-center-header>\r\n  <div class=\"qabody\">\r\n    <div class=\"QA\">\r\n      <ul class=\"side-nav\">\r\n        <li *ngFor=\"let qa of quesAns; let i = index\">\r\n          <button (click)=\"getAns(qa.id)\"><img src=\"{{qa.icon}}\">&nbsp;&nbsp;<p>{{ qa.ques }}</p></button>\r\n          </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"answers\">\r\n      <p>{{Ans}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <SportSocial-help-center-footer></SportSocial-help-center-footer>"

/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQueAnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddQueAnsComponent = (function () {
    function AddQueAnsComponent(router, route, getService, meta) {
        this.router = router;
        this.route = route;
        this.getService = getService;
        this.meta = meta;
        this.quesAns = [];
        this.Ans = "";
        this.meta.addTag({ name: 'description', content: 'How use sportsocial' });
        this.meta.addTag({ name: 'description', content: 'How to find locality in sportsocial?' });
        this.meta.addTag({ name: 'description', content: 'Sport social' });
    }
    AddQueAnsComponent.prototype.ngOnInit = function () {
        var topicId = +this.route.snapshot.paramMap.get("topicId");
        var subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
        console.log(topicId, " ", subtopicId);
        this.getQuesAns(topicId, subtopicId);
    };
    AddQueAnsComponent.prototype.getQuesAns = function (topicId, subtopicId) {
        var _this = this;
        this.getService.getQA(topicId, subtopicId).subscribe(function (res) {
            console.log(res);
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.quesAns.push({
                    id: body[i].id,
                    topic_id: body[i].topic_id,
                    subtopic_id: body[i].subtopic_id,
                    ques: body[i].ques,
                    ans: body[i].ans,
                    icon: body[i].icon
                });
            }
            console.log(_this.quesAns);
            _this.Ans = _this.quesAns[0].ans;
        });
    };
    AddQueAnsComponent.prototype.getAns = function (id) {
        for (var qu in this.quesAns) {
            console.log(qu);
            if (this.quesAns[qu].id == id)
                this.Ans = this.quesAns[qu].ans;
        }
    };
    AddQueAnsComponent.prototype.getImg = function (img) {
        for (var image in this.quesAns) {
            console.log(image);
            if (this.quesAns[img].icon == img) {
                this.img = this.quesAns[img].icon;
            }
        }
    };
    AddQueAnsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-que-ans',
            template: __webpack_require__("../../../../../src/app/add-que-ans/add-que-ans.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-que-ans/add-que-ans.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_get_service__["a" /* GetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Meta */]])
    ], AddQueAnsComponent);
    return AddQueAnsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-topic/add-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.content{\r\n    border-top: 1px solid #bbbbbb;\r\n    white-space: nowrap;\r\n}\r\n\r\n.content>div{\r\n    display: inline-block;\r\n    white-space: normal;\r\n    vertical-align: top;\r\n    margin-left: 0px;\r\n}\r\n.side-nav{\r\n   padding: 0px;\r\n   width: 20%;\r\n   list-style-type: none;\r\n   display: inline-block;\r\n}\r\n.side-nav li{\r\n    border: 1px solid #bbbbbb;\r\n    border-top:none;\r\n    padding: 5% 1.5% 5% 1.5%;\r\n}\r\n.side-nav li >button>img{\r\n    margin-left: 8%;\r\n    width: 13%;\r\n    height: 15%;\r\n    border-radius: 5px;\r\n}\r\n.side-nav li >button{\r\n    margin-left: 2%;\r\n    width: 95%;\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    background:transparent;\r\n    border: none;\r\n    text-align: left;\r\n}\r\n.side-nav li>button:hover{\r\n    font-weight: 700;\r\n    text-decoration:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-topic/add-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>add-topic works</p>\r\n<div class=\"content\">\r\n  <ul class=\"side-nav\">\r\n    <li *ngFor=\"let data of topics\"> \r\n        <button (click)=\"SubtopicsIconChange(data.id)\"><img src=\"{{data.icon}}\">&nbsp;&nbsp;&nbsp;{{data.name}}\r\n        </button>\r\n    </li>\r\n</ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-topic/add-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddTopicComponent = (function () {
    function AddTopicComponent(getService, router) {
        this.getService = getService;
        this.router = router;
        this.topics = [];
    }
    AddTopicComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.topics);
        });
    };
    AddTopicComponent.prototype.send = function () {
        this.router.navigate(["addsubtopic"]);
    };
    AddTopicComponent.prototype.ngOnInit = function () {
        this.AllTopics();
    };
    AddTopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-topic',
            template: __webpack_require__("../../../../../src/app/add-topic/add-topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-topic/add-topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__["a" /* GetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddTopicComponent);
    return AddTopicComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<router-outlet name=\"Match\"></router-outlet>\r\n<router-outlet name=\"News\"></router-outlet>\r\n<router-outlet name=\"AppDownload\"></router-outlet>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            preserveWhitespaces: false
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to_el__ = __webpack_require__("../../../../ng2-scroll-to-el/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_property_service__ = __webpack_require__("../../../../../src/app/shared/services/property.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_app_router__ = __webpack_require__("../../../../../src/app/routing/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_location_service__ = __webpack_require__("../../../../../src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_match_data_service__ = __webpack_require__("../../../../../src/app/shared/services/match-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_news_service__ = __webpack_require__("../../../../../src/app/shared/services/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pop_up_pop_up_component__ = __webpack_require__("../../../../../src/app/pop-up/pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_pop_up_service__ = __webpack_require__("../../../../../src/app/shared/services/pop-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__open_cards_open_match_card_open_match_card_module__ = __webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__open_cards_open_news_card_open_news_card_module__ = __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__help_center_help_center_component__ = __webpack_require__("../../../../../src/app/help-center/help-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__help_center_help_center_content_help_center_content_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__help_center_help_center_footer_help_center_footer_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-footer/help-center-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__help_center_help_center_header_help_center_header_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-header/help-center-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_send_service__ = __webpack_require__("../../../../../src/app/shared/services/send.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__add_topic_add_topic_component__ = __webpack_require__("../../../../../src/app/add-topic/add-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sub_topic_sub_topic_component__ = __webpack_require__("../../../../../src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__add_que_ans_add_que_ans_component__ = __webpack_require__("../../../../../src/app/add-que-ans/add-que-ans.component.ts");
/* angular modules */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* shared services */























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pop_up_pop_up_component__["a" /* PopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__help_center_help_center_component__["a" /* HelpCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__help_center_help_center_content_help_center_content_component__["a" /* HelpCenterContentComponent */],
                __WEBPACK_IMPORTED_MODULE_19__help_center_help_center_footer_help_center_footer_component__["a" /* HelpCenterFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__help_center_help_center_header_help_center_header_component__["a" /* HelpCenterHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__add_topic_add_topic_component__["a" /* AddTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sub_topic_sub_topic_component__["a" /* SubTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_26__add_que_ans_add_que_ans_component__["a" /* AddQueAnsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_app_router__["a" /* AppRoute */],
                __WEBPACK_IMPORTED_MODULE_23__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__open_cards_open_match_card_open_match_card_module__["a" /* OpenMatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__open_cards_open_news_card_open_news_card_module__["a" /* OpenNewsCardModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_property_service__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_get_service__["a" /* GetService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_send_service__["a" /* SendService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_time_service__["a" /* TimeService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_match_data_service__["a" /* MatchDataService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_pop_up_service__["a" /* PopUpService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery {\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.left {\r\n    position: absolute;\r\n    left: 5px;\r\n    top: 45%;\r\n    cursor: pointer;\r\n}\r\n.right {\r\n    position: absolute;\r\n    right: 5px;\r\n    top: 45%;\r\n    cursor: pointer;\r\n}\r\n.loader {\r\n    position: absolute;\r\n    top:60%;\r\n    width:8%;\r\n    left:46% ;\r\n}\r\n.gallery-item{\r\n    width: 100%;\r\n}\r\n\r\n.image-action{\r\n    width: 100%;\r\n    position: absolute;\r\n    left:0;\r\n    right: 0;\r\n    bottom: 0px;\r\n    background-color: #ffa600;\r\n    opacity: 0.7\r\n}\r\n.image-action > div {\r\n    width: 10%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin: 2%;\r\n}\r\n.image-action img {\r\n    margin-right: 2%;\r\n    width: 20px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\nspan {\r\n    color: #888888;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.text {\r\n    width: 100%;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\">\r\n  <img *ngIf=\"hasprevious()\" src=\"/assets/images/left.png\" class=\"left\" (click)=\"left()\">\r\n  <img *ngIf=\"loading\" src=\"/assets/images/sports-social-loading.gif\" alt=\"\" class=\"loader\">\r\n  <img *ngIf=\"hasnext()\" src=\"/assets/images/right.png\" class=\"right\" (click)=\"right()\">\r\n  <div class=\"image-action\">\r\n    <div class=\"like\">\r\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\">\r\n      <span>{{likeCount}}</span>\r\n    </div>\r\n    <div class=\"comment\">\r\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\">\r\n      <span>{{commentCount}}</span>\r\n    </div>\r\n  </div>\r\n  <img src=\"{{image}}\" class=\"gallery-item\">\r\n</div>\r\n<p *ngIf = \"text !== undefined\" class=\"text\">{{text}}</p>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
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

var GalleryComponent = (function () {
    function GalleryComponent() {
        this.images = [];
        this.loading = false;
        this.firstImageLoaded = false;
        this.i = 0;
    }
    GalleryComponent.prototype.addimage = function (path) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(path);
            };
            img.onerror = function () {
                resolve('/assets/images/default-image.png');
            };
            img.src = path;
        });
    };
    GalleryComponent.prototype.left = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i - 1;
        this.addimage(this.images[this.i].image).then(function (path) {
            _this.loading = false;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    GalleryComponent.prototype.right = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i + 1;
        if (this.i < this.images.length) {
            this.addimage(this.images[this.i].image).then(function (path) {
                _this.loading = false;
                _this.image = path;
                _this.likeCount = _this.images[_this.i].likeCount;
                _this.commentCount = _this.images[_this.i].commentCount;
                _this.text = _this.images[_this.i].text;
            });
        }
        else {
            this.loading = false;
        }
    };
    GalleryComponent.prototype.hasnext = function () {
        if (this.images.length > 1 && this.i < this.images.length) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.hasprevious = function () {
        if (this.i > 0) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.images.reverse();
        this.loading = true;
        console.log(this.images);
        this.addimage(this.images[0].image).then(function (path) {
            _this.loading = false;
            _this.firstImageLoaded = true;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-gallery',
            template: __webpack_require__("../../../../../src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gallery/gallery.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/gallery/gallery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_component__ = __webpack_require__("../../../../../src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryModule = (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_component__["a" /* GalleryComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__gallery_component__["a" /* GalleryComponent */]
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    font-family: 'Roboto',sans-serif;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\np{\r\n    font-size: 1.3em;\r\n    font-weight: 300;\r\n    width: auto;\r\n    margin:3% auto;\r\n    color:black;\r\n    text-align: center;\r\n}\r\n\r\n.content{\r\n    border-top: 1px solid purple;\r\n}\r\n.content>div{\r\n    display: inline-block;\r\n    white-space: normal;\r\n    vertical-align: top;\r\n    margin-left: 0px;\r\n}\r\n.side-nav{\r\n   padding: 0px;\r\n   width: 260px;\r\n   list-style-type: none;\r\n   display: inline-block;\r\n}\r\n.side-nav li{\r\n    border: 1px solid #bbbbbb;\r\n    border-top:none;\r\n    padding: 5% 1.5% 5% 1.5%;\r\n}\r\n.side-nav li >button>img{\r\n    margin-left: 8%;\r\n    width: 13%;\r\n    height: 15%;\r\n    border-radius: 5px;\r\n}\r\n.side-nav li >button{\r\n    margin-left: 2%;\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    background:transparent;\r\n    border: none;\r\n    text-align: left;\r\n    position: relative;\r\n}\r\n .side-nav li >button>p{\r\n    margin-left: 2%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n} \r\n.side-nav li>button:hover{\r\n    font-weight: 700;\r\n    text-decoration:none;\r\n}\r\n/*====Subtoipcs=======*/\r\n.subtopicdata{\r\n    display: inline-block;\r\n    width:120px;\r\n    height: 120px;\r\n    padding:2%;\r\n    margin: 4% 0% 0% 10%;\r\n    vertical-align: top;\r\n    border-radius: 5px;\r\n\r\n}\r\n.subtopicdata>a>p{\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    width: 140px;\r\n    text-align: center;\r\n}\r\n\r\n.subtopicdata a>p:hover{\r\n    font-weight: bolder;\r\n    text-decoration: none;\r\n}\r\n\r\n/*subtopics end*/\r\n\r\n.mobileNav{\r\n    display: block;\r\n    width: 100%;\r\n    height: 35px;\r\n}\r\n.menuImgHolder{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #fafafa;\r\n}\r\n.menuImg{\r\n  margin-left: 2%;\r\n  width: 30px;\r\n  height: 100%;\r\n}\r\n.dropdown-menu{\r\n    width: 70%;\r\n    height: auto;\r\n    position: fixed;\r\n    top:10%;\r\n    left: 18%;\r\n    white-space: normal;\r\n    padding-left: 4%;\r\n}\r\n.dropdown-menu button{\r\n    width:auto;\r\n    margin-right: 1%;\r\n}\r\n.mobileNavIcon{\r\n    display: inline-block;\r\n    max-width: 8%;\r\n    max-height: 12%;\r\n    vertical-align: top;\r\n    margin: 3% 8% 3% 8%;\r\n}   \r\n.mobileNavIcon img{\r\n    width: 100%;\r\n    height: 75%;\r\n}\r\n.mobileNavIcon p{\r\n    text-align: center;\r\n    width:auto;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n    margin-top: 15px;\r\n    color: #101010;\r\n}\r\n.menuImgHolder>img:hover{\r\n  cursor:pointer;\r\n}\r\n\r\n/**drop down menu*/\r\n@media(max-width:500px){\r\n  .side-nav {\r\n    padding: 0px;\r\n    width: 120px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n  }\r\n\r\n    .side-nav li {\r\n      border: 1px solid #bbbbbb;\r\n      border-top: none;\r\n      padding: 2% .5% 2% .5%;\r\n    }\r\n\r\n      .side-nav li > button > img {\r\n        margin-left: 4%;\r\n        width: 7%;\r\n        height: 7%;\r\n        border-radius: 5px;\r\n      }\r\n\r\n      .side-nav li > button {\r\n        margin-left: 1%;\r\n        color: black;\r\n        font-size: .8em;\r\n        font-weight: 200;\r\n        background: transparent;\r\n        border: none;\r\n        text-align: left;\r\n        position: relative;\r\n      }\r\n\r\n        .side-nav li > button > p {\r\n          margin-left: 1%;\r\n          text-align: center;\r\n          vertical-align: top;\r\n          font-size: .8em;\r\n          font-weight: 200;\r\n        } \r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Get Answer for the most common quetsion and learn to use \"Sports Social\" like Champ.</p>\r\n\r\n<div class=\"content\">\r\n  <ul class=\"side-nav\" *ngIf=\"windowNavbar\">\r\n    <li *ngFor=\"let data of topics\">\r\n      <button (click)=\"SubtopicsIconChange(data.id)\">\r\n        <img src=\"{{data.icon}}\">&nbsp;&nbsp;{{data.name}}\r\n      </button>\r\n    </li>\r\n  </ul>\r\n  <!--\r\n  <div *ngIf=\"!windowNavbar\" class=\"mobileNav dropdown\">\r\n    <div class=\"menuImgHolder\" data-toggle=\"dropdown\">\r\n      <img src=\"/assets/images/menu.png\" role=\"button\" class=\"menuImg\" (click)=\"openDropdown()\">\r\n    </div>\r\n    <ul class=\"side-nav\" *ngIf=\"windowNavbar\">\r\n      <li *ngFor=\"let data of topics\">\r\n        <button (click)=\"SubtopicsIconChange(data.id)\">\r\n         {{data.name}}\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>-->\r\n\r\n  <div #problems>\r\n    <div class=\"subtopicdata\" *ngFor=\"let data of subtopics\" #problem>\r\n      <a routerLink=\"{{data.topic_id}}/{{data.name}}/HelpCenter/{{data.id}}\">\r\n        <img src=\"{{data.icon}}\" class=\"img-responsive\">\r\n        <p class=\"subtid\">{{data.name}}</p>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_property_service__ = __webpack_require__("../../../../../src/app/shared/services/property.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpCenterContentComponent = (function () {
    function HelpCenterContentComponent(renderer, getService, router, route, height) {
        this.renderer = renderer;
        this.getService = getService;
        this.router = router;
        this.route = route;
        this.height = height;
        this.windowNavbar = true;
        this.topics = [];
        this.subtopics = [];
        this.isDropdownIconclicked = false;
    }
    HelpCenterContentComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.topics);
            _this.topicId = _this.topics[0].id;
            _this.getSubTopics(_this.topicId);
        });
    };
    HelpCenterContentComponent.prototype.SubtopicsIconChange = function (id) {
        this.subtopics = [];
        this.getSubTopics(id);
    };
    ;
    HelpCenterContentComponent.prototype.getSubTopics = function (id) {
        var _this = this;
        this.getService.getSubTopic(id).subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.subtopics.push({
                    topic_id: body[i].topic_id,
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.subtopics);
        });
    };
    HelpCenterContentComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HelpCenterContentComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HelpCenterContentComponent.prototype.ngOnInit = function () {
        this.AllTopics();
        if (window.innerWidth < 900) {
            this.windowNavbar = false;
            this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block');
            this.renderer.setStyle(this.problems.nativeElement, 'width', '100%');
        }
        else {
            this.windowNavbar = true;
            this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block');
            this.renderer.setStyle(this.problems.nativeElement, 'width', '80%');
        }
        if (window.innerWidth < 500) {
            // this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
        }
    };
    HelpCenterContentComponent.prototype.onScreenResize = function () {
        if (window.innerWidth < 800) {
            this.windowNavbar = false;
            this.renderer.setStyle(this.problems.nativeElement, 'display', 'block');
            this.renderer.setStyle(this.problems.nativeElement, 'width', '100%');
        }
        else {
            this.windowNavbar = true;
            this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block');
            this.renderer.setStyle(this.problems.nativeElement, 'width', '79%');
        }
        if (window.innerWidth < 500) {
            //this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
            this.windowNavbar = false;
            this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block');
            this.renderer.setStyle(this.problems.nativeElement, 'width', '50%');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('problems'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HelpCenterContentComponent.prototype, "problems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('problem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HelpCenterContentComponent.prototype, "problem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HelpCenterContentComponent.prototype, "onScreenResize", null);
    HelpCenterContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-help-center-content',
            template: __webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__["a" /* GetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_property_service__["a" /* PropertyService */]])
    ], HelpCenterContentComponent);
    return HelpCenterContentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help-center/help-center-footer/help-center-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    width: 100%;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n\r\n.jumbotron{\r\n    margin-top: 2%;\r\n    background-color: #4372a0;\r\n}\r\n.jumbotron p{\r\n    color: #fafafa;\r\n    font-size: 2em;\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    padding: 2% 0% 1% 0%;\r\n}\r\n.jumbotron a{\r\n    display: block;\r\n    width: 20%;\r\n    height: 20%;\r\n    margin:  auto;\r\n}\r\n.jumbotron a>img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nfooter{\r\n    width: 100%;\r\n}\r\nfooter ul{\r\n    display: inline-block;\r\n    width:auto;\r\n    list-style-type: none;\r\n    padding: 1% 2.6% 1% 2%;\r\n}\r\nfooter li p{\r\n    display: inline-block;\r\n    width: auto;\r\n    text-align: center;\r\n    color: #101010;\r\n    white-space: nowrap;\r\n}\r\nfooter li img{\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-footer/help-center-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\"> \r\n    <p>New to Sports Social?</p>  \r\n    <a href='https://play.google.com/store/apps/details?id=in.sportsocial.sportsocial&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>\r\n        <img alt='Get it on Google Play' src='/assets/images/google-play-badge.png'/>\r\n    </a>\r\n</div>\r\n<footer>\r\n    <ul *ngFor=\"let data of footer\">\r\n        <li>\r\n            <a routerLink=\"{{data.Url}}\">\r\n                <img *ngIf=\"data.image\" src=\"{{data.image}}\" alt=\"\">\r\n                <p *ngIf=\"data.name\">{{data.name}}</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-footer/help-center-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterFooterComponent; });
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

var HelpCenterFooterComponent = (function () {
    function HelpCenterFooterComponent() {
        this.footer = [
            { name: "About", Url: "/About" },
            { name: "Blog", Url: "#" },
            { name: "App", Url: "#" },
            { name: "Terms and Condition", Url: "#" },
            { name: "Privacy Policy", Url: "#" },
            { name: "Open Arena", Url: "#" },
            { name: "Around The World", Url: "#" },
            { Url: "#", image: "/assets/images/insta.png" },
            { Url: "#", image: "/assets/images/twitter.png" },
            { Url: "#", image: "/assets/images/youtube.jpg" },
            { Url: "#", image: "/assets/images/facebook.jpg" },
        ];
    }
    HelpCenterFooterComponent.prototype.ngOnInit = function () {
    };
    HelpCenterFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-help-center-footer',
            template: __webpack_require__("../../../../../src/app/help-center/help-center-footer/help-center-footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-center/help-center-footer/help-center-footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpCenterFooterComponent);
    return HelpCenterFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help-center/help-center-header/help-center-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n.header{\r\n    background-image: url(\"/assets/images/header-img.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 350px;\r\n}\r\n.brand-title{\r\n    color: #ffffff;\r\n    text-align: left;\r\n    display: inline-block;\r\n    width: 60%;\r\n    padding-left: 5px;\r\n}\r\n.brand-title>span:first-child{\r\n    color:#ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.brand-title>span:last-child{\r\n  color:#ffffff;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n}\r\n.city{\r\n    font-size: 1.2em;\r\n    color: #fafafa;\r\n    display: inline-block;\r\n    width: 49%;\r\n    text-align: right;\r\n    vertical-align: middle !important;\r\n}\r\n.header>div:nth-child(2)>p:first-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.header>div:nth-child(2)>p:last-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 1.5em;\r\n}\r\n.brand-img-holder{\r\n    max-width: 150px;\r\n    max-height: 170px;\r\n    margin: 5px auto;\r\n}\r\n.brand-img{\r\n  margin-top:3%;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n.quickAnswers{\r\n    width:70%;\r\n    margin: 2% auto;\r\n    white-space: nowrap;\r\n    color: #ffffff;\r\n}\r\n.quickAnswers>p:first-child{\r\n    display: inline-block;\r\n}\r\n.quickAnswers>p:last-child{\r\n    display: inline-block;\r\n    width: 80%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    white-space: normal;\r\n}\r\n.quickAnswers a{\r\n    display: inline-block;\r\n    margin: 0% 0% 1% 1%;\r\n    color: #fafafa;\r\n    padding: 0.1% 1.2% 0.1% 1.2%;\r\n    border: 1px solid #fafafa;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-header/help-center-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div>\r\n        <p class=\"brand-title\">\r\n        <span routerLink=\"/\" style=\"cursor:pointer;\"><u>Sports Social Help</u></span>\r\n        <!-- <span>Help</span>-->\r\n    </div>\r\n    <div>\r\n        <p class=\"heading\">Welcome to Sports social Help Center</p>\r\n        <div class=\"brand-img-holder\">\r\n            <img src=\"/assets/images/logo white.png\" class=\"brand-img\">\r\n        </div>\r\n        <p class=\"trouble\">Having Trouble? We are here to help</p>\r\n    </div>\r\n    <div class=\"quickAnswers\">\r\n        <!---<p>Quick Answers: </p>\r\n        <p>\r\n          <a *ngFor=\"let data of quickAnswers\" href=\"{{data.url}}\">{{data.ques}}</a>\r\n        </p>-->\r\n    </div> \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-header/help-center-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterHeaderComponent; });
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

var HelpCenterHeaderComponent = (function () {
    function HelpCenterHeaderComponent() {
        this.quickAnswers = [
            { ques: "How to use Sports Social in your locality?", url: "#" },
            { ques: "What is Open Arena?", url: "#" },
            { ques: "How to inform playmates about my match?", url: "#" },
            { ques: "How to connect with people having similar level of expertise?", url: "#" },
            { ques: "How to postpone my match?", url: "#" },
        ];
    }
    HelpCenterHeaderComponent.prototype.ngOnInit = function () {
    };
    HelpCenterHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-help-center-header',
            template: __webpack_require__("../../../../../src/app/help-center/help-center-header/help-center-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-center/help-center-header/help-center-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpCenterHeaderComponent);
    return HelpCenterHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/help-center/help-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center.component.html":
/***/ (function(module, exports) {

module.exports = "<SportSocial-help-center-header responsiveFont></SportSocial-help-center-header>\r\n<SportSocial-help-center-content responsiveFont></SportSocial-help-center-content>\r\n<SportSocial-help-center-footer responsiveFont></SportSocial-help-center-footer>"

/***/ }),

/***/ "../../../../../src/app/help-center/help-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterComponent; });
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

var HelpCenterComponent = (function () {
    function HelpCenterComponent() {
        this.togglableNav = false;
    }
    HelpCenterComponent_1 = HelpCenterComponent;
    HelpCenterComponent.prototype.ngOnInit = function () {
        console.log(this.helpCenter);
    };
    HelpCenterComponent.prototype.onScreenResize = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(HelpCenterComponent_1),
        __metadata("design:type", Object)
    ], HelpCenterComponent.prototype, "helpCenter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HelpCenterComponent.prototype, "onScreenResize", null);
    HelpCenterComponent = HelpCenterComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help-center',
            template: __webpack_require__("../../../../../src/app/help-center/help-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-center/help-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpCenterComponent);
    return HelpCenterComponent;
    var HelpCenterComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.time-remaining {\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 7px;\r\n    color: #024771;\r\n}\r\n.started-by{\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    text-align: center;\r\n}\r\n.started-by > p{\r\n   margin-bottom: 5px;\r\n   font-weight: 300;\r\n}\r\n.started-by > img {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n}\r\n.heading {\r\n    margin-top: 20px;\r\n    font-size: 1.2em;\r\n    font-weight: 600;\r\n}\r\n.heading, .match-sum {\r\n    text-align: center;\r\n}\r\n\r\n.match-text {\r\n    width: 100%;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 55px;\r\n}\r\n\r\n.match-date {\r\n    position: absolute;\r\n    width: 47%;\r\n    top: 5px;\r\n    left: 1%;\r\n}\r\n.match-date>img {\r\n    width:20px;\r\n}\r\n.match-date> span{\r\n    font-size: 0.9em;\r\n    text-align: left;\r\n}\r\n\r\n.match-date > img, .match-date > span {\r\n    vertical-align:middle;\r\n    display: inline-block;\r\n}\r\n\r\n.venue{\r\n    position: absolute;\r\n    width: 50%;\r\n    top: 5px;\r\n    right: 1%;\r\n    text-align: right;\r\n    white-space: nowrap;\r\n}\r\n.venue > img{\r\n    width:20px;\r\n}\r\n\r\n.venue > img , .venue > span {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n}\r\n\r\n.venue > span {\r\n    min-width: 50%;\r\n    max-width: 70%;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.count-bar {\r\n    height: 50px;\r\n}\r\n\r\n.count-bar >  p{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: black;\r\n    font-size: 0.9em;\r\n    font-weight: 500;\r\n    margin: 1% auto;\r\n    width: 20%;\r\n}\r\n.count-bar > div{ \r\n    border-left: 1px solid #888888;\r\n    width: 78%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 50px;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    white-space: nowrap;\r\n}\r\n.count-bar > div > img{\r\n    margin: 5px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    vertical-align: middle\r\n}\r\n\r\n.comment-bar{\r\n    background-color: #4372a0;\r\n    padding: 2%;\r\n    width: 96%;\r\n    margin: 1% auto;\r\n}\r\n.comment-bar > img {\r\n    vertical-align: middle;\r\n    margin: 3%;\r\n}\r\ninput{\r\n    width: 80%;\r\n    border: none;\r\n    background-color: #ffffff;\r\n    height: 35px;\r\n    text-align: center;\r\n    box-shadow: 1px 1px 2px #bbbbbb;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    vertical-align:  middle\r\n}\r\n\r\n.comments > img {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 2%;\r\n}\r\n.comment-details{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    border-bottom: 1px solid #bbbbbb;\r\n    width: 80%;\r\n    margin-bottom: 1%;\r\n}\r\n.user-name{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    min-width: 20%;\r\n    font-size: 0.9em;\r\n    font-weight: 500;\r\n    color: #024771;\r\n    text-align: left;\r\n}\r\n.comment-date{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 0.8em;\r\n    color: black;\r\n    min-width: 40%;\r\n    text-align: left;\r\n}\r\n.unique-name{\r\n    color: #ffa600;\r\n    font-style: italic;\r\n    font-size: 0.8em;\r\n}\r\n.comment{\r\n    color: black;\r\n    font-size: 0.95em;\r\n}\r\n.match-image{\r\n    padding-top: 60px;\r\n    width: 98%;\r\n    margin:2% auto;\r\n}\r\n.match-image > img {\r\n    width: 100%;\r\n}\r\n\r\n.actions-match{\r\n    padding: 3%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.actions-match > button > img {\r\n    width: 32px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 3px;\r\n}\r\n\r\n.actions-match > button > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.actions-match > button > span:hover{\r\n    font-weight: 700\r\n}\r\n@media ( max-width: 720px) {\r\n    .count-bar > div > img{\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n    .comment-bar > input{\r\n        height: 30px !important;\r\n    }\r\n}\r\n@media ( max-width: 980px) and ( min-width: 720px) {\r\n    .count-bar > div > img{\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"open-card\"  #openCard>\r\n  <div class=\"open-card-header\">\r\n    <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\r\n    <div *ngIf = \"_days > 0\" class=\"time-remaining\">\r\n      <span>{{_days}}d</span>\r\n      <span>{{_hours}}h</span>\r\n      <span>{{_minutes}}m</span>\r\n      <span>{{_seconds}}s</span>\r\n    </div>\r\n    <div class=\"heading\">{{gameName}}</div>\r\n    <div class=\"match-sum\">Match Summary</div>\r\n    <div class=\"started-by\">\r\n      <p>Created By</p>\r\n      <img src=\"{{creatorImage}}\" title=\"{{creatorName}}\" alt=\"\" (error)=\"defaultImage($event)\" #userImg>\r\n    </div>\r\n  </div>\r\n  <div class=\"open-card-content\">\r\n    <div class=\"match-date\">\r\n      <img src=\"/assets/images/calendar.png\" alt=\"\">\r\n      <span>{{matchDate}}</span>\r\n    </div>\r\n    <div class=\"venue\">\r\n      <img src=\"/assets/images/map-marker.png\" alt=\"\">\r\n      <span>{{venueName}}</span><!-- \r\n      <img src=\"/assets/images/map-marker.png\" alt=\"\"> -->\r\n    </div>\r\n    <div class=\"match-text\">\r\n      {{matchText}}\r\n    </div>\r\n    <div class=\"match-image\">\r\n      <img *ngIf=\"matchImage === undefined\" src=\"/assets/images/default-image.png\" alt=\"\">\r\n      <sports-social-gallery *ngIf=\"matchImage\" [images] = \"images\" ></sports-social-gallery>\r\n    </div>\r\n  </div>\r\n  <div class=\"actions-count\" *ngIf = \"removeActionBar ()\">\r\n    <hr>\r\n    \r\n    <div class=\"count-bar\" *ngIf=\"joineeCount > 0\">\r\n      <p >{{joineeCount}} Playing</p>\r\n      <div class=\"image\">\r\n        <img  *ngFor = \"let joinee of joinees\" src=\"{{joinee.image}}\" title=\"{{joinee.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    \r\n    <div class=\"count-bar\" *ngIf = \"promoteCount > 0\">\r\n      <p>{{promoteCount}} Promoting</p>\r\n      <div class=\"image\" >\r\n        <img *ngFor = \"let promoter of promoters\" src=\"{{promoter.image}}\" title=\"{{promoter.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    \r\n    <div class=\"count-bar\" *ngIf = \"watchCount > 0\">\r\n      <p>{{watchCount}} Watching</p>\r\n      <div class=\"image\" >\r\n        <img *ngFor = \"let watcher of watchers\" src=\"{{watcher.image}}\" title=\"{{watcher.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"actions-match\">\r\n    <button class=\"playButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-play.png\" alt=\"\"> <span>Play</span>  \r\n    </button>\r\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-match-talks.png\" alt=\"\"><span>Comment</span>  \r\n    </button>\r\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-promote.png\" alt=\"\"> <span>Promote</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-watching.png\" alt=\"\"> <span>Watch</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"comment-bar\">\r\n    <img src=\"/assets/images/user-default.png\" alt=\"\">\r\n    <input type=\"text\" placeholder=\"Comment Your Views\">\r\n  </div>\r\n  <div class=\"comments\" *ngFor =\"let comment of comments\">\r\n      <img src=\"{{comment.userImage}}\"(error)=\"defaultImage($event)\" alt=\"\">\r\n      <div class=\"comment-details\">\r\n        <div class=\"user-name\">{{comment.userName}}</div>\r\n        <div class=\"comment-date\">{{comment.commentDate}}</div>\r\n        <div class=\"unique-name\"> @{{comment.uniqueName}} </div>\r\n        <div class=\"comment\">{{comment.comment}}</div>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"open-card-footer\">\r\n    <img src=\"/assets/images/sports-social-white-logo.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenMatchCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpenMatchCardComponent = (function () {
    function OpenMatchCardComponent(renderer, time, get, activeRoute, router) {
        this.renderer = renderer;
        this.time = time;
        this.get = get;
        this.activeRoute = activeRoute;
        this.router = router;
        this.activityid = {
            commentid: 1005,
            promoteid: 1004,
            watchid: 1009
        };
        this.joinees = [];
        this.promoters = [];
        this.watchers = [];
        this.comments = [];
        this.images = [];
    }
    OpenMatchCardComponent.prototype.defaultImage = function (event) {
        console.log(event);
        event.target.src = '/assets/images/user-default.png';
    };
    OpenMatchCardComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'Match': null } }]);
    };
    OpenMatchCardComponent.prototype.removeActionBar = function () {
        if (this.promoteCount === '0' && this.watchCount === '0' && this.joineeCount === '0') {
            return false;
        }
        else {
            return true;
        }
    };
    OpenMatchCardComponent.prototype.getMatchData = function (id) {
        var _this = this;
        this.get.singleMatchData(id, 0, this.activityid.commentid, 0, 1).subscribe(function (res) {
            console.log(res);
            _this.matchImage = res['EventInfo'][0].event_image;
            _this.matchText = res['EventInfo'][0].EventText;
            _this.promoteCount = res['EventInfo'][0].PromoteCount;
            _this.watchCount = res['EventInfo'][0].WatchCount;
            _this.joineeCount = res['EventInfo'][0].EventJoineeCount;
            _this.venueName = res['EventInfo'][0].Venue_Name;
            _this.creatorName = res['EventInfo'][0].user_name;
            _this.gameName = res['EventInfo'][0].gamename;
            _this.timeRemaining = res['EventInfo'][0].StartTime;
            _this.creatorImage = res['EventInfo'][0].profile_photo;
            _this.matchDate = _this.time.exactDate(parseInt(res['EventInfo'][0].StartTime, 10) * 1000);
            // tslint:disable-next-line:forin
            for (var i in res['EventJoineesInfo']) {
                _this.joinees.push({
                    name: res['EventJoineesInfo'][i].FirstName + res['EventJoineesInfo'][i].LastName,
                    image: res['EventJoineesInfo'][i].profilephoto
                });
            }
            console.log(res['Images'].length);
            if (res['Images'].length > 0) {
                // tslint:disable-next-line:forin
                for (var i in res['Images']) {
                    console.log(res['Images'][i]);
                    _this.images.push({
                        image: res['Images'][i].imagepath,
                        text: res['Images'][i].Text === undefined ? ' ' : res['Images'][i].Text,
                        likeCount: res['Images'][i].likecount === null ? '0' : res['Images'][i].likecount,
                        commentCount: res['Images'][i].commentcount === null ? '0' : res['Images'][i].commentcount
                    });
                }
            }
            else {
                _this.images.push({
                    image: _this.matchImage,
                    text: '',
                    likeCount: 0,
                    commentCount: 0
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.commentid, 2, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.comments.push({
                    userName: res[0][i].user_name,
                    commentDate: _this.time.ExactDate(res[0][i].InsertedDate),
                    uniqueName: res[0][i].UniqueName,
                    comment: res[0][i].Comment,
                    userImage: res[0][i].profile_image,
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.watchid, 1, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.watchers.push({
                    name: res[0][i].user_name,
                    image: res[0][i].profile_image,
                });
            }
        });
        this.get.singleMatchData(id, 0, this.activityid.promoteid, 1, 1).subscribe(function (res) {
            console.log(res);
            // tslint:disable-next-line:forin
            for (var i in res[0]) {
                _this.promoters.push({
                    name: res[0][i].user_name,
                    image: res[0][i].profile_image,
                });
            }
        });
    };
    OpenMatchCardComponent.prototype.getDays = function (t) {
        var days;
        days = Math.floor(t / 86400);
        return days;
    };
    OpenMatchCardComponent.prototype.getHours = function (t) {
        var days, hours;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        return hours;
    };
    OpenMatchCardComponent.prototype.getMinutes = function (t) {
        var days, hours, minutes;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        return minutes;
    };
    OpenMatchCardComponent.prototype.getSeconds = function (t) {
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        return seconds;
    };
    OpenMatchCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    OpenMatchCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.watchers, this.comments, this.joinees, this.promoters);
        this.activeRoute.params.subscribe(function (param) {
            console.log(param.id);
            _this.getMatchData(param.id);
            // console.log('b', this.images);
            _this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["a" /* Observable */].interval(1000).map(function (x) {
                _this._diff = +(_this.timeRemaining) - Date.parse(new Date().toString()) / 1000;
                // console.log(this._diff, Date.parse(new Date().toString()) / 1000, this.timeRemaining );
            }).subscribe(function (x) {
                _this._days = _this.getDays(_this._diff);
                _this._hours = _this.getHours(_this._diff);
                _this._minutes = _this.getMinutes(_this._diff);
                _this._seconds = _this.getSeconds(_this._diff);
                // console.log( this._days + 'd', this._hours + 'h', this._minutes + 'm', this._seconds + 's', this.getSeconds(this._diff));
            });
        });
    };
    OpenMatchCardComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openCard'),
        __metadata("design:type", Object)
    ], OpenMatchCardComponent.prototype, "openCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "timeRemaining", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "gameName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "creatorImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "creatorName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OpenMatchCardComponent.prototype, "matchDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "venueName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "matchText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "matchImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "joineeCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "joinees", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "promoteCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "promoters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "watchCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "watchers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "commentCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "comments", void 0);
    OpenMatchCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-open-match-card',
            template: __webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_time_service__["a" /* TimeService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], OpenMatchCardComponent);
    return OpenMatchCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenMatchCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_match_card_component__ = __webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_module__ = __webpack_require__("../../../../../src/app/gallery/gallery.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OpenMatchCardModule = (function () {
    function OpenMatchCardModule() {
    }
    OpenMatchCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_module__["a" /* GalleryModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__open_match_card_component__["a" /* OpenMatchCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__open_match_card_component__["a" /* OpenMatchCardComponent */]
            ]
        })
    ], OpenMatchCardModule);
    return OpenMatchCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/open-cards/open-news-card/open-news-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".insert-date {\r\n    position: absolute;\r\n    left: 10px;\r\n    top: 10px;\r\n}\r\n.url {\r\n    display: block;\r\n    margin: 1% auto;\r\n    text-align: center;\r\n    color: black;\r\n    width: 100%;\r\n    font-size: 1.5em;\r\n    font-weight: 900;\r\n}\r\n.source {\r\n      text-align: center;\r\n      margin: 1%;\r\n}\r\n.source > .name {\r\n    font-size: 1.4em;\r\n    font-weight: 900;\r\n}\r\n\r\n.title {\r\n    width: 100%;\r\n    text-align: center;\r\n    position: relative;\r\n    top: 30px;\r\n    font-size: 1.2em;\r\n    font-weight: 500;\r\n}\r\n.news-image{\r\n    padding-top: 60px;\r\n    width: 98%;\r\n    margin:2% auto;\r\n}\r\n.news-image > img {\r\n    width: 100%;\r\n}\r\n\r\n.desc {\r\n    width: 95%;\r\n    margin: 1% auto;\r\n    text-align: center;\r\n    font-size: 1.3em;\r\n    font-weight: 500;\r\n}\r\n.count-bar {\r\n    height: 50px;\r\n    /* border: 1px solid  black; */\r\n}\r\n\r\n.count-bar >  p{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: black;\r\n    font-size: 0.9em;\r\n    font-weight: 500;\r\n    margin: 1% auto;\r\n    width: 20%;\r\n}\r\n.count-bar > div{ \r\n    border-left: 1px solid #888888;\r\n    width: 78%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    height: 50px;\r\n}\r\n.count-bar > div > img{\r\n    margin: 5px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    vertical-align: middle\r\n}\r\n\r\n.comment-bar{\r\n    background-color: #4372a0;\r\n    padding: 2%;\r\n    width: 96%;\r\n    margin: 1% auto;\r\n}\r\n.comment-bar > img {\r\n    vertical-align: middle;\r\n    margin: 3%;\r\n}\r\ninput{\r\n    width: 80%;\r\n    border: none;\r\n    background-color: #ffffff;\r\n    height: 35px;\r\n    text-align: center;\r\n    box-shadow: 1px 1px 2px #bbbbbb;\r\n    border-radius: 25px;\r\n    outline: none;\r\n    vertical-align:  middle\r\n}\r\n\r\n.comments > img {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 45px;\r\n    height: 45px;\r\n    border-radius: 50%;\r\n    margin: 2%;\r\n}\r\n.comment-details{\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    border-bottom: 1px solid #bbbbbb;\r\n    width: 80%;\r\n    margin-bottom: 1%;\r\n}\r\n.user-name{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    min-width: 20%;\r\n    font-size: 0.9em;\r\n    font-weight: 500;\r\n    color: #024771;\r\n    text-align: left;\r\n}\r\n.comment-date{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    font-size: 0.8em;\r\n    color: black;\r\n    min-width: 40%;\r\n    text-align: left;\r\n}\r\n.unique-name{\r\n    color: #ffa600;\r\n    font-style: italic;\r\n    font-size: 0.8em;\r\n}\r\n.comment{\r\n    color: black;\r\n    font-size: 0.95em;\r\n}\r\n.actions-news{\r\n    padding: 3%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.actions-news > button > img {\r\n    width: 16px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-right: 3px;\r\n}\r\n\r\n.actions-news > button > span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.actions-news > button > span:hover{\r\n    font-weight: 700\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-cards/open-news-card/open-news-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"open-card\" #openCard>\r\n  <div class=\"open-card-header\">\r\n      <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\r\n    <div class=\"insert-date\">{{insertedDate}}</div>\r\n    <div class=\"source\">\r\n      <img src=\"{{sourceImage}}\" alt=\"\">\r\n      <p class=\"name\">{{sourceName}}</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"open-card-content\">\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"news-image\">\r\n        <img *ngIf=\"newsImage === undefined\" src=\"/assets/images/default-image.png\" alt=\"\">\r\n      <img src=\"{{newsImage}}\" alt=\"\">\r\n    </div>\r\n    <div class=\"desc\">{{desc}}</div>\r\n    <a class=\"url\" href=\"{{url}}\" target=\"_blank\">Read More At {{sourceName}}</a>\r\n  </div>\r\n  <div class=\"actions-count\" *ngIf = \"removeActionBar ()\">\r\n    <hr>\r\n        \r\n    <div class=\"count-bar\" *ngIf = \"likeCount > 0\">\r\n      <p>{{likeCount}} {{likeCount > 1 ? Likes : Like}}</p>\r\n      <div class=\"image\" >\r\n        <img *ngFor = \"let like of likes\" src=\"{{like.image}}\" title=\"{{like.name}}\" alt=\"\">\r\n      </div>\r\n      <hr>\r\n    </div>\r\n    \r\n    <div class=\"count-bar\" *ngIf = \"shareCount > 0\">\r\n      <p>{{shareCount}} {{ shareCount > 1 ? Shares : Share }}</p>\r\n      <div class=\"image\" >\r\n        <img *ngFor = \"let share of shares\" src=\"{{share.image}}\" title=\"{{share.name}}\" alt=\"\">\r\n      </div>\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  <div class=\"actions-news\">\r\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\"><span>Comment</span>  \r\n    </button>\r\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\"> <span>Like</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n      <img src=\"/assets/images/sports-social-share-black.png\" alt=\"\"> <span>Share</span>\r\n    </button>\r\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\r\n        <img src=\"/assets/images/sports-social-save-black.png\" alt=\"\"> <span>Save</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"comment-bar\">\r\n    <img src=\"/assets/images/user-default.png\" alt=\"\">\r\n    <input type=\"text\" placeholder=\"Comment Your Views\">\r\n  </div>\r\n  <div class=\"comments\" *ngFor =\"let comment of comments\">\r\n      <img src=\"{{comment.userImage}}\" alt=\"\">\r\n      <div class=\"comment-details\">\r\n        <div class=\"user-name\">{{comment.userName}}</div>\r\n        <div class=\"comment-date\">{{comment.commentDate}}</div>\r\n        <div class=\"unique-name\"> @{{comment.uniqueName}} </div>\r\n        <div class=\"comment\">{{comment.comment}}</div>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"open-card-footer\">\r\n    <img src=\"/assets/images/sports-social-white-logo.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/open-cards/open-news-card/open-news-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenNewsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OpenNewsCardComponent = (function () {
    function OpenNewsCardComponent(renderer, get, activeRoute, router, time) {
        this.renderer = renderer;
        this.get = get;
        this.activeRoute = activeRoute;
        this.router = router;
        this.time = time;
        this.comments = [];
    }
    OpenNewsCardComponent.prototype.removeActionBar = function () {
        if (this.likeCount === 0 && this.shareCount === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    OpenNewsCardComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'News': null } }]);
    };
    OpenNewsCardComponent.prototype.openAppDownloadPopup = function () {
        this.router.navigate([{ outlets: { 'AppDownload': ['PopUp'] } }], { skipLocationChange: true });
    };
    OpenNewsCardComponent.prototype.getNewsData = function (id) {
        var _this = this;
        this.get.singleNewsData(id).subscribe(function (res) {
            console.log(res);
            _this.title = res['title'];
            _this.insertedDate = _this.time.newsDate(res['publishedAt']);
            _this.desc = res['desc'];
            _this.newsImage = res['newsImage'];
            _this.url = res['url'];
            _this.likeCount = res['likeCount'];
            _this.shareCount = res['shareCount'];
            _this.sourceImage = res['sourceImage'];
            _this.sourceName = res['sourceName'];
        });
    };
    OpenNewsCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (param) {
            _this.getNewsData(param.id);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openCard'),
        __metadata("design:type", Object)
    ], OpenNewsCardComponent.prototype, "openCard", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "newsId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "newsImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "sourceImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "sourceName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "desc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "likeCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "shareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "commentCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "insertedDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "publishedAt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OpenNewsCardComponent.prototype, "comments", void 0);
    OpenNewsCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-open-news-card',
            template: __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_time_service__["a" /* TimeService */]])
    ], OpenNewsCardComponent);
    return OpenNewsCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/open-cards/open-news-card/open-news-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenNewsCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_news_card_component__ = __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OpenNewsCardModule = (function () {
    function OpenNewsCardModule() {
    }
    OpenNewsCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__open_news_card_component__["a" /* OpenNewsCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__open_news_card_component__["a" /* OpenNewsCardComponent */]
            ]
        })
    ], OpenNewsCardModule);
    return OpenNewsCardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-download-popup{\r\n    position: fixed;\r\n    width:40%;\r\n    left: 30%;\r\n    top: 20%;\r\n    z-index: 100;\r\n    background-color: white;\r\n    box-shadow: 2x 2px 4px #bbbbbb;\r\n    padding: 2%;\r\n}\r\n.logo {\r\n    display: block;\r\n    margin: 2% auto;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.app-download-popup > p{\r\n    text-align: center;\r\n    margin: 1%;\r\n    color: #024771;\r\n    font-weight: 500;\r\n    font-size: 1.2em;\r\n}\r\n.app-download-popup > p:nth-of-type(1){\r\n    color: #ffa600;\r\n    font-weight: 700\r\n}\r\n\r\na{\r\n    display: block;\r\n    text-align: center;\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n@media ( max-width: 720px) {\r\n    .app-download-popup{\r\n        width: 94%;\r\n        left: 1%;\r\n    }\r\n}\r\n@media ( max-width: 980px) and ( min-width: 720px) {\r\n    .app-download-popup{\r\n        width: 50%;\r\n        left: 25%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-download-popup\">\r\n        <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\r\n    <img src=\"/assets/images/sports-social-logo.png\" class=\"logo\" alt=\"\">\r\n    <p>Join Sports Social!</p>\r\n    <p>and stay Connected to your sport always</p>\r\n    <a href=\"https://goo.gl/qrgCz5\" target=\"_blank\">Click here to download the App</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpComponent = (function () {
    function PopUpComponent(router) {
        this.router = router;
    }
    PopUpComponent.prototype.close = function () {
        this.router.navigate([{ outlets: { 'AppDownload': null } }], { skipLocationChange: true });
    };
    PopUpComponent.prototype.ngOnInit = function () {
    };
    PopUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-pop-up',
            template: __webpack_require__("../../../../../src/app/pop-up/pop-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pop-up/pop-up.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PopUpComponent);
    return PopUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppRouting */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__open_cards_open_match_card_open_match_card_component__ = __webpack_require__("../../../../../src/app/open-cards/open-match-card/open-match-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__open_cards_open_news_card_open_news_card_component__ = __webpack_require__("../../../../../src/app/open-cards/open-news-card/open-news-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pop_up_pop_up_component__ = __webpack_require__("../../../../../src/app/pop-up/pop-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__help_center_help_center_component__ = __webpack_require__("../../../../../src/app/help-center/help-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_topic_add_topic_component__ = __webpack_require__("../../../../../src/app/add-topic/add-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_que_ans_add_que_ans_component__ = __webpack_require__("../../../../../src/app/add-que-ans/add-que-ans.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var App_Route = [
    { path: "addtopic", component: __WEBPACK_IMPORTED_MODULE_7__add_topic_add_topic_component__["a" /* AddTopicComponent */] },
    { path: "HelpCenter", component: __WEBPACK_IMPORTED_MODULE_6__help_center_help_center_component__["a" /* HelpCenterComponent */] },
    {
        path: "HelpCenter/:topicId/:subtopicname/HelpCenter/:subtopicId",
        component: __WEBPACK_IMPORTED_MODULE_8__add_que_ans_add_que_ans_component__["a" /* AddQueAnsComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */],
    },
    {
        path: 'Terms Of Service',
        loadChildren: 'app/terms-and-condition/terms-and-condition.module#TermsAndConditionModule',
    },
    {
        path: 'Privacy Policy',
        loadChildren: 'app/privacy-policy/privacy-policy.module#PrivacyPolicyModule'
    },
    {
        path: 'OpenArena',
        loadChildren: 'app/global-feed/global-match-feed/global-match-feed.module#GlobalMatchFeedModule'
    },
    {
        path: 'AroundTheWorld',
        loadChildren: 'app/global-feed/global-news-feed/global-news-feed.module#GlobalNewsFeedModule'
    },
    {
        path: ':sport',
        loadChildren: 'app/sports-specific-feed/sports-specific-feed.module#SportsSpecificFeedModule'
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_2__open_cards_open_match_card_open_match_card_component__["a" /* OpenMatchCardComponent */],
        outlet: 'Match'
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_3__open_cards_open_news_card_open_news_card_component__["a" /* OpenNewsCardComponent */],
        outlet: 'News'
    },
    {
        path: 'PopUp',
        component: __WEBPACK_IMPORTED_MODULE_4__pop_up_pop_up_component__["a" /* PopUpComponent */],
        outlet: 'AppDownload'
    },
    {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(App_Route)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());

var AppRoute = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(App_Route, { enableTracing: true });


/***/ }),

/***/ "../../../../../src/app/shared/services/get.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetService = (function () {
    function GetService(http) {
        this.http = http;
        this.data = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
    }
    GetService.prototype.serverData = function (url) {
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    GetService.prototype.GlobalOpenArenaFeed = function () {
        return this.http.get('http://test.chaseyoursport.com:3200/getGlobalOpenArenaFeed');
    };
    GetService.prototype.GlobalNewsFeed = function () {
        return this.http.get('http://atg.sportsocial.in:4000/news');
    };
    GetService.prototype.getImage = function () {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/image");
    };
    GetService.prototype.getTopics = function () {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/topics");
    };
    GetService.prototype.getSubTopic = function (id) {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/subTopics/" + id);
    };
    GetService.prototype.getQA = function (topicId, subtopicId) {
        return this.http.get("https://helpcenter.chaseyoursport.com/get/QA/" + topicId + "/" + subtopicId);
    };
    GetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GetService);
    return GetService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    LocationService.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
    };
    LocationService.prototype.getGeoLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                var crd = pos.coords;
                console.log(crd);
                _this.position = {
                    latitude: crd.latitude,
                    longitude: crd.longitude
                };
                resolve(_this.position);
                console.log('Your current position is:');
                console.log("Latitude : " + crd.latitude);
                console.log("Longitude: " + crd.longitude);
                console.log("More or less " + crd.accuracy + " meters.");
            }, function (err) {
                console.warn("ERROR(" + err.code + "): " + err.message);
                _this.position = {
                    latitude: 0,
                    longitude: 0
                };
                resolve(_this.position);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        });
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/match-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_service__ = __webpack_require__("../../../../../src/app/shared/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchDataService = (function () {
    function MatchDataService(loc, get) {
        this.loc = loc;
        this.get = get;
        this.globalArena = [];
    }
    MatchDataService.prototype.getActivityName = function (activityid) {
        if (activityid === 1002) {
            return 'Joined';
        }
        if (activityid === 1004) {
            return 'Promoted';
        }
        if (activityid === 1009) {
            return 'Watching';
        }
        if (activityid === 1005) {
            return 'Commented';
        }
        if (activityid === 1001) {
            return 'Created';
        }
    };
    MatchDataService.prototype.globalMatchFeed = function (page, gameid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loc.getGeoLocation()
                .then(function (pos) {
                _this.get.globalMatchFeed(pos['latitude'], pos['longitude'], page, gameid).subscribe(function (res) {
                    var data = res['Feed'];
                    // tslint:disable-next-line:forin
                    for (var i in data) {
                        _this.globalArena.push({
                            eventId: data[i].eventid,
                            creatorImage: data[i].creatorImage,
                            creatorName: data[i].creatorName,
                            type: data[i].feedtype,
                            doerId: data[i].doerId,
                            doerName: data[i].user_name,
                            doerPic: data[i].Profile_Photo,
                            matchText: data[i].EventText,
                            matchImage: data[i].Event_Image,
                            activityDate: data[i].InsertedDate,
                            matchDate: data[i].startdatetime,
                            restrictionCount: data[i].restrictionCount,
                            joineeCount: data[i].JoineeCount,
                            commentCount: data[i].CommentCount,
                            watchCount: data[i].WatchCount,
                            promoteCount: data[i].PromoteCount,
                            venueName: data[i].Venue_Name,
                            gameName: data[i].GameName,
                            activityName: _this.getActivityName(data[i].ActivityId)
                        });
                    }
                    resolve(_this.globalArena.slice(page * 15, (page + 1) * 15));
                }, function (err) {
                    var errObj = { 'err': err, 'message': 'Something went wrong with Match feed!' };
                    reject(errObj);
                });
            }).catch(function (err) {
                console.log('err', err);
            });
        });
    };
    MatchDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
    ], MatchDataService);
    return MatchDataService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(get) {
        this.get = get;
        this.globalArena = [];
    }
    NewsService.prototype.globalNewsFeed = function (page, gameName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get.globalNewsFeed(page, gameName).subscribe(function (res) {
                var data = res;
                console.log(data);
                // tslint:disable-next-line:forin
                for (var i in data) {
                    _this.globalArena.push({
                        type: data[i].feedType,
                        commentCount: data[i].commentCount,
                        likeCount: data[i].likeCount,
                        shareCount: data[i].shareCount,
                        publishedAt: data[i].publishedAt,
                        gameName: data[i].gameName,
                        newsId: data[i]._id,
                        newsImage: data[i].newsImage,
                        sourceImage: data[i].sourceImage,
                        source: data[i].source,
                        title: data[i].title,
                        url: data[i].url,
                        desc: data[i].desc,
                        insertedDate: data[i].insertedDate
                    });
                }
                resolve(_this.globalArena.slice(_this.globalArena.length - 15, _this.globalArena.length));
            }, function (err) {
                var errObj = { 'err': err, 'message': 'Something went wrong with News feed!' };
                reject(errObj);
            });
        });
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/pop-up.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpService = (function () {
    function PopUpService() {
        this.ofCard = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"]();
    }
    PopUpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PopUpService);
    return PopUpService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = (function () {
    function PostService(http) {
        this.http = http;
        this.singleMatchReqObj = [];
        this.matchFeedReqObj = {
            latitude: Number,
            longitude: Number,
            page: Number,
            gameid: Number
        };
        this.url = [
            'https://prod.sportsocial.in/poc/matchinfo',
            'https://prod.sportsocial.in/poc/activityuserdetails',
            'https://prod.sportsocial.in/poc/activityuserdetailsWeb'
        ];
    }
    PostService.prototype.globalNewsFeed = function (pageNo, game) {
        this.newsFeedRequestObject = {
            page: pageNo,
            game: game
        };
        console.log(this.newsFeedRequestObject);
        return this.http.post('https://atg.sportsocial.in/news', this.newsFeedRequestObject);
    };
    PostService.prototype.blogData = function (i, s) {
        this.blogRequestObject = {
            name: s,
            page: i
        };
        // console.log(this.Page);
        return this.http.post('https://prod.chaseyoursport.com/loadblogdata', this.blogRequestObject);
    };
    PostService.prototype.globalMatchFeed = function (lat, long, page, gameid) {
        this.matchFeedReqObj = {
            latitude: lat,
            longitude: long,
            page: page,
            gameid: gameid
        };
        console.log(this.matchFeedReqObj);
        return this.http.post('https://prod.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
    };
    PostService.prototype.singleMatchData = function (eventid, userid, activityid, urlId, page) {
        this.singleMatchReqObj = [{
                'eventid': eventid,
                'userid': userid,
                'activityid': activityid,
                'page': page
            }];
        console.log(this.singleMatchReqObj);
        return this.http.post(this.url[urlId], this.singleMatchReqObj);
    };
    PostService.prototype.singleNewsData = function (id) {
        return this.http.post('https://atg.sportsocial.in/newsById', { id: id });
    };
    PostService.prototype.insertTopics = function (topic) {
        console.log(topic);
        return this.http.post('https://helpcenter.chaseyoursport.com/save/topic', topic);
    };
    PostService.prototype.insertSubTopics = function (subtopic) {
        return this.http.post('https://helpcenter.chaseyoursport.com/save/subTopics', subtopic);
    };
    PostService.prototype.insertQuesAns = function (QA) {
        return this.http.post('https://helpcenter.chaseyoursport.com/save/QA', QA);
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/property.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropertyService = (function () {
    function PropertyService() {
        this.ofHeader = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofCarousel = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.ofNavigationBar = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    PropertyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/send.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendService = (function () {
    function SendService() {
        this.data = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.requestForData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.height = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
        this.innerHeight = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */]();
    }
    SendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SendService);
    return SendService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/time.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeService; });
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

var TimeService = (function () {
    function TimeService() {
    }
    TimeService.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i, 10) * 1000);
        var presentDate = new Date();
        if (writtenDate.getDate() === presentDate.getDate() &&
            writtenDate.getMonth() === presentDate.getMonth() &&
            writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getHours() === presentDate.getHours()) {
                if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                    if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
            }
        }
        else {
            return this.ExactDate(parseInt(i, 10));
        }
    };
    TimeService.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    TimeService.prototype.exactDate = function (i) {
        var dateOptions = { month: 'short', day: 'numeric' };
        var timeOpt = { hour: '2-digit', minute: '2-digit' };
        var matchDate = new Date(i);
        var presentDate = new Date();
        console.log(matchDate.toLocaleDateString('en-US', dateOptions), matchDate.toLocaleTimeString('en-US', timeOpt));
        // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
        if (matchDate.getUTCDate() === presentDate.getUTCDate()
            && matchDate.getFullYear() === presentDate.getFullYear()
            && matchDate.getMonth() === presentDate.getMonth()) {
            // console.log("he")
            return 'Today at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
        else {
            return matchDate.toLocaleDateString('en-US', dateOptions) + ' at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
    };
    TimeService.prototype.relativeDate = function (i) {
        var months = [
            'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ];
        var matchDate = new Date(i);
        var presentDate = new Date();
        if (matchDate.getDate() === presentDate.getDate() &&
            matchDate.getMonth() === presentDate.getMonth() &&
            matchDate.getFullYear() === presentDate.getFullYear()) {
            if (matchDate.getHours() === presentDate.getHours()) {
                if (matchDate.getMinutes() === presentDate.getMinutes()) {
                    if (matchDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - matchDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - matchDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - matchDate.getHours() + ' hrs ago';
            }
        }
        else {
            return matchDate.getDate() + ' ' + months[matchDate.getMonth()] + ' ' + matchDate.getFullYear();
        }
    };
    TimeService.prototype.newsDate = function (i) {
        var news = new Date(i);
        var dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return news.toLocaleDateString('en-US', dateOptions);
    };
    TimeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "../../../../../src/app/sub-topic/sub-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sub-topic/sub-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sub-topic works!\r\n</p>\r\n<!-- <ul class=\"subtopicss\">\r\n    <li *ngFor=\"let subTopic of subTopics; let i = index\">\r\n      <a href=\"addque/{{ subTopic.topic_id }}/{{ subTopic.id }}\">{{\r\n        subTopic.name\r\n      }} <img src=\"{{subTopic.icon}}\"></a>-->\r\n      <!-- <a (click)=\"send(i)\">{{ subTopic.name }}</a> \r\n    </li>\r\n  </ul> -->\r\n  \r\n"

/***/ }),

/***/ "../../../../../src/app/sub-topic/sub-topic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubTopicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubTopicComponent = (function () {
    function SubTopicComponent(route, getService) {
        this.route = route;
        this.getService = getService;
        this.subTopics = [];
    }
    SubTopicComponent.prototype.getSubtopic = function () {
        var _this = this;
        var topic_id = +this.route.snapshot.paramMap.get("id");
        console.log(topic_id);
        this.getService.getSubTopic(topic_id).subscribe(function (res) {
            for (var i in res) {
                _this.subTopics.push({
                    id: res[i].id,
                    topic_id: res[i].topic_id,
                    name: res[i].name,
                    icon: res[i].icon,
                    shortDesc: res[i].shortDesc
                });
            }
            console.log(_this.subTopics);
        });
    };
    SubTopicComponent.prototype.ngOnInit = function () {
        this.getSubtopic();
    };
    SubTopicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sub-topic',
            template: __webpack_require__("../../../../../src/app/sub-topic/sub-topic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sub-topic/sub-topic.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_get_service__["a" /* GetService */]])
    ], SubTopicComponent);
    return SubTopicComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
var ngZone = null;
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map