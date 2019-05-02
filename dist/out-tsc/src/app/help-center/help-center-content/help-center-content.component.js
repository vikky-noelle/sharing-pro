import * as tslib_1 from "tslib";
import { Component, ViewChildren, ElementRef, Renderer2, QueryList, ViewChild } from '@angular/core';
import { GetService } from '../../shared/services/get.service';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../../shared/services/link.service';
import { Meta, Title } from '@angular/platform-browser';
var HelpCenterContentComponent = /** @class */ (function () {
    function HelpCenterContentComponent(getService, route, link, meta, title, renderer) {
        this.getService = getService;
        this.route = route;
        this.link = link;
        this.meta = meta;
        this.title = title;
        this.renderer = renderer;
        this.topicName = "";
        this.windowNavbar = true;
        this.Keywords = [];
        this.topics = [];
        this.subtopics = [];
        this.topicname = '';
        this.isDropdownIconclicked = false;
        this.pagetitle = 'Sports Social Help Center';
        this.description = "How can we help you today? Using Sports Social, New to Sports Social? Learn the basics to get the most out of Sports Social. Having an issue contact us";
        this.metakeywords = "Sports Social Help,Sports Social Help Center,Customer care Sports Social,Contact Sports Social,Chase Your Sport,FAQ Sports Social,Sports Social Support";
        this.top = '';
    }
    HelpCenterContentComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc,
                    namkaran: body[i].name
                });
                if (_this.topicname != '') {
                    if (_this.topicname == body[i].name)
                        _this.topicId = body[i].id;
                }
                var url = 'https://www.sportsocial.in/' + _this.strip(body[i].namkaran).replace(/\s/g, '-').toLowerCase();
                _this.link.addTag({ rel: 'canonical', href: url });
            }
            console.log(_this.topics);
            console.log(_this.topicname);
            if (_this.topicname == '')
                _this.topicId = _this.topics[0].id;
            _this.getSubTopics(_this.topicId);
        });
    };
    HelpCenterContentComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    HelpCenterContentComponent.prototype.SubtopicsIconChange = function (id) {
        this.subtopics = [];
        this.getSubTopics(id);
        this.getSeo(id);
    };
    ;
    HelpCenterContentComponent.prototype.getSubTopics = function (id) {
        var _this = this;
        this.getService.getSubTopic(id).subscribe(function (res) {
            var body = JSON.parse(res._body);
            _this.subtopics = [];
            for (var i in body) {
                _this.subtopics.push({
                    topic_id: body[i].topic_id,
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.subtopics);
        });
    };
    HelpCenterContentComponent.prototype.getSeo = function (id) {
        for (var topic in this.topics) {
            if (this.topics[topic].id == id)
                this.top = this.topics[topic].name;
        }
        this.title.setTitle(this.top);
        this.meta.updateTag({ name: 'title', content: this.top });
    };
    HelpCenterContentComponent.prototype.openDropdown = function () {
        this.isDropdownIconclicked = true;
    };
    HelpCenterContentComponent.prototype.closeDropdown = function () {
        this.isDropdownIconclicked = false;
    };
    HelpCenterContentComponent.prototype.ngOnInit = function () {
        this.title.setTitle(this.pagetitle);
        this.meta.updateTag({ name: 'title', content: this.pagetitle });
        this.meta.updateTag({ name: 'description', content: this.description });
        this.meta.updateTag({ name: 'keywords', content: this.metakeywords });
        this.meta.updateTag({ property: 'og:title', content: this.pagetitle });
        this.meta.updateTag({ property: 'og:description', content: this.description });
        this.meta.updateTag({ property: 'og:keywords', content: this.metakeywords });
        if (this.route.snapshot.paramMap.has("topicname")) {
            this.topicname = this.route.snapshot.paramMap.get("topicname");
        }
        this.AllTopics();
    };
    HelpCenterContentComponent.prototype.setCanonivalURL = function () {
        var key;
        if (this.Keywords[0].search(/ /g) === -1) {
            key = this.Keywords[0];
        }
        else {
            key = this.Keywords[0].replace(/\s/g, '-');
        }
        var url = 'https://www.sportsocial.in/' + key
            + '/' + this.pagetitle.replace(/\s/g, '-') + '/';
        this.link.addTag({ rel: 'canonical', href: url });
    };
    tslib_1.__decorate([
        ViewChild('problems'),
        tslib_1.__metadata("design:type", ElementRef)
    ], HelpCenterContentComponent.prototype, "problems", void 0);
    tslib_1.__decorate([
        ViewChildren('problem'),
        tslib_1.__metadata("design:type", QueryList)
    ], HelpCenterContentComponent.prototype, "problem", void 0);
    HelpCenterContentComponent = tslib_1.__decorate([
        Component({
            selector: 'SportSocial-help-center-content',
            templateUrl: './help-center-content.component.html',
            styleUrls: ['./help-center-content.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetService,
            ActivatedRoute,
            LinkService,
            Meta,
            Title,
            Renderer2])
    ], HelpCenterContentComponent);
    return HelpCenterContentComponent;
}());
export { HelpCenterContentComponent };
/*
if(window.innerWidth<900){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','80%')
}
if(window.innerWidth<500){
 // this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  
}
}

@HostListener('window:resize', []) onScreenResize() {
if(window.innerWidth<800){
  this.windowNavbar=false;
  this.renderer.setStyle(this.problems.nativeElement,'display','block')
  this.renderer.setStyle(this.problems.nativeElement,'width','100%')
}
else{
  this.windowNavbar=true;
  this.renderer.setStyle(this.problems.nativeElement,'display','inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','79%')
}
if(window.innerWidth<500){
  //this.problem.map(div=>{this.renderer.setStyle(div,'max-width','50%')})
  this.windowNavbar = false;
  this.renderer.setStyle(this.problems.nativeElement, 'display', 'inline-block')
  this.renderer.setStyle(this.problems.nativeElement,'width','50%')
  
}
}*/
/*mobile view*/
//# sourceMappingURL=help-center-content.component.js.map