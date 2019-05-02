import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMatchCardComponent } from './live-match-card.component';
import { RouterModule } from '@angular/router';
var LiveMatchCardModule = /** @class */ (function () {
    function LiveMatchCardModule() {
    }
    LiveMatchCardModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                LiveMatchCardComponent
            ],
            exports: [
                LiveMatchCardComponent
            ]
        })
    ], LiveMatchCardModule);
    return LiveMatchCardModule;
}());
export { LiveMatchCardModule };
//# sourceMappingURL=live-match-card.module.js.map