import { PostService } from './../../shared/services/post.service';
import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { Masonry } from 'ng-masonry-grid';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { MatchDataService } from '../../shared/services/match-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { TimeService } from '../../shared/services/time.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationService } from '../../shared/services/location.service';

@Component({
  selector: 'sports-social-global-match-feed',
  templateUrl: './global-match-feed.component.html',
  styleUrls: ['./global-match-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalMatchFeedComponent implements OnInit, OnDestroy {
  show:boolean=false;
  title="Arena | Sports Social";
  metakey="Open Arena,Sports Social,Sports Arena nearby,Sports events nearby,Sports Activities nearby,Sports Grounds nearby, Connect to Sports players nearby,Find Sports players nearby";
  metades="See What's going around you in sports in the open Arena. Use Arena to find,connect,play, follow matches, players, academies, coaches and events in your favorite sport in your locality and around the world | stay connected to your sports world.";
  Matcharr = [];
  gendercheck="";
  selected="";
  number=[];
  startTime:string;

  timestamp = Math.floor(Date.now()/1000);
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
  _masonry: Masonry;
  count=0;
  arr=[];
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;

  public showloader: boolean = false; 
  private subscription: Subscription;
  private timer: Observable<any>;
  constructor(
    private pagetitle:Title,
    private metaservice:Meta,
    private route: ActivatedRoute,
    private location: LocationService,
    private time:TimeService,
    private router: Router,
    private postservice: PostService,
  ) { }

  openarenamatches(){
    this.location.getGeoLocation().then((pos)=>{
      for(var ij=0;ij<this.Sports.length;ij++){
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],this.Sports[ij].id,this.timestamp)
      .subscribe(data=>{
        this.show=true;
        this.count=this.count+1;
      for(const i in data["Feed"]){

        var convertdate=new String(new Date(data["Feed"][i].startdatetime*1000));
        this.startTime=convertdate.slice(3,21);
        console.log("this is time"+this.startTime);
    
        this.arr.push({
              feedid:data["Feed"][i].feedid,
              Activity_name:data["Feed"][i].Activity_name,
              userName: data["Feed"][i].user_name,
              Uniquename:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
              MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
              timestamp: data["Feed"][i].startdatetime,
              result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
              InsertedDate:data["Feed"][i].InsertedDate,
              profile_image:data["Feed"][i].profile_image,
              Venue_Name:data["Feed"][i].Venue_Name,
              EventText:data["Feed"][i].EventText,
              startdatetime:this.startTime,
              gamename:data["Feed"][i].GameName,
              GameId:data["Feed"][i].GameId,
              Event_Image:data["Feed"][i].Event_Image,
              coverpic: data["Feed"][i].CoverPic,
              MatchStarterName:data["Feed"][i].MatchStarterName,
              MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
              Team1Name:data["Feed"][i].Team1name,
              Team1Pic:data["Feed"][i].Team1Pic,
              Team2Name:data["Feed"][i].Team2name,
              Team2Pic:data["Feed"][i].Team2Pic,
              scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
              scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?'VS':data["Feed"][i].scoreTeam2,
              gender:data["Feed"][i].gender,
              Profile_Photo:data["Feed"][i].Profile_Photo,
              city:data["Feed"][i].City,
              CommentCount:data["Feed"][i].CommentCount,
              PromoteCount:data["Feed"][i].PromoteCount,
              WatchCount:data["Feed"][i].WatchCount,
              JoineeCount:data["Feed"][i].JoineeCount
            });
            this.startTime= this.arr[i].startdatetime;
            
      }
      if(this.Sports.length === this.count){
        this.sorting(this.arr);
      }
    });
    }
  });
  }

  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }
  // sportspecific feed
  sportspecific(topic){
    var id;
    for(var i=0;i<this.Sports.length; i++){
      if(this.Sports[i].title.toLowerCase() === topic){
        id = this.Sports[i].id;
      }
    }
    this.location.getGeoLocation().then((pos)=>{
      this.postservice.homeMatchFeed(pos['latitude'],pos['longitude'],id,this.timestamp)
      .subscribe(data=>{
        this.show=true;
           for(const i in data["Feed"]){
              var x = data["Feed"][i].startdatetime;
              x = Math.floor(x/3600);
              this.Matcharr.push({
              id: x,
              feedid:data["Feed"][i].feedid,
              Activity_name:data["Feed"][i].Activity_name,
              userName: data["Feed"][i].user_name,
              Uniquename:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
              MatchStarterUniqueName:data["Feed"][i].MatchStarterUniqueName==null?"":data["Feed"][i].MatchStarterUniqueName,
              result:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?this.time.ExactDate(data["Feed"][i].startdatetime):'Match Finished',
              InsertedDate:data["Feed"][i].InsertedDate,
              profile_image:data["Feed"][i].profile_image,
              Venue_Name:data["Feed"][i].Venue_Name,
              EventText:data["Feed"][i].EventText,
              startdatetime:this.time.ExactDate(data["Feed"][i].startdatetime),
              gamename:data["Feed"][i].GameName,
              GameId:data["Feed"][i].GameId,
              Event_Image:data["Feed"][i].Event_Image,
              coverpic: data["Feed"][i].CoverPic,
              MatchStarterName:data["Feed"][i].MatchStarterName,
              MatchStarterPhoto:data["Feed"][i].MatchStarterPhoto,
              Team1Name:data["Feed"][i].Team1name,
              Team1Pic:data["Feed"][i].Team1Pic,
              Team2Name:data["Feed"][i].Team2name,
              Team2Pic:data["Feed"][i].Team2Pic,
              scoreTeam1:data["Feed"][i].scoreTeam1==null ||data["Feed"][i].scoreTeam2==null?'':data["Feed"][i].scoreTeam1 + ' - ',
              scoreTeam2:data["Feed"][i].scoreTeam2==null || data["Feed"][i].scoreTeam1==null?'VS':data["Feed"][i].scoreTeam2,
              gender:data["Feed"][i].gender,
              Profile_Photo:data["Feed"][i].Profile_Photo,
              city:data["Feed"][i].City,
              CommentCount:data["Feed"][i].CommentCount,
              PromoteCount:data["Feed"][i].PromoteCount,
              WatchCount:data["Feed"][i].WatchCount,
              JoineeCount:data["Feed"][i].JoineeCount
            });
      }
    });
  });
  }
  // array sorting
  sorting(array){
    var val = array.length;
    var temp;
    for(var i=0; i < val; i++){
      for(var j=0; j < val-1; j++){
        if(array[j].timestamp<array[j+1].timestamp){
          temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
    this.Matcharr = array;  
  }
  ngOnInit() {
    var topic;
    this.route.params.subscribe( value => {
      topic = value['topic'];
    });
    if(topic === undefined){
      this.openarenamatches();
      this.selected = "Open Arena";
    }
    else{
      this.sportspecific(topic);
      this.selected = topic[0].toUpperCase();
      this.selected = this.selected + topic.slice(1);
    }
    this.pagetitle.setTitle(this.title);
    this.metaservice.updateTag({name:'title',content:this.title});
    this.metaservice.updateTag({name:'keywords',content:this.metakey});
    this.metaservice.updateTag({name:'description',content:this.metades});
    this.metaservice.updateTag({property:'og:title',content:this.title});
    this.metaservice.updateTag({property:'og:description',content:this.metades});
    this.metaservice.updateTag({property:'og:keywords',content:this.metakey});
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }

}
