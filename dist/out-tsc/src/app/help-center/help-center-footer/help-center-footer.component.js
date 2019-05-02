import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HelpCenterFooterComponent = /** @class */ (function () {
    function HelpCenterFooterComponent() {
        this.footer = [
            { name: "About", Url: "/About" },
            { name: "Blog", Url: "#" },
            { name: "App", Url: "#" },
            { name: "Terms and Condition", Url: "#" },
            { name: "Privacy Policy", Url: "#" },
            { name: "Open Arena", Url: "#" },
            { name: "Around The World", Url: "#" },
            { Url: "#", image: "/assets/images/insta.png" },
            { Url: "#", image: "/assets/images/twitter.png" },
            { Url: "#", image: "/assets/images/youtube.jpg" },
            { Url: "#", image: "/assets/images/facebook.jpg" },
        ];
    }
    HelpCenterFooterComponent.prototype.ngOnInit = function () {
    };
    HelpCenterFooterComponent = tslib_1.__decorate([
        Component({
            selector: 'SportSocial-help-center-footer',
            templateUrl: './help-center-footer.component.html',
            styleUrls: ['./help-center-footer.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HelpCenterFooterComponent);
    return HelpCenterFooterComponent;
}());
export { HelpCenterFooterComponent };
//# sourceMappingURL=help-center-footer.component.js.map