import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, ViewChild, Renderer2 } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
var OpenNewsCardComponent = /** @class */ (function () {
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
    tslib_1.__decorate([
        ViewChild('openCard'),
        tslib_1.__metadata("design:type", Object)
    ], OpenNewsCardComponent.prototype, "openCard", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "newsId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "newsImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "sourceImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "sourceName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "desc", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "likeCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "shareCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], OpenNewsCardComponent.prototype, "commentCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "insertedDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "publishedAt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], OpenNewsCardComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], OpenNewsCardComponent.prototype, "comments", void 0);
    OpenNewsCardComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-open-news-card',
            templateUrl: './open-news-card.component.html',
            styleUrls: ['./open-news-card.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            PostService,
            ActivatedRoute,
            Router,
            TimeService])
    ], OpenNewsCardComponent);
    return OpenNewsCardComponent;
}());
export { OpenNewsCardComponent };
//# sourceMappingURL=open-news-card.component.js.map