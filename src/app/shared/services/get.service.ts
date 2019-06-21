import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class GetService {
  provideIn:'root'
  constructor( private http: Http) { }
  serverData(url:string){
    return this.http.get(url).map(
        (response)=>response.json()
      )
  }

  GlobalOpenArenaFeed () {
    return this.http.get('http://test.chaseyoursport.com:3200/getGlobalOpenArenaFeed');
  }

  GlobalNewsFeed() {
    return this.http.get('http://atg.sportsocial.in:4000/news');
  }


  data=new Subject();
  getImage() {
    return this.http.get("https://helpcenter.chaseyoursport.com/get/image");
  }

  getTopics(): Observable<any> {
    return this.http.get("https://helpcenter.chaseyoursport.com/get/topics");
  }

  getSubTopic(id): Observable<any> {
    return this.http.get(
      "https://helpcenter.chaseyoursport.com/get/subTopics/" + id);
  }

  getQA(topicId, subtopicId): Observable<any> {
    return this.http.get(
      "https://helpcenter.chaseyoursport.com/get/QA/" +topicId + "/" + subtopicId
    );
  }
  getBlogdata():Observable<any>{
    return this.http.get("https://prod.chaseyoursport.com/loadStartingTenblogs");
  }
  getinstadata():Observable<any>{
    return this.http.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=3238782460.1408c01.8353203fa81f4905a2e9ce680a490e51");
  }

  getUpcomingCricket(){
    return this.http.get("http://35.176.65.124:2200/score/upcomingCricketMatches");
  }
  getsportnews(topic): Observable<any> {
    return this.http.get("http://3.8.116.65:3100/api/news/" +topic);
  }
}
