import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
var BlogCardComponent = /** @class */ (function () {
    function BlogCardComponent() {
    }
    BlogCardComponent.prototype.ngOnInit = function () {
    };
    BlogCardComponent.prototype.ngAfterViewInit = function () {
        this.url = 'https://www.chaseyoursport.com/' + this.topic
            + '/' + this.shortTitle + '/' + this.blogId;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "blogId", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "heading", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "blogImage", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "viewCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "shareCount", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "bloggerName", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "metaDesc", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "imageDesc", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "topic", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "shortTitle", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BlogCardComponent.prototype, "insertedDate", void 0);
    BlogCardComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-blog-card',
            templateUrl: './blog-card.component.html',
            styleUrls: ['./blog-card.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BlogCardComponent);
    return BlogCardComponent;
}());
export { BlogCardComponent };
//# sourceMappingURL=blog-card.component.js.map