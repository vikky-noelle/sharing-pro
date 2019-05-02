import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, HostListener, Renderer2, NgZone } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchDataService } from '../shared/services/match-data.service';
import { NewsService } from '../shared/services/news.service';
import { Meta, Title } from '@angular/platform-browser';
var SportsSpecificFeedComponent = /** @class */ (function () {
    function SportsSpecificFeedComponent(matchData, newsData, renderer, activeRoute, router, zone, load, metaservice, pagetitle) {
        this.matchData = matchData;
        this.newsData = newsData;
        this.renderer = renderer;
        this.activeRoute = activeRoute;
        this.router = router;
        this.zone = zone;
        this.load = load;
        this.metaservice = metaservice;
        this.pagetitle = pagetitle;
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
        this.pagetitle.setTitle(this.gameName);
        this.metaservice.updateTag({ name: 'title', content: this.gameName });
        this.metaservice.updateTag({ name: 'description', content: "See What's going around you in " + this.gameName + " in the " + this.gameName + " Arena. Use " + this.gameName + " Arena to find,connect,play, follow " + this.gameName + " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " + this.gameName + " world" });
        this.metaservice.updateTag({ name: 'keywords', content: "" + this.gameName + "Arena,Sports Social " + this.gameName + "," + this.gameName + " Grounds Nearby," + this.gameName + " Events Nearby, " + this.gameName + " Matches Nearby, Connect " + this.gameName + " Players, Play " + this.gameName + ", Find " + this.gameName + " Players,Find " + this.gameName + " Academies," + this.gameName + " Tournaments Nearby" });
        this.metaservice.updateTag({ property: 'og:title', content: this.gameName });
        this.metaservice.updateTag({ property: 'og:description', content: "See What's going around you in " + this.gameName + " in the " + this.gameName + " Arena. Use " + this.gameName + " Arena to find,connect,play, follow " + this.gameName + " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " + this.gameName + " world" });
        this.metaservice.updateTag({ property: 'og:keywords', content: "" + this.gameName + "Arena,Sports Social " + this.gameName + "," + this.gameName + " Grounds Nearby," + this.gameName + " Events Nearby, " + this.gameName + " Matches Nearby, Connect " + this.gameName + " Players, Play " + this.gameName + ", Find " + this.gameName + " Players,Find " + this.gameName + " Academies," + this.gameName + " Tournaments Nearby" });
    };
    SportsSpecificFeedComponent.prototype.ngOnDestroy = function () {
        console.log('destroy');
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
    ], SportsSpecificFeedComponent.prototype, "onWindowScroll", null);
    SportsSpecificFeedComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-sports-specific-feed',
            templateUrl: './sports-specific-feed.component.html',
            styleUrls: ['./sports-specific-feed.component.css', '../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [MatchDataService,
            NewsService,
            Renderer2,
            ActivatedRoute,
            Router,
            NgZone,
            PostService,
            Meta,
            Title])
    ], SportsSpecificFeedComponent);
    return SportsSpecificFeedComponent;
}());
export { SportsSpecificFeedComponent };
//# sourceMappingURL=sports-specific-feed.component.js.map