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
            this.Matcharr.push({
                  Activity_name:data["Feed"][i].Activity_name,
                  uniquename:data["Feed"][i].uniquename==null?"":"@"+data["Feed"][i].uniquename,
                  result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
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
                  MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":"@"+data["Feed"][i].MatchStarterUniqueName,
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

          }

          for(var j=0;j<data["Comment"].length;j++){
            this.MatchCommnets.push({
              eventid:data["Comment"][j].eventid,
              UserId:data["Comment"][j].UserId,
              User_name:data["Comment"][j].User_name,
              Profileimage:data["Comment"][j].Profileimage,
              Comment:data["Comment"][j].Comment,
            });
          }  
          
          for(var j=0;j<data["Joinees"].length;j++){
              this.JoineeTeamId = data["Joinees"][j].teamid;
              if(this.JoineeTeamId == this.team1id)
                {
                  this.MatchLineup1.push({
                  eventid:data["Joinees"][j].eventid,
                  UserId:data["Joinees"][j].UserId,
                  teamid:data["Joinees"][j].teamid,
                  User_name:data["Joinees"][j].User_name,
                  Profileimage:data["Joinees"][j].Profileimage
              });
              } 
            }

            for(var j=0;j<data["Joinees"].length;j++){
              this.JoineeTeamId = data["Joinees"][j].teamid;
              if(this.JoineeTeamId == this.team2id)
                {
                  this.MatchLineup2.push({
                  eventid:data["Joinees"][j].eventid,
                  UserId:data["Joinees"][j].UserId,
                  teamid:data["Joinees"][j].teamid,
                  User_name:data["Joinees"][j].User_name,
                  Profileimage:data["Joinees"][j].Profileimage
              });
              } 
            }

          for(var j=0;j<data["Images"].length;j++){
            this.MatchMoments.push({
              ImageId:data["Images"][j].ImageId,
              imagepath:data["Images"][j].imagepath,
              eventid:data["Images"][j].eventid,
              Text:data["Images"][j].Text,
              User_Name:data["Images"][j].User_Name,
              profile_photo:data["Images"][j].profile_photo,
              commentcount:data["Images"][j].commentcount,
              likecount:data["Images"][j].likecount,
              IsLiked:data["Images"][j].IsLiked
            });
          } 

          for(var j=0;j<data["bestperformers"].length;j++){
            this.ManOfMatch.push({
              username:data["bestperformers"][j].username,
              profilepic:data["bestperformers"][j].profilepic == null ? " " : data["bestperformers"][j].profilepic
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
