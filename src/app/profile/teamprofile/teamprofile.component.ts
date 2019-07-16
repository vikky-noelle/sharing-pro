import { LocationService } from './../../shared/services/location.service';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';
import { TimeService } from '../../shared/services/time.service';

@Component({
  selector: 'sports-social-teamprofile',
  templateUrl: './teamprofile.component.html',
  styleUrls: ['./teamprofile.component.css']
})
export class TeamprofileComponent implements OnInit {
  teamid = "611";
  backgroundimage;
  name;
  routename;
  profileimage;
  membercount;
  teamusername;
  fancount;
  media=[];
  captain=[];
  teamcategory;
  teamtype;
  sports= [
    {id: 17,  title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 6, title: 'Basketball'},
    {id: 5, title: 'Badminton'},
    {id: 29, title: 'Hockey'},
    {id: 36, title: 'Tennis'},
    {id: 46, title: 'Snooker'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];
  startTime:string;
  crousalsingleimage;
  timestamp = Math.floor(Date.now()/1000);
  count=0;
  arr=[];
  show:boolean=false;
  captainuserid;
  crousallist=[];
  leftarrow = document.getElementsByClassName('larrow') as HTMLCollectionOf<HTMLElement>;
  rightarrow = document.getElementsByClassName('rarrow') as HTMLCollectionOf<HTMLElement>;
  showcrousal = document.getElementsByClassName('media-crousal') as HTMLCollectionOf<HTMLElement>;
  singleimage = document.getElementsByClassName('single-image') as HTMLCollectionOf<HTMLElement>;
  crousal = document.getElementsByClassName('crousal-element') as HTMLCollectionOf<HTMLElement>;
  followerstab = document.getElementsByClassName('followers') as HTMLCollectionOf<HTMLElement>;
  sideshellposition = document.getElementsByClassName('side-shell') as HTMLCollectionOf<HTMLElement>;
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  
  @Input() public location;
  @Input() public challenge="Open For Challenge";
  @Input() public gender;
  @Input() public gamename;
  @Input() public teamtypestatus;
  @Input() public teamstatus;
  @Input() public mantra=[];
  @Input() public members=[];
  @Input() public upcoming=[];
  @Input() public past=[];
  @Input() public description=false;
  
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;

  constructor(
    private route: ActivatedRoute,
    private PostService: PostService,
    private time:TimeService,
    private getlocation: LocationService
  ) { }
  
  getFans(){
    var timestamp=Date.now();
    var page=1;
    this.PostService.getFan("119", this.teamid, timestamp, page).subscribe((res)=>{
      // console.log(res);
    });
  }
  getMembers(){
    var captainstatus, timestamp=Date.now();
    timestamp = timestamp/1000;
    captainstatus = false;
    this.PostService.getMembers(this.teamid, "119", timestamp).subscribe((res)=>{
      console.log(res);
      for(var i=0; i<this.membercount;i++){
        if(res[i].UserId === this.captainuserid){
          captainstatus = true;
          console.log("matched");
        }
        else{
          captainstatus = false;
        }
        // console.log(captainstatus);
        this.members.push({
          captain: captainstatus,
          firstname: res[i].FirstName,
          lastname: res[i].LastName,
          uniquename: res[i].UniqueName,
          userid: res[i].UserId,
          profilepic: res[i].Profile_pic,
          username: res[i].User_Name
        });
      }
      console.log(this.members)
    });
  }
  getTeamData(){
    this.PostService.TeamProfile("99999",this.teamid).subscribe(
      (res)=>{
        this.backgroundimage =  res["Details"].Cover_Photo;
        this.profileimage = res["Details"].Profile_Photo;
        this.name = res["Details"].TeamName;
        this.membercount = res["Details"].Members;
        this.fancount = res["Details"].FanCount;
        this.teamusername = res["Details"].TeamUserName;
        this.location = res["Details"].location;
        this.captain = res["Details"].CaptainUserName;
        this.mantra = res["Details"].slogan;
        this.teamcategory = res["Details"].TeamCategory;
        this.captainuserid = res["Details"].CaptainUserId;
        switch(this.teamcategory){
          case -1:
          this.teamstatus = "Open For All";
          break;
          case 0:
          this.teamstatus = "Under 13";
          break;
          case 1:
          this.teamstatus = "Under 15";
          break;
          case 2:
          this.teamstatus = "Under 17";
          break;
          case 3:
          this.teamstatus = "Under 19";
          break;
          case 4:
          this.teamstatus = "Under 21";
          break;
          case 5:
          this.teamstatus = "Under 23";
          break;
          default:
          this.teamstatus = "None Selected";
                  
        }
        this.teamtype = res["Details"].TeamType;
        switch(this.teamtype){
          case -1:
          this.teamtypestatus = "Others";
          break;
          case 0:
          this.teamtypestatus = "School";
          break;
          case 1:
          this.teamtypestatus = "College";
          break;
          case 2:
          this.teamtypestatus = "Academy";
          break;
          case 3:
          this.teamtypestatus = "Organisation";
          break;
          default:
          this.teamstatus = "None Selected";      
        }
        if(res['Details'].openchallenge != 1){
          this.challenge = "Private"
        }
        if(res["Details"].Gender.toLowerCase() === "mix"){
          this.gender = "Mix ";
        }
        if(res["Details"].Gender.toLowerCase() === "male"){
          this.gender = "Men's ";
        }
        if(res["Details"].Gender.toLowerCase() === "female"){
          this.gender = "Women's ";
        }
        if(res["Details"].Description.length != 0){
          this.description = res["Details"].Description;
        }
        for(var i=0; i<this.sports.length;i++){
          if(this.sports[i].id === res["Details"].GameId){
            this.gamename = this.sports[i].title;
          }
        }
        console.log(res);
        for(var i =0; i<res["Images"].length; i++){
          this.media.push({
            url: res["Images"][i].Path
          });
        }
        this.getmatches(res["Details"].GameId);
      });
  }
  getmatches(id){
    var temp, checkstat, checkstat2, upcoming=false;
    var finished, agebracket, age;
    this.getlocation.getGeoLocation().then((pos)=>{
      this.PostService.homeMatchFeed(pos['latitude'],pos['longitude'],id,this.timestamp)
      .subscribe(data=>{
        this.show=true;
        this.count=this.count+1;
      for(const i in data["Feed"]){
        var tempimg;
              if(data["Feed"][i].Team2name === null){
                tempimg = "/assets/images/sportsocialteamlogo.png";
                data["Feed"][i].Team2name = "None";
              }
              else{
                tempimg = data["Feed"][i].Team2Pic;
              }
              
        temp = data["Feed"][i].gender;
        agebracket = data["Feed"][i].ageBracket;
        if(agebracket == 0){
          age="Under 13";
        }
        else if(agebracket ==1){
          age="Under 15";
        }
        else if(agebracket ==2){
          age="Under 17";
        }
        else if(agebracket ==3){
          age="Under 19";
        }
        else if(agebracket ==4){
          age="Under 21";
        }
        else if(agebracket ==5){
          age="Under 23";
        }
        else if(agebracket ==-1){
          age="Open for All";
        }
        if(temp.toLowerCase()==="mix"){
          temp="Mix up ";
        }
        else if(temp.toLowerCase()==="male"){
          temp="Men's ";
        }
        else if(temp.toLowerCase()==="female"){
          temp="Women's ";
        }
        var convertdate=new String(new Date(data["Feed"][i].startdatetime*1000));
        this.startTime=convertdate.slice(3,21);
        checkstat = Date.now();
        checkstat = checkstat/1000;
        checkstat2 = data["Feed"][i].startdatetime;
        
        if(checkstat>checkstat2){
          if((checkstat-checkstat2)>86400){
            if(data["Feed"][i].scoreTeam1===null || data["Feed"][i].scoreTeam2===null){
              this.startTime="Score Awaited";
              finished= false;
            } 
            if(data["Feed"][i].Team2name === null){
              this.startTime="Match Abandoned";
              finished= false;
            }
          }
          else{
            if(data["Feed"][i].scoreTeam1===null || data["Feed"][i].scoreTeam2===null){
              this.startTime="Score Awaited";
              finished= false;
            }
          }
        }
        if(checkstat === checkstat2 || checkstat < checkstat2){
          this.startTime="Upcoming";
          finished= false; 
          upcoming=true;   
        }
        if(data["Feed"][i].scoreTeam1!==null && data["Feed"][i].scoreTeam2!==null){
          finished= true;
          this.startTime="Match Finished";
        }
         if(this.startTime === "Upcoming"){
          this.upcoming.push({
            feedid:data["Feed"][i].feedid,
            Activity_name:data["Feed"][i].Activity_name,
            userName: data["Feed"][i].user_name,
            Uniquename:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
            MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
            finished: finished,
            upcoming: upcoming,
            timestamp: data["Feed"][i].startdatetime,
            result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
            InsertedDate:data["Feed"][i].InsertedDate,
            profile_image:data["Feed"][i].profile_image,
            Venue_Name:data["Feed"][i].Venue_Name,
            EventText:data["Feed"][i].EventText,
            startdatetime:this.startTime,
            starttimestamp: data["Feed"][i].startdatatime,
            gamename:data["Feed"][i].GameName,
            GameId:data["Feed"][i].GameId,
            Event_Image:data["Feed"][i].Event_Image,
            coverpic: data["Feed"][i].CoverPic,
            MatchStarterName:data["Feed"][i].MatchStarterName,
            MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
            Team1Name:data["Feed"][i].Team1name,
            Team1Pic:data["Feed"][i].Team1Pic,
            Team2Name:data["Feed"][i].Team2name,
            Team2Pic:tempimg,
            scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
            scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?'VS':data["Feed"][i].scoreTeam2,
            gender:temp,
            Profile_Photo:data["Feed"][i].Profile_Photo,
            city:data["Feed"][i].City,
            CommentCount:data["Feed"][i].CommentCount,
            PromoteCount:data["Feed"][i].PromoteCount,
            WatchCount:data["Feed"][i].WatchCount,
            JoineeCount:data["Feed"][i].JoineeCount, 
            age: age
          }); 
         }
         else if(this.startTime === "Match Finished"){
          this.past.push({
            feedid:data["Feed"][i].feedid,
            Activity_name:data["Feed"][i].Activity_name,
            userName: data["Feed"][i].user_name,
            Uniquename:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
            MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
            finished: finished,
            upcoming: upcoming,
            timestamp: data["Feed"][i].startdatetime,
            result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
            InsertedDate:data["Feed"][i].InsertedDate,
            profile_image:data["Feed"][i].profile_image,
            Venue_Name:data["Feed"][i].Venue_Name,
            EventText:data["Feed"][i].EventText,
            startdatetime:this.startTime,
            starttimestamp: data["Feed"][i].startdatatime,
            gamename:data["Feed"][i].GameName,
            GameId:data["Feed"][i].GameId,
            Event_Image:data["Feed"][i].Event_Image,
            coverpic: data["Feed"][i].CoverPic,
            MatchStarterName:data["Feed"][i].MatchStarterName,
            MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
            Team1Name:data["Feed"][i].Team1name,
            Team1Pic:data["Feed"][i].Team1Pic,
            Team2Name:data["Feed"][i].Team2name,
            Team2Pic:tempimg,
            scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
            scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?'VS':data["Feed"][i].scoreTeam2,
            gender:temp,
            Profile_Photo:data["Feed"][i].Profile_Photo,
            city:data["Feed"][i].City,
            CommentCount:data["Feed"][i].CommentCount,
            PromoteCount:data["Feed"][i].PromoteCount,
            WatchCount:data["Feed"][i].WatchCount,
            JoineeCount:data["Feed"][i].JoineeCount, 
            age: age
          }); 
         }          
      }
    });
  });
  }
  imageopen(url){
    this.crousalsingleimage = url;
    this.showcrousal[0].style.display="block";
    this.crousal[0].style.display="none";
    this.leftarrow[0].style.display="none";
    this.rightarrow[0].style.display="none";
    this.singleimage[0].style.display="block";
  }
  opencrousal(){
    this.showcrousal[0].style.display="block";
    this.crousal[0].style.display="block";
    this.leftarrow[0].style.display="block";
    this.rightarrow[0].style.display="block";
    this.singleimage[0].style.display="none";
    // this.crousallist = this.media;
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
      this.showcrousal[0].style.display="none";
    }
  }
  lscroll(){
    console.log("working");
    this.widgets.nativeElement.scrollLeft -=this.widgetsContent.nativeElement.clientWidth;
  }
  rscroll(){
    console.log("working");

    this.widgets.nativeElement.scrollLeft +=this.widgetsContent.nativeElement.clientWidth;
  }
  close(){
    this.showcrousal[0].style.display="none";
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.teamid = params['teamid'];
  });
    this.route.params.subscribe(params => {
      this.routename = params.name;
  });
    this.getTeamData();
    this.getFans();
    this.getMembers();
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
      if(window.pageYOffset > 370){
      this.opensubheader[0].style.display="block";
      this.followerstab[0].style.display="none";
      this.sideshellposition[0].style.position="fixed";
      this.sideshellposition[0].style.top="130px";
    }
    else{
      this.sideshellposition[0].style.top="0";
      this.followerstab[0].style.display="block";
      this.opensubheader[0].style.display="none";
      this.sideshellposition[0].style.position="relative";
    }
  };

}
