webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/global-feed/global-match-feed/global-match-feed.module": [
		"../../../../../src/app/global-feed/global-match-feed/global-match-feed.module.ts",
		"global-match-feed.module"
	],
	"app/global-feed/global-news-feed/global-news-feed.module": [
		"../../../../../src/app/global-feed/global-news-feed/global-news-feed.module.ts",
		"global-news-feed.module"
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts"
	],
	"app/privacy-policy/privacy-policy.module": [
		"../../../../../src/app/privacy-policy/privacy-policy.module.ts",
		"privacy-policy.module"
	],
	"app/sports-specific-feed/sports-specific-feed.module": [
		"../../../../../src/app/sports-specific-feed/sports-specific-feed.module.ts",
		"sports-specific-feed.module"
	],
	"app/terms-and-condition/terms-and-condition.module": [
		"../../../../../src/app/terms-and-condition/terms-and-condition.module.ts",
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
exports.push([module.i, "/*media=\"only screen and (max-device-width: 480px) , only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)\"*/\nbody {\n    width: auto;\n    height: auto;\n  }\n  .instagram{\n    border:1px solid black;\n  }\n  .instagram>img{\n    border:1px solid red;\n  }\n  .nav {\n    background-color: #fff;\n    height: auto;\n    width: 100%;\n    position: fixed;\n    top: 0px;\n    z-index: 1000;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  }\n  \n    .nav li {\n      display: inline-block;\n    }\n  \n    .nav ul {\n      list-style: none;\n    }\n  \n  .brand {\n    width: auto;\n    padding: 0.6% 0.5% 0.5% 0.7%;\n  }\n  \n  .brand-img {\n    width: 65px;\n    display: inline-block;\n  }\n  \n  .brand-title {\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.7em;\n    font-weight: 400;\n    color: #024771;\n    display: inline-block;\n    position: relative;\n    top: -6px;\n    text-shadow:2px 2px 2px;\n  }\n  \n  .button {\n    display: inline-block;\n    width: auto;\n    padding: 0px;\n    text-align: right;\n    position: absolute;\n    top: 20%;\n    margin-top: .6%;\n    right: 0.5%;\n  }\n  \n    .button > a {\n      border: 1px solid #fafafa;\n      padding: 8px 20px 8px 20px;\n      font-family: 'Roboto', sans-serif;\n      font-size: 1em;\n      color: #fafafa;\n      background-color:#024771;\n      border-radius: 5px;\n      font-weight: 300;\n    }\n  \n  /* \n    ##Device = Most of the Smartphones Mobiles (Portrait)\n    ##Screen = B/w 320px to 479px\n  */\n  \n  @media (max-width: 800px) {\n    ul {\n      padding: 0;\n    }\n  \n    .brand {\n      width: auto;\n      text-align: left;\n      margin-left: 1%;\n      padding-top: 1.5%;\n      padding-bottom: 1.5%;\n    }\n    .brand-title{\n      text-shadow:2px 2px 2px;\n      margin-left:-10px;\n      font-size:20px;\n    }\n  \n    .button {\n      width: auto;\n      height:10px;\n      position: absolute;\n      right: 2%;\n      top: 10%;\n    }\n    .brand-img {\n      width: 50px;\n    }\n  \n    .button > a {\n      font-size: 0.8em;\n      padding: 2px 8px 2px 8px;\n      margin:auto;\n      margin-top:8%;\n      \n    }\n  }\n  \n  /*===========body========================*/\n  .app{\n      width: 100px;\n      height: 100px;\n      margin:auto;\n  }\n  .app>img{\n    padding-bottom: 2%;\n  }\n  .app-icon{\n      width: 100%;\n      height: 100%;\n      border-radius:10px;\n      margin-top:100px;\n  }\n  .app-mantra{\n      width: 60%;\n      margin: 3% auto;\n      height: auto;\n      padding: 1%;\n      font-family: 'Roboto', sans-serif;\n      font-size: 1.2em;\n      font-weight: 300;\n      color: #101010;\n      text-align: justify;\n      text-align-last: center;\n  }\n  .app-desc{\n      width:65%;\n      height:auto;\n      padding:1%;\n      padding-top: 2%;\n      text-align:justify;\n      text-align-last:center;\n      margin:8% auto;\n      background-color: none;\n      color: #024771;\n      font-size:1em;\n      font-family:'Times New Roman', Times;\n      height:450px;\n      line-height:0.2em;\n   }\n  .app-desc>p:first-child{\n      font-family: 'Roboto',sans-serif;\n      font-size: 2em;\n      line-height: 2em;\n      text-align: left;\n      text-align: center;\n      margin: auto;\n      padding:0;\n  }\n  .app-desc>p:last-child{\n      font-family: 'Roboto',sans-serif;\n      font-size: 1.9em;\n      font-weight: 500;\n      line-height: 1.7em;\n  }\n    /*testin*/\n  \n  .scroll-down {\n    opacity: 1;\n    transition: all .5s ease-in 3s;\n    margin-top:-3%;\n    \n    \n  }\n  \n  .scroll-down {\n    position: relative;\n    cursor:pointer;\n    bottom: 30px;\n    left: 50%;\n    margin-left: -16px;\n    display: block;\n    width: 32px;\n    height: 32px;\n    border: 2px solid red;\n    background-size: 14px auto;\n    border-radius: 50%;\n    z-index: 2;\n    -webkit-animation: bounce 2s infinite 2s;\n    animation: bounce 2s infinite 2s;\n    transition: all .2s ease-in;\n    scroll-behavior: smooth;\n  }\n  \n    .scroll-down:before {\n      position: absolute;\n      top: calc(50% - 8px);\n      left: calc(50% - 6px);\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      display: block;\n      width: 12px;\n      height: 12px;\n      content: \"\";\n      border: 2px solid red;\n      border-width: 0px 0 2px 2px;\n    }\n  \n  @-webkit-keyframes bounce {\n    0%, 100%, 20%, 50%, 80% {\n      -webkit-transform: translateY(0);\n      transform: translateY(0);\n    }\n  \n    40% {\n      -webkit-transform: translateY(-10px);\n      transform: translateY(-10px);\n    }\n  \n    60% {\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px);\n    }\n  }\n  \n  @keyframes bounce {\n    0%, 100%, 20%, 50%, 80% {\n      -webkit-transform: translateY(0);\n      transform: translateY(0);\n    }\n  \n    40% {\n      -webkit-transform: translateY(-10px);\n      transform: translateY(-10px);\n    }\n  \n    60% {\n      -webkit-transform: translateY(-5px);\n      transform: translateY(-5px);\n    }\n  }\n    /*testing*/\n  .bit-desc {\n      height: 200px;\n      width:auto;\n      background-color: #2d57de;\n      margin-top:10%;\n    }\n  .blogFeed{\n      z-index: 10;\n      margin: 0px;\n  }\n  .blog{\n      width: 90%;\n      max-height: 400px;\n      margin: 5% auto;\n      overflow: hidden;\n      white-space: nowrap !important;\n      box-shadow: 10px 10px 5px  rgb(228, 157, 26);\n  }\n  .blog>div{\n      display: inline-block;\n      width: 50%;\n      height: 400px; \n  }\n  .blog>div>img{\n      height: 100%;\n      width: 100%;\n      padding-right: 2%;\n      \n  }\n  .feeddata{\n    border:2px solid orange;\n    overflow: hidden;\n    margin: 2px;\n  }\n  .blog .left{\n      position: absolute;\n      top:45%;\n      left: 6%;\n      cursor: pointer;\n      \n  }\n  .blog .right{\n      position: absolute;\n      top:45%;\n      right: 7%;\n      cursor: pointer;\n      \n  }\n\n  /* insta-feed */\n  .feed{\n    z-index: 10;\n    margin: 0px;\n  }\n  .feedHeading{\n    font-family: 'Roboto',sans-serif;\n    font-size: 1.8em;\n    font-weight: 500;\n    color: #101010;\n    margin:3% 0% 3% 0%;\n    text-align: center\n}\n  .socialFeed{\n      width: 90%;\n      max-height: 400px;\n      margin: 5% auto;\n      overflow: hidden;\n      white-space: nowrap !important;\n      box-shadow: 10px 10px 5px  rgb(228, 157, 26);\n}\n.socialFeed>div{\n      display: inline-block;\n      width: 50%;\n      height: 400px; \n}\n \n  .instaData>a>img{\n    position: relative;\n    height: 100%;\n    width: 100%;\n    padding-right: 2%;\n    \n    \n  }\n  .text{\n    position: absolute;\n    width:640px;\n    height: 100px;\n    background-color: black;\n    opacity: 0.8%;\n    filter: Alpha(opacity=90);\n    /* overflow: hidden;\n    overflow-x: hidden; */\n    font-size:1vw;\n  }\n   .text #username{\n    position: absolute;\n    color:blue;\n    top:4%;\n    left:1%;\n    overflow: hidden;\n  }\n  .text #time{\n    position: absolute;\n    color:blue;\n    top:4%;\n    left:80%;\n    overflow: hidden;\n  }\n  .text #content{\n    /* position: absolute; */\n    border:1px solid white;\n    width:97%;\n    height: 50px;\n    margin-top:60px;\n    overflow-y: hidden;\n    color: yellow;\n    float: left;\n    font-size: 1vw;\n  }\n  \n  .instaData{\n    border:2px solid orange;\n    overflow: hidden;\n    margin: 2px;\n  }\n  .socialFeed .left{\n      position: absolute;\n      top:45%;\n      left: 2%;\n      cursor: pointer;\n  }\n  .socialFeed .right{\n      position: absolute;\n      top:45%;\n      right: 3%;\n      cursor: pointer;\n  }\n  /* insta end */\n  .sport-icon{\n      display: block;\n      margin: auto;\n      width: 200px;\n      height: 300px;\n  }\n  footer{\n      background-color: #024771;\n  }\n  .col-md-3 h3 ,.col-md-3 h3>a{\n      line-height: .2em;\n      color: white;\n      font-family: 'Robot',sans-serif;\n      font-size: 1em;\n      display: inline;\n  }\n  .col-md-3>h4>u{\n    margin-right: -70%;\n    color:skyblue;\n    text-shadow: 2px 2px 2px rgb(119, 170, 236);\n  }\n  \n    .col-md-3 h4, .col-md-3 h4 > a {\n      line-height: 1.5em;\n      color: white;\n      font-family: 'Robot',sans-serif;\n      font-size: 1em;\n      display: inline-block;\n      padding:10px;\n    }\n  .col-md-3 h4:first-child{\n      font-weight: 700;\n  }\n  \n  \n  @media (max-width:500px) {\n    .app>img{\n      margin-top:60px;\n    }\n    .app-desc {\n      width: 250px;\n      height:330px;\n      text-align: center;\n      margin-left: 15%;\n      margin-top: 31%;\n      padding-top: 2%;\n      line-height:0.7em;\n      font-weight:180;\n    }\n      .app-desc > p:first-child {\n        font-family: 'Roboto',sans-serif;\n        font-size: 1.6em;\n        line-height: 1em;\n        text-align: center;\n        margin-top:-8%;\n      }\n      .app-desc > p:last-child {\n        font-family: 'Roboto',sans-serif;\n        font-size: 1.5em;\n        font-weight: 270;\n        line-height: 1.3em;\n        text-align:center;\n      }\n  \n    .col-md-3 h4{\n      line-height: 0.7em;\n      padding:7px;\n      color: #fafafa;\n      font-family: 'Robot',sans-serif;\n      font-size: .8em;\n      display:inline-block;\n    }\n    .col-md-3 h3>img {\n      border-radius:5px;\n      margin-top: 7%;\n      padding: 5px;\n    }\n     .col-md-3 h3 > a {\n      line-height: .7em;\n      color: white;\n      margin-left: -13%;\n      font-family: 'Robot',sans-serif;\n      font-size: 0.8em;\n    }\n      \n      .col-md-3 h4:first-child {\n        font-weight: 500;\n      }\n      .col-md-3>h4>u{\n        margin-right: -40%;\n        color:yellow;\n      }\n  \n      .blog > div {\n        display: inline-block;\n        width: 100%;\n        height: 400px;\n      }\n    .socialFeed > div {\n      display: inline-block;\n      width: 100%;\n      height: 500px;\n      margin: 0px;\n      \n    }\n}\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n  </head>\n\n  <sports-social-header></sports-social-header>\n  \n<body>\n  <div class=\"app\">\n    <img src=\"/assets/images/app_icon.png\" class=\"img-responsive app-icon\">\n  </div>\n\n  <h4 class=\"app-desc\">\n    <p><u>{{descTitleDisplay}}</u></p>\n    <p>{{descDisplay}}</p>\n  </h4>\n\n  <div id=\"sec\">\n    <a onclick=\"document.getElementById('bitdes').scrollIntoView();\" class=\"scroll-down\"></a>\n  </div>\n   \n  <div class=\"bit-desc\" id=\"bitdes\">  </div>\n\n  <h4 class=\"app-mantra\">\n    Our Mission is to give everyone opportunity for\n    play and self-expression and Show them to World.\n  </h4>\n  <img src=\"/assets/images/sport-icon.jpg\" class=\"sport-icon\">\n\n  <h4 class=\"app-mantra\">\n    <b>\"A world where everyone is welcome to play and enjoy their favourite sports without any barrirers\"</b>\n  </h4>\n  <h4 class=\"app-mantra\">\n    We believe that everyone deserve an opportunity for\n    self-expression and that the world is better place when we play, express ourselves\n    and build communities through Sports.\n  </h4>\n\n  <div class=\"blogFeed\" id=\"blg-feed\">\n    <p class=\"feedHeading\"><u>The Latest from our Blog</u></p>\n    <div style=\"position:relative\">\n      <div class=\"blog\" #blog>\n        <div  class=\"feeddata\" *ngFor=\"let feed of blogs\" #blogImg>\n          <!-- <img src=\"{{img}}\"> -->\n          <sports-social-blog-card\n                            [blogId] = \"feed.blogId\"\n                            [heading] = \"feed.heading\"\n                            [blogImage] = \"feed.blogImage\"\n                            [viewCount] = \"feed.viewCount\"\n                            [shareCount] = \"feed.shareCount\"\n                            [bloggerName] = \"feed.bloggerName\"\n                            [metaDesc] = \"feed.metaDesc\"\n                            [topic] = \"feed.topic\"\n                            [insertedDate] = \"feed.insertedDate\">\n                       </sports-social-blog-card>\n        </div>\n        <img src=\"/assets/images/left.png\" class=\"left\" (click)=\"leftScroll()\">\n        <img src=\"/assets/images/right.png\" class=\"right\" (click)=\"rightScroll()\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"feed\">\n         <p class=\"feedHeading\"><u><img src=\"/assets/images/instagram.png\" alt=\"\">The Social Feed</u></p>\n    <div style=\"position:relative\">    \n      <div class=\"socialFeed\" #socialFeed>\n        <div *ngFor=\"let data of instaArr\" class=\"instaData\">\n            <a href=\"{{data.link}}\" target=_blank> <img src={{data.url}} #socialFeedImg> </a>\n            <p id=\"username\" style=\"color:yellowgreen;\">@{{data.username}}</p>\n                <p id=\"time\">{{data.created_time}}</p>\n                <p id=content>{{data.text}}</p> \n            <!-- <div  *ngFor=\"let data of instaArr\" class=\"text\">\n                <p id=\"username\">@{{data.username}}</p>\n                <p id=\"time\">{{data.created_time}}</p>\n                <p id=content>{{data.text}}</p> \n               </div> -->\n        </div>\n        <img src=\"/assets/images/left.png\" class=\"left\" (click)=\"leftScroll2()\">\n        <img src=\"/assets/images/right.png\" class=\"right\" (click)=\"rightScroll2()\">   \n      </div>    \n    </div>\n  </div>\n  \n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\n</body>\n</html>\n<sports-social-footer></sports-social-footer>\n\n  \n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_send_service__ = __webpack_require__("../../../../../src/app/shared/services/send.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_time_service__ = __webpack_require__("../../../../../src/app/shared/services/time.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AboutComponent = (function () {
    function AboutComponent(margin, renderer, get, time, link, metaservice, titleservice, http, platformid) {
        // link.addTag(  { rel: 'canonical', href: 'https://www.sportsocial.in/'});
        // metaservice.addTags([
        //   { name: 'description', content: `Sports Social: Chase Your Sport aims to create a sustainable
        //     platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //     career in sports.` },
        //   { name: 'keywords' , content: `About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,
        //   Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport`},
        //   { name: 'title', content: 'Sports Social: Making it easier to play around'},
        //   { name: 'theme-color', content: '#4327a0'},
        var _this = this;
        this.margin = margin;
        this.renderer = renderer;
        this.get = get;
        this.time = time;
        this.link = link;
        this.metaservice = metaservice;
        this.titleservice = titleservice;
        this.http = http;
        this.title = 'About Sports Social | Chase Your Sport';
        this.blogs = [];
        this.instaArr = [];
        this.instadata = [];
        this.descTitle = "Sports social is";
        this.descTitleDisplay = "";
        this.desc = "Sports digital media and Networking Service that helps you to see\
 what's going around in your locality and around the globe right now & let's\
  you chase your passion to play your favourite sport.";
        this.descDisplay = "";
        //   { property: 'og:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
        //   platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //   career in sports.`},
        //   { property: 'og:Meta-description', content: `Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, 
        //   anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate 
        //   forms of physical activity.`},
        //   { property: 'og:title', content: 'About Sports Social | Chase Your Sport' },
        //   { property: 'og:url', content:  'https://www.sportsocial.in/' },
        //   { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        //   { property: 'og:site_name', content: 'Sport Social' },
        //   { property: 'fb:app_id', content: '1750709328507665'},
        //   { name: 'facebook:creator', content: '@SourabhArora'},
        //   { name: 'twitter:card', content: 'summary_large_image'},
        //   { name: 'twitter:site', content: '@Sportsoical'},
        //   { name: 'twitter:creator', content: '@SourabhArora'},
        //   { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service'},
        //   { name: 'twitter:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
        //   platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //   career in sports.`},
        //   { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        // ]);
        // this.isbrowser = isPlatformBrowser( platformid );
        this.margin.height.subscribe(function (top) { return _this.marginTop = top; });
    }
    AboutComponent.prototype.instafeed = function () {
        var _this = this;
        this.http.request('https://api.instagram.com/v1/users/self/media/recent/?access_token=3238782460.1408c01.74c84f4d73a048c69abe08f3d038e444')
            .subscribe(function (res) {
            _this.instadata = res.json().data;
            console.log("this is insta data::" + _this.instadata);
            for (var i = 0; i < _this.instadata.length; i++) {
                _this.instaimageArray = _this.instadata[i];
                _this.instaArr.push({
                    id: _this.instaimageArray.id,
                    profile_picture: _this.instaimageArray.user.profile_picture,
                    username: _this.instaimageArray.user.username,
                    url: _this.instaimageArray.images.standard_resolution.url,
                    created_time: _this.time.ExactDate(_this.instaimageArray.created_time),
                    text: _this.instaimageArray.caption.text,
                    link: _this.instaimageArray.link
                });
            }
        });
    };
    AboutComponent.prototype.getLatestBlog = function () {
        var _this = this;
        this.get.getBlogdata().subscribe(function (res) {
            var data = JSON.parse(res._body);
            console.log(res);
            for (var i in data) {
                // console.log(data[i].blogId)
                _this.blogs.push({
                    blogId: data[i].blogId,
                    heading: data[i].heading,
                    blogImage: data[i].blogImage,
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                    bloggerName: data[i].bloggerName,
                    metaDesc: data[i].metaDesc,
                    topic: data[i].topic,
                    insertedDate: _this.time.timePassed(data[i].insertedDate)
                });
            }
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
        // console.log(this.desc.nativeElement.textContent);
        this.instafeed();
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: "About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport" });
        this.metaservice.updateTag({ name: 'description', content: "Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate forms of physical activity." });
        this.getLatestBlog();
        this.typeWriterTitle(this.descTitle, 0);
        setTimeout(function () {
            var i = 0;
            i++;
            if (i <= 5) { }
            console.log(i);
        }, 1000);
        this.typeWriter(this.desc, 0);
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    AboutComponent.prototype.onResize = function (event) {
        var _this = this;
        this.margin.height.subscribe(function (top) {
            _this.marginTop = top;
        });
    };
    AboutComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.leftScroll2 = function () {
        this.socialFeed.nativeElement.scrollLeft -= this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll2 = function () {
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
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_send_service__["a" /* SendService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_get_service__["a" /* GetService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_time_service__["a" /* TimeService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_link_service__["a" /* LinkService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_router__ = __webpack_require__("../../../../../src/app/about/about.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_blog_card_blog_card_module__ = __webpack_require__("../../../../../src/app/cards/blog-card/blog-card.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__ = __webpack_require__("../../../../ng-masonry-grid/ng-masonry-grid.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__about_router__["a" /* AboutRouter */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__cards_blog_card_blog_card_module__["a" /* BlogCardModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_masonry_grid__["NgMasonryGridModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "../../../../../src/app/about/about.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");


var About_Router = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__about_component__["a" /* AboutComponent */]
    }
];
var AboutRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(About_Router);


/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    /* padding: 0px;\n    margin: 0px; */\n    font-family: 'Roboto',sans-serif;\n   /* width: 100%;\n   height: 100%; */\n}\n.prev-btn{\n    padding-bottom: 1%;\n    height: 20px;\n}\n.prev-btn>a>img{\n    margin: 1%;\n    margin-bottom: 1%;\n}\n.qabody{\n    margin-top: 2%;\n    border: 1px solid black;\n    overflow: hidden;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.QA{\n    border-top: 1px solid #bbbbbb;\n    /* white-space: nowrap; */\n}\n\n.side-nav{\n   padding: 0px;\n   width: 250px;\n   list-style-type: none;\n   display: inline-block;\n}\n.side-nav li{\n    border: 1px solid #bbbbbb;\n    border-top:none;\n    padding: 5% 5% 5% 1.5%;\n}\n.side-nav li >button>img{\n    margin-left: 3%;\n    width: 30%;\n    height: 30%;\n    text-align: center;\n    border-radius: 5px;\n}\n.side-nav li >button{\n    margin-left: 2%;\n    width: 200px;\n    height: auto;\n    color: black;\n    font-size: 1em;\n    font-weight: 200;\n    background:transparent;\n    text-align: left;\n    border: none;\n    cursor: pointer;\n}\n.side-nav li>button:hover{\n    font-weight: 700;\n    text-decoration:none;\n}\n/*Answers*/\n\n.answers{\n    margin-top: 5%;\n    max-width: 74%;\n    height: auto;\n    margin-left:5%; \n    vertical-align: top;\n    font-size: 1.2em;\n    font-weight: 500;\n    text-align: left;\n}\n\n@media  (max-width:500px)\n{\n  .qabody {\n    margin-top: 6%;\n    width:100%;\n    border: 1px solid black;\n    overflow: hidden;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n  }\n\n  .QA {\n    border-top: 1px solid #bbbbbb;\n    /* white-space: nowrap; */\n  }\n\n  .side-nav {\n    padding: 0px;\n    width: 95px;\n    list-style-type: none;\n    display: inline-block;\n  }\n\n    .side-nav li {\n      border: 1px solid #bbbbbb;\n      border-top: none;\n      padding: 2% 2% 2% .5%;\n    }\n\n      .side-nav li > button > img {\n        margin-left: 3%;\n        width: 18%;\n        height: 18%;\n        text-align: center;\n        border-radius: 3px;\n      }\n\n      .side-nav li > button {\n        width: 85px;\n        height: auto;\n        color: black;\n        font-size: .8em;\n        font-weight: 100;\n        background: transparent;\n        text-align: left;\n        border: none;\n      }\n\n        .side-nav li > button:hover {\n          font-weight: bold;\n          text-decoration:none;\n        }\n\n  .answers {\n    width:90%;\n    margin-top: 5%;\n    height: auto;\n    margin-left: 3%;\n    margin-right: 5%;\n    vertical-align: top;\n    font-size: .7em;\n    font-weight: 300;\n    text-align: left;\n  }\n  .answers>p{\n    width:90%;\n    height:auto;\n    margin-left:2%;\n   \n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.html":
/***/ (function(module, exports) {

module.exports = "  <meta name=\"description\" content=\"How use sportsocial\">\n  <meta name=\"description\" content=\"Sport social\">\n  <meta name=\"description\" content=\"How to find locality in sportsocial?\">\n\n  <SportSocial-help-center-header></SportSocial-help-center-header>\n  <div class=\"prev-btn\">\n   <a routerLink=\"/HelpCenter\"><img src=\"/assets/images/left.png\"></a>\n  </div>\n\n  <div class=\"qabody\">\n    <div class=\"QA\">\n      <ul class=\"side-nav\">\n        <li *ngFor=\"let qa of quesAns; let i = index\">\n          <button (click)=\"getAns(qa.id)\"><img src=\"{{qa.icon}}\">&nbsp;&nbsp;<p [innerHtml]=\"qa.ques\"></p></button>\n          </li>\n      </ul>\n    </div>\n\n    <div class=\"answers\">\n      <p [innerHtml]=\"Ans\"></p>\n    </div>\n  </div>\n\n  <SportSocial-help-center-footer></SportSocial-help-center-footer>"

/***/ }),

/***/ "../../../../../src/app/add-que-ans/add-que-ans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQueAnsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
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
    function AddQueAnsComponent(router, route, getService, load, meta, pagetitle, renderer) {
        this.router = router;
        this.route = route;
        this.getService = getService;
        this.load = load;
        this.meta = meta;
        this.pagetitle = pagetitle;
        this.renderer = renderer;
        this.quesAns = [];
        // quesAns:{
        //   id: string,
        //         topic_id: string,
        //         subtopic_id:string ,
        //         subtopic_name:string,
        //         ques: string,
        //         ans: string,
        //         icon: string
        // }[]=[];
        this.Ans = "";
        this.Ques = "";
        this.blog = { title: '', question: '', answer: '' };
    }
    AddQueAnsComponent.prototype.ngOnInit = function () {
        var topicId = +this.route.snapshot.paramMap.get("topicId");
        var subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
        this.getQuesAns(topicId, subtopicId);
        console.log("hello", this.quesAns);
    };
    AddQueAnsComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    AddQueAnsComponent.prototype.getQuesAns = function (topicId, subtopicId) {
        var _this = this;
        this.getService.getQA(topicId, subtopicId).subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.quesAns.push({
                    id: body[i].id,
                    topic_id: body[i].topic_id,
                    subtopic_id: body[i].subtopic_id,
                    subtopic_name: body[i].subtopic_name,
                    ques: body[i].ques,
                    ans: body[i].ans,
                    icon: body[i].icon
                });
            }
            _this.Ans = _this.quesAns[0].ans;
        });
    };
    AddQueAnsComponent.prototype.getAns = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ans = this.quesAns[qu].ans;
        }
        var convertedhtml = this.strip(this.Ans);
        this.meta.updateTag({ name: 'description', content: convertedhtml });
        this.getQues(id);
    };
    AddQueAnsComponent.prototype.getQues = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ques = this.quesAns[qu].ques;
        }
        var convertedhtml = this.strip(this.Ques);
        this.pagetitle.setTitle(convertedhtml);
        this.meta.updateTag({ name: 'title', content: convertedhtml });
    };
    AddQueAnsComponent.prototype.getsubtopicseo = function () {
    };
    AddQueAnsComponent.prototype.getImg = function (img) {
        for (var image in this.quesAns) {
            //console.log(image);
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
            __WEBPACK_IMPORTED_MODULE_4__shared_services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], AddQueAnsComponent);
    return AddQueAnsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-topic/add-topic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Roboto',sans-serif;\n    width: 100%;\n    height: 100%;\n}\n\n.content{\n    border-top: 1px solid #bbbbbb;\n    white-space: nowrap;\n}\n\n.content>div{\n    display: inline-block;\n    white-space: normal;\n    vertical-align: top;\n    margin-left: 0px;\n}\n.side-nav{\n   padding: 0px;\n   width: 20%;\n   list-style-type: none;\n   display: inline-block;\n}\n.side-nav li{\n    border: 1px solid #bbbbbb;\n    border-top:none;\n    padding: 5% 1.5% 5% 1.5%;\n}\n.side-nav li >button>img{\n    margin-left: 8%;\n    width: 13%;\n    height: 15%;\n    border-radius: 5px;\n}\n.side-nav li >button{\n    margin-left: 2%;\n    width: 95%;\n    color: black;\n    font-size: 1em;\n    font-weight: 300;\n    background:transparent;\n    border: none;\n    text-align: left;\n}\n.side-nav li>button:hover{\n    font-weight: 700;\n    text-decoration:none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-topic/add-topic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>add-topic works</p>\n<div class=\"content\">\n  <ul class=\"side-nav\">\n    <li *ngFor=\"let data of topics\"> \n        <button (click)=\"SubtopicsIconChange(data.id)\"><img src=\"{{data.icon}}\">&nbsp;&nbsp;&nbsp;{{data.name}}\n        </button>\n    </li>\n</ul>\n</div>\n"

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

module.exports = "<router-outlet></router-outlet>\n<router-outlet name=\"Match\"></router-outlet>\n<router-outlet name=\"News\"></router-outlet>\n<router-outlet name=\"AppDownload\"></router-outlet>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__help_center_help_center_component__ = __webpack_require__("../../../../../src/app/help-center/help-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__help_center_help_center_content_help_center_content_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__help_center_help_center_footer_help_center_footer_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-footer/help-center-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__help_center_help_center_header_help_center_header_component__ = __webpack_require__("../../../../../src/app/help-center/help-center-header/help-center-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_send_service__ = __webpack_require__("../../../../../src/app/shared/services/send.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_post_service__ = __webpack_require__("../../../../../src/app/shared/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__add_topic_add_topic_component__ = __webpack_require__("../../../../../src/app/add-topic/add-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sub_topic_sub_topic_component__ = __webpack_require__("../../../../../src/app/sub-topic/sub-topic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__add_que_ans_add_que_ans_component__ = __webpack_require__("../../../../../src/app/add-que-ans/add-que-ans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__application_application_component__ = __webpack_require__("../../../../../src/app/application/application.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__header_header_module__ = __webpack_require__("../../../../../src/app/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__about_about_module__ = __webpack_require__("../../../../../src/app/about/about.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__footer_footer_module__ = __webpack_require__("../../../../../src/app/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_services_seo_service__ = __webpack_require__("../../../../../src/app/shared/services/seo.service.ts");
/* angular modules */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pop_up_pop_up_component__["a" /* PopUpComponent */],
                __WEBPACK_IMPORTED_MODULE_16__help_center_help_center_component__["a" /* HelpCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__help_center_help_center_content_help_center_content_component__["a" /* HelpCenterContentComponent */],
                __WEBPACK_IMPORTED_MODULE_18__help_center_help_center_footer_help_center_footer_component__["a" /* HelpCenterFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__help_center_help_center_header_help_center_header_component__["a" /* HelpCenterHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__add_topic_add_topic_component__["a" /* AddTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sub_topic_sub_topic_component__["a" /* SubTopicComponent */],
                __WEBPACK_IMPORTED_MODULE_25__add_que_ans_add_que_ans_component__["a" /* AddQueAnsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__application_application_component__["a" /* ApplicationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing_app_router__["a" /* AppRoute */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__open_cards_open_match_card_open_match_card_module__["a" /* OpenMatchCardModule */],
                __WEBPACK_IMPORTED_MODULE_15__open_cards_open_news_card_open_news_card_module__["a" /* OpenNewsCardModule */],
                __WEBPACK_IMPORTED_MODULE_28__home_home_module__["HomeModule"],
                __WEBPACK_IMPORTED_MODULE_29__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_30__about_about_module__["a" /* AboutModule */],
                __WEBPACK_IMPORTED_MODULE_31__footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__shared_services_property_service__["a" /* PropertyService */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_get_service__["a" /* GetService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_services_send_service__["a" /* SendService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_services_time_service__["a" /* TimeService */],
                __WEBPACK_IMPORTED_MODULE_10__shared_services_match_data_service__["a" /* MatchDataService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_pop_up_service__["a" /* PopUpService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_services_link_service__["a" /* LinkService */],
                __WEBPACK_IMPORTED_MODULE_32__shared_services_seo_service__["a" /* SeoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/application/application.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    margin-top: 2.8%;\n}\n.bg-1{\n    background-image: url('/assets/images/car1.jpg');\n    height: 900px;\n    width:100%;\n    background-size: cover;\n    background-attachment: fixed;\n}\n.inside-div{\n    width:450px;\n    height: 900px;\n    border: 2px solid red;\n    background: white;\n}\n.inside-div>img{\n    width:100%;\n    height: 450px;\n    \n}\n.inside-div>h2{\n    width: 90%;\n    color:orange;\n\n}\n.bg-2{\n    background-image: url('/assets/images/car2.jpg');\n    height: 900px;\n    width:100%;\n    background-size: cover;\n    background-attachment: fixed;\n}\n.bg-2>img{\n    width:400px;\n    height: 900px;\n    margin-left: 72%;\n}\n.bg-2>h2{\n    color:orange;\n    width:900px;\n    margin-left: 30%;\n}\n.bg-3{\n    background-image: url('/assets/images/car4.jpg');\n    height: 900px;\n    width:100%;\n    background-attachment: fixed;\n    background-size: cover;\n}.bg-3>img{\n    width:400px;\n    height: 900px;\n    position: right;\n    /* margin-left: 72%; */\n    overflow-x: hidden;\n\n}\n@media(max-width:500px){\nbody{\n    background: none !important;\n    width: 100%;\n}\n.bg-1{\n    background-image: none;\n    height: 900px;\n    width:100%;\n    background-size: cover;\n    background-attachment: fixed;\n}\n.bg-1>img{\n    width:400px;\n    height: 900px;\n}\n.bg-1>h2{\n    width:240px;\n}\n.bg-2{\n    background-image: none;\n    height: 900px;\n    width:100%;\n    background-size: cover;\n    background-attachment: fixed;\n}\n.bg-2>h2{\n    color:orange;\n    width:240px;\n    \n}\n.bg-2>img{\n    width:400px;\n    height: 900px;\n}\n.bg-3{\n    background-image: none;\n    height: 900px;\n    width:100%;\n    background-attachment: fixed;\n    background-size: cover;\n}.bg-3>img{\n    width:400px;\n    height: 900px;\n    position: right;\n    /* margin-left: 72%; */\n    overflow-x: hidden;\n\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/application/application.component.html":
/***/ (function(module, exports) {

module.exports = "\n<sports-social-header></sports-social-header>\n<div class=\"bg-1\">\n   <div class=\"inside-div\"> <img src=\"/assets/images/car6.jpg\">\n  \n    <h2>Sports Social: Chase Your Sport aims to create a sustainable\n        platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n        career in sports.</h2></div>\n    \n</div>\n<div class=\"bg-2\">\n    <img src=\"/assets/images/car6.jpg\">\n    <p>Hello sport social !!</p>\n    <h2>Indian Sports Trends,Sports Social,Career in Sports,current trends\n        in sports,Indian Sports History, Sports Social media,sports technology,Sports blog,Indian Sports\n        Blog,Multiplayer Strategy Video Games,Health and Fitness Tips,Sports Analytics blog, Indian sports\n        news,outlook in sports industry,future trends in sports,sports business trends, sports articles,\n        sports management,Sports Social network india,sports jobs\n      </h2>\n</div>\n<div class=\"bg-3\">\n    <img src=\"/assets/images/insta.png\">\n</div>\n<div class=\"bg-4\">\n  \n</div>\n<sports-social-footer></sports-social-footer>"

/***/ }),

/***/ "../../../../../src/app/application/application.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicationComponent = (function () {
    function ApplicationComponent(titleservice, metaservice) {
        this.titleservice = titleservice;
        this.metaservice = metaservice;
        this.title = 'Download the Sports Social App from Google PlayStore';
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: "Sports Social,Sports Social App,Best Sports app India,Play Your Sport,Sports Networking app,Sports Profile,Playmates,Sports Fans,Connect to Sports players,Sports Venues Near by,Sports app,All Sports app,Free Sports App,Online Sports App" });
        this.metaservice.updateTag({ name: 'description', content: "Sports Social app is your personal sports manager that lets you maintain your sports profile,Making your sports & fitness groups (Playmates), Follow others sports activities and create a fan following , Connect with other sports enthusiasts, Discover sports and fitness activities near you and much more. You can also locate the Venues Nearby for more than 10 Sports including Cricket, Football, Lawn Tennis, Badminton etc." });
    };
    ApplicationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-application',
            template: __webpack_require__("../../../../../src/app/application/application.component.html"),
            styles: [__webpack_require__("../../../../../src/app/application/application.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cards/blog-card/blog-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog-card{\n    width: 100%;\n    position: relative;\n}\n.blog-card > img {\n    width: 100%;\n}\n.blog-heading {\n    /* background-color: black; */\n    opacity: 0.8;\n    position: absolute;\n    width: 100%;\n    left: 0%;\n    right: 0;\n    top:0;\n    bottom: 0px;\n}\n.blog-heading .heading{\n    margin-top:50%;\n    color: white;\n    display: block;\n    width: 20%;\n    font-weight: 100;\n    text-align: left;\n    position: absolute;\n    left: 10px;\n    margin-right:10px;\n    \n}\n.blog-heading .bloggername{\n    margin-top:8%;\n    margin-bottom: 0%;\n    \n    color: rgb(10, 253, 221);\n    display: block;\n    width: 40%;\n    text-align: left;\n    position: absolute;\n    left: 10px;\n    margin-right:10px;\n}\n.blog-heading #topic{\n    margin-top:10px;\n    margin-bottom: 0%;\n    color: white;\n    display: block;\n    width: 40%;\n    text-align: left;\n    position: absolute;\n    left: 10px;\n    margin-right:10px;\n}\n.blog-heading #views{\n    margin-top:55%;\n    margin-left: 80%;\n    color: white;\n    display: block;\n    width: 20%;\n    position: absolute;\n    margin-right:5px;\n}\n.time {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.time > img {\n    width: 25px;\n    height: 25px;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n.time > span{\n    display: inline-block;\n    vertical-align: middle;\n    color: #bbbbbb;\n}\n@media(max-width:500px){\n    .heading>p{\n        margin-top:100px;\n        color: #ffffff;\n        display: block;\n        width: 20px;\n        text-align: left;\n        position: absolute;\n        left: 10px;\n        margin-right:10px;\n        \n    }\n    .blog-heading #views{\n        margin-top:15%;\n        margin-left: 73%;\n        color: white;\n        display: block;\n        width: 20%;\n        position: absolute;\n        margin-right:2%;\n    }\n    .blog-heading .bloggername{\n        margin-top:15%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/blog-card/blog-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-card\">\n  <a href=\"{{url}}\" target=\"_blank\">\n    <img src=\"{{blogImage}}\" alt=\"\">\n    <div class=\"blog-heading\">\n         <span class=\"heading\"><p>{{heading}}</p></span> \n         <span id=\"topic\">{{topic}}</span>\n         <p class=\"bloggername\">By:<br>{{bloggerName}}</p>\n         <span id=\"views\">Views:{{viewCount}}</span>\n    </div>\n    <div class=\"time\">\n      <img src=\"/assets/images/sports-social-clock.png\" alt=\"\">\n      <span>{{insertedDate}}</span>\n    \n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cards/blog-card/blog-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCardComponent; });
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

var BlogCardComponent = (function () {
    function BlogCardComponent() {
    }
    BlogCardComponent.prototype.ngOnInit = function () {
    };
    BlogCardComponent.prototype.ngAfterViewInit = function () {
        this.url = 'https://www.chaseyoursport.com/' + this.topic
            + '/' + this.shortTitle + '/' + this.blogId;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "blogId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "heading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "blogImage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "viewCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "shareCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "bloggerName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "metaDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "imageDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "topic", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "shortTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BlogCardComponent.prototype, "insertedDate", void 0);
    BlogCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-blog-card',
            template: __webpack_require__("../../../../../src/app/cards/blog-card/blog-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cards/blog-card/blog-card.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated
        }),
        __metadata("design:paramtypes", [])
    ], BlogCardComponent);
    return BlogCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cards/blog-card/blog-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_card_component__ = __webpack_require__("../../../../../src/app/cards/blog-card/blog-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlogCardModule = (function () {
    function BlogCardModule() {
    }
    BlogCardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__blog_card_component__["a" /* BlogCardComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__blog_card_component__["a" /* BlogCardComponent */]
            ]
        })
    ], BlogCardModule);
    return BlogCardModule;
}());



/***/ }),

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

module.exports = "<p>\n  live-match-card works!\n</p>\n"

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
exports.push([module.i, "\n\n.userImage{\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.userImage > img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n.matchDetails{\n    width: 48%;\n    display: inline-block;\n    vertical-align: middle;\n}\n.userName{\n    display: inline-block;\n    vertical-align: middle;\n    max-width: 60%;\n    color: #024771;\n    font-weight: 700;\n    font-size: 1em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin-right: 2%;\n}\n\n.activity-name {\n    display: inline-block;\n    vertical-align: middle;\n    max-width: 38%;\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n.gameName{\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n}\n.activityDate{\n    color: black;\n    font-size: 0.8em;\n    font-weight: 400 ;\n}\n.match-date{\n    min-width: 32%;\n    text-align: right;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n\n}\n.match-date > img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 28px;\n    height: 28px;\n}\n.match-date > span{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.9em;\n    color: #888888;\n    text-align: left;\n}\n\n.restrictionCount{\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 700;\n}\n\n.matchText{\n    padding: 2%;\n    font-size: 0.95em;\n    font-weight: 500;\n    color: black;\n}\n\n.matchImage{\n    width: 100%;\n    max-height: 300px;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.matchImage > img {\n    width: 100%;\n}\n.matchImage:hover img {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n.action-count{\n    padding: 2%;\n}\n\n.action-count > a {\n    text-decoration: none;\n    margin-right: 7px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500\n}\n.action-count > a > span {\n    font-weight: 400;\n}\n\n.actions-match{\n    padding: 3%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nbutton {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n\n.actions-match > button > img {\n    width: 30px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 2px;\n}\n\n.actions-match > button > span {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-match > button > span:hover{\n    font-weight: 700\n}\n\n.remove {\n    position: absolute;\n}\n.gameName {\n    font-weight: 700 ;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/match-card/match-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-social-card\" >\n  <div class=\"sports-social-card-header\">\n    <div class=\"userImage\">\n      <img src=\"{{doerPic}}\"  (error)=\"defaultImage()\" #userImg>\n    </div>\n    <div class=\"matchDetails\">\n      <div class=\"userName\">{{doerName}} </div>\n      <span class=\"activity-name\">{{activityName}}</span>\n      <div class=\"gameName\">{{gameName}} Match</div>\n      <div class=\"activityDate\">{{matchDate}}</div>\n    </div>\n    <div class=\"match-date\">\n      <img src=\"/assets/images/sports-social-clock.png\" alt=\"\">\n     <span>{{activityDate}}</span> \n    </div>\n    <div class=\"restrictionCount\">{{joineeCount}} playing</div>\n  </div>\n  <div class=\"matchText\">{{matchText}}</div>\n  <div class=\"matchImage\" (click) = \"openPopUp(eventId, gameName, $event )\">\n    <img src=\"{{matchImage}}\" alt=\"\">\n  </div>\n  <div class=\"action-count\" #actionsCount>\n    <a href=\"#\" *ngIf=\"commentCount > 0\">\n      {{commentCount}} \n      <span>{{commentCount > 1 ? 'Comments' : 'Comment'}}</span>  \n    </a>\n    <a href=\"#\" *ngIf=\"promoteCount > 0\">\n      {{promoteCount}} \n      <span>{{promoteCount > 1 ? 'Promotes' : 'Promote'}}</span>  \n    </a>\n    <a href=\"#\" *ngIf=\"watchCount > 0\">\n      {{watchCount}} \n      <span>Watching</span> \n    </a>\n  </div>\n  <div class=\"actions-match\">\n    <button class=\"playButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-play.png\" alt=\"\"> <span>Play</span>  \n    </button>\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-match-talks.png\" alt=\"\"><span>Comment</span>  \n    </button>\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-promote.png\" alt=\"\"> <span>Promote</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-watching.png\" alt=\"\"> <span>Watch</span>\n    </button>\n  </div>\n</div>\n\n\n"

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
exports.push([module.i, "\n.news-info {\n    \n}\n.source-img{\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    margin-right: 5px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.source-img > img  {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n\n.source-name {\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 1.2em;\n    margin-right: 2%;\n    color: #024771;\n}\n.news-image-holder{\n    width: 100%;\n    max-height: 320px;\n    overflow: hidden;\n    cursor: pointer;\n}\n.news-image-holder > img {\n    width: 100%;\n}\n\n.desc{\n    margin-top: 5px;\n    font-size: 1em;\n    font-weight: 500;\n    overflow: hidden;\n    position: relative; \n    line-height: 1.2em;\n    max-height: 2.4em;\n    text-align: left; \n    padding-left: 1em;\n    padding-right: 1em;\n}\n\n.desc > a {\n    color: black;\n}\n\n.desc :before{\n  content: '...';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.desc :after{\n  content: '';\n  position: absolute;\n  right: 0;\n  width: 1em;\n  height: 1em;\n  margin-top: 0.2em;\n  background: white;\n}\n.action-count{\n    padding: 2%;\n}\n\n.action-count > a {\n    text-decoration: none;\n    margin-right: 7px;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500\n}\n.actionsCount  > a > span {\n    font-weight: 400;\n}\n\n.actions-news{\n    padding: 3%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nbutton {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n\n.actions-news > button > img {\n    width: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n\n.actions-news > button > span {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-news > button > span:hover{\n    font-weight: 700\n}\n.news-date{\n    position: absolute;\n    top: 5px;\n    right: 5px;\n\n}\n.news-date > img{\n    display: inline-block;\n    vertical-align: middle;\n    width: 28px;\n    height: 28px;\n}\n.news-date > span{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.9em;\n    color: #888888;\n}\n@media ( max-width: 720px) {\n    .source-img{\n        width: 40px;\n        height: 40px;\n    }\n    .source-name {\n        font-size: 1em;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .source-img{\n        width: 40px;\n        height: 40px;\n    }\n    .source-name {\n        font-size: 1.1em;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cards/news-card/news-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sports-social-card\">\n  <div class=\"sports-social-card-header\">\n        <div class=\"source-img\">\n          <img src=\"{{sourceImage}}\" alt=\"\">\n        </div>\n        <h1 class=\"source-name\">{{sourceName}}</h1>\n        <div class=\"news-date\">\n            <img src=\"/assets/images/sports-social-clock.png\" alt=\"\">\n          <span>{{publishedAt}}</span>\n        </div>\n  </div>\n  <div class=\"news-image-holder\">\n    <img src=\"{{newsImage}}\" alt=\"\" (error)= \"defaultImage()\" (click)=\"openPopUp(newsId)\">\n  </div>\n  <h2 class=\"desc\">\n      <a href=\"{{url}}\" target=\"_blank\">{{desc}}</a>\n  </h2>\n  <div class=\"action-count\" #actionsCount>\n    <a href=\"\" *ngIf = \"likeCount > 0\">{{likeCount}} {{likeCount > 1 ? 'Likes': 'Like' }}</a>\n    <a href=\"\" *ngIf = \"shareCount > 0\">{{shareCount}} {{shareCount > 1 ? 'Shares': 'Share'}}</a>\n    <a href=\"\" *ngIf = \"commentCount > 0\">{{commentCount}} {{commentCount > 1 ? 'Comments': 'Comment' }}</a>\n  </div>\n  <div class=\"actions-news\">\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\"><span>Comment</span>  \n    </button>\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\"> <span>Like</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-share-black.png\" alt=\"\"> <span>Share</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n        <img src=\"/assets/images/sports-social-save-black.png\" alt=\"\"> <span>Save</span>\n      </button>\n  </div>\n</div>\n\n<template #openNewsCard></template>"

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
exports.push([module.i, "\n.carousel{\n    width:100%;\n    height: 300px;\n    background-color: #4372a0;\n}\n.carousel > p {\n    position: relative;\n    top: 45%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); \n    width: 100%;\n    text-align: center;\n    color: white;\n    font-size: 1.8em;\n    font-weight: 500;\n}\n.carousel a{\n    color: #ffffff;\n    font-weight: 300;\n}\n@media ( max-width: 720px) {\n    .carousel {\n        height: 200px;\n    }\n    .carousel > p{\n        font-size: 1.4em;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .carousel {\n        height: 250px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\" #carousel>\n  <p>See What's Going Around</p>\n  <p><a href=\"https://goo.gl/qrgCz5\" target=\"_blank\">Download The App</a></p>\n</div>\n"

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
    function CarouselComponent(renderer, recieveHeight, sendBottom, pagetitle, metaservice) {
        this.renderer = renderer;
        this.recieveHeight = recieveHeight;
        this.sendBottom = sendBottom;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.title = " Around the World | Sports Social ";
    }
    CarouselComponent.prototype.setTopMargin = function () {
        var _this = this;
        this.recieveHeight.ofHeader.subscribe(function (data) {
            _this.renderer.setStyle(_this.carousel.nativeElement, 'margin-top', data + 'px');
        });
    };
    CarouselComponent.prototype.sendBottomOfCarousel = function () {
        var bottom = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.carousel.nativeElement).bottom;
        this.sendBottom.ofCarousel.next(bottom);
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.setTopMargin();
        this.sendBottomOfCarousel();
        // this.pagetitle.setTitle(this.title);
        // this.metaservice.updateTag({name:'title',contetn:this.title});
        // this.metaservice.updateTag({name:'keywords',content:"Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news"});
        // this.metaservice.updateTag({name:'meta-description',content:"Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned"});
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
            __WEBPACK_IMPORTED_MODULE_1__shared_services_property_service__["a" /* PropertyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */]])
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
exports.push([module.i, "\nfooter{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    right: 0px;\n    z-index: 20;\n    background-color: white;\n    padding: 0.5%;\n    box-shadow: -1px -1px 4px #888888;\n}\nfooter > .social-handle> img{\n    width: 30px;\n    height: 30px;\n    vertical-align: 55px;\n    cursor: pointer;\n}\nfooter img:hover{\n   -webkit-transform: scale(1.1);\n           transform: scale(1.1)\n}\n\nfooter > p{\n    display: inline-block;\n    vertical-align: middle;\n    margin-top: 0.6%;\n    font-size: 0.9em;\n    \n}\na{\n    color: #024771;\n    font-weight: 500;\n    text-decoration: none;\n}\na:hover{\n    font-weight: 700\n}\n.social-handle {\n    text-align: center;\n    height: 30px;\n}\n.social-handle>a>img {\n    margin-right: 10px\n}\n\n\n\n@media ( max-width: 720px) {\n   \n}\n@media ( max-width: 980px)/*  and ( min-width: 720px) */ {\n    footer {\n        display: block;\n        text-align: center;\n    }\n    p{\n        margin-right: 2%\n    }\n    .social-handle {\n         width: 100%;\n         display: -webkit-box;\n         display: -ms-flexbox;\n         display: flex;\n         -ms-flex-pack: distribute;\n             justify-content: space-around\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer #footer>\n  <p>\n    <a routerLink=\"/about\">About</a> \n  </p>\n  <p>\n    <a routerLink=\"/application\">App</a> \n  </p>\n  <p>\n    <a href=\"https://www.chaseyoursport.com\" target=\"_blank\">Blog</a> \n  </p>\n  <p>\n    <a routerLink=\"/Terms Of Service\">Terms and conditions</a>   \n  </p>\n  <p>\n    <a routerLink=\"/Privacy Policy\">Privacy Policy</a> \n  </p>\n  <p>\n    <a routerLink=\"/OpenArena\">Open Arena</a>   \n  </p>\n  <p> \n    <a routerLink=\"/AroundTheWorld\">Around The World</a>   \n  </p>\n  <div class=\"social-handle\">\n    <a href=\"https://www.facebook.com/chaseyoursport\" target=\"_blank\"><img src=\"/assets/images/facebook.png\" alt=\"\"></a>\n    <a href=\"https://www.twitter.com/chaseyoursport\" target=\"_blank\"><img src=\"/assets/images/twitter.png\" alt=\"\"></a>\n    <a href=\"https://www.youtube.com/channel/UC8dRPjyfNkxmOozPuUs5YVQ\" target=\"_blank\"><img src=\"/assets/images/youtube.png\" alt=\"\"></a>\n    <a href=\"https://www.instagram.com/chaseyoursport\" target=\"_blank\"><img src=\"/assets/images/instagram.png\" alt=\"\"></a>\n    <a href=\"https://www.quora.com/topic/Sports-Social-Indias-First-Sports-Social-Network\" target=\"_blank\"><img src=\"/assets/images/quora.png\" alt=\"\"></a>\n  </div>\n  \n</footer>\n"

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

/***/ "../../../../../src/app/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery {\n    width: 100%;\n    position: relative;\n}\n\n.left {\n    position: absolute;\n    left: 5px;\n    top: 45%;\n    cursor: pointer;\n}\n.right {\n    position: absolute;\n    right: 5px;\n    top: 45%;\n    cursor: pointer;\n}\n.loader {\n    position: absolute;\n    top:60%;\n    width:8%;\n    left:46% ;\n}\n.gallery-item{\n    width: 100%;\n}\n\n.image-action{\n    width: 100%;\n    position: absolute;\n    left:0;\n    right: 0;\n    bottom: 0px;\n    background-color: #ffa600;\n    opacity: 0.7\n}\n.image-action > div {\n    width: 10%;\n    display: inline-block;\n    vertical-align: middle;\n    margin: 2%;\n}\n.image-action img {\n    margin-right: 2%;\n    width: 20px;\n    display: inline-block;\n    vertical-align: middle;\n}\nspan {\n    color: #888888;\n    display: inline-block;\n    vertical-align: middle;\n}\n.text {\n    width: 100%;\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery\">\n  <img *ngIf=\"hasprevious()\" src=\"/assets/images/left.png\" class=\"left\" (click)=\"left()\">\n  <img *ngIf=\"loading\" src=\"/assets/images/sports-social-loading.gif\" alt=\"\" class=\"loader\">\n  <img *ngIf=\"hasnext()\" src=\"/assets/images/right.png\" class=\"right\" (click)=\"right()\">\n  <div class=\"image-action\">\n    <div class=\"like\">\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\">\n      <span>{{likeCount}}</span>\n    </div>\n    <div class=\"comment\">\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\">\n      <span>{{commentCount}}</span>\n    </div>\n  </div>\n  <img src=\"{{image}}\" class=\"gallery-item\">\n</div>\n<p *ngIf = \"text !== undefined\" class=\"text\">{{text}}</p>"

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

/***/ "../../../../../src/app/global-feed/global-open-arena-feed/global-open-arena-feed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nheader{\n    width: 100%;\n    padding: 0.4% 1% 0.4% 1%;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    z-index: 10;\n    background-color: #ffffff;\n    box-shadow: 1px 1px 2px #bbbbbb;\n}\n.brand, .search, .brand-image, .brand-title{\n    display: inline-block;\n    vertical-align: middle;\n}\n.brand-image{\n    width: 45px;\n    height: 45px;\n}\n.brand-image > img {\n    width: 100%;\n    height: 100%;\n}\n.brand-title > span{\n    font-size: 1.5em;\n    font-weight: 700;\n}\n.brand-title > span:first-child{\n    color: #024771;\n    margin-right: 5px;\n}\n.brand-title > span:nth-of-type(2){\n    color: #ffa600;\n}\n.brand-title > p{\n    text-align: center;\n    color: #024771;\n    font-size: 0.8em;\n    font-style: italic;\n}\n.search{\n    width: 40%;\n    margin-left: 4%;\n    margin-right: 2%;\n}\ninput{\n    width: 100%;\n    display: block;\n    border: none;\n    background-image: url('/assets/images/sports-social-search.png');\n    background-size: 18px;\n    background-repeat: no-repeat;\n    background-position: left;\n    background-position-x: 5px;\n    height: 35px;\n    text-align: center;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    border-radius: 25px;\n    outline: none;\n}\nul{\n    list-style: none;\n}\nli{\n    display: inline-block;\n}\na{\n    text-decoration: none;\n}\n.menu{\n    position: fixed;\n    right: 20px;\n    top: 17px;\n    width: 25%;\n    text-align: right;\n}\n.menu li  {\n    margin-left: 5%;\n}\n.menu li > a{\n    color: #024771;\n    font-size: 0.9em;\n    font-weight: 500;\n}\n.menu li > a:hover{\n    font-weight: 700;\n    color: #ffa600;\n}\n.dropdown-menu-image-holder{\n    position: fixed;\n    top:12px;\n    right: 20px;\n    width: 30px;\n    height: 30px;\n}\n.dropdown-menu-image-holder > img {\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n.dropdown-cancel-image-holder {\n    width: 95%;\n    height: 10px;\n    text-align: right;\n    margin: 0% auto;\n}\n.dropdown-cancel-image-holder > img {\n   \n    width: 12px;\n    height: 12px;\n    cursor: pointer;\n}\n.dropdown-menu{\n    width: 60%;\n    position: fixed;\n    top:60px;\n    left: 20%;\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n\n}\n.dropdown-menu > ul > li{\n    display: block;\n    text-align: center;\n    padding: 1%;\n    color: #024771;\n    font-size: 1em;\n    font-weight: 500;\n    border-bottom: 1px solid #bbbbbb;\n    width: 95%;\n    margin: 0% auto;\n}\n.dropdown-search{\n    width: 100%;\n}\n.dropdown-search > input {\n    width: 95%;\n    margin: 1% auto; \n    background-image: unset;\n    border-radius: 0px;\n}\nbutton{\n    display: block;\n    margin: 1% auto;\n    color: #ffffff;\n    background-color: #ffa600;\n    padding: 1.5%;\n    width: 20%;\n    border: none;\n    outline: none;\n    border-radius: 4px;\n    box-shadow: 2px 2px 4px #bbbbbb;\n}\n.active{\n    color: #ffa600 !important\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header #header>\n  <div class=\"brand\">\n    <a routerLink=\"/\">\n      <div class=\"brand-image\">\n        <img src=\"/assets/images/sports-social-logo.png\" alt=\"Sport-Social-logo\">\n      </div>\n      <div class=\"brand-title\">\n        <span>Sports</span>\n        <span>Social</span>\n        <p>ChaseYourSport</p>\n      </div>\n    </a>\n  </div>\n  <div class=\"search\" *ngIf=\"!isSearchInDropdown\">\n    <input type=\"text\" placeholder=\"Search Sport Social\">\n  </div>\n  <div class=\"menu\" *ngIf=\"!isMenuInDropdown\">\n    <ul>\n      <li>\n        <a routerLink=\"/about\" class=\"About btn btn-responsive\">About</a>\n      </li>\n      <li>\n        <a routerLink=\"/application\">App</a> <!--https://goo.gl/qrgCz5-->\n      </li>\n      <li>\n        <a routerLink=\"/HelpCenter\">Help Center</a> \n      </li>\n      \n    </ul>\n  </div>\n\n  <div class=\"mobile-view\" *ngIf=\"mobileView\">\n    <div class=\"dropdown-menu-image-holder\">\n      <img src=\"/assets/images/sports-social-menu.png\" (click)=\"openDropdown()\">\n    </div>\n    <div class=\"dropdown-menu\" *ngIf=\"isDropdownIconclicked\">\n      <div class=\"dropdown-cancel-image-holder\">\n        <img src=\"/assets/images/sports-social-cancel-black.png\"  (click)=\"closeDropdown()\">\n      </div>\n      <ul  *ngIf=\"isMenuInDropdown\">\n          <li>\n            <a routerLink=\"/about\">About</a> \n          </li>\n          <li>\n            <a routerLink=\"#\">App</a> <!--https://goo.gl/qrgCz5-->\n          </li>\n          <li>\n            <a routerLink=\"/HelpCenter\" routerLinkActive=\"active\">Help Center</a> \n          </li>\n          \n      </ul>\n      <ng-container  *ngIf=\"isSearchInDropdown\">\n        <div class=\"dropdown-search\">\n          <input type=\"text\" placeholder=\"Search Sports Social\">\n        </div>\n        <button>Search</button>\n      </ng-container>\n    </div>\n  </div>\n\n    \n</header>\n\n"

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

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n    font-family: 'Roboto',sans-serif;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\np{\r\n    font-size: 1.3em;\r\n    font-weight: 300;\r\n    width: auto;\r\n    margin:3% auto;\r\n    color:black;\r\n    text-align: center;\r\n}\r\n\r\n.content{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    padding-bottom: 5%;\r\n    border-top: 1px solid purple;\r\n}\r\n.content>div{\r\n    display: inline-block;\r\n    white-space: normal;\r\n    vertical-align: top;\r\n    margin-left: 0px;\r\n}\r\n.side-nav{\r\n   padding: 0px;\r\n   width: 400px;\r\n   list-style-type: none;\r\n   display: inline-block;\r\n}\r\n.side-nav li{\r\n    border: 1px solid #bbbbbb;\r\n    border-top:none;\r\n    padding: 5% 1.5% 5% 1.5%;\r\n}\r\n.side-nav li>a>button>img{\r\n    margin-left: 8%;\r\n    padding-right: 15px;\r\n    width: 13%;\r\n    height: 15%;\r\n    border-radius: 5px;\r\n}\r\n.side-nav li>a >button{\r\n    margin-left: 2%;\r\n    width: 90%;\r\n    color: black;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    background:transparent;\r\n    border: none;\r\n    text-align: left;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.side-nav li>a>button:hover{\r\n    font-weight: bolder;\r\n    text-decoration:none;\r\n}\r\n.side-nav li>a>button:focus{\r\n    font-weight: bolder;\r\n\r\n}\r\n/*====Subtoipcs=======*/\r\n.subtopicdata{\r\n    display: inline-block;\r\n    width:120px;\r\n    height: 120px;\r\n    padding:2%;\r\n    padding-bottom: 8%;\r\n    margin: 4% 0% 0% 8%;\r\n    vertical-align: top;\r\n    border-radius: 5px;\r\n    /* border: 1px solid black; */\r\n\r\n}\r\n.subtopicdata>a>p{\r\n    font-size: 1.2em;\r\n    font-weight: 400;\r\n    width: 140px;\r\n    margin-left: -10px;\r\n    text-align: center;\r\n}\r\n\r\n.subtopicdata a>p:hover{\r\n    font-weight: bolder;\r\n    text-decoration: none;\r\n}\r\n\r\n/*subtopics end*/\r\n\r\n.mobileNav{\r\n    display: block;\r\n    width: 100%;\r\n    height: 35px;\r\n}\r\n.menuImgHolder{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color:red;\r\n}\r\n.menuImg{\r\n  margin-left: 2%;\r\n  width: 30px;\r\n  height: 100%;\r\n}\r\n.dropdown-menu{\r\n    width: 70%;\r\n    height: auto;\r\n    position: fixed;\r\n    top:10%;\r\n    left: 18%;\r\n    white-space: normal;\r\n    padding-left: 4%;\r\n}\r\n.dropdown-menu button{\r\n    width:auto;\r\n    margin-right: 1%;\r\n}\r\n.mobileNavIcon{\r\n    display: inline-block;\r\n    max-width: 8%;\r\n    max-height: 12%;\r\n    vertical-align: top;\r\n    margin: 3% 8% 3% 8%;\r\n}   \r\n.mobileNavIcon img{\r\n    width: 100%;\r\n    height: 75%;\r\n}\r\n.mobileNavIcon p{\r\n    text-align: center;\r\n    width:auto;\r\n    font-size: 0.9em;\r\n    font-weight: 400;\r\n    margin-top: 15px;\r\n    color: #101010;\r\n}\r\n.menuImgHolder>img:hover{\r\n  cursor:pointer;\r\n}\r\n\r\n.content2{\r\n        width:300px;\r\n        margin-left: 0%;\r\n        background-color: orange;\r\n    }\r\n    .content2>ul>li{\r\n        list-style-type: none;\r\n        border:1px solid red;\r\n        border-top: none;\r\n        width: 300px;\r\n        height: 35px;\r\n        float: left;\r\n    }\r\n    .mynav>li>button{\r\n        width:15px;\r\n        height: 5px;\r\n        background: transparent;\r\n    }\r\n    .mynav>li>a>button>p{\r\n        font-size: .9em;\r\n        margin-left: 30%;\r\n        margin-top: -10%;\r\n        \r\n    }\r\n    .mynav>li>a>button>img{\r\n        width:20px;\r\n        height: 20px;\r\n        margin-left: -60%;\r\n        position: relative;\r\n    }\r\n    \r\n/*================== media query ============== */\r\n@media(max-width:500px){\r\n    .content{\r\n        display: -webkit-inline-box;\r\n        display: -ms-inline-flexbox;\r\n        display: inline-flex;\r\n    }\r\n    /* .content2{\r\n        width:300px;\r\n    }\r\n    .menu{\r\n        margin-left:-30%;\r\n    }\r\n\r\n    .content2>ul>li{\r\n        list-style-type: none;\r\n        border:1px solid red;\r\n        border-top: none;\r\n        width: 300px;\r\n        height: 35px;\r\n        float: left;\r\n        \r\n        \r\n    }\r\n    .mynav>li>button{\r\n        width:15px;\r\n        height: 5px;\r\n        background: transparent;\r\n    }\r\n    .mynav>li>a>button>p{\r\n        font-size: .9em;\r\n        margin-left: 30%;\r\n        margin-top: -10%;\r\n        \r\n    }\r\n    .mynav>li>a>button>img{\r\n        width:20px;\r\n        height: 20px;\r\n        margin-left: -60%;\r\n        position: relative;\r\n    }\r\n    .side-nav{\r\n        visibility: hidden;\r\n    } */\r\n  .side-nav{\r\n      display: none;\r\n  }\r\n    .side-nav {\r\n    padding: 0px;\r\n    width: 285px;\r\n    list-style-type: none;\r\n    display: inline-block;\r\n  }\r\n\r\n    .side-nav li {\r\n      border: 1px solid #bbbbbb;\r\n      border-top: none;\r\n      padding: 2% .4% 2% .2%;\r\n    }\r\n\r\n      .side-nav li >a> button > img {\r\n        margin-left: 2%;\r\n        width: 35px;\r\n        height: 35px;\r\n        border-radius: 5px;\r\n      }\r\n\r\n      .side-nav li >a> button {\r\n        color: black;\r\n        font-size: .5em;\r\n        font-weight: 200;\r\n        background: transparent;\r\n        border: none;\r\n        text-align: left;\r\n        position: relative;\r\n      }\r\n      .side-nav>li>a>button:hover{\r\n          font-weight: bolder;\r\n      }\r\n        .subtopicdata{\r\n            display: -webkit-inline-box;\r\n            display: -ms-inline-flexbox;\r\n            display: inline-flex;\r\n            width:70px;\r\n            height: 70px;\r\n            padding:2%;\r\n            margin: 5% 0% 20% 5%;\r\n            vertical-align: top;\r\n            border-radius: 5px;\r\n        \r\n        }\r\n        .subtopicdata>a>p{\r\n            font-size: .8em;\r\n            font-weight: 300;\r\n            width: 80px;\r\n            text-align: center;\r\n        }\r\n        \r\n        .subtopicdata a>p:hover{\r\n            font-weight: bolder;\r\n            text-decoration: none;\r\n        }\r\n        .content2{\r\n            visibility: visible;\r\n        }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Get Answer for the most common quetsion and learn to use \"Sports Social\" like Champ.</p>\r\n\r\n<div class=\"content\">\r\n  <ul class=\"side-nav\" *ngIf=\"windowNavbar\">\r\n    <li *ngFor=\"let data of topics\">\r\n      <a routerLink=\"/Helpcenter/{{data.name}}\">\r\n      <button (click)=\"SubtopicsIconChange(data.id)\">\r\n        <img src=\"{{data.icon}}\">{{data.name}}\r\n      </button>\r\n    </a>\r\n    </li>\r\n  </ul>\r\n  \r\n  <!--\r\n  <div *ngIf=\"!windowNavbar\" class=\"mobileNav dropdown\">\r\n    <div class=\"menuImgHolder\" data-toggle=\"dropdown\">\r\n      <img src=\"/assets/images/menu.png\" role=\"button\" class=\"menuImg\" (click)=\"openDropdown()\">\r\n    </div>\r\n    <ul class=\"side-nav\" *ngIf=\"windowNavbar\">\r\n      <li *ngFor=\"let data of topics\">\r\n        <button (click)=\"SubtopicsIconChange(data.id)\">\r\n         {{data.name}}\r\n        </button>\r\n      </li>\r\n    </ul>\r\n  </div>-->\r\n  <!-- <div class=\"content2\" id=\"res-sidenav\">\r\n      <div class=\"menuImg\" data-toggle=\"dropdown\">\r\n          <img src=\"/assets/images/menu.png\" role=\"button\" class=\"menuImg\" (click)=\"opensidemenu()\">\r\n        </div>\r\n      \r\n      <ul class=\"mynav\" *ngIf=\"windowNavbar\">\r\n          <li *ngFor=\"let data of topics\">\r\n            <a routerLink=\"/HelpCenter/{{data.name}}\" onclick=\"opensidemenu()\">\r\n            <button (click)=\"SubtopicsIconChange(data.id)\">\r\n              <img src=\"{{data.icon}}\">&nbsp;&nbsp;<p>{{data.name}}</p>\r\n            </button>\r\n          </a>\r\n          </li>\r\n        </ul>\r\n  </div> -->\r\n\r\n  <div #problems>\r\n    <div class=\"subtopicdata\" *ngFor=\"let data of subtopics\" #problem>\r\n      <a routerLink=\"/HelpCenter/{{data.topic_id}}/{{data.name}}/{{data.id}}\" (click)=\"getSeo(data.id)\">\r\n        <img src=\"{{data.icon}}\" class=\"img-responsive\">\r\n        <p class=\"subtid\" [innerHtml]=\"data.name\"></p>\r\n        <!-- <p class=\"subtid\">{{data.nam}}</p> -->\r\n\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div> \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-content/help-center-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpCenterContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_get_service__ = __webpack_require__("../../../../../src/app/shared/services/get.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
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
    function HelpCenterContentComponent(getService, route, link, meta, title, renderer) {
        this.getService = getService;
        this.route = route;
        this.link = link;
        this.meta = meta;
        this.title = title;
        this.renderer = renderer;
        this.topicName = "";
        this.windowNavbar = true;
        this.Keywords = [];
        this.topics = [];
        this.subtopics = [];
        this.topicname = '';
        this.isDropdownIconclicked = false;
        this.pagetitle = 'Sports Social Help Center';
        this.top = '';
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
                    shortDesc: body[i].shortDesc,
                    namkaran: body[i].name
                });
                if (_this.topicname != '') {
                    if (_this.topicname == body[i].name)
                        _this.topicId = body[i].id;
                }
                var url = 'https://www.sportsocial.in/' + _this.strip(body[i].namkaran).replace(/\s/g, '-').toLowerCase();
                _this.link.addTag({ rel: 'canonical', href: url });
            }
            console.log(_this.topics);
            console.log(_this.topicname);
            if (_this.topicname == '')
                _this.topicId = _this.topics[0].id;
            _this.getSubTopics(_this.topicId);
        });
    };
    HelpCenterContentComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    HelpCenterContentComponent.prototype.SubtopicsIconChange = function (id) {
        this.subtopics = [];
        this.getSubTopics(id);
        this.getSeo(id);
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
    HelpCenterContentComponent.prototype.getSeo = function (id) {
        for (var topic in this.topics) {
            if (this.topics[topic].id == id)
                this.top = this.topics[topic].name;
        }
        this.title.setTitle(this.top);
        this.meta.updateTag({ name: 'title', content: this.top });
    };
    HelpCenterContentComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HelpCenterContentComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HelpCenterContentComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pagetitle);
        this.meta.updateTag({ name: 'title', content: this.pagetitle });
        this.meta.updateTag({ name: 'description', content: "How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us" });
        this.meta.updateTag({ name: 'keywords', content: "Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support" });
        if (this.route.snapshot.paramMap.has("topicname")) {
            this.topicname = this.route.snapshot.paramMap.get("topicname");
        }
        this.AllTopics();
    };
    HelpCenterContentComponent.prototype.setCanonivalURL = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        var url = 'https://www.sportsocial.in/' + key
            + '/' + this.pagetitle.replace(/\s/g, '-') + '/';
        this.link.addTag({ rel: 'canonical', href: url });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('problems'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HelpCenterContentComponent.prototype, "problems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('problem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], HelpCenterContentComponent.prototype, "problem", void 0);
    HelpCenterContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'SportSocial-help-center-content',
            template: __webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-center/help-center-content/help-center-content.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_get_service__["a" /* GetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_link_service__["a" /* LinkService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
    ], HelpCenterContentComponent);
    return HelpCenterContentComponent;
}());

/*
if(window.innerWidth<900){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','80%')
}
if(window.innerWidth<500){
 // this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  
}
}

@HostListener('window:resize', []) onScreenResize() {
if(window.innerWidth<800){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','79%')
}
if(window.innerWidth<500){
  //this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  this.windowNavbar = false;
  this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','50%')
  
}
}*/
/*mobile view*/


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
exports.push([module.i, "*{\r\n    padding: 0px;\r\n    margin: 0px;\r\n    font-family: 'Roboto',sans-serif;\r\n}\r\n.header{\r\n    background-image: url(\"/assets/images/header-img.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 350px;\r\n    margin-top:58px;\r\n}\r\n.brand-title{\r\n    color: #ffffff;\r\n    text-align: left;\r\n    display: inline-block;\r\n    width: 60%;\r\n    padding-left: 5px;\r\n}\r\n.brand-title>span:first-child{\r\n    color:#ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.brand-title>span:last-child{\r\n  color:#ffffff;\r\n    font-size: 1.5em;\r\n    padding-left: 8px;\r\n}\r\n.city{\r\n    font-size: 1.2em;\r\n    color: #fafafa;\r\n    display: inline-block;\r\n    width: 49%;\r\n    text-align: right;\r\n    vertical-align: middle !important;\r\n}\r\n.header>div:nth-child(2)>p:first-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 2em;\r\n    font-weight: 700;\r\n}\r\n.header>div:nth-child(2)>p:last-child{\r\n    text-align: center;\r\n    color: #ffffff;\r\n    font-size: 1.5em;\r\n}\r\n.brand-img-holder{\r\n    max-width: 150px;\r\n    max-height: 170px;\r\n    margin: 5px auto;\r\n}\r\n.brand-img{\r\n  margin-top:3%;\r\n    width: 80%;\r\n    height: 80%;\r\n}\r\n.quickAnswers{\r\n    width:70%;\r\n    margin: 2% auto;\r\n    white-space: nowrap;\r\n    color: #ffffff;\r\n}\r\n.quickAnswers>p:first-child{\r\n    display: inline-block;\r\n}\r\n.quickAnswers>p:last-child{\r\n    display: inline-block;\r\n    width: 80%;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    white-space: normal;\r\n}\r\n.quickAnswers a{\r\n    display: inline-block;\r\n    margin: 0% 0% 1% 1%;\r\n    color: #fafafa;\r\n    padding: 0.1% 1.2% 0.1% 1.2%;\r\n    border: 1px solid #fafafa;\r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-center/help-center-header/help-center-header.component.html":
/***/ (function(module, exports) {

module.exports = "<sports-social-header></sports-social-header>\r\n<div class=\"header\">\r\n    <div>\r\n        <p class=\"brand-title\">\r\n        <span routerLink=\"/\" style=\"cursor:pointer;\"><u>Sports Social Help</u></span>\r\n        <!-- <span>Help</span>-->\r\n    </div>\r\n    <div>\r\n        <p class=\"heading\">Welcome to Sports social Help Center</p>\r\n        <div class=\"brand-img-holder\">\r\n            <img src=\"/assets/images/logo white.png\" class=\"brand-img\">\r\n        </div>\r\n        <p class=\"trouble\">Having Trouble? We are here to help</p>\r\n    </div>\r\n    <div class=\"quickAnswers\">\r\n        <!---<p>Quick Answers: </p>\r\n        <p>\r\n          <a *ngFor=\"let data of quickAnswers\" href=\"{{data.url}}\">{{data.ques}}</a>\r\n        </p>-->\r\n    </div> \r\n</div>\r\n"

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

module.exports = "<SportSocial-help-center-header responsiveFont></SportSocial-help-center-header>\r\n<SportSocial-help-center-content responsiveFont></SportSocial-help-center-content>\r\n<sports-social-footer responsiveFont></sports-social-footer>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_link_service__ = __webpack_require__("../../../../../src/app/shared/services/link.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HomeComponent = (function () {
    function HomeComponent(metaservice, link, titleservice, platformid) {
        this.metaservice = metaservice;
        this.link = link;
        this.titleservice = titleservice;
        this.Keywords = [];
        this.title = 'Sports Social: Making it easier to play around';
        link.addTag({ rel: 'canonical', href: 'https://www.sportsocial.in/' });
        metaservice.addTags([
            { name: 'description', content: "Sports Social: Chase Your Sport aims to create a sustainable\n            platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n            career in sports." },
            { name: 'keywords', content: "Indian Sports Trends,Sports Social,Career in Sports,current trends\n            in sports,Indian Sports History, Sports Social media,sports technology,Sports blog,Indian Sports\n            Blog,Multiplayer Strategy Video Games,Health and Fitness Tips,Sports Analytics blog, Indian sports\n            news,outlook in sports industry,future trends in sports,sports business trends, sports articles,\n            sports management,Sports Social network india,sports jobs,Sports Social Network,Sports Digital Media,\n            Sports Network,Sports Networking websites,Sports Networking app,Khelo India,Find Sports Players Nearby,\n            Play Your Sport,Chase Your Sport" },
            { name: 'title', content: 'Sports Social: Making it easier to play around' },
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:title', content: 'Sports Social: Sports Digital Media and Networking Service' },
            { property: 'og:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n          career in sports." },
            { property: 'og:Meta-description', content: "Sports Social is Sports Digital Media and Networking Service that helps to \n          see what's going around in sports and let's you chase your passion to play your favorite sport" },
            { property: 'og:url', content: 'https://www.sportsocial.in/' },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Sport Social' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'facebook:creator', content: '@SourabhArora' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Sportsoical' },
            { name: 'twitter:creator', content: '@SourabhArora' },
            { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service' },
            { name: 'twitter:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n          career in sports." },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
        this.isbrowser = Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["isPlatformBrowser"])(platformid);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.addTag({ name: 'author', content: 'Sourabh Arora' });
        this.metaservice.updateTag({ name: 'keywords', content: 'Sports Social,Sports Social app,Sports Social Network,Sports Digital Media,Sports Network,Sports Networking websites,Sports Networking app,Khelo India,Find Sports Players Nearby,Play Your Sport,Chase Your Sport' });
        this.metaservice.updateTag({ name: 'description', content: "Sports Social is Sports Digital Media and Networking Service that helps to see what's going around in sports and let's you chase your passion to play your favorite sport" });
    };
    HomeComponent.prototype.setCanonivalURL = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        var url = 'https://www.sportsocial.in/' + key
            + '/' + this.title.replace(/\s/g, '-') + '/';
        this.link.addTag({ rel: 'canonical', href: url });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sports-social-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
            preserveWhitespaces: false
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_link_service__["a" /* LinkService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* Title */],
            Object])
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


/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    text-align: center;\n    z-index: 8;\n    position: relative;\n}\n\nul {\n    list-style: none;\n}\n\nli{\n    display: inline-block;\n    vertical-align: top;\n    padding: 10px 20px 10px 20px;\n    border-left: 1px solid #bbbbbb;\n}\n\nimg {\n    width: 16px;\n}\n.nav {\n    display: inline-block;\n    vertical-align: middle;\n    color: #024771;\n    font-size: 1.1em;\n    font-weight: 500;\n    text-align: center\n}\n\n.more{\n    cursor: pointer;\n    text-align: center;\n}\n\n.dropdown{\n    position: absolute;\n    top:40px;\n    right:10%;\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    z-index: 10;\n    overflow-y: visible;\n}\n\n.dropdown li{\n    display: block;\n    padding: 10px;\n}\n\n.active   {\n    color: #ffa600 !important;\n}\nli :hover{\n    color: #ffa600\n}\n.mobile-nav {\n    position: relative;\n}\n.mobile-nav > .active-route {\n    background-color: #ffffff;\n    box-shadow: 2px 2px 4px #bbbbbb;\n    width: 100%;\n    padding: 10px;\n    text-align: left;\n}\n.active-route  div {\n    display: inline-block;\n    vertical-align: middle;\n    margin-right:20px; \n    color: #ffa600;\n    font-weight: 500;\n}\n\n.mobile-nav > ul {\n    position: absolute;\n    width: 300px;\n    top: 44px;\n    left: 0px;\n    z-index: 10;\n    background-color: white;\n    box-shadow: 1px 1px 4px #bbbbbb;\n    overflow-y: visible;\n}\n\n.mobile-nav > ul > li {\n    display: block;\n    padding: 10px;\n    text-align: left;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation-bar/navigation-bar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar\" #navbar>\n  <ng-container *ngIf = \"!mobileNav\">  \n    <ul >\n      <li>\n        <a routerLink=\"/\" class=\"nav\">\n          <img src=\"{{route === undefined ? '/assets/images/sports-social-home-clicked.png': '/assets/images/sports-social-home.png'}}\" #image>\n        </a>\n      </li>\n      <li *ngFor=\"let sport of sports; let i = index\" (mouseover)=\"closeDropdownByMouseleave(i)\">\n        <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\" >\n          {{sport.title}}\n        </a>\n      </li>\n      <li class=\"more\"  *ngIf = \"moreSports.length>0\">\n          <img src=\"/assets/images/sports-social-caret-down-blue.png\" (click)=\"openDropdown()\" (mouseover)=\"openDropdown()\" >\n      </li>\n    </ul>\n\n    <ng-container *ngIf=\"isHoverOnCaret\">\n        <ul  class=\"dropdown\" (mouseleave)=\"closeDropdownByMouseleave()\" #dropdown>\n            <li *ngFor=\"let sport of moreSports\" >\n              <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\">\n                {{sport.title}}\n              </a>\n            </li>\n        </ul>\n    </ng-container>\n  </ng-container>\n\n\n<div class=\"mobile-nav\" >\n   <ng-container *ngIf = \"mobileNav\">\n      <div class=\"active-route\" > \n          <div  *ngIf= \"route === undefined\" >\n              <img src=\"{{ '/assets/images/sports-social-home-clicked.png'}}\" #image>\n          </div>\n          <ng-container *ngIf= \"route !== 'Popular'\">\n              <div >{{route}}</div>\n          </ng-container>\n        <img  src=\"/assets/images/sports-social-caret-down-blue.png\" (click)=\"openDropdown()\" (mouseover)=\"openDropdown()\" >\n      </div>\n      <ng-container *ngIf=\"isHoverOnCaret\">\n        <ul (mouseleave)=\"closeDropdownByMouseleave()\" #mobileNavbar>\n            <li>\n                <a routerLink=\"/\" class=\"nav\">\n                  <img src=\"{{route === undefined ? '/assets/images/sports-social-home-clicked.png': '/assets/images/sports-social-home.png'}}\" #image>\n                </a>\n              </li>\n          <li *ngFor=\"let sport of sports; let i = index\" >\n            <a class=\"nav\" routerLink=\"/{{sport.title}}\" routerLinkActive=\"active\" (click)=\"closeDropdownByClick($event)\" >\n              {{sport.title}}\n            </a>\n          </li>\n        </ul>\n      </ng-container>\n   </ng-container>\n</div>\n  \n</div>"

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
        var width = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.navbar.nativeElement).width;
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
            var top = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(_this.navbar.nativeElement).top;
            var bottom = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(_this.navbar.nativeElement).bottom;
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
            var height = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.mobileNavbar.nativeElement).height;
            var top_1 = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.mobileNavbar.nativeElement).top;
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
            var height = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.dropdown.nativeElement).height;
            var top_2 = Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* ɵgetDOM */])().getBoundingClientRect(this.dropdown.nativeElement).top;
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
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Meta */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["d" /* Title */]])
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

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.time-remaining {\n    position: absolute;\n    left: 10px;\n    top: 7px;\n    color: #024771;\n}\n.started-by{\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    text-align: center;\n}\n.started-by > p{\n   margin-bottom: 5px;\n   font-weight: 300;\n}\n.started-by > img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n}\n.heading {\n    margin-top: 20px;\n    font-size: 1.2em;\n    font-weight: 600;\n}\n.heading, .match-sum {\n    text-align: center;\n}\n\n.match-text {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    top: 55px;\n}\n\n.match-date {\n    position: absolute;\n    width: 47%;\n    top: 5px;\n    left: 1%;\n}\n.match-date>img {\n    width:20px;\n}\n.match-date> span{\n    font-size: 0.9em;\n    text-align: left;\n}\n\n.match-date > img, .match-date > span {\n    vertical-align:middle;\n    display: inline-block;\n}\n\n.venue{\n    position: absolute;\n    width: 50%;\n    top: 5px;\n    right: 1%;\n    text-align: right;\n    white-space: nowrap;\n}\n.venue > img{\n    width:20px;\n}\n\n.venue > img , .venue > span {\n    vertical-align: middle;\n    display: inline-block;\n}\n\n.venue > span {\n    min-width: 50%;\n    max-width: 70%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    font-size: 0.9em;\n}\n\n.count-bar {\n    height: 50px;\n}\n\n.count-bar >  p{\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500;\n    margin: 1% auto;\n    width: 20%;\n}\n.count-bar > div{ \n    border-left: 1px solid #888888;\n    width: 78%;\n    display: inline-block;\n    vertical-align: middle;\n    height: 50px;\n    overflow-x: auto;\n    overflow-y: hidden;\n    white-space: nowrap;\n}\n.count-bar > div > img{\n    margin: 5px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    vertical-align: middle\n}\n\n.comment-bar{\n    background-color: #4372a0;\n    padding: 2%;\n    width: 96%;\n    margin: 1% auto;\n}\n.comment-bar > img {\n    vertical-align: middle;\n    margin: 3%;\n}\ninput{\n    width: 80%;\n    border: none;\n    background-color: #ffffff;\n    height: 35px;\n    text-align: center;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    border-radius: 25px;\n    outline: none;\n    vertical-align:  middle\n}\n\n.comments > img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin: 2%;\n}\n.comment-details{\n    vertical-align: middle;\n    display: inline-block;\n    border-bottom: 1px solid #bbbbbb;\n    width: 80%;\n    margin-bottom: 1%;\n}\n.user-name{\n    display: inline-block;\n    vertical-align: middle;\n    min-width: 20%;\n    font-size: 0.9em;\n    font-weight: 500;\n    color: #024771;\n    text-align: left;\n}\n.comment-date{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.8em;\n    color: black;\n    min-width: 40%;\n    text-align: left;\n}\n.unique-name{\n    color: #ffa600;\n    font-style: italic;\n    font-size: 0.8em;\n}\n.comment{\n    color: black;\n    font-size: 0.95em;\n}\n.match-image{\n    padding-top: 60px;\n    width: 98%;\n    margin:2% auto;\n}\n.match-image > img {\n    width: 100%;\n}\n\n.actions-match{\n    padding: 3%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nbutton {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n\n.actions-match > button > img {\n    width: 32px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n\n.actions-match > button > span {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-match > button > span:hover{\n    font-weight: 700\n}\n@media ( max-width: 720px) {\n    .count-bar > div > img{\n        width: 40px;\n        height: 40px;\n    }\n    .comment-bar > input{\n        height: 30px !important;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .count-bar > div > img{\n        width: 40px;\n        height: 40px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-cards/open-match-card/open-match-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"open-card\"  #openCard>\n  <div class=\"open-card-header\">\n    <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\n    <div *ngIf = \"_days > 0\" class=\"time-remaining\">\n      <span>{{_days}}d</span>\n      <span>{{_hours}}h</span>\n      <span>{{_minutes}}m</span>\n      <span>{{_seconds}}s</span>\n    </div>\n    <div class=\"heading\">{{gameName}}</div>\n    <div class=\"match-sum\">Match Summary</div>\n    <div class=\"started-by\">\n      <p>Created By</p>\n      <img src=\"{{creatorImage}}\" title=\"{{creatorName}}\" alt=\"\" (error)=\"defaultImage($event)\" #userImg>\n    </div>\n  </div>\n  <div class=\"open-card-content\">\n    <div class=\"match-date\">\n      <img src=\"/assets/images/calendar.png\" alt=\"\">\n      <span>{{matchDate}}</span>\n    </div>\n    <div class=\"venue\">\n      <img src=\"/assets/images/map-marker.png\" alt=\"\">\n      <span>{{venueName}}</span><!-- \n      <img src=\"/assets/images/map-marker.png\" alt=\"\"> -->\n    </div>\n    <div class=\"match-text\">\n      {{matchText}}\n    </div>\n    <div class=\"match-image\">\n      <img *ngIf=\"matchImage === undefined\" src=\"/assets/images/default-image.png\" alt=\"\">\n      <sports-social-gallery *ngIf=\"matchImage\" [images] = \"images\" ></sports-social-gallery>\n    </div>\n  </div>\n  <div class=\"actions-count\" *ngIf = \"removeActionBar ()\">\n    <hr>\n    \n    <div class=\"count-bar\" *ngIf=\"joineeCount > 0\">\n      <p >{{joineeCount}} Playing</p>\n      <div class=\"image\">\n        <img  *ngFor = \"let joinee of joinees\" src=\"{{joinee.image}}\" title=\"{{joinee.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\n      </div>\n      <hr>\n    </div>\n    \n    <div class=\"count-bar\" *ngIf = \"promoteCount > 0\">\n      <p>{{promoteCount}} Promoting</p>\n      <div class=\"image\" >\n        <img *ngFor = \"let promoter of promoters\" src=\"{{promoter.image}}\" title=\"{{promoter.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\n      </div>\n      <hr>\n    </div>\n    \n    <div class=\"count-bar\" *ngIf = \"watchCount > 0\">\n      <p>{{watchCount}} Watching</p>\n      <div class=\"image\" >\n        <img *ngFor = \"let watcher of watchers\" src=\"{{watcher.image}}\" title=\"{{watcher.name}}\" (error)=\"defaultImage($event)\" alt=\"\">\n      </div>\n      <hr>\n    </div>\n  </div>\n  \n  <div class=\"actions-match\">\n    <button class=\"playButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-play.png\" alt=\"\"> <span>Play</span>  \n    </button>\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-match-talks.png\" alt=\"\"><span>Comment</span>  \n    </button>\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-promote.png\" alt=\"\"> <span>Promote</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-watching.png\" alt=\"\"> <span>Watch</span>\n    </button>\n  </div>\n  <div class=\"comment-bar\">\n    <img src=\"/assets/images/user-default.png\" alt=\"\">\n    <input type=\"text\" placeholder=\"Comment Your Views\">\n  </div>\n  <div class=\"comments\" *ngFor =\"let comment of comments\">\n      <img src=\"{{comment.userImage}}\"(error)=\"defaultImage($event)\" alt=\"\">\n      <div class=\"comment-details\">\n        <div class=\"user-name\">{{comment.userName}}</div>\n        <div class=\"comment-date\">{{comment.commentDate}}</div>\n        <div class=\"unique-name\"> @{{comment.uniqueName}} </div>\n        <div class=\"comment\">{{comment.comment}}</div>\n      </div>\n  </div>\n  \n  <div class=\"open-card-footer\">\n    <img src=\"/assets/images/sports-social-white-logo.png\" alt=\"\">\n  </div>\n</div>\n"

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
exports.push([module.i, ".insert-date {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n}\n.url {\n    display: block;\n    margin: 1% auto;\n    text-align: center;\n    color: black;\n    width: 100%;\n    font-size: 1.5em;\n    font-weight: 900;\n}\n.source {\n      text-align: center;\n      margin: 1%;\n}\n.source > .name {\n    font-size: 1.4em;\n    font-weight: 900;\n}\n\n.title {\n    width: 100%;\n    text-align: center;\n    position: relative;\n    top: 30px;\n    font-size: 1.2em;\n    font-weight: 500;\n}\n.news-image{\n    padding-top: 60px;\n    width: 98%;\n    margin:2% auto;\n}\n.news-image > img {\n    width: 100%;\n}\n\n.desc {\n    width: 95%;\n    margin: 1% auto;\n    text-align: center;\n    font-size: 1.3em;\n    font-weight: 500;\n}\n.count-bar {\n    height: 50px;\n    /* border: 1px solid  black; */\n}\n\n.count-bar >  p{\n    display: inline-block;\n    vertical-align: middle;\n    text-align: center;\n    color: black;\n    font-size: 0.9em;\n    font-weight: 500;\n    margin: 1% auto;\n    width: 20%;\n}\n.count-bar > div{ \n    border-left: 1px solid #888888;\n    width: 78%;\n    display: inline-block;\n    vertical-align: middle;\n    height: 50px;\n}\n.count-bar > div > img{\n    margin: 5px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    vertical-align: middle\n}\n\n.comment-bar{\n    background-color: #4372a0;\n    padding: 2%;\n    width: 96%;\n    margin: 1% auto;\n}\n.comment-bar > img {\n    vertical-align: middle;\n    margin: 3%;\n}\ninput{\n    width: 80%;\n    border: none;\n    background-color: #ffffff;\n    height: 35px;\n    text-align: center;\n    box-shadow: 1px 1px 2px #bbbbbb;\n    border-radius: 25px;\n    outline: none;\n    vertical-align:  middle\n}\n\n.comments > img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin: 2%;\n}\n.comment-details{\n    vertical-align: middle;\n    display: inline-block;\n    border-bottom: 1px solid #bbbbbb;\n    width: 80%;\n    margin-bottom: 1%;\n}\n.user-name{\n    display: inline-block;\n    vertical-align: middle;\n    min-width: 20%;\n    font-size: 0.9em;\n    font-weight: 500;\n    color: #024771;\n    text-align: left;\n}\n.comment-date{\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 0.8em;\n    color: black;\n    min-width: 40%;\n    text-align: left;\n}\n.unique-name{\n    color: #ffa600;\n    font-style: italic;\n    font-size: 0.8em;\n}\n.comment{\n    color: black;\n    font-size: 0.95em;\n}\n.actions-news{\n    padding: 3%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nbutton {\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    \n}\n\n.actions-news > button > img {\n    width: 16px;\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 3px;\n}\n\n.actions-news > button > span {\n    display: inline-block;\n    vertical-align: middle;\n}\n.actions-news > button > span:hover{\n    font-weight: 700\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/open-cards/open-news-card/open-news-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"open-card\" #openCard>\n  <div class=\"open-card-header\">\n      <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\n    <div class=\"insert-date\">{{insertedDate}}</div>\n    <div class=\"source\">\n      <img src=\"{{sourceImage}}\" alt=\"\">\n      <p class=\"name\">{{sourceName}}</p>\n    </div>\n  </div>\n  <div class=\"open-card-content\">\n    <div class=\"title\">{{title}}</div>\n    <div class=\"news-image\">\n        <img *ngIf=\"newsImage === undefined\" src=\"/assets/images/default-image.png\" alt=\"\">\n      <img src=\"{{newsImage}}\" alt=\"\">\n    </div>\n    <div class=\"desc\">{{desc}}</div>\n    <a class=\"url\" href=\"{{url}}\" target=\"_blank\">Read More At {{sourceName}}</a>\n  </div>\n  <div class=\"actions-count\" *ngIf = \"removeActionBar ()\">\n    <hr>\n        \n    <div class=\"count-bar\" *ngIf = \"likeCount > 0\">\n      <p>{{likeCount}} {{likeCount > 1 ? Likes : Like}}</p>\n      <div class=\"image\" >\n        <img *ngFor = \"let like of likes\" src=\"{{like.image}}\" title=\"{{like.name}}\" alt=\"\">\n      </div>\n      <hr>\n    </div>\n    \n    <div class=\"count-bar\" *ngIf = \"shareCount > 0\">\n      <p>{{shareCount}} {{ shareCount > 1 ? Shares : Share }}</p>\n      <div class=\"image\" >\n        <img *ngFor = \"let share of shares\" src=\"{{share.image}}\" title=\"{{share.name}}\" alt=\"\">\n      </div>\n      <hr>\n    </div>\n  </div>\n  <div class=\"actions-news\">\n    <button class=\"commentButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-comment.png\" alt=\"\"><span>Comment</span>  \n    </button>\n    <button class=\"promoteButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-like.png\" alt=\"\"> <span>Like</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n      <img src=\"/assets/images/sports-social-share-black.png\" alt=\"\"> <span>Share</span>\n    </button>\n    <button class=\"watchButton\" (click)=\"openAppDownloadPopup()\">\n        <img src=\"/assets/images/sports-social-save-black.png\" alt=\"\"> <span>Save</span>\n    </button>\n  </div>\n  <div class=\"comment-bar\">\n    <img src=\"/assets/images/user-default.png\" alt=\"\">\n    <input type=\"text\" placeholder=\"Comment Your Views\">\n  </div>\n  <div class=\"comments\" *ngFor =\"let comment of comments\">\n      <img src=\"{{comment.userImage}}\" alt=\"\">\n      <div class=\"comment-details\">\n        <div class=\"user-name\">{{comment.userName}}</div>\n        <div class=\"comment-date\">{{comment.commentDate}}</div>\n        <div class=\"unique-name\"> @{{comment.uniqueName}} </div>\n        <div class=\"comment\">{{comment.comment}}</div>\n      </div>\n  </div>\n  \n  <div class=\"open-card-footer\">\n    <img src=\"/assets/images/sports-social-white-logo.png\" alt=\"\">\n  </div>\n</div>\n"

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
exports.push([module.i, ".app-download-popup{\n    position: fixed;\n    width:40%;\n    left: 30%;\n    top: 20%;\n    z-index: 100;\n    background-color: white;\n    box-shadow: 2x 2px 4px #bbbbbb;\n    padding: 2%;\n}\n.logo {\n    display: block;\n    margin: 2% auto;\n    width: 50px;\n    height: 50px;\n}\n.app-download-popup > p{\n    text-align: center;\n    margin: 1%;\n    color: #024771;\n    font-weight: 500;\n    font-size: 1.2em;\n}\n.app-download-popup > p:nth-of-type(1){\n    color: #ffa600;\n    font-weight: 700\n}\n\na{\n    display: block;\n    text-align: center;\n    color: black;\n    text-decoration: none;\n}\n\n@media ( max-width: 720px) {\n    .app-download-popup{\n        width: 94%;\n        left: 1%;\n    }\n}\n@media ( max-width: 980px) and ( min-width: 720px) {\n    .app-download-popup{\n        width: 50%;\n        left: 25%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pop-up/pop-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-download-popup\">\n        <img  class=\"close\" src=\"/assets/images/sports-social-cancel-black.png\" alt=\"\" (click)= \"close()\">\n    <img src=\"/assets/images/sports-social-logo.png\" class=\"logo\" alt=\"\">\n    <p>Join Sports Social!</p>\n    <p>and stay Connected to your sport always</p>\n    <a href=\"https://goo.gl/qrgCz5\" target=\"_blank\">Click here to download the App</a>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__application_application_component__ = __webpack_require__("../../../../../src/app/application/application.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var App_Route = [
    { path: "addtopic", component: __WEBPACK_IMPORTED_MODULE_7__add_topic_add_topic_component__["a" /* AddTopicComponent */] },
    { path: "HelpCenter", component: __WEBPACK_IMPORTED_MODULE_6__help_center_help_center_component__["a" /* HelpCenterComponent */] },
    { path: "Helpcenter/:topicname", component: __WEBPACK_IMPORTED_MODULE_6__help_center_help_center_component__["a" /* HelpCenterComponent */] },
    {
        path: "application",
        component: __WEBPACK_IMPORTED_MODULE_10__application_application_component__["a" /* ApplicationComponent */]
    },
    {
        path: "HelpCenter/:topicId/:subtopicname/:subtopicId",
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
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
    },
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
    GetService.prototype.getBlogdata = function () {
        return this.http.get("https://prod.chaseyoursport.com/loadStartingTenblogs");
    };
    GetService.prototype.getinstadata = function () {
        return this.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=3238782460.1408c01.74c84f4d73a048c69abe08f3d038e444");
    };
    GetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GetService);
    return GetService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/link.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LinkService = (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    LinkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["RendererFactory2"], Object])
    ], LinkService);
    return LinkService;
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
    PostService.prototype.singleBlogSmallDesc = function (id) {
        this.BlogId = {
            blogid: id
        };
        // console.log(this.BlogId);
        return this.http.post('https://prod.chaseyoursport.com/loadSingleBlogDataSmallDesc', this.BlogId)
            .map(function (response) { return response.json(); });
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

/***/ "../../../../../src/app/shared/services/seo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeoService = (function () {
    function SeoService(meta) {
        this.meta = meta;
    }
    SeoService.prototype.generateTags = function (config) {
        // default values
        config = __assign({ title: 'Sports Social: Making it easier to play around', description: 'My SEO friendly Angular Component', image: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg', slug: '' }, config);
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:site', content: '@Sportsoical' });
        this.meta.updateTag({ name: 'twitter:creator', content: '@SourabhArora' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sport Social' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: "https://www.sportsocial.in/" + config.slug });
    };
    SeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Meta */]])
    ], SeoService);
    return SeoService;
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

module.exports = "<p>\n  sub-topic works!\n</p>\n<!-- <ul class=\"subtopicss\">\n    <li *ngFor=\"let subTopic of subTopics; let i = index\">\n      <a href=\"addque/{{ subTopic.topic_id }}/{{ subTopic.id }}\">{{\n        subTopic.name\n      }} <img src=\"{{subTopic.icon}}\"></a>-->\n      <!-- <a (click)=\"send(i)\">{{ subTopic.name }}</a> \n    </li>\n  </ul> -->\n  \n"

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
var environment = {
    production: true
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