import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardModule } from '../../cards/match-card/match-card.module';
import { NewsCardModule } from '../../cards/news-card/news-card.module';
import { LiveMatchCardModule } from '../../cards/live-match-card/live-match-card.module';
import { GlobalOpenArenaFeedComponent } from './global-open-arena-feed.component';
import { RouterModule } from '@angular/router';
import { NgMasonryGridModule } from 'ng-masonry-grid';
var GlobalOpenArenaFeedModule = /** @class */ (function () {
    function GlobalOpenArenaFeedModule() {
    }
    GlobalOpenArenaFeedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                MatchCardModule,
                NewsCardModule,
                LiveMatchCardModule,
                RouterModule,
                NgMasonryGridModule
            ],
            declarations: [
                GlobalOpenArenaFeedComponent
            ],
            exports: [
                GlobalOpenArenaFeedComponent
            ]
        })
    ], GlobalOpenArenaFeedModule);
    return GlobalOpenArenaFeedModule;
}());
export { GlobalOpenArenaFeedModule };
//# sourceMappingURL=global-open-arena-feed.module.js.map