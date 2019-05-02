import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, HostListener, Renderer2 } from '@angular/core';
import { NewsService } from '../../shared/services/news.service';
import { Title, Meta } from '@angular/platform-browser';
var GlobalNewsFeedComponent = /** @class */ (function () {
    function GlobalNewsFeedComponent(newsData, renderer, pagetitle, metaservice) {
        this.newsData = newsData;
        this.renderer = renderer;
        this.pagetitle = pagetitle;
        this.metaservice = metaservice;
        this.title = "Around the World | Sports Social";
        this.metakey = "Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news";
        this.metades = "Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned";
        this.News = [];
        this.prevPageNo = 0;
        this.nextPageNo = 0;
    }
    GlobalNewsFeedComponent.prototype.globalNewsFeed = function (pageNo) {
        var _this = this;
        this.newsData.globalNewsFeed(this.nextPageNo, 'all').then(function (news) {
            _this.News = _this.News.concat(news);
        }).catch(function (err) {
            console.log(err);
        });
    };
    GlobalNewsFeedComponent.prototype.nextPage = function (pageNo) {
        this.prevPageNo = pageNo;
        this.globalNewsFeed(pageNo);
    };
    GlobalNewsFeedComponent.prototype.onWindowScroll = function (event) {
        console.log(Math.floor(scrollY / 700), scrollY);
        this.nextPageNo = Math.floor(scrollY / 700);
        if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo) {
            this.nextPage(this.nextPageNo);
        }
    };
    GlobalNewsFeedComponent.prototype.ngOnInit = function () {
        this.globalNewsFeed(this.nextPageNo);
        this.pagetitle.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.metakey });
        this.metaservice.updateTag({ name: 'description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.metades });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.metakey });
    };
    GlobalNewsFeedComponent.prototype.ngOnDestroy = function () {
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
    ], GlobalNewsFeedComponent.prototype, "onWindowScroll", null);
    GlobalNewsFeedComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-global-news-feed',
            templateUrl: './global-news-feed.component.html',
            styleUrls: ['./global-news-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [NewsService,
            Renderer2,
            Title,
            Meta])
    ], GlobalNewsFeedComponent);
    return GlobalNewsFeedComponent;
}());
export { GlobalNewsFeedComponent };
//# sourceMappingURL=global-news-feed.component.js.map