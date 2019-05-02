import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LocationService } from './location.service';
import { PostService } from './post.service';
var MatchDataService = /** @class */ (function () {
    function MatchDataService(loc, get) {
        this.loc = loc;
        this.get = get;
        this.globalArena = [];
    }
    MatchDataService.prototype.getActivityName = function (activityid) {
        if (activityid === 1002) {
            return 'Joined';
        }
        if (activityid === 1004) {
            return 'Promoted';
        }
        if (activityid === 1009) {
            return 'Watching';
        }
        if (activityid === 1005) {
            return 'Commented';
        }
        if (activityid === 1001) {
            return 'Created';
        }
    };
    MatchDataService.prototype.globalMatchFeed = function (page, gameid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.loc.getGeoLocation()
                .then(function (pos) {
                _this.get.globalMatchFeed(pos['latitude'], pos['longitude'], page, gameid).subscribe(function (res) {
                    var data = res['Feed'];
                    // tslint:disable-next-line:forin
                    for (var i in data) {
                        _this.globalArena.push({
                            eventId: data[i].eventid,
                            creatorImage: data[i].creatorImage,
                            creatorName: data[i].creatorName,
                            type: data[i].feedtype,
                            doerId: data[i].doerId,
                            doerName: data[i].user_name,
                            doerPic: data[i].Profile_Photo,
                            matchText: data[i].EventText,
                            matchImage: data[i].Event_Image,
                            activityDate: data[i].InsertedDate,
                            matchDate: data[i].startdatetime,
                            restrictionCount: data[i].restrictionCount,
                            joineeCount: data[i].JoineeCount,
                            commentCount: data[i].CommentCount,
                            watchCount: data[i].WatchCount,
                            promoteCount: data[i].PromoteCount,
                            venueName: data[i].Venue_Name,
                            gameName: data[i].GameName,
                            activityName: _this.getActivityName(data[i].ActivityId)
                        });
                    }
                    resolve(_this.globalArena.slice(page * 15, (page + 1) * 15));
                }, function (err) {
                    var errObj = { 'err': err, 'message': 'Something went wrong with Match feed!' };
                    reject(errObj);
                });
            }).catch(function (err) {
                console.log('err', err);
            });
        });
    };
    MatchDataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [LocationService,
            PostService])
    ], MatchDataService);
    return MatchDataService;
}());
export { MatchDataService };
//# sourceMappingURL=match-data.service.js.map