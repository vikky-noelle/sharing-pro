import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './help-center.component';
import { HelpCenterContentComponent } from './help-center-content/help-center-content.component';
import { HelpCenterHeaderComponent } from './help-center-header/help-center-header.component';
import { FooterModule } from '../footer/footer.module';
import { HelpCenterFooterComponent } from './help-center-footer/help-center-footer.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';
var HelpCenterModule = /** @class */ (function () {
    function HelpCenterModule() {
    }
    HelpCenterModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FooterModule,
                RouterModule,
                HeaderModule
            ],
            declarations: [HelpCenterComponent,
                HelpCenterContentComponent,
                HelpCenterHeaderComponent,
                HelpCenterFooterComponent
            ],
            exports: [HelpCenterHeaderComponent]
        })
    ], HelpCenterModule);
    return HelpCenterModule;
}());
export { HelpCenterModule };
//# sourceMappingURL=help-center.module.js.map