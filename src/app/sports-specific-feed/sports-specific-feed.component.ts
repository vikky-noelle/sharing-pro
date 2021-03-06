import { Component, OnInit, ViewEncapsulation, HostListener, Renderer2, OnDestroy, NgZone } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { GetService } from '../shared/services/get.service';
import { LocationService } from '../shared/services/location.service';
import { ActivatedRoute, Router, NavigationEnd, ActivationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';
import { MatchDataService } from '../shared/services/match-data.service';
import { NewsService } from '../shared/services/news.service';
import { Meta, Title } from '@angular/platform-browser';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'sports-social-sports-specific-feed',
  templateUrl: './sports-specific-feed.component.html',
  styleUrls: ['./sports-specific-feed.component.css', '../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class SportsSpecificFeedComponent implements OnInit, OnDestroy {

  globalArena = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;
  gameName: string;
  gameId: number;
  urlChanged = false;

  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;

  Sports: { id: number, title: string}[]= [
    {id: 0, title: 'Popular'},
    {id: 17, title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 6, title: 'Basketball'},
    {id: 36, title: 'Lawn Tennis'},
    {id: 5, title: 'Badminton'},
    {id: 29, title: 'Hockey'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];

  constructor(
    private matchData: MatchDataService,
    private newsData: NewsService,
    private renderer: Renderer2,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
    private load :PostService,
    private metaservice :Meta,
    private pagetitle:Title
  ) { }
  reloadPage() {
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }
globalFeed() {
  this.activeRoute.params.subscribe(
    (params) => {
      if ( this.gameName !== params.sport && this.gameName !== undefined) {
        // this.urlChanged = true;
        console.log("true", this.gameName, params.sport)
        this.reloadPage();
      }
      this.gameName = params.sport;
      this.gameId = this.Sports.find((sport) => {
        return sport.title === this.gameName;
      }).id;

       console.log(this.gameName, this.gameId);
      const matchPomise = this.matchData.globalMatchFeed( this.nextPageNo, this.gameId );
      const newsPromise =  this.newsData.globalNewsFeed( this.nextPageNo, this.gameName.toLowerCase());
      Promise.all([matchPomise, newsPromise]).then( (data) => {
        console.log(data);
        this.globalArena = this.globalArena.concat(data['0']).concat(data['1']);
        console.log(this.globalArena);
      }).catch( (err) => {
        console.log('err', err);
      });
    }
  );
}
  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    this.globalFeed();
  }

  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {
    this.nextPageNo = Math.floor(scrollY / 2400);

    if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
      this.nextPage(this.nextPageNo);
      console.log('nextPage', this.nextPageNo, event);

    }
  }

  ngOnInit() {
    this.globalFeed();
    this.pagetitle.setTitle(this.gameName);
    this.metaservice.updateTag({name:'title',content:this.gameName});
    this.metaservice.updateTag({name:'description',content:"See What's going around you in "+ this.gameName+" in the "+ this.gameName+ " Arena. Use "+ this.gameName+ " Arena to find,connect,play, follow "+ this.gameName+ " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " +this.gameName+ " world"});
    this.metaservice.updateTag({name:'keywords',content:""+this.gameName+"Arena,Sports Social "+this.gameName+","+this.gameName+" Grounds Nearby,"+this.gameName+" Events Nearby, "+this.gameName+" Matches Nearby, Connect "+this.gameName+" Players, Play "+this.gameName+", Find "+this.gameName+" Players,Find "+this.gameName+" Academies,"+this.gameName+" Tournaments Nearby"});
    this.metaservice.updateTag({property:'og:title',content:this.gameName});
    this.metaservice.updateTag({property:'og:description',content:"See What's going around you in "+ this.gameName+" in the "+ this.gameName+ " Arena. Use "+ this.gameName+ " Arena to find,connect,play, follow "+ this.gameName+ " matches, players, academies, coaches, events etc. in your locality and around the world | stay connected to your " +this.gameName+ " world"});
    this.metaservice.updateTag({property:'og:keywords',content:""+this.gameName+"Arena,Sports Social "+this.gameName+","+this.gameName+" Grounds Nearby,"+this.gameName+" Events Nearby, "+this.gameName+" Matches Nearby, Connect "+this.gameName+" Players, Play "+this.gameName+", Find "+this.gameName+" Players,Find "+this.gameName+" Academies,"+this.gameName+" Tournaments Nearby"});
  }

  ngOnDestroy() {
    console.log('destroy');
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }

}
