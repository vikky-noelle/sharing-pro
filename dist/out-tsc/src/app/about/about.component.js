import * as tslib_1 from "tslib";
import { Component, HostListener, ViewChild, ElementRef, Renderer2, PLATFORM_ID, Inject } from '@angular/core';
import { SendService } from '../shared/services/send.service';
import { PostService } from '../shared/services/post.service';
import { TimeService } from '../shared/services/time.service';
import { GetService } from '../shared/services/get.service';
import { LinkService } from '../shared/services/link.service';
import { Meta, Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
var AboutComponent = /** @class */ (function () {
    function AboutComponent(margin, renderer, get, post, time, link, metaservice, titleservice, http, platformid) {
        var _this = this;
        this.margin = margin;
        this.renderer = renderer;
        this.get = get;
        this.post = post;
        this.time = time;
        this.link = link;
        this.metaservice = metaservice;
        this.titleservice = titleservice;
        this.http = http;
        this.title = 'About Sports Social | Chase Your Sport';
        this.keywords = "About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport";
        this.description = "Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate forms of physical activity.";
        this.posturl = "https://prod.chaseyoursport.com/sportSocialBlogs";
        this.blogs = [];
        this.data1 = [];
        this.instaArr = [];
        this.instadata = [];
        this.descTitle = "Sports Social is";
        this.descTitleDisplay = "";
        this.desc = "Sports digital media and Networking Service that helps you to see\
 what's going around in your locality and around the globe right now & let's\
  you chase your passion to play your favourite sport.";
        this.descDisplay = "";
        this.margin.height.subscribe(function (top) { return _this.marginTop = top; });
    }
    AboutComponent.prototype.instafeed = function () {
        var _this = this;
        this.get.getinstadata()
            .subscribe(function (res) {
            _this.instadata = res.json().data;
            // console.log("this is insta data::"+JSON.stringify(this.instadata));
            for (var i = 0; i < _this.instadata.length; i++) {
                _this.instaimageArray = _this.instadata[i];
                _this.instaArr.push({
                    id: _this.instaimageArray.id,
                    profile_picture: _this.instaimageArray.user.profile_picture,
                    username: _this.instaimageArray.user.username,
                    url: _this.instaimageArray.images.standard_resolution.url,
                    created_time: _this.time.ExactDate(_this.instaimageArray.created_time),
                    text: _this.instaimageArray.caption.text,
                    link: _this.instaimageArray.link
                });
            }
        });
    };
    AboutComponent.prototype.getLatestBlog = function () {
        var _this = this;
        this.http.post(this.posturl, {}).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.blogs.push({
                    blogId: data[i].blogId,
                    heading: data[i].heading,
                    blogImage: data[i].blogImage,
                    viewCount: data[i].viewCount,
                    shareCount: data[i].shareCount,
                    bloggerName: data[i].bloggerName,
                    metaDesc: data[i].metaDesc,
                    topic: data[i].topic,
                    insertedDate: _this.time.timePassed(data[i].insertedDate)
                });
            }
        });
    };
    AboutComponent.prototype.setCanonicalURL = function () {
        this.link.addTag({ rel: 'canonical', href: 'https://www.sportsoical.in' });
    };
    AboutComponent.prototype.ngOnInit = function () {
        // console.log(this.desc.nativeElement.textContent);
        this.instafeed();
        this.titleservice.setTitle(this.title);
        this.metaservice.updateTag({ name: 'title', content: this.title });
        this.metaservice.updateTag({ name: 'keywords', content: this.keywords });
        this.metaservice.updateTag({ name: 'description', content: this.description });
        this.metaservice.updateTag({ property: 'og:title', content: this.title });
        this.metaservice.updateTag({ property: 'og:description', content: this.description });
        this.metaservice.updateTag({ property: 'og:keywords', content: this.keywords });
        this.getLatestBlog();
        this.setCanonicalURL();
        this.typeWriterTitle(this.descTitle, 0);
        setTimeout(function () {
            var i = 0;
            i++;
            if (i <= 5) { }
            console.log(i);
        }, 1000);
        this.typeWriter(this.desc, 0);
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        if (this._masonry) {
            this._removeAllSubscription.unsubscribe();
            this._removeItemSubscription.unsubscribe();
            this._removeFirstItemSubscription.unsubscribe();
        }
    };
    AboutComponent.prototype.onResize = function (event) {
        var _this = this;
        this.margin.height.subscribe(function (top) {
            _this.marginTop = top;
        });
    };
    AboutComponent.prototype.leftScroll = function () {
        this.blog.nativeElement.scrollLeft -= this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll = function () {
        this.blog.nativeElement.scrollLeft += this.blogImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.leftScroll2 = function () {
        this.socialFeed.nativeElement.scrollLeft -= this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.rightScroll2 = function () {
        this.socialFeed.nativeElement.scrollLeft += this.socialFeedImg.nativeElement.clientWidth;
    };
    AboutComponent.prototype.typeWriter = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descDisplay += (this.desc[n]);
            n++;
            setTimeout(function () {
                _this.typeWriter(_this.desc, n);
            }, 30);
        }
    };
    AboutComponent.prototype.typeWriterTitle = function (text, n) {
        var _this = this;
        if (n < text.length) {
            this.descTitleDisplay += (text[n]);
            n++;
            setTimeout(function () {
                _this.typeWriterTitle(text, n);
            }, 40);
        }
    };
    tslib_1.__decorate([
        ViewChild('blog'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AboutComponent.prototype, "blog", void 0);
    tslib_1.__decorate([
        ViewChild('blogImg'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AboutComponent.prototype, "blogImg", void 0);
    tslib_1.__decorate([
        ViewChild('socialFeed'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AboutComponent.prototype, "socialFeed", void 0);
    tslib_1.__decorate([
        ViewChild('socialFeedImg'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AboutComponent.prototype, "socialFeedImg", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "onResize", null);
    AboutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
        }),
        tslib_1.__param(9, Inject(PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [SendService,
            Renderer2,
            GetService,
            PostService,
            TimeService,
            LinkService,
            Meta,
            Title,
            Http,
            Object])
    ], AboutComponent);
    return AboutComponent;
}());
export { AboutComponent };
//# sourceMappingURL=about.component.js.map