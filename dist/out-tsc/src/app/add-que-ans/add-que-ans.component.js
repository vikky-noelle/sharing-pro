import * as tslib_1 from "tslib";
import { Component, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { GetService } from '../shared/services/get.service';
import { PostService } from '../shared/services/post.service';
var AddQueAnsComponent = /** @class */ (function () {
    function AddQueAnsComponent(router, route, getService, load, meta, pagetitle, renderer) {
        this.router = router;
        this.route = route;
        this.getService = getService;
        this.load = load;
        this.meta = meta;
        this.pagetitle = pagetitle;
        this.renderer = renderer;
        this.quesAns = [];
        // quesAns:{
        //   id: string,
        //         topic_id: string,
        //         subtopic_id:string ,
        //         subtopic_name:string,
        //         ques: string,
        //         ans: string,
        //         icon: string
        // }[]=[];
        this.Ans = "";
        this.Ques = "";
        this.blog = { title: '', question: '', answer: '' };
    }
    AddQueAnsComponent.prototype.ngOnInit = function () {
        var topicId = +this.route.snapshot.paramMap.get("topicId");
        var subtopicId = +this.route.snapshot.paramMap.get("subtopicId");
        this.getQuesAns(topicId, subtopicId);
        console.log("hello", this.quesAns);
    };
    AddQueAnsComponent.prototype.strip = function (html) {
        var tmp = this.renderer.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };
    AddQueAnsComponent.prototype.getQuesAns = function (topicId, subtopicId) {
        var _this = this;
        this.getService.getQA(topicId, subtopicId).subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.quesAns.push({
                    id: body[i].id,
                    topic_id: body[i].topic_id,
                    subtopic_id: body[i].subtopic_id,
                    subtopic_name: body[i].subtopic_name,
                    ques: body[i].ques,
                    ans: body[i].ans,
                    icon: body[i].icon
                });
            }
            _this.Ans = _this.quesAns[0].ans;
        });
    };
    AddQueAnsComponent.prototype.getAns = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ans = this.quesAns[qu].ans;
        }
        var convertedhtml = this.strip(this.Ans);
        this.meta.updateTag({ name: 'description', content: convertedhtml });
        this.getQues(id);
    };
    AddQueAnsComponent.prototype.getQues = function (id) {
        for (var qu in this.quesAns) {
            if (this.quesAns[qu].id == id)
                this.Ques = this.quesAns[qu].ques;
        }
        var convertedhtml = this.strip(this.Ques);
        this.pagetitle.setTitle(convertedhtml);
        this.meta.updateTag({ name: 'title', content: convertedhtml });
    };
    AddQueAnsComponent.prototype.getsubtopicseo = function () {
    };
    AddQueAnsComponent.prototype.getImg = function (img) {
        for (var image in this.quesAns) {
            //console.log(image);
            if (this.quesAns[img].icon == img) {
                this.img = this.quesAns[img].icon;
            }
        }
    };
    AddQueAnsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-que-ans',
            templateUrl: './add-que-ans.component.html',
            styleUrls: ['./add-que-ans.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute,
            GetService,
            PostService,
            Meta,
            Title,
            Renderer2])
    ], AddQueAnsComponent);
    return AddQueAnsComponent;
}());
export { AddQueAnsComponent };
//# sourceMappingURL=add-que-ans.component.js.map