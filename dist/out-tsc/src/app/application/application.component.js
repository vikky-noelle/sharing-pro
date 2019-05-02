import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent(titleservice, metaservice) {
        this.titleservice = titleservice;
        this.metaservice = metaservice;
        this.title = 'Download the Sports Social App from Google PlayStore';
        this.keywords = "Sports Social,Sports Social App,Best Sports app India,Play Your Sport,Sports Networking app,Sports Profile,Playmates,Sports Fans,Connect to Sports players,Sports Venues Near by,Sports app,All Sports app,Free Sports App,Online Sports App";
        this.description = "Sports Social app is your personal sports manager that lets you maintain your sports profile,Making your sports & fitness groups (Playmates), Follow others sports activities and create a fan following , Connect with other sports enthusiasts, Discover sports and fitness activities near you and much more. You can also locate the Venues Nearby for more than 10 Sports including Cricket, Football, Lawn Tennis, Badminton etc.";
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.keywords });
        this.metaservice.updateTag({ name: 'description', content: this.description });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.keywords });
        this.metaservice.updateTag({ property: 'og:description', content: this.description });
    };
    ApplicationComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-application',
            templateUrl: './application.component.html',
            styleUrls: ['./application.component.css'],
            encapsulation: ViewEncapsulation.None
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            Meta])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
export { ApplicationComponent };
//# sourceMappingURL=application.component.js.map