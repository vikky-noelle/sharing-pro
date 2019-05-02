import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';
var SeoService = /** @class */ (function () {
    function SeoService(meta) {
        this.meta = meta;
    }
    SeoService.prototype.generateTags = function (config) {
        // default values
        config = tslib_1.__assign({ title: 'Sports Social: Making it easier to play around', description: 'My SEO friendly Angular Component', image: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg', slug: '' }, config);
        this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.meta.updateTag({ name: 'twitter:site', content: '@Sportsoical' });
        this.meta.updateTag({ name: 'twitter:creator', content: '@SourabhArora' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: config.image });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        this.meta.updateTag({ property: 'og:site_name', content: 'Sport Social' });
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:image', content: config.image });
        this.meta.updateTag({ property: 'og:url', content: "https://www.sportsocial.in/" + config.slug });
    };
    SeoService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Meta])
    ], SeoService);
    return SeoService;
}());
export { SeoService };
//# sourceMappingURL=seo.service.js.map