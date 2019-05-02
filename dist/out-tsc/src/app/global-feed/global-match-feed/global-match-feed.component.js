import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Renderer2, HostListener } from '@angular/core';
import { MatchDataService } from '../../shared/services/match-data.service';
import { Title, Meta } from '@angular/platform-browser';
var GlobalMatchFeedComponent = /** @class */ (function () {
    function GlobalMatchFeedComponent(renderer, matchData, pagetitle, metaservice) {
        this.renderer = renderer;
        this.matchData = matchData;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.title = "Arena | Sports Social";
        this.metakey = "Open Arena,Sports Social,Sports Arena nearby,Sports events nearby,Sports Activities nearby,Sports Grounds nearby, Connect to Sports players nearby,Find Sports players nearby";
        this.metades = "See What's going around you in sports in the open Arena. Use Arena to find,connect,play, follow matches, players, academies, coaches and events in your favorite sport in your locality and around the world | stay connected to your sports world.";
        this.Match = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalMatchFeedComponent.prototype.globalMatchFeed = function (pageNo) {
        var _this = this;
        this.matchData.globalMatchFeed(this.nextPageNo, 0).then(function (match) {
            _this.Match = _this.Match.concat(match);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalMatchFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalMatchFeed(pageNo);
    };
    GlobalMatchFeedComponent.prototype.onWindowScroll = function (event) {
        // console.log(Math.floor(scrollY / 1200));
        this.nextPageNo = Math.floor(scrollY / 1200);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalMatchFeedComponent.prototype.ngOnInit = function () {
        this.globalMatchFeed(this.nextPageNo);
        this.pagetitle.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.metakey });
        this.metaservice.updateTag({ name: 'description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.metakey });
    };
    GlobalMatchFeedComponent.prototype.ngOnDestroy = function () {
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
    ], GlobalMatchFeedComponent.prototype, "onWindowScroll", null);
    GlobalMatchFeedComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-global-match-feed',
            templateUrl: './global-match-feed.component.html',
            styleUrls: ['./global-match-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            MatchDataService,
            Title,
            Meta])
    ], GlobalMatchFeedComponent);
    return GlobalMatchFeedComponent;
}());
export { GlobalMatchFeedComponent };
//# sourceMappingURL=global-match-feed.component.js.map