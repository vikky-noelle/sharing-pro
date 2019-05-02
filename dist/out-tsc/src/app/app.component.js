import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MessagingService } from './shared/services/messaging.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(messagingService) {
        this.messagingService = messagingService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var userId = 'user001';
        this.messagingService.requestPermission(userId);
        this.messagingService.receiveMessage();
        this.messagingService.subscribe_device(localStorage.getItem('hiiiiiii'));
        this.message = this.messagingService.currentMessage;
        console.log("Hey user this is my message:" + JSON.stringify(this.message));
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            preserveWhitespaces: false
        }),
        tslib_1.__metadata("design:paramtypes", [MessagingService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map