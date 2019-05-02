import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardModule } from '../../cards/news-card/news-card.module';
import { HeaderModule } from '../../header/header.module';
import { FooterModule } from '../../footer/footer.module';
import { NewsRoutes } from './global-news-feed.routes';
import { NavigationBarModule } from '../../navigation-bar/navigation-bar.module';
import { GlobalNewsFeedComponent } from './global-news-feed.component';
import { CarouselModule } from '../../carousel/carousel.module';
import { NgMasonryGridModule } from 'ng-masonry-grid';
var GlobalNewsFeedModule = /** @class */ (function () {
    function GlobalNewsFeedModule() {
    }
    GlobalNewsFeedModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                NewsCardModule,
                HeaderModule,
                FooterModule,
                NewsRoutes,
                NavigationBarModule,
                CarouselModule,
                NgMasonryGridModule
            ],
            declarations: [
                GlobalNewsFeedComponent
            ]
        })
    ], GlobalNewsFeedModule);
    return GlobalNewsFeedModule;
}());
export { GlobalNewsFeedModule };
//# sourceMappingURL=global-news-feed.module.js.map