import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input, ViewChild, Renderer2, ComponentFactoryResolver } from '@angular/core';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { PopUpService } from '../../shared/services/pop-up.service';
import { Router, ActivatedRoute } from '@angular/router';
var MatchCardComponent = /** @class */ (function () {
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
    tslib_1.__decorate([
        ViewChild('actionsCount'),
        tslib_1.__metadata("design:type", Object)
    ], MatchCardComponent.prototype, "actionsCount", void 0);
    tslib_1.__decorate([
        ViewChild('openMatchCard'),
        tslib_1.__metadata("design:type", Object)
    ], MatchCardComponent.prototype, "openMatchcard", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "creatorName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "creatorImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "eventId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "doerPic", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchText", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "joineeCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MatchCardComponent.prototype, "commentCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MatchCardComponent.prototype, "promoteCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MatchCardComponent.prototype, "watchCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "activityName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "activityDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "matchDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "gameName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "venueName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatchCardComponent.prototype, "restrictionCount", void 0);
    tslib_1.__decorate([
        ViewChild('userImg'),
        tslib_1.__metadata("design:type", Object)
    ], MatchCardComponent.prototype, "userImg", void 0);
    MatchCardComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-match-card',
            templateUrl: './match-card.component.html',
            styleUrls: ['./match-card.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            TimeService,
            ComponentFactoryResolver,
            PostService,
            PopUpService,
            Router,
            ActivatedRoute])
    ], MatchCardComponent);
    return MatchCardComponent;
}());
export { MatchCardComponent };
//# sourceMappingURL=match-card.component.js.map