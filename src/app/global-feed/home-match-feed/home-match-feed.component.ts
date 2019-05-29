import { Component} from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'sports-social-home-match-feed',
  templateUrl: './home-match-feed.component.html',
  styleUrls: ['./home-match-feed.component.css']
})
export class HomeMatchFeedComponent{

  Matcharr = [];
  gendercheck="";

  posturl='https://test.sportsocial.in/poc/newfeed';
  urlObj=[{ userid: "112",
            page: "1",
            timestamp: "1558615054000",
            token: "ndsjndsjknjksnndnjkks"
      }];
  constructor(
    private http:Http,
    private postservice:PostService,
    private time:TimeService
  ) { }

  matchfeeds(){
    // this.postservice.homeMatchFeed()
  }

  openarenamatches(){
    this.http.post(this.posturl,this.urlObj)
    .subscribe(res=>{
      var body=res.json();
      console.log("hi this is my console",body);
      for(const i in body){
        this.Matcharr.push({
          feedid:body[i].feedid,
          userName:body[i].user_name,
          coverpic:body[i].CoverPic,
          gamename:body[i].gamename,
          startdatetime:  this.time.timePassed(body[i].startdatetime),
          InsertedDate:this.time.timePassed(body[i].InsertedDate),
          Uniquename:body[i].Uniquename,
          EventText:body[i].EventText,
          city:body[i].city,
          Venue_Name:body[i].Venue_Name,
          MatchStarterUniqueName:body[i].MatchStarterUniqueName,  
          Team1Name:body[i].Team1Name,
          Team2Name:body[i].Team2Name,
          Team1Pic:body[i].Team1Pic,
          Team2Pic:body[i].Team2Pic,
          WatchCount:body[i].WatchCount,
          PromoteCount:body[i].PromoteCount,
          CommentCount:body[i].CommentCount,
        });
        //  this.gendercheck=this.Matcharr[i].gender;
        //    if(this.gendercheck=="Male"){
        //   var HeShe= this.gendercheck.replace(this.Matcharr[i].gender,"Men's");
        //   console.log(HeShe);
        // }
      }
    })
  }
  
  ngOnInit() {
    this.openarenamatches();
  }

  

}


