import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, ViewChildren, QueryList } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
import { InteractionService } from '../../shared/services/interaction.service';
import { Title } from '@angular/platform-browser';

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
  show:boolean=false;
  team2Name;

  comment:boolean=true;
  moment:boolean=false;
  joinee:boolean=false;
  @ViewChildren('circle') parents: QueryList<any>;
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;

  child1:boolean=true;
  child2:boolean=false;

  showcrousal=document.getElementsByClassName('media-crousal') as HTMLCollectionOf<HTMLElement>;

  one=document.getElementsByClassName('one') as HTMLCollectionOf<HTMLElement>;
  two=document.getElementsByClassName('two') as HTMLCollectionOf<HTMLElement>;
  three=document.getElementsByClassName('three') as HTMLCollectionOf<HTMLElement>;
  four=document.getElementsByClassName('four') as HTMLCollectionOf<HTMLElement>;
  five=document.getElementsByClassName('five') as HTMLCollectionOf<HTMLElement>;
  joineechild1=document.getElementsByClassName('joineechild1') as HTMLCollectionOf<HTMLElement>;
  joineechild2=document.getElementsByClassName('joineechild2') as HTMLCollectionOf<HTMLElement>;
  
  first(){  
    this.one[0].style.background="none";
    // this.one[0].style.fontWeight="bolder";
    this.two[0].style.background="#f4f4f4";
    this.three[0].style.background="#f4f4f4";
    this.one[0].style.fontSize="1em";
     this.two[0].style.fontSize="0.9em";
     this.three[0].style.fontSize="0.9em";
     this.comment=true;
     this.moment=false;
     this.joinee=false;
     this.one[0].style.color="black";
     this.two[0].style.color="#888888";
     this.three[0].style.color="#888888";
  }
  second(){
    this.two[0].style.fontSize="1em";
    this.one[0].style.fontSize="0.9em";
    this.three[0].style.fontSize="0.9em";

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
    this.three[0].style.fontSize="1em";
    this.two[0].style.fontSize="0.9em";
    this.one[0].style.fontSize="0.9em";
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
    this.joineechild1[0].style.color="#024771";
    this.joineechild2[0].style.color="white";
    this.joineechild1[0].style.backgroundColor="white";
    this.joineechild2[0].style.backgroundColor="#024771";
    this.joineechild1[0].style.fontWeight="bolder";
    this.joineechild2[0].style.fontWeight="lighter";

  }
  
  thirdchild2(){
    this.child1=false;
    this.child2=true;
    this.joineechild1[0].style.color="white";
    this.joineechild2[0].style.color="#024771";
    this.joineechild2[0].style.backgroundColor="white";
    this.joineechild1[0].style.backgroundColor="#024771";
    this.joineechild2[0].style.fontWeight="bolder";
    this.joineechild1[0].style.fontWeight="lighter";
  }

  constructor(
    private postservice:PostService,
    private activatedroute:ActivatedRoute,
    private router: Router,
    private interactionservice:InteractionService,
    private titleservice:Title
  ) {}
   
  changeroute(id, name){
    var index;
    for(var j=0;j<name.length;j++){
      if(name[j] == " "){
        index = j;
      }
    }
    var last_name = name.substring(index);
    name = name.substring(0, index); 
    if(name.replace(/ /,"")==" "){
      name = name.replace(/ /,"");
    }
    else{
      name = name.replace(/ /,"")+" "+last_name.replace(/ /,"");
    }
    name = name.replace(/ /,"-");
      this.interactionservice.routechangefunction(id);
      this.router.navigate(['/profile',name, id, 'about']);
  }
  openlocality(id,nameoflocality){
    nameoflocality= nameoflocality.replace(/ /g,"-");
    nameoflocality = nameoflocality.replace(/,/g,"");
    this.router.navigate(['/locality',nameoflocality, "cricket"], {queryParams: {id: id}});
  }

  getSingleMatchFeed(){
      this.postservice.OpenOneMatchCard(this.eventid).subscribe(
        data=>{
          console.log(data);
          for(var i=0;i<data["Feed"].length;i++){
            this.show=true;
              var time= new Date(data["Feed"][i].startdatetime*1000);
              var tempimg;
              if(data["Feed"][i].Team2name === null){
                tempimg = "/assets/images/sportsocialteamlogo.png";
                data["Feed"][i].Team2name = "Yet to Join";
              }
              else{
                tempimg = data["Feed"][i].Team2Pic;
              }
              var timeconvert= new String(time);
              this.startTime=timeconvert.slice(3,21);
            this.Matcharr.push({
                  venueId: data["Feed"][i].VenueId,
                  Activity_name:data["Feed"][i].Activity_name,
                  uniquename:data["Feed"][i].uniquename==null?"":"@"+data["Feed"][i].uniquename,
                  result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?""+this.startTime:'Match Finished',
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
                  MatchStarterId:data["Feed"][i].MatchStarterId,
                  MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
                  MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":"@"+data["Feed"][i].MatchStarterUniqueName,
                  Team1name:data["Feed"][i].Team1name,
                  Team1Id:data["Feed"][i].Team1Id,
                  Team2Id:data["Feed"][i].Team2Id,
                  Team1Pic:data["Feed"][i].Team1Pic,
                  Team2name:data["Feed"][i].Team2name,
                  Team2Pic:tempimg,
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
            var nameOfGame=data["Feed"][i].GameName;
            var team1Name=data["Feed"][i].Team1name;
            
            if(data["Feed"][i].Team2name == null || undefined ){
               this.team2Name= " ";
            }
            else{
              this.team2Name=data["Feed"][i].Team2name;
            }
            console.log(" this is name of team2,",this.team2Name);
            
            this.titleservice.setTitle(nameOfGame+" Match center "+ team1Name+" " + this.team2Name +"| Sports Social" );

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

            var timestamp = new Date(data["Match Talk"][j].commentdatetime *1000);
            var strconvert = new String(timestamp);
            var split = strconvert.split(" ",5);
            var slicetoString = split.slice(4);
            var convertintostr = new String(slicetoString);
            var gethourMin  = convertintostr.substring(0,5);
            this.MatchCommnets.push({
              eventid:data["Match Talk"][j].eventid,
              UserId:data["Match Talk"][j].UserId,
              User_name:data["Match Talk"][j].User_name,
              Profileimage:data["Match Talk"][j].Profileimage,
              Comment:data["Match Talk"][j].Comment,
              Uniquename:data["Match Talk"][j].Uniquename,
              commentdatetime:gethourMin
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
          var temp;
          for(var j=0;j<data["Moments"].length;j++){            
            if(data["Moments"][j].likecount==null){
              temp = 0;
            }
            else{
              temp = data["Moments"][j].likecount;
            }
            this.MatchMoments.push({
              id: j,
              ImageId:data["Moments"][j].ImageId,
              imagepath:data["Moments"][j].imagepath,
              eventid:data["Moments"][j].eventid,
              Text:data["Moments"][j].Text,
              User_Name:data["Moments"][j].User_Name,
              profile_photo:data["Moments"][j].profile_photo,
              commentcount:data["Moments"][j].commentcount,
              likecount:temp,
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
  openprofile(teamid, name){
    name = name.replace(/ /g,"-");
    if(teamid===null){

    }
    else{
      this.router.navigate(['/team', name, "About"], {queryParams: {teamid: teamid}}); 
    }
  }
  openpopcrousal(){
    this.showcrousal[0].style.display="block";
 }
  getparamid(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.eventid=param.feedid;
        }
      )
  }
  @HostListener('document:keyup', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    if(event.key === 'ArrowLeft')
    {
      this.lscroll()
    }
    if(event.key === 'ArrowRight')
    {
      this.rscroll()
    }
    if(event.keyCode === 27)
    {
      this.close()
    }
  }
  ngOnInit(){
    // const arr = this.circle.toArray();
    // const el = arr[0];
    // el.style.backgroundColor="white";
    this.getparamid();
    this.getSingleMatchFeed();
  }
  close(){
    this.showcrousal[0].style.display="none";
  }
  lscroll(){
    this.widgets.nativeElement.scrollLeft -=this.widgetsContent.nativeElement.clientWidth;
  }
  rscroll(){
    this.widgets.nativeElement.scrollLeft +=this.widgetsContent.nativeElement.clientWidth;
  }

}
