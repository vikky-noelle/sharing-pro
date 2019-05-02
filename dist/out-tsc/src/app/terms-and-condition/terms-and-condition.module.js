import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { TermsAndConditionComponent } from './terms-and-condition.component';
import { TermRouter } from './terms-and-condition.router';
var TermsAndConditionModule = /** @class */ (function () {
    function TermsAndConditionModule() {
    }
    TermsAndConditionModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                HeaderModule,
                FooterModule,
                RouterModule,
                TermRouter
            ],
            exports: [
                TermsAndConditionComponent
            ],
            declarations: [
                TermsAndConditionComponent
            ]
        })
    ], TermsAndConditionModule);
    return TermsAndConditionModule;
}());
export { TermsAndConditionModule };
//# sourceMappingURL=terms-and-condition.module.js.map