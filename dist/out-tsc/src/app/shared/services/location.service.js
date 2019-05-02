import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LocationService = /** @class */ (function () {
    function LocationService(http) {
        this.http = http;
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    LocationService.prototype.error = function (err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
    };
    LocationService.prototype.getGeoLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                var crd = pos.coords;
                console.log(crd);
                _this.position = {
                    latitude: crd.latitude,
                    longitude: crd.longitude
                };
                resolve(_this.position);
                console.log('Your current position is:');
                console.log("Latitude : " + crd.latitude);
                console.log("Longitude: " + crd.longitude);
                console.log('page no. is :' + _this.feedPageRequestObject.page);
                console.log("More or less " + crd.accuracy + " meters.");
            }, function (err) {
                console.warn("ERROR(" + err.code + "): " + err.message);
                _this.position = {
                    latitude: 0,
                    longitude: 0
                };
                resolve(_this.position);
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        });
    };
    LocationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LocationService);
    return LocationService;
}());
export { LocationService };
//# sourceMappingURL=location.service.js.map