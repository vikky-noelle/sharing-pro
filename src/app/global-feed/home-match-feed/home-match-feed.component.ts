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

  Matcharr = [];
  v=0;
  index=-1; //used to provide index for it
  Matchnews = [];
  news=[];
  gendercheck;
  onesport;
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
  tarray;
  Sports= [
    {id: 5, title: 'Badminton'},
    {id: 6, title: 'Basketball'},
    {id: 17, title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 29, title: 'Hockey'},
    {id: 36, title: 'Lawn Tennis'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];

  getlocation(){
    this.location.getGeoLocation().then((pos)=>{
      for(var i=0;i<this.Sports.length;i++){
        var name = this.Sports[i].title;
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],this.Sports[i].id,this.timestamp)
      .subscribe(data=>{
        var arr=[];
        if(data["Feed"].length===0){
          this.v=this.v+1;
          this.tarray.push(name);
        }
          for(var i=0;i<data["Feed"].length;i++){
              arr.push({
              feedid:data["Feed"][i].feedid,
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
              WatchCount:data["Feed"][i].WatchCount
            });
            var newstring=arr[i].gender;
            if(newstring = "Male" && "male"){
               this.gendercheck= newstring.replace(/male/,"Men's");
             }
             else if(newstring = "Female" && "female"){
              this.gendercheck= newstring.replace(/female/,"Female's");
            }
           else if(newstring = "mix"){
              this.gendercheck= newstring.replace(/mix/,"Mix");
            }
          }    
          if(arr.length>0){
            this.index=this.index+1;
            var x = arr[0].GameName.replace(/ matches/g,"");
            this.getnewsdata(x.toLowerCase());
            this.Matcharr.push({
              gamenumber: this.index,
              gametitle: arr[0].GameName,
              gamearray: arr
            }); 
          }
     });
      
    }
    // for(var k in this.tarray){
    //   this.Matcharr.push({
    //     gamenumber: null,
    //     gametitle: null,
    //     gamearray: null
    //   });
    //   this.getnewsdata(this.tarray[k]);
    // }
    });
  }
  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }

  ngOnInit() {
    this.getlocation();
    for(var i=0; i<this.v; i++){
        this.Matcharr.push({
        gamenumber: null,
        gametitle: null,
        gamearray: null
      });
      this.getnewsdata(this.tarray[i]);
    }
    console.log(this.tarray);
    // this.openarenamatches();
  }
  getnewsdata(topic){
    this.getService.getsportnews(topic).subscribe(res=>{
      var body = JSON.parse(res._body);
      var arr=[];
      for (const i in body.news) {
        var x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        arr.push({
          source: body.news[i].source,
          id:body.news[i]._id,
          title:body.news[i].title,
          timestamp:x.substr(0,19),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc
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
          topic=topic.toLowerCase();
          this.router.navigate(['/newspage', topic]);
        }
      }
    }
  }
  changee(topic){
          topic=topic.toLowerCase();
          this.router.navigate(['/newspage', topic]);
  }
  lscroll(){
    this.blog.nativeElement.scrollLeft-=this.outdiv.nativeElement.clientWidth;
  }
  rscroll(){
    this.blog.nativeElement.scrollLeft+=this.outdiv.nativeElement.clientWidth;
  }
}


