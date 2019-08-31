import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs/Rx';
import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';
import { GetService } from '../../shared/services/get.service';
import { EventEmiterService } from '../../shared/services/event.emiter.service';
import { InteractionService } from '../../shared/services/interaction.service';

@Component({
  selector: 'sports-social-home-match-feed',
  templateUrl: './home-match-feed.component.html',
  styleUrls: ['./home-match-feed.component.css']
})
export class HomeMatchFeedComponent{
  show:boolean=false;
  Matcharr = [];
  Matchar = [];
  tarray=[];
  finalstatus;
  Age;
  tnews=[];
  news=[];
  startTime;
  gendercheck;
  MatchStarterName;
  timestamp = Math.floor(Date.now()/1000);
  sub: Subscription;
  scroll=document.getElementsByClassName('c-element') as HTMLCollectionOf<HTMLElement>;
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;
  public scrollbarOptions = { axis: 'xy', theme: 'rounded-dark'};
  constructor(
    private _eventemiter: EventEmiterService,
    private getService: GetService,
    private postservice:PostService,
    private location:LocationService,
    private interact: InteractionService,
    private cookie: CookieService,
    private router:Router
  ) { 
    this.interact.listen().subscribe((m:any) => {
      if(m === null){
        this.ssmatchfeed();
      }
      // else{
      //   this.nginit2(m[0],m[1]);
      // }
  })
  }
  count=9;
  sport= ['Cricket', 
  'Football', 
  'Basketball', 
  'Badminton', 
  'Hockey', 
  'Tennis', 
  'Snooker',
  'Table Tennis', 
  'Volleyball']
  Sports= [
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

  count1 = 0;

  openlocality(id,nameoflocality){
    nameoflocality= nameoflocality.replace(/ /g,"-");
    nameoflocality= nameoflocality.replace(/,/g,"");
    this.router.navigate(['/locality',nameoflocality, "cricket"], {queryParams: {id: id}});
  }

  ssmatchfeed(){
    var gamename;
    this.location.getGeoLocation().then((pos)=>{
      if(this.cookie.check('longitude')){
        pos['latitude'] = this.cookie.get('latitude');
        pos['longitude'] = this.cookie.get('longitude');
      }
      for(var i=0;i<this.Sports.length;i++){
      var tempsport = this.Sports;
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],this.Sports[i].id,this.timestamp)
      .subscribe(data=>{
        this.count1=this.count1+1;
        this.show=true;
        var arr=[];
        

      //  for(var feedlength=0;feedlength<data["Feed"].length;feedlength++){
        // var insertDate2 = new Date(data["Feed"][feedlength].InsertedDate);
        // var gettimestamp = insertDate2.getTime()/1000;
        // console.log("surviveeee",gettimestamp);
        // var dateOfJune2019 = 1559692800;
            
            // console.log("hi this is date after 2019:",insertDate2);
            
          
          for(var i=0;i<data["Feed"].length;i++){

            // =====logic to remove two spaces
            var user_name=data["Feed"][i].MatchStarterName;
            var index;
            for(var j=0;j<user_name.length;j++){
              if(user_name[j] == " "){
                index = j;
              }
            }
            user_name = user_name.replace(/ /g,"");
            if(index == user_name.length){
              user_name = user_name.replace(/ /g,"");
            }
            else{
              user_name = user_name.substring(0,index-1)+" "+user_name.substring(index-1);
              user_name = user_name.replace(/ /g,"-");
            }
      

            // console.log("Matchstartetrnameeeee:",user_name);
                    var tempimg, checkstat, checkstat2, finished, upcoming=false;
                    var timestamp= new Date(data["Feed"][i].startdatetime*1000);                    
                    var timrstampstr = new String(timestamp).slice(16,21);
                    var timrstampstr2 = new String(timestamp).slice(0,10);
                    timrstampstr = timrstampstr2.slice(0,3) +" "+ timrstampstr;
                    timrstampstr2 = timrstampstr2.slice(3)
                    // var Ondate = + " at " + timrstampstr;
                    // console.log("Thsis is timestamp",timestamp);
                
                        if(data["Feed"][i].Team2name === null){
                          tempimg = "/assets/images/sportsocialteamlogo.png";
                          data["Feed"][i].Team2name = "Yet to Join";
                        }
                        else{
                          tempimg = data["Feed"][i].Team2Pic;
                        }
                        if(data["Feed"][i].CommentCount===0){
                          data["Feed"][i].CommentCount = false;
                        }
                        if(data["Feed"][i].PromoteCount===0){
                          data["Feed"][i].PromoteCount = false;
                        }
                        if(data["Feed"][i].WatchCount===0){
                          data["Feed"][i].WatchCount = false;
                        }
                        if(data["Feed"][i].JoineeCount===0){
                          data["Feed"][i].JoineeCount = false;
                        }
                    checkstat = Date.now()/1000;
                    checkstat2 = data["Feed"][i].startdatetime;
                    if(checkstat>checkstat2){
                      if((checkstat-checkstat2)>86400){
                        if(data["Feed"][i].scoreTeam1===null && data["Feed"][i].scoreTeam2===null){
                          this.startTime="Score Awaited";
                          finished= false;
                        } 
                        if(data["Feed"][i].Team2name.toLowerCase() === "yet to join"){
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
                      if(data["Feed"][i].Team2name === "None"){
                        this.startTime = "Upcoming Match";
                      }
                    }
                    if(data["Feed"][i].scoreTeam1!==null && data["Feed"][i].scoreTeam2!==null){
                      finished= true;
                      this.startTime="Match Finished";
                    }
                    var agebracket= data["Feed"][i].ageBracket;
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
                    var newstring=data["Feed"][i].gender;
                        if(newstring.toLowerCase() === "mix"){
                          this.gendercheck = "Mix-up";
                        }
                        else if(newstring.toLowerCase() === "female"){
                          this.gendercheck= "Women's";
                        }
                        else if (newstring.toLowerCase() === "male"){
                          this.gendercheck= "Men's";
                        }
                  var Starttime= new Date( data["Feed"][i].startdatetime *1000);
                  var timestampConvert= new String(Starttime).slice(3,21);
                  var bothTeamName;
                  if(data["Feed"][i].Team2name == "Yet to Join"){
                    bothTeamName= data["Feed"][i].Team1name.replace(/ /g,"-");
                  }
                  else{
                    bothTeamName= data["Feed"][i].Team1name.replace(/ /g,"-")+"-v-"+data["Feed"][i].Team2name.replace(" ",'-').trim();
                  }
                  // console.log("this is both team name:",bothTeamName);
                 // if(gettimestamp>=dateOfJune2019){  /// LOOP FOR INSEERTED DATE SHOULD BE GREATER THEN 2018
                    arr.push({
                    bothteams:bothTeamName.replace("Yet to Join", ""),
                    Ondate: timrstampstr2,
                    Ontime: timrstampstr, 
                    feedid:data["Feed"][i].feedid,
                    userid:data["Feed"][i].userid,
                    finished: finished,
                    Activity_name:data["Feed"][i].Activity_name,
                    MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":"By:@"+data["Feed"][i].MatchStarterUniqueName,
                    result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?timestampConvert:'Final result',
                    InsertedDate:data["Feed"][i].InsertedDate,
                    profile_image:data["Feed"][i].profile_image,
                    Venue_Name:data["Feed"][i].Venue_Name,
                    VenueId:data["Feed"][i].VenueId,
                    EventText:data["Feed"][i].EventText,
                    startdatetime:this.startTime,
                    GameName:data["Feed"][i].GameName,
                    GameId:data["Feed"][i].GameId,
                    eventid:data["Feed"][i].eventid,
                    Event_Image:data["Feed"][i].Event_Image,
                    MatchStarterName:user_name.replace(/ /g,"-"),
                    MatchStarterId:data["Feed"][i].MatchStarterId,
                    MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
                    Team1name:data["Feed"][i].Team1name,
                    Team1Pic:data["Feed"][i].Team1Pic,
                    Team2name:data["Feed"][i].Team2name,
                    Team2Pic:tempimg,
                    scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
                    scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?false:data["Feed"][i].scoreTeam2,
                    gender:this.gendercheck,
                    Profile_Photo:data["Feed"][i].Profile_Photo,
                    City:data["Feed"][i].City,
                    CommentCount:data["Feed"][i].CommentCount,
                    PromoteCount:data["Feed"][i].PromoteCount,
                    WatchCount:data["Feed"][i].WatchCount,
                    JoineeCount:data["Feed"][i].JoineeCount,
                    age: this.Age
                  });
             // }
            //  console.log("insetdate",data["Feed"][i].InsertedDate);
            
            }
            
          
          if(arr.length>0){
            gamename = arr[0].GameName.replace(/ matches/g,"");
            this.getnewsdata(gamename.toLowerCase());
            for(var init=0; init<this.Sports.length;init++){
              if(this.Sports[init].title.toLowerCase() === gamename.toLowerCase()){
                this.Matchar[init] = {
                  gamenumber: init,
                  gametitle: arr[0].GameName,
                  gamearray: arr
                };
              }
            }
          }
          
            for(var k=0; k<this.count; k++){
              // console.log(this.sport[k]+"- is -"+gamename);
                if(this.sport[k].toLowerCase()===gamename.toLowerCase()){
                  this.sport.splice(k,1);
                  this.count=this.count-1;
                  break;
                }
              }
            if(this.count1 === this.Sports.length){
            for(var init=0; init<this.Sports.length;init++){
              if(this.Matchar[init] === undefined){
              }
              else{
              this.Matcharr.push(this.Matchar[init]);
             }
          }
          }
            if(this.count1===this.Sports.length){
            this.gett(this.sport);
          }  
         
      //  }
      // }
       });
      
    }  
      
    });  
      
  }

  gett(str){
    this.tarray=[];
    for(var i=0; i<str.length; i++){
      this.gettnewsdata(str[i]);
    }
  }
  gettnewsdata(topic){
    var name = topic;
    topic=topic.toLowerCase();
    topic = topic.replace(/ /g,"-");
    this.getService.getsportnews(topic).subscribe(res=>{
      var body = JSON.parse(res._body);
      var arr=[];
      for (const i in body.news) {
        var x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        arr.push({
          id:body.news[i]._id,
          title:body.news[i].title,
          timestamp:x.substr(0,10),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc,
          source: body.news[i].source
        });
        if(i==="10"){
          break;
        }
      }
      name = name.replace(/ /g,"-");
      if(arr.length>0){
        this.tnews.push({
          gamename: name,
          gamenews: arr
        });
      }
      // console.log(this.tnews);
    });
  }
  getnewsdata(topic){
    this.getService.getsportnews(topic).subscribe(res=>{
      this.show= true;
      var body = JSON.parse(res._body);
      var arr=[];
      for (const i in body.news) {
        var x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        // console.log("timestam vakue f  honme",x);
        arr.push({
          id:body.news[i]._id,
          title:body.news[i].title,
          timestamp:x.substr(0,10),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc,
          source: body.news[i].source
        });
        
        if(i==="10"){
          break;
        }
      }
      // this.news.push(arr);
      for(var init=0; init<this.Sports.length;init++){
        if(this.Sports[init].title.toLowerCase() === topic){
          this.news[init] = arr;
        }
      }
    });
  }
  change(id, topic){
    for(var i in this.news){
      for(var j in this.news[i]){
        if(id === this.news[i][j].id){
          topic = topic.toLowerCase();  
          this._eventemiter.userToEdit=this.news[i][j];
          this.router.navigate(['/news', topic]);
        }
      }
    }
  }
  
  changenomatch(id, topic){
    topic = topic.toLowerCase();
    for(var i=0;i<this.tnews.length;i++){
      for(var j=0;j<this.tnews[i].gamenews.length; j++){
        if(id === this.tnews[i].gamenews[j].id){
          this._eventemiter.userToEdit=this.tnews[i].gamenews[j];
          this.router.navigate(['/news', topic]);
       }
      }
    }
  }
  changee(topic){
    topic = topic.toLowerCase();
    topic = topic.replace(/ /g, "-")
    this.router.navigate(['/news', topic]);
  }
  gotoarena(topic){
    topic = topic.toLowerCase();
    this.router.navigate(['/OpenArena', topic]);
  }
  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }
  lscroll(){
    this.widgets.nativeElement.scrollLeft -=this.widgetsContent.nativeElement.clientWidth;
  }
  rscroll(){
    this.widgets.nativeElement.scrollLeft +=this.widgetsContent.nativeElement.clientWidth;
  }
  ngOnInit() {
    this.ssmatchfeed();
  }
}


