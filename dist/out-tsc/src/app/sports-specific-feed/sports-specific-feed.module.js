import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRouter } from './sports.router';
import { SportsSpecificFeedComponent } from './sports-specific-feed.component';
import { NewsCardModule } from '../cards/news-card/news-card.module';
import { MatchCardModule } from '../cards/match-card/match-card.module';
import { LiveMatchCardModule } from '../cards/live-match-card/live-match-card.module';
import { HeaderModule } from '../header/header.module';
import { CarouselModule } from '../carousel/carousel.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { FooterModule } from '../footer/footer.module';
import { NgMasonryGridModule } from 'ng-masonry-grid';
var SportsSpecificFeedModule = /** @class */ (function () {
    function SportsSpecificFeedModule() {
    }
    SportsSpecificFeedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                SportsRouter,
                NewsCardModule,
                MatchCardModule,
                LiveMatchCardModule,
                HeaderModule,
                CarouselModule,
                NavigationBarModule,
                FooterModule,
                NgMasonryGridModule
            ],
            declarations: [
                SportsSpecificFeedComponent
            ]
        })
    ], SportsSpecificFeedModule);
    return SportsSpecificFeedModule;
}());
export { SportsSpecificFeedModule };
//# sourceMappingURL=sports-specific-feed.module.js.map