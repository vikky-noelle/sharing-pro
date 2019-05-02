import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
var GetService = /** @class */ (function () {
    function GetService(http) {
        this.http = http;
        this.data = new Subject();
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
    GetService.prototype.getUpcomingCricket = function () {
        return this.http.get("http://35.176.65.124:2200/score/upcomingCricketMatches");
    };
    GetService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], GetService);
    return GetService;
}());
export { GetService };
//# sourceMappingURL=get.service.js.map