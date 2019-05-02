import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { LinkService } from '../shared/services/link.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(metaservice, link, titleservice, platformid) {
        this.metaservice = metaservice;
        this.link = link;
        this.titleservice = titleservice;
        this.Keywords = [];
        link.addTag({ rel: 'canonical', href: 'https://www.sportsocial.in/' });
        metaservice.addTags([
            { name: 'theme-color', content: '#4327a0' },
            { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
            { property: 'og:site_name', content: 'Sport Social' },
            { property: 'fb:app_id', content: '1750709328507665' },
            { name: 'facebook:creator', content: '@SourabhArora' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@Sportsoical' },
            { name: 'twitter:creator', content: '@SourabhArora' },
            { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service' },
            { name: 'twitter:description', content: "Sports Social Blog: Chase Your Sport aims to create a sustainable\n          platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and\n          career in sports." },
            { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg' },
        ]);
        this.isbrowser = isPlatformBrowser(platformid);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleservice.setTitle("Sports Social: Making it easier to play around");
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'sports-social-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            encapsulation: ViewEncapsulation.Emulated,
            preserveWhitespaces: false
        }),
        tslib_1.__param(3, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [Meta,
            LinkService,
            Title,
            Object])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map