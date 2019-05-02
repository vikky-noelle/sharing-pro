import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
var NavigationBarModule = /** @class */ (function () {
    function NavigationBarModule() {
    }
    NavigationBarModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                NavigationBarComponent
            ],
            exports: [
                NavigationBarComponent
            ]
        })
    ], NavigationBarModule);
    return NavigationBarModule;
}());
export { NavigationBarModule };
//# sourceMappingURL=navigation-bar.module.js.map