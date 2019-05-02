import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                HeaderComponent
            ],
            exports: [
                HeaderComponent
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());
export { HeaderModule };
//# sourceMappingURL=header.module.js.map