import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, ViewChild, Renderer2 } from '@angular/core';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
var OpenMatchCardComponent = /** @class */ (function () {
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
            _this.subscription = Observable.interval(1000).map(function (x) {
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
    tslib_1.__decorate([
        ViewChild('openCard'),
        tslib_1.__metadata("design:type", Object)
    ], OpenMatchCardComponent.prototype, "openCard", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "timeRemaining", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "gameName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "creatorImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "creatorName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], OpenMatchCardComponent.prototype, "matchDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "venueName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "matchText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "matchImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "joineeCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "joinees", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "promoteCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "promoters", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "watchCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "watchers", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenMatchCardComponent.prototype, "commentCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OpenMatchCardComponent.prototype, "comments", void 0);
    OpenMatchCardComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-open-match-card',
            templateUrl: './open-match-card.component.html',
            styleUrls: ['./open-match-card.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            TimeService,
            PostService,
            ActivatedRoute,
            Router])
    ], OpenMatchCardComponent);
    return OpenMatchCardComponent;
}());
export { OpenMatchCardComponent };
//# sourceMappingURL=open-match-card.component.js.map