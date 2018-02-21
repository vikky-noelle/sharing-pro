import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  loc: {
    latitude: String,
    longitude: String
  };

  singleMatchReqObj = [];

  matchFeedReqObj = {
    latitude: Number,
    longitude: Number,
    page: Number,
    gameid: Number
  };

  newsFeedRequestObject: {
    page: string;
    game: string
  };

  blogRequestObject: {
    name: string,
    page: number
  };

  url = ['https://test.sportsocial.in/poc/matchinfo', 'https://test.sportsocial.in/poc/activityuserdetails'];

  constructor(private http: HttpClient) { }

  globalNewsFeed( pageNo, game) {
    this.newsFeedRequestObject = {
      page: pageNo,
      game: game
    };
    return this.http.post('https://atg.sportsocial.in/news', this.newsFeedRequestObject);
  }

  blogData(i: number, s: string) {
    this.blogRequestObject = {
      name: s,
      page: i
    };
   // console.log(this.Page);
    return this.http.post('https://prod.chaseyoursport.com/loadblogdata', this.blogRequestObject);
  }

  globalMatchFeed(lat, long, page, gameid) {
    this.matchFeedReqObj = {
      latitude: lat,
      longitude: long,
      page: page,
      gameid: gameid
    };
    console.log(this.matchFeedReqObj);
    return this.http.post('https://test.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
  }

  singleMatchData(eventid, userid, activityid, urlId) {
    this.singleMatchReqObj.push({
      'eventid': eventid,
      'userid': userid,
      'activityid': activityid
    });
    return this.http.post(this.url[urlId], this.singleMatchReqObj);
  }
}
