import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PostService = /** @class */ (function () {
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
        console.log("Heyy this is lat.=" + lat);
        console.log("Heyy this is log.=" + long);
        console.log("Heyy this is page.=" + page);
        console.log("Heyy this is gameid.=" + gameid);
        return this.http.post('https://prod.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
        // return this.http.post('https://test.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
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
    PostService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostService);
    return PostService;
}());
export { PostService };
//# sourceMappingURL=post.service.js.map