import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from './match-card.component';
import { RouterModule } from '@angular/router';
import { OpenMatchCardModule } from '../../open-cards/open-match-card/open-match-card.module';
var MatchCardModule = /** @class */ (function () {
    function MatchCardModule() {
    }
    MatchCardModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule,
                OpenMatchCardModule
            ],
            declarations: [
                MatchCardComponent
            ],
            exports: [
                MatchCardComponent
            ]
        })
    ], MatchCardModule);
    return MatchCardModule;
}());
export { MatchCardModule };
//# sourceMappingURL=match-card.module.js.map