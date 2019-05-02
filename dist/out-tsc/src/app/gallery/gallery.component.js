import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.images = [];
        this.loading = false;
        this.firstImageLoaded = false;
        this.i = 0;
    }
    GalleryComponent.prototype.addimage = function (path) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(path);
            };
            img.onerror = function () {
                resolve('/assets/images/default-image.png');
            };
            img.src = path;
        });
    };
    GalleryComponent.prototype.left = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i - 1;
        this.addimage(this.images[this.i].image).then(function (path) {
            _this.loading = false;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    GalleryComponent.prototype.right = function () {
        var _this = this;
        this.loading = true;
        this.i = this.i + 1;
        if (this.i < this.images.length) {
            this.addimage(this.images[this.i].image).then(function (path) {
                _this.loading = false;
                _this.image = path;
                _this.likeCount = _this.images[_this.i].likeCount;
                _this.commentCount = _this.images[_this.i].commentCount;
                _this.text = _this.images[_this.i].text;
            });
        }
        else {
            this.loading = false;
        }
    };
    GalleryComponent.prototype.hasnext = function () {
        if (this.images.length > 1 && this.i < this.images.length) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.hasprevious = function () {
        if (this.i > 0) {
            return true;
        }
        return false;
    };
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = this.images.reverse();
        this.loading = true;
        console.log(this.images);
        this.addimage(this.images[0].image).then(function (path) {
            _this.loading = false;
            _this.firstImageLoaded = true;
            _this.image = path;
            _this.likeCount = _this.images[_this.i].likeCount;
            _this.commentCount = _this.images[_this.i].commentCount;
            _this.text = _this.images[_this.i].text;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css'],
            encapsulation: ViewEncapsulation.Emulated
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map