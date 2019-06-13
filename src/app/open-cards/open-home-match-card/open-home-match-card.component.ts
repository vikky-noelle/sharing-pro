import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';
import { ActivatedRoute } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';

@Component({
  selector: 'sports-social-open-home-match-card',
  templateUrl: './open-home-match-card.component.html',
  styleUrls: ['./open-home-match-card.component.css']
})
export class OpenHomeMatchCardComponent implements OnInit {

  Matcharr = [];
  MatchCommnets=[];
  MatchMoments=[];
  MatchLineup1=[];
  MatchLineup2=[];
  ManOfMatch=[];
  
  manOfMatchImg;
  eventid;
  resultOfMatch;
  team1id;
  team2id;
  JoineeTeamId;
  gender;
  genderCheck;
  BestPerfomerUsername;
  Age;
  startTime:string;

  comment:boolean=true;
  moment:boolean=false;
  joinee:boolean=false;

  child1:boolean=true;
  child2:boolean=false;

  one=document.getElementsByClassName('one') as HTMLCollectionOf<HTMLElement>;
  two=document.getElementsByClassName('two') as HTMLCollectionOf<HTMLElement>;
  three=document.getElementsByClassName('three') as HTMLCollectionOf<HTMLElement>;
  four=document.getElementsByClassName('four') as HTMLCollectionOf<HTMLElement>;
  five=document.getElementsByClassName('five') as HTMLCollectionOf<HTMLElement>;
  joineechild1=document.getElementsByClassName('joineechild1') as HTMLCollectionOf<HTMLElement>;
  joineechild2=document.getElementsByClassName('joineechild2') as HTMLCollectionOf<HTMLElement>;
  
  first(){  
     this.one[0].style.background="none";
     this.two[0].style.background="#f4f4f4";
     this.three[0].style.background="#f4f4f4";
     this.comment=true;
     this.moment=false;
     this.joinee=false;
     this.one[0].style.color="black";
     this.two[0].style.color="#888888";
     this.three[0].style.color="#888888";
  }
  second(){
    this.two[0].style.background="none";
    this.one[0].style.background="#f4f4f4";
    this.three[0].style.background="#f4f4f4";
    this.comment=false;
    this.moment=true;
    this.joinee=false;
    this.two[0].style.color="black";
    this.three[0].style.color="#888888";
    this.one[0].style.color="#888888";
  }
  third(){
    this.three[0].style.background="none";
    this.two[0].style.background="#f4f4f4";
    this.one[0].style.background="#f4f4f4";
    this.comment=false;
    this.moment=false;
    this.joinee=true;
    this.three[0].style.color="black";
    this.two[0].style.color="#888888";
    this.one[0].style.color="#888888";
  }

  thirdchild1(){
    this.child1=true;
    this.child2=false;
    this.joineechild1[0].style.color="#fff";
    this.joineechild2[0].style.color="skyblue";
  }
  
  thirdchild2(){
    this.child1=false;
    this.child2=true;
    this.joineechild1[0].style.color="skyblue";
    this.joineechild2[0].style.color="#fff";
  }

  constructor(
    private postservice:PostService,
    private activatedroute:ActivatedRoute,
    private time:TimeService
  ) {}

  getSingleMatchFeed(){
      this.postservice.OpenOneMatchCard(this.eventid).subscribe(
        data=>{
          for(var i=0;i<data["Feed"].length;i++){
              var time= new Date(data["Feed"][i].startdatetime*1000);
              var timeconvert= new String(time);
              this.startTime=timeconvert.slice(3,21);
            this.Matcharr.push({
                  Activity_name:data["Feed"][i].Activity_name,
                  uniquename:data["Feed"][i].uniquename==null?"":"@"+data["Feed"][i].uniquename,
                  result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?"On:"+this.startTime:'Match Finished',
                  InsertedDate:data["Feed"][i].InsertedDate,
                  ageBracket:data["Feed"][i].ageBracket,
                  profile_image:data["Feed"][i].profile_image,
                  Venue_Name:data["Feed"][i].Venue_Name,
                  EventText:data["Feed"][i].EventText,
                  startdatetime:data["Feed"][i].startdatetime,
                  GameName:data["Feed"][i].GameName,
                  GameId:data["Feed"][i].GameId,
                  Event_Image:data["Feed"][i].Event_Image,
                  MatchStarterName:data["Feed"][i].MatchStarterName,
                  MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
                  MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":"Created by:@"+data["Feed"][i].MatchStarterUniqueName,
                  Team1name:data["Feed"][i].Team1name,
                  Team1Id:data["Feed"][i].Team1Id,
                  Team2Id:data["Feed"][i].Team2Id,
                  Team1Pic:data["Feed"][i].Team1Pic,
                  Team2name:data["Feed"][i].Team2name,
                  Team2Pic:data["Feed"][i].Team2Pic,
                  scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
                  scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?'VS':data["Feed"][i].scoreTeam2,
                  gender:data["Feed"][i].gender,
                  Profile_Photo:data["Feed"][i].Profile_Photo,
                  City:data["Feed"][i].City,
                  CommentCount:data["Feed"][i].CommentCount,
                  PromoteCount:data["Feed"][i].PromoteCount,
                  WatchCount:data["Feed"][i].WatchCount,
                  winnerid:data["Feed"][i].winnerid,
                  eventStatus:data["Feed"][i].eventStatus
            });
            this.team1id=this.Matcharr[i].Team1Id;
            this.team2id=this.Matcharr[i].Team2Id;

            var winnerId = this.Matcharr[i].winnerid;
            var team1score= this.Matcharr[i].Team1Id;
            var team2score = this.Matcharr[i].Team2Id;
            var eventstatus= this.Matcharr[i].eventStatus;

            if(winnerId == team1score){
               this.resultOfMatch= this.Matcharr[i].Team1name+" has won the match" ;
            }
            else if(winnerId == null || winnerId==0){
              this.resultOfMatch ="";
            }
            else if(team1score == team2score){
              this.resultOfMatch=" Match draw";
            }
            else if(eventstatus ==4){
              this.resultOfMatch=" Result is not declared !!"
            }
            else {
              this.resultOfMatch= this.Matcharr[i].Team2name+" has won the match";
            }

            this.gender=this.Matcharr[i].gender;
            
            if(this.gender=="male"){
              this.genderCheck="Men's ";
            }
            else if(this.gender=="female"){
              this.genderCheck="Women's ";
            }
            else if(this.gender=="mixup"){
              this.genderCheck="Mix UP ";
            }

            var agebracket= this.Matcharr[i].ageBracket;
              if(agebracket == 0){
                this.Age="Under 13";
              }
              else if(agebracket ==1){
                this.Age="Under 15";
              }
              else if(agebracket ==2){
                this.Age="Under 17";
              }
              else if(agebracket ==3){
                this.Age="Under 19";
              }
              else if(agebracket ==4){
                this.Age="Under 21";
              }
              else if(agebracket ==5){
                this.Age="Under 23";
              }
              else if(agebracket ==-1){
                this.Age="Open for All";
              }
      
          }
          

          for(var j=0;j<data["Match Talk"].length;j++){
            this.MatchCommnets.push({
              eventid:data["Match Talk"][j].eventid,
              UserId:data["Match Talk"][j].UserId,
              User_name:data["Match Talk"][j].User_name,
              Profileimage:data["Match Talk"][j].Profileimage,
              Comment:data["Match Talk"][j].Comment,
            });
          }  
          
          for(var j=0;j<data["Line Ups"].length;j++){
              this.JoineeTeamId = data["Line Ups"][j].teamid;
              if(this.JoineeTeamId == this.team1id)
                {
                  this.MatchLineup1.push({
                  eventid:data["Line Ups"][j].eventid,
                  UserId:data["Line Ups"][j].UserId,
                  teamid:data["Line Ups"][j].teamid,
                  User_name:data["Line Ups"][j].User_name,
                  Profileimage:data["Line Ups"][j].Profileimage
              });
              } 
            }

            for(var j=0;j<data["Line Ups"].length;j++){
              this.JoineeTeamId = data["Line Ups"][j].teamid;
              if(this.JoineeTeamId == this.team2id)
                {
                  this.MatchLineup2.push({
                  eventid:data["Line Ups"][j].eventid,
                  UserId:data["Line Ups"][j].UserId,
                  teamid:data["Line Ups"][j].teamid,
                  User_name:data["Line Ups"][j].User_name,
                  Profileimage:data["Line Ups"][j].Profileimage
              });
              } 
            }

          for(var j=0;j<data["Moments"].length;j++){
            this.MatchMoments.push({
              ImageId:data["Moments"][j].ImageId,
              imagepath:data["Moments"][j].imagepath,
              eventid:data["Moments"][j].eventid,
              Text:data["Moments"][j].Text,
              User_Name:data["Moments"][j].User_Name,
              profile_photo:data["Moments"][j].profile_photo,
              commentcount:data["Moments"][j].commentcount,
              likecount:data["Moments"][j].likecount,
              IsLiked:data["Moments"][j].IsLiked
            });
          } 

          for(var j=0;j<data["Player Of The Match"].length;j++){
            this.ManOfMatch.push({
              username:data["Player Of The Match"][j].username,
              profilepic:data["Player Of The Match"][j].profilepic == null ? " " : data["Player Of The Match"][j].profilepic
            });
              this.manOfMatchImg=this.ManOfMatch[j].profilepic;
          }
            if(this.ManOfMatch.length == 0){
              this.BestPerfomerUsername="";
            }
            else if(this.ManOfMatch.length > 1){
              this.BestPerfomerUsername="Players of Match";
            }
            else{
              this.BestPerfomerUsername="Player of Match";
            }
        }
      )
  }

  getparamid(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.eventid=param.feedid;
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
