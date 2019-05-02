import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HelpCenterHeaderComponent = /** @class */ (function () {
    function HelpCenterHeaderComponent() {
        this.quickAnswers = [
            { ques: "How to use Sports Social in your locality?", url: "#" },
            { ques: "What is Open Arena?", url: "#" },
            { ques: "How to inform playmates about my match?", url: "#" },
            { ques: "How to connect with people having similar level of expertise?", url: "#" },
            { ques: "How to postpone my match?", url: "#" },
        ];
    }
    HelpCenterHeaderComponent.prototype.ngOnInit = function () {
    };
    HelpCenterHeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'SportSocial-help-center-header',
            templateUrl: './help-center-header.component.html',
            styleUrls: ['./help-center-header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HelpCenterHeaderComponent);
    return HelpCenterHeaderComponent;
}());
export { HelpCenterHeaderComponent };
//# sourceMappingURL=help-center-header.component.js.map