import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { database } from 'firebase';
import { GetService } from '../shared/services/get.service';

@Component({
  selector: 'sports-social-livedata',
  templateUrl: './livedata.component.html',
  styleUrls: ['./livedata.component.css']
})
export class LivedataComponent implements OnInit {

  data1={};
  matchArr={};
  cricketArr=[];
  
  meta:{
    upcomingMatchCount,
    inProgressMatchCount,
    completedMatchCount
  }

  constructor(private http:Http,
    private get:GetService) { }

  ngOnInit() {
    this.matchdata();
  }
  
  matchdata(){
    this.get.getUpcomingCricket()
    .subscribe(res=>{
      var data1 = res.json();
      // console.log("thi sis data1:"+JSON.stringify(data1));
      for(var i=0;i<data1.length;i++){
        this.cricketArr.push({
          id:data1[i].id,
          series:data1[i].series.name,
          shieldimg:data1[i].series.shieldImageUrl,
          matchNo:data1[i].name,
          venue:data1[i].venue.name,
          team1:data1[i].homeTeam.name,
          t1_shortName:data1[i].homeTeam.shortName,
          t1_logourl:data1[i].homeTeam.logoUrl,
          t1_teamcolor:data1[i].homeTeam.teamColour,
          team2:data1[i].awayTeam.name,
          t2_name:data1[i].awayTeam.shortName,
          t2_logourl:data1[i].awayTeam.logoUrl,
          t2_teamcolor:data1[i].awayTeam.teamColour,
          startdate:data1[i].startDateTime
        })
        // console.log("this si venue:",this.cricketArr[i].venue);
      }
      
    })
  }
}
  // matchdata(){
  //   this.http.get('http://192.168.0.100:1000/score/listallmatches/')
  //   .subscribe(res=>{
  //     // console.log("this is response of live match"+JSON.stringify(res.json()));
  //     this.data1=res.json();
  //     // console.log("this is data1"+JSON.stringify(this.data1));
  //     // console.log(this.data1["meta"].inProgressMatchCount,":inProgressMatchCount match data");
  //     // console.log(this.data1["meta"].upcomingMatchCount,":Upcoming match data");
  //     var matches=this.data1["matchList"]["matches"];
  //     for(var i=0;i<matches.length;i++){
  //         this.cricketArr.push({
  //             id:matches[i].id,
  //             staticpv:matches[i].statisticsProvider,
  //             series:matches[i].series.name,
  //             shieldimg:matches[i].series.shieldimg,
  //             matchno:matches[i].name,
  //             status:matches[i].status,
  //             venue:matches[i].venue.name,
  //             isbatting:matches[i].homeTeam.isbatting,
  //             team1:matches[i].homeTeam.name,
  //             t1_name:matches[i].homeTeam.name,
  //             t1_logourl:matches[i].homeTeam.logoUrl,
  //             t1_teamcolor:matches[i].homeTeam.teamColour,
  //             team2:matches[i].awayTeam.name,
  //             t2_name:matches[i].awayTeam.name,
  //             t2_logourl:matches[i].awayTeam.logoUrl,
  //             t2_teamcolor:matches[i].awayTeam.teamColour,
  //             matchResult:matches[i].currentMatchState,
  //             t1_score:matches[i].scores.homeScore,
  //             team1_over:matches[i].scores.homeOvers,
  //             t2_score:matches[i].scores.awayScore,
  //             team2_over:matches[i].scores.awayOvers,
  //             islive:matches[i].isLive,
  //             startdate:matches[i].startDateTime
  //         })
          
  //         // console.log("this is mathchaarrr:"+this.cricketArr[i].id);
  //         // console.log("this is staticpv:"+this.cricketArr[i].staticpv);
  //         // console.log("this is team1:",this.cricketArr[i].team1);
  //         // console.log("this is color of team1:",this.cricketArr[i].teamcolor);
  //         console.log("this is team1:",this.cricketArr[i].team1_over);
  //     }
  
      
  //   });
    
  // }
  


