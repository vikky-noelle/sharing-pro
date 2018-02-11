import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PostService {

  loc: {
    latitude: String,
    longitude: String
  };

  Id: {
    id: String;
  };

  newsFeedRequestObject: {
    page: string;
    game: string
  };

  blogRequestObject: {
    name: string,
    page: number
  };

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

  singleMatchData(id) {
    this.Id = {
      id: id
    };
    return this.http.post('http://test.chaseyoursport.com:3200/getMatchOpenData', this.Id);
  }
}
