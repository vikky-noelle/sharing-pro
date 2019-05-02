import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { AboutRouter } from './about.router';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { BlogCardModule } from '../cards/blog-card/blog-card.module';
import { NgMasonryGridModule } from 'ng-masonry-grid';
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                AboutRouter,
                FooterModule,
                HeaderModule,
                BlogCardModule,
                NgMasonryGridModule
            ],
            declarations: [
                AboutComponent,
            ],
            exports: [
                AboutComponent
            ]
        })
    ], AboutModule);
    return AboutModule;
}());
export { AboutModule };
//# sourceMappingURL=about.module.js.map