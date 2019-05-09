import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  loc: {
    latitude: String,
    longitude: String
  };
  BlogId: {
    blogid: string;
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

  url = [
    'https://prod.sportsocial.in/poc/matchinfo',
   'https://prod.sportsocial.in/poc/activityuserdetails',
   'https://prod.sportsocial.in/poc/activityuserdetailsWeb'
   ];

  constructor(private http: HttpClient) { }

  globalNewsFeed( pageNo, game) {
    this.newsFeedRequestObject = {
      page: pageNo,
      game: game
    };
    console.log(this.newsFeedRequestObject);
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
    // console.log("Heyy this is lat.="+lat);
    // console.log("Heyy this is log.="+long);
    // console.log("Heyy this is page.="+page);
    // console.log("Heyy this is gameid.="+gameid);
    return this.http.post('https://prod.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
    // return this.http.post('https://test.sportsocial.in/poc/webfeed', this.matchFeedReqObj);
  }

  singleMatchData(eventid, userid, activityid, urlId, page) {
    this.singleMatchReqObj = [{
      'eventid': eventid,
      'userid': userid,
      'activityid': activityid,
      'page': page
    }];
    console.log(this.singleMatchReqObj);
    return this.http.post(this.url[urlId], this.singleMatchReqObj);
  }

  singleNewsData(id) {
    return this.http.post('https://atg.sportsocial.in/newsById', { id: id} );
  }

  insertTopics(topic) {
    console.log(topic)
    return this.http.post('https://helpcenter.chaseyoursport.com/save/topic', topic);
  }
  insertSubTopics(subtopic) {
    return this.http.post('https://helpcenter.chaseyoursport.com/save/subTopics', subtopic);
  }
  insertQuesAns(QA) {
    return this.http.post('https://helpcenter.chaseyoursport.com/save/QA', QA);
  }

  singleBlogSmallDesc(id: string) {
    this.BlogId = {
      blogid: id
    };
   // console.log(this.BlogId);
    return this.http.post('https://prod.chaseyoursport.com/loadSingleBlogDataSmallDesc', this.BlogId)
    .map((response: Response) => response.json());
  }

  saveformdata(dataObject){
    return this.http.post('https://test.sportsocial.in/web/webcontactus',dataObject);
  }
}
