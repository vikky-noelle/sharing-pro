import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenMatchCardComponent } from './open-match-card.component';
import { GalleryModule } from '../../gallery/gallery.module';
var OpenMatchCardModule = /** @class */ (function () {
    function OpenMatchCardModule() {
    }
    OpenMatchCardModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                GalleryModule
            ],
            declarations: [
                OpenMatchCardComponent
            ],
            exports: [
                OpenMatchCardComponent
            ]
        })
    ], OpenMatchCardModule);
    return OpenMatchCardModule;
}());
export { OpenMatchCardModule };
//# sourceMappingURL=open-match-card.module.js.map