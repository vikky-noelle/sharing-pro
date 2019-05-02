import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule
            ],
            declarations: [
                FooterComponent
            ],
            exports: [
                FooterComponent
            ]
        })
    ], FooterModule);
    return FooterModule;
}());
export { FooterModule };
//# sourceMappingURL=footer.module.js.map