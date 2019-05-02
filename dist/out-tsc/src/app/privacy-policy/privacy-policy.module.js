import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyRouter } from './privacy-policy.router';
var PrivacyPolicyModule = /** @class */ (function () {
    function PrivacyPolicyModule() {
    }
    PrivacyPolicyModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                HeaderModule,
                FooterModule,
                RouterModule,
                PrivacyRouter
            ],
            exports: [
                PrivacyPolicyComponent
            ],
            declarations: [
                PrivacyPolicyComponent
            ]
        })
    ], PrivacyPolicyModule);
    return PrivacyPolicyModule;
}());
export { PrivacyPolicyModule };
//# sourceMappingURL=privacy-policy.module.js.map