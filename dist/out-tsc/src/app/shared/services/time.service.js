import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.timePassed = function (i) {
        var writtenDate = new Date(parseInt(i, 10) * 1000);
        var presentDate = new Date();
        if (writtenDate.getDate() === presentDate.getDate() &&
            writtenDate.getMonth() === presentDate.getMonth() &&
            writtenDate.getFullYear() === presentDate.getFullYear()) {
            if (writtenDate.getHours() === presentDate.getHours()) {
                if (writtenDate.getMinutes() === presentDate.getMinutes()) {
                    if (writtenDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - writtenDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - writtenDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - writtenDate.getHours() + ' hrs ago';
            }
        }
        else {
            return this.ExactDate(parseInt(i, 10));
        }
    };
    TimeService.prototype.ExactDate = function (i) {
        var writtenDate = new Date(i * 1000);
        return writtenDate.toDateString();
    };
    TimeService.prototype.exactDate = function (i) {
        var dateOptions = { month: 'short', day: 'numeric' };
        var timeOpt = { hour: '2-digit', minute: '2-digit' };
        var matchDate = new Date(i);
        var presentDate = new Date();
        console.log(matchDate.toLocaleDateString('en-US', dateOptions), matchDate.toLocaleTimeString('en-US', timeOpt));
        // console.log('Today at ' + matchDate.getHours() + ':' + matchDate.getMinutes());
        if (matchDate.getUTCDate() === presentDate.getUTCDate()
            && matchDate.getFullYear() === presentDate.getFullYear()
            && matchDate.getMonth() === presentDate.getMonth()) {
            // console.log("he")
            return 'Today at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
        else {
            return matchDate.toLocaleDateString('en-US', dateOptions) + ' at ' + matchDate.toLocaleTimeString('en-US', timeOpt);
        }
    };
    TimeService.prototype.relativeDate = function (i) {
        var months = [
            'Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ];
        var matchDate = new Date(i);
        var presentDate = new Date();
        if (matchDate.getDate() === presentDate.getDate() &&
            matchDate.getMonth() === presentDate.getMonth() &&
            matchDate.getFullYear() === presentDate.getFullYear()) {
            if (matchDate.getHours() === presentDate.getHours()) {
                if (matchDate.getMinutes() === presentDate.getMinutes()) {
                    if (matchDate.getSeconds() === presentDate.getSeconds()) {
                        return 'Just Now';
                    }
                    else {
                        return presentDate.getSeconds() - matchDate.getSeconds() + ' sec ago';
                    }
                }
                else {
                    return presentDate.getMinutes() - matchDate.getMinutes() + ' min ago';
                }
            }
            else {
                return presentDate.getHours() - matchDate.getHours() + ' hrs ago';
            }
        }
        else {
            return matchDate.getDate() + ' ' + months[matchDate.getMonth()] + ' ' + matchDate.getFullYear();
        }
    };
    TimeService.prototype.newsDate = function (i) {
        var news = new Date(i);
        var dateOptions = { month: 'short', day: 'numeric', year: 'numeric' };
        return news.toLocaleDateString('en-US', dateOptions);
    };
    TimeService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], TimeService);
    return TimeService;
}());
export { TimeService };
//# sourceMappingURL=time.service.js.map