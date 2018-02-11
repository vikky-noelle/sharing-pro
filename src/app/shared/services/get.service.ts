import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GetService {

  constructor( private http: HttpClient) { }

  GlobalOpenArenaFeed () {
    return this.http.get('http://test.chaseyoursport.com:3200/getGlobalOpenArenaFeed');
  }

  GlobalNewsFeed() {
    return this.http.get('http://atg.sportsocial.in:4000/news');
  }

}
