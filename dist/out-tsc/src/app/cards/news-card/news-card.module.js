import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card.component';
import { RouterModule } from '@angular/router';
import { OpenNewsCardModule } from '../../open-cards/open-news-card/open-news-card.module';
import { OpenNewsCardComponent } from '../../open-cards/open-news-card/open-news-card.component';
var NewsCardModule = /** @class */ (function () {
    function NewsCardModule() {
    }
    NewsCardModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                OpenNewsCardModule
            ],
            declarations: [
                NewsCardComponent
            ],
            exports: [
                NewsCardComponent
            ],
            entryComponents: [
                OpenNewsCardComponent
            ]
        })
    ], NewsCardModule);
    return NewsCardModule;
}());
export { NewsCardModule };
//# sourceMappingURL=news-card.module.js.map