import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { Http } from '@angular/http';
var MessagingService = /** @class */ (function () {
    function MessagingService(angularFireDB, angularFireAuth, angularFireMessaging, afs, http) {
        this.angularFireDB = angularFireDB;
        this.angularFireAuth = angularFireAuth;
        this.angularFireMessaging = angularFireMessaging;
        this.afs = afs;
        this.http = http;
        this.currentMessage = new BehaviorSubject(this.currentMessage);
        this.posturl = "http://35.176.65.124:2200/tokens/";
        this.angularFireMessaging.messaging.subscribe(function (_messaging) {
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        });
    }
    /**
     * update token in firebase database
     *
     * @param userId userId as a key
     * @param token token as a value
     */
    MessagingService.prototype.updateToken = function (userId, token) {
        var _this = this;
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(take(1)).subscribe(function () {
            var data = {};
            data[userId] = token;
            _this.angularFireDB.object('fcmTokens/').update(data);
        });
    };
    /**
     * request permission for notification from firebase cloud messaging
     *
     * @param userId userId
     */
    MessagingService.prototype.requestPermission = function (userId) {
        var _this = this;
        this.angularFireMessaging.requestToken.subscribe(function (token) {
            console.log(token);
            _this.updateToken(userId, token);
            return _this.http.post(_this.posturl, { 'generatedToken': token }).map(function (res) {
                _this.myres = res.json();
                console.log("alfhsdfgsdjhfgsdfjshgfghjsdghfdsghfdsghj", _this.myres);
            });
        }, function (err) {
            console.error('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.subscribe_device = function (token) {
        var _this = this;
        return this.http.post(this.posturl, { token: token }).map(function (response) {
            _this.res2 = response.json();
            console.log("asgfjhsgdfdfgfjgfjsgh", _this.res2);
        });
    };
    // sendToken(){
    //   console.log("hey shaurya token is sending to server:",this.generatedToken);
    //   return this.http.post(this.posturl,{generatedToken1:this.generatedToken})
    //   .map((res)=> console.log("hey user afhskfsffkssffhfs",res));
    // }
    // sendTokenToServer(){
    //         const httpOptions = {
    //           headers: new HttpHeaders({
    //             "Authorization": "Token " + localStorage.getItem(this.generatedToken)
    //           });
    // return this.http.post(
    //   "URL", null, httpOptions); // replace the null with a body
    // }
    //    saveToken(user, token): void {
    //      console.log("hey this is user", user,"and this is token of saveing data",token);
    //     const currentTokens = user.fcmTokens || { }
    //     // If token does not exist in firestore, update db
    //     if (!currentTokens[token]) {
    //       const userRef = this.afs.collection('users').doc(user.uid)
    //       const tokens = { ...currentTokens, [token]: true }
    //       userRef.update({ fcmTokens: tokens })
    //     }
    // }
    /**
     * hook method when new notification received in foreground
     */
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.angularFireMessaging.messages.subscribe(function (payload) {
            console.log("new message received. ", payload);
            _this.currentMessage.next("payload");
        });
    };
    MessagingService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase,
            AngularFireAuth,
            AngularFireMessaging,
            AngularFirestore,
            Http])
    ], MessagingService);
    return MessagingService;
}());
export { MessagingService };
//# sourceMappingURL=messaging.service.js.map