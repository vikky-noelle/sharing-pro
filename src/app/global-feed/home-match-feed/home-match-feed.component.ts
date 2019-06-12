import { Subscription } from 'rxjs/Rx';
import { Component, ViewChild, ElementRef} from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/services/time.service';
import { PostService } from '../../shared/services/post.service';
import { LocationService } from '../../shared/services/location.service';
import { GetService } from '../../shared/services/get.service';
import { EventEmiterService } from '../../shared/services/event.emiter.service';

@Component({
  selector: 'sports-social-home-match-feed',
  templateUrl: './home-match-feed.component.html',
  styleUrls: ['./home-match-feed.component.css']
})
export class HomeMatchFeedComponent{
  show:boolean=false;
  Matcharr = [];
  tarray=[];
  finalstatus;
  tnews=[];
  index=-1; //used to provide index for it
  news=[];
  gendercheck;
  timestamp = Math.floor(Date.now()/1000);
  sub: Subscription;
  @ViewChild('blog') blog:ElementRef;
  @ViewChild('outdiv') outdiv:ElementRef;
  constructor(
    private _eventemiter: EventEmiterService,
    private getService: GetService,
    private http:Http,
    private postservice:PostService,
    private time:TimeService,
    private location:LocationService,
    private router:Router
  ) { }
  count=8;
  sport= ['Badminton', 
  'Basketball', 
  'Cricket', 
  'Football', 
  'Hockey', 
  'Lawn Tennis', 
  'Table Tennis', 
  'Volleyball']
  Sports= [
    {id: 5, title: 'Badminton'},
    {id: 6, title: 'Basketball'},
    {id: 17,  title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 29, title: 'Hockey'},
    {id: 36, title: 'Lawn Tennis'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];
  Sports1=[5,6,17,23,29,36,56,60];

  count1 = 0;

  ssmatchfeed(){
    var gamename;
    this.location.getGeoLocation().then((pos)=>{
      for(var i=0;i<this.Sports.length;i++){
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],this.Sports[i].id,this.timestamp)
      .subscribe(data=>{
        this.count1=this.count1+1;
        this.show=true;
        var arr=[];
          for(var i=0;i<data["Feed"].length;i++){
              arr.push({
              feedid:data["Feed"][i].feedid,
              Activity_name:data["Feed"][i].Activity_name,
              MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":"@"+data["Feed"][i].MatchStarterUniqueName,
              result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
              InsertedDate:data["Feed"][i].InsertedDate,
              profile_image:data["Feed"][i].profile_image,
              Venue_Name:data["Feed"][i].Venue_Name,
              EventText:data["Feed"][i].EventText,
              startdatetime:this.time.ExactDate(data["Feed"][i].startdatetime),
              GameName:data["Feed"][i].GameName,
              GameId:data["Feed"][i].GameId,
              Event_Image:data["Feed"][i].Event_Image,
              MatchStarterName:data["Feed"][i].MatchStarterName,
              MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
              Team1name:data["Feed"][i].Team1name,
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
              JoineeCount:data["Feed"][i].JoineeCount
            });

            var newstring=arr[i].gender;

            var score1 = data["Feed"][i].scoreTeam1;
            var score2 = data["Feed"][i].scoreTeam2;
              
            if(score1 == null || score2 == null){
              this.finalstatus= this.time.ExactDate(data["Feed"][i].startdatetime);
            }
            else{
              this.finalstatus="Match Finish";
            }

            if(newstring = "male"){
              this.gendercheck = "Men's ";
             }
             else if(newstring == "female"){
              this.gendercheck= "Women's";
             }
             else if (newstring == "mix")
              this.gendercheck= "Mix-up";
             }  
          if(arr.length>0){
            this.index=this.index+1;
            gamename = arr[0].GameName.replace(/ matches/g,"");
            this.getnewsdata(gamename.toLowerCase());
            this.Matcharr.push({
              gamenumber: this.index,
              gametitle: arr[0].GameName,
              gamearray: arr
            }); 
          }
          for(var k=0; k<this.count; k++){
              if(this.sport[k]===gamename){
                this.sport.splice(k,1);
                this.count=this.count-1;
                break;
              }
            }
            if(this.count1===this.Sports.length){
            this.gett(this.sport);
          }
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
      console.log(body);
      for (const i in body.news) {
        var x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        arr.push({
          id:body.news[i]._id,
          title:body.news[i].title,
          timestamp:x.substr(0,19),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc,
          source: body.news[i].source
        });
        if(i==="10"){
          break;
        }
      }
      this.tnews.push({
        gamename: name,
        gamenews: arr
      });
    });
  }
  getnewsdata(topic){
    this.getService.getsportnews(topic).subscribe(res=>{
      var body = JSON.parse(res._body);
      var arr=[];
      for (const i in body.news) {
        var x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        arr.push({
          id:body.news[i]._id,
          title:body.news[i].title,
          timestamp:x.substr(0,19),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc,
          source: body.news[i].source
        });
        if(i==="10"){
          break;
        }
      }
      this.news.push(arr);
    });
  }
  change(id, topic){
    for(var i in this.news){
      for(var j in this.news[i]){
        if(id === this.news[i][j].id){
          topic = topic.toLowerCase();  
          this._eventemiter.userToEdit=this.news[i][j];
          this.router.navigate(['/newspage', topic]);
        }
      }
    }
  }
  changee(topic){
    topic = topic.toLowerCase();
    this.router.navigate(['/newspage', topic]);
  }
  lscroll(){
    this.blog.nativeElement.scrollLeft-=this.outdiv.nativeElement.clientWidth;
  }
  rscroll(){
    this.blog.nativeElement.scrollLeft+=this.outdiv.nativeElement.clientWidth;
  }
  ngOnInit() {
    this.ssmatchfeed();
  }
}


