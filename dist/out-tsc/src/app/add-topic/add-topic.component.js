import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetService } from '../shared/services/get.service';
var AddTopicComponent = /** @class */ (function () {
    function AddTopicComponent(getService, router) {
        this.getService = getService;
        this.router = router;
        this.topics = [];
    }
    AddTopicComponent.prototype.AllTopics = function () {
        var _this = this;
        this.getService.getTopics().subscribe(function (res) {
            var body = JSON.parse(res._body);
            for (var i in body) {
                _this.topics.push({
                    id: body[i].id,
                    name: body[i].name,
                    icon: body[i].icon,
                    shortDesc: body[i].shortDesc
                });
            }
            console.log(_this.topics);
        });
    };
    AddTopicComponent.prototype.send = function () {
        this.router.navigate(["addsubtopic"]);
    };
    AddTopicComponent.prototype.ngOnInit = function () {
        this.AllTopics();
    };
    AddTopicComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-topic',
            templateUrl: './add-topic.component.html',
            styleUrls: ['./add-topic.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [GetService,
            Router])
    ], AddTopicComponent);
    return AddTopicComponent;
}());
export { AddTopicComponent };
//# sourceMappingURL=add-topic.component.js.map