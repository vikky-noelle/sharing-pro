import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
var NewsCardComponent = /** @class */ (function () {
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "newsId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "newsImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "sourceImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "sourceName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "desc", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NewsCardComponent.prototype, "likeCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NewsCardComponent.prototype, "shareCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], NewsCardComponent.prototype, "commentCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "url", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "insertedDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "publishedAt", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NewsCardComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        ViewChild('actionsCount'),
        tslib_1.__metadata("design:type", Object)
    ], NewsCardComponent.prototype, "actionsCount", void 0);
    tslib_1.__decorate([
        ViewChild('openNewsCard', { read: ViewContainerRef }),
        tslib_1.__metadata("design:type", Object)
    ], NewsCardComponent.prototype, "openNewsCardContainer", void 0);
    NewsCardComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-news-card',
            templateUrl: './news-card.component.html',
            styleUrls: ['./news-card.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            Router,
            TimeService])
    ], NewsCardComponent);
    return NewsCardComponent;
}());
export { NewsCardComponent };
//# sourceMappingURL=news-card.component.js.map