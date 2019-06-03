import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports-social-open-home-match-card',
  templateUrl: './open-home-match-card.component.html',
  styleUrls: ['./open-home-match-card.component.css']
})
export class OpenHomeMatchCardComponent implements OnInit {

  Matcharr = [];
  eventid;
  gendercheck;
  resultOfMatch;

  one=document.getElementsByClassName('one') as HTMLCollectionOf<HTMLElement>;
  two=document.getElementsByClassName('two') as HTMLCollectionOf<HTMLElement>;
  three=document.getElementsByClassName('three') as HTMLCollectionOf<HTMLElement>;
  four=document.getElementsByClassName('four') as HTMLCollectionOf<HTMLElement>;
  five=document.getElementsByClassName('five') as HTMLCollectionOf<HTMLElement>;
  
  first(){
    this.one[0].style.color="red";
    this.two[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.five[0].style.color="#696969";
  }
  second(){
    this.two[0].style.color="red";
    this.one[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.five[0].style.color="#696969";
  }
  third(){
    this.three[0].style.color="red";
    this.one[0].style.color="#696969";
    this.two[0].style.color="#696969";
    this.four[0].style.color="#696969";
    this.five[0].style.color="#696969";
  }
  fourth(){
    this.four[0].style.color="red";
    this.one[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.two[0].style.color="#696969";
    this.five[0].style.color="#696969";
  }
  fifth(){
    this.five[0].style.color="red";
    this.one[0].style.color="#696969";
    this.three[0].style.color="#696969";
    this.two[0].style.color="#696969";
    this.four[0].style.color="#696969";
  }

  constructor(
    private postservice:PostService,
    private activatedroute:ActivatedRoute
  ) { }

  buttonArr=[{name:"Match Talk"},
          {name:"Moments"},
          {name:"Score Card"},
          {name:"Line Ups"},
          {name:"Head to Head"}];

  getSingleMatchFeed(){
      this.postservice.OpenOneMatchCard(this.eventid).subscribe(
        data=>{
          for(var i=0;i<data["Feed"].length;i++){
            this.Matcharr.push({
                  Activity_name:data["Feed"][i].Activity_name,
                  uniquename:data["Feed"][i].uniquename,
                  InsertedDate:data["Feed"][i].InsertedDate,
                  profile_image:data["Feed"][i].profile_image,
                  Venue_Name:data["Feed"][i].Venue_Name,
                  EventText:data["Feed"][i].EventText,
                  startdatetime:data["Feed"][i].startdatetime,
                  GameName:data["Feed"][i].GameName,
                  GameId:data["Feed"][i].GameId,
                  Event_Image:data["Feed"][i].Event_Image,
                  MatchStarterName:data["Feed"][i].MatchStarterName,
                  MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
                  Team1name:data["Feed"][i].Team1name,
                  Team1Id:data["Feed"][i].Team1Id,
                  Team2Id:data["Feed"][i].Team2Id,
                  Team1Pic:data["Feed"][i].Team1Pic,
                  Team2name:data["Feed"][i].Team2name,
                  Team2Pic:data["Feed"][i].Team2Pic,
                  scoreTeam1:data["Feed"][i].scoreTeam1,
                  scoreTeam2:data["Feed"][i].scoreTeam2,
                  gender:data["Feed"][i].gender,
                  Profile_Photo:data["Feed"][i].Profile_Photo,
                  City:data["Feed"][i].City,
                  CommentCount:data["Feed"][i].CommentCount,
                  PromoteCount:data["Feed"][i].PromoteCount,
                  WatchCount:data["Feed"][i].WatchCount,
                  winnerid:data["Feed"][i].winnerid,
                  eventStatus:data["Feed"][i].eventStatus
            });

            var winnerId = this.Matcharr[i].winnerid;
            var team1score= this.Matcharr[i].Team1Id;
            var team2score = this.Matcharr[i].Team2Id;
            var eventstatus= this.Matcharr[i].eventStatus;

            if(winnerId == team1score){
               this.resultOfMatch= this.Matcharr[i].Team1name+" has won the match" ;
            }
            else if(winnerId == null || team1score == team2score || winnerId==0){
              this.resultOfMatch ="Match Draw";
            }
            else if(eventstatus ==4){
              this.resultOfMatch=" Result is not declared !!"
            }
            else {
              this.resultOfMatch= this.Matcharr[i].Team2name+" has won the match";
            }
           
          }
          
        }
      )
  }
  isDarkStyle() {
    return false
  }

  isNormalStyle() {
    return true
  }

  getparamid(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.eventid=param.feedid;
          console.log("this is paramid:",this.eventid);
        }
      )
  }

  ngOnInit(){
    this.getparamid();
    this.getSingleMatchFeed();
    
    // this.activatedroute.paramMap.subscribe(params=>{
    //   console.log(params);
    // })
  }


}
