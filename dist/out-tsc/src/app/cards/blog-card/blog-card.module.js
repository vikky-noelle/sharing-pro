import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card.component';
import { RouterModule } from '@angular/router';
var BlogCardModule = /** @class */ (function () {
    function BlogCardModule() {
    }
    BlogCardModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                BlogCardComponent
            ],
            exports: [
                BlogCardComponent
            ]
        })
    ], BlogCardModule);
    return BlogCardModule;
}());
export { BlogCardModule };
//# sourceMappingURL=blog-card.module.js.map