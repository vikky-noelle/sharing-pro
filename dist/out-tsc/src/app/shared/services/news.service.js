import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PostService } from './post.service';
var NewsService = /** @class */ (function () {
    function NewsService(get) {
        this.get = get;
        this.globalArena = [];
    }
    NewsService.prototype.globalNewsFeed = function (page, gameName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.get.globalNewsFeed(page, gameName).subscribe(function (res) {
                var data = res;
                console.log(data);
                // tslint:disable-next-line:forin
                for (var i in data) {
                    _this.globalArena.push({
                        type: data[i].feedType,
                        commentCount: data[i].commentCount,
                        likeCount: data[i].likeCount,
                        shareCount: data[i].shareCount,
                        publishedAt: data[i].publishedAt,
                        gameName: data[i].gameName,
                        newsId: data[i]._id,
                        newsImage: data[i].newsImage,
                        sourceImage: data[i].sourceImage,
                        source: data[i].source,
                        title: data[i].title,
                        url: data[i].url,
                        desc: data[i].desc,
                        insertedDate: data[i].insertedDate
                    });
                }
                resolve(_this.globalArena.slice(_this.globalArena.length - 15, _this.globalArena.length));
            }, function (err) {
                var errObj = { 'err': err, 'message': 'Something went wrong with News feed!' };
                reject(errObj);
            });
        });
    };
    NewsService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [PostService])
    ], NewsService);
    return NewsService;
}());
export { NewsService };
//# sourceMappingURL=news.service.js.map