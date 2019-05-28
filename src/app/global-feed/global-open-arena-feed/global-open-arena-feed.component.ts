import {
  Component,
  OnInit,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
  HostListener,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';
import { MatchDataService } from '../../shared/services/match-data.service';
import { NewsService } from '../../shared/services/news.service';
import { Http } from '@angular/http';
import { TimeService } from '../../shared/services/time.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sports-social-global-open-arena-feed',
  templateUrl: './global-open-arena-feed.component.html',
  styleUrls: ['./global-open-arena-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class GlobalOpenArenaFeedComponent implements OnInit, OnDestroy {


  globalArena = [] ;
  prevPageNo: number = 0;
  nextPageNo: number = 0;

  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;


  Matcharr = [];
  gendercheck="";

  // posturl='https://test.sportsocial.in/poc/newfeed';
  posturl='https://test.sportsocial.in/poc/newfeed';
  urlObj=[{ userid: "112",
            page: "1",
            timestamp: "1558615054000",
            token: "ndsjndsjknjksnndnjkks"
      }];
  @ViewChild('blog') blog:ElementRef;
  @ViewChild('target') target:ElementRef;
  constructor(
    private  matchData: MatchDataService,
    private newsData: NewsService,
    private renderer: Renderer2,
    private http:Http,
    private time:TimeService,
    private router:Router

  ) { }

  // globalFeed(  ) {
  //   const matchPomise = this.matchData.globalMatchFeed( this.nextPageNo, 0 );
  //   const newsPromise =  this.newsData.globalNewsFeed( this.nextPageNo, 'all');
  //   Promise.all([matchPomise, newsPromise]).then( (data) => {
  //     console.log("this is my data for home",data);
  //     this.globalArena = this.globalArena.concat(data['0']).concat(data['1']);
  //     console.log(this.globalArena);
  //   }).catch( (err) => {
  //     console.log('err', err);
  //   });
  // }
  openarenamatches(){
    this.http.post(this.posturl,this.urlObj)
    .subscribe(res=>{
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
          Team1Pic:body[i].Team1Pic,
          Team2Pic:body[i].Team2Pic,
          WatchCount:body[i].WatchCount,
          PromoteCount:body[i].PromoteCount,
          CommentCount:body[i].CommentCount,
        });
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
    // this.globalFeed();
  }

  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }


  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {
    this.nextPageNo = Math.floor(scrollY / 2200);
    // console.log(this.nextPageNo, scrollY);
    if ( this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
     this.nextPage(this.nextPageNo);
    }
  }

  ngOnInit() {
    // this.globalFeed();
    this.openarenamatches();
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }
  lscroll(){
    this.blog.nativeElement.scrollLeft -=this.target.nativeElement.clientWidth;
  }
  rscroll(){
    this.blog.nativeElement.scrollLeft +=this.target.nativeElement.clientWidth;
  }
}
