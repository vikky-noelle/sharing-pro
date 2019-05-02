import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
var LinkService = /** @class */ (function () {
    function LinkService(rendererFactory, document) {
        this.rendererFactory = rendererFactory;
        this.document = document;
    }
    LinkService.prototype.addTag = function (tag, forceCreation) {
        try {
            var renderer_1 = this.rendererFactory.createRenderer(this.document, {
                id: '-1',
                encapsulation: ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var link_1 = renderer_1.createElement('link');
            var head = this.document.head;
            var selector = this._parseSelector(tag);
            if (head === null) {
                throw new Error('<head> not found within DOCUMENT.');
            }
            Object.keys(tag).forEach(function (prop) {
                return renderer_1.setAttribute(link_1, prop, tag[prop]);
            });
            renderer_1.appendChild(head, link_1);
        }
        catch (e) {
            console.error('Error within linkService : ', e);
        }
    };
    LinkService.prototype._parseSelector = function (tag) {
        var attr = tag.rel ? 'rel' : 'hreflang';
        return attr + "=\"" + tag[attr] + "\"";
    };
    LinkService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(1, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [RendererFactory2, Object])
    ], LinkService);
    return LinkService;
}());
export { LinkService };
//# sourceMappingURL=link.service.js.map