import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { Masonry } from 'ng-masonry-grid';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { MatchDataService } from '../../shared/services/match-data.service';
import { Title, Meta } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { TimeService } from '../../shared/services/time.service';
import { Router } from '@angular/router';

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

  // posturl='https://test.sportsocial.in/poc/newfeed';
  posturl='http://34.245.85.57:3000/poc/newfeed';
  urlObj=[{ userid: "112",
            page: "1",
            timestamp: "1558615054000",
            token: "ndsjndsjknjksnndnjkks"
      }];
  prevPageNo: number = 0;
  nextPageNo: number = 0;
  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;

  public showloader: boolean = false; 
  private subscription: Subscription;
  private timer: Observable<any>;
  constructor(
    private renderer: Renderer2,
    private matchData: MatchDataService,
    private pagetitle:Title,
    private metaservice:Meta,
    private http:Http,
    private time:TimeService,
    private router: Router,
  ) { }

  
  // globalMatchFeed( pageNo ) {
  //   this.matchData.globalMatchFeed( this.nextPageNo, 0 ).then( (match) => {
  //     this.Match = this.Match.concat(match);
  //   }).catch( (err) => {
  //     console.log(err);
  //   });
  // }

  openarenamatches(){
    this.http.post(this.posturl,this.urlObj)
    .subscribe(res=>{
      this.show=true;
      var body=res.json();
      console.log("hi this is my console",body);
      for(const i in body){
        this.Matcharr.push({
          feedid:body[i].feedid,
          userName:body[i].user_name,
          coverpic:body[i].CoverPic,
          gamename:body[i].gamename,
          startdatetime:  this.time.timePassed(body[i].startdatetime),
          InsertedDate:this.time.timePassed(body[i].InsertedDate),
          Uniquename:body[i].Uniquename,
          EventText:body[i].EventText,
          city:body[i].city,
          Venue_Name:body[i].Venue_Name,
          MatchStarterUniqueName:body[i].MatchStarterUniqueName,  
          Team1Name:body[i].Team1Name,
          Team2Name:body[i].Team2Name,
          WatchCount:body[i].WatchCount,
          PromoteCount:body[i].PromoteCount,
          CommentCount:body[i].CommentCount,
  
        });
      console.log("thisis imageof open arena",this.Matcharr[i].coverpic);
        //  this.gendercheck=this.Matcharr[i].gender;
        //    if(this.gendercheck=="Male"){
        //   var HeShe= this.gendercheck.replace(this.Matcharr[i].gender,"Men's");
        //   console.log(HeShe);
        // }
      }
    })
  }

  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    // this.globalMatchFeed(pageNo);
  }

  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {

    // console.log(Math.floor(scrollY / 1200));
    this.nextPageNo = Math.floor(scrollY / 1200);

    if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
      this.nextPage(this.nextPageNo);
    }
  }

  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }

  ngOnInit() {
    // this.globalMatchFeed(this.nextPageNo);
    this.openarenamatches();
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
