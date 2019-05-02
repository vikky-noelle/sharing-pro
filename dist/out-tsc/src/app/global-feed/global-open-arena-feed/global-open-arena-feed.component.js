import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Renderer2, HostListener } from '@angular/core';
import { MatchDataService } from '../../shared/services/match-data.service';
import { NewsService } from '../../shared/services/news.service';
var GlobalOpenArenaFeedComponent = /** @class */ (function () {
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
    tslib_1.__decorate([
        HostListener('window:scroll', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], GlobalOpenArenaFeedComponent.prototype, "onWindowScroll", null);
    GlobalOpenArenaFeedComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-global-open-arena-feed',
            templateUrl: './global-open-arena-feed.component.html',
            styleUrls: ['./global-open-arena-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [MatchDataService,
            NewsService,
            Renderer2])
    ], GlobalOpenArenaFeedComponent);
    return GlobalOpenArenaFeedComponent;
}());
export { GlobalOpenArenaFeedComponent };
//# sourceMappingURL=global-open-arena-feed.component.js.map