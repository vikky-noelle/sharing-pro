import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../shared/services/get.service';
var SubTopicComponent = /** @class */ (function () {
    function SubTopicComponent(route, getService) {
        this.route = route;
        this.getService = getService;
        this.subTopics = [];
    }
    SubTopicComponent.prototype.getSubtopic = function () {
        var _this = this;
        var topic_id = +this.route.snapshot.paramMap.get("id");
        console.log(topic_id);
        this.getService.getSubTopic(topic_id).subscribe(function (res) {
            for (var i in res) {
                _this.subTopics.push({
                    id: res[i].id,
                    topic_id: res[i].topic_id,
                    name: res[i].name,
                    icon: res[i].icon,
                    shortDesc: res[i].shortDesc
                });
            }
            console.log(_this.subTopics);
        });
    };
    SubTopicComponent.prototype.ngOnInit = function () {
        this.getSubtopic();
    };
    SubTopicComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sub-topic',
            templateUrl: './sub-topic.component.html',
            styleUrls: ['./sub-topic.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            GetService])
    ], SubTopicComponent);
    return SubTopicComponent;
}());
export { SubTopicComponent };
//# sourceMappingURL=sub-topic.component.js.map