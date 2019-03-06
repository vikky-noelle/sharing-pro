import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { GetService } from '../../shared/services/get.service';
import { LocationService } from '../../shared/services/location.service';

import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';
import { MatchDataService } from '../../shared/services/match-data.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-global-match-feed',
  templateUrl: './global-match-feed.component.html',
  styleUrls: ['./global-match-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalMatchFeedComponent implements OnInit, OnDestroy {

  title=" Arena | Sports Social";
  Match = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;
  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;
  constructor(
    private renderer: Renderer2,
    private matchData: MatchDataService,
    private pagetitle:Title,
    private meta:Meta
  ) { }

  globalMatchFeed( pageNo ) {
    this.matchData.globalMatchFeed( this.nextPageNo, 0 ).then( (match) => {
      this.Match = this.Match.concat(match);
    }).catch( (err) => {
      console.log(err);
    });
  }

  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    this.globalMatchFeed(pageNo);
  }

  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {

    // console.log(Math.floor(scrollY / 1200));
    this.nextPageNo = Math.floor(scrollY / 1200);

    if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
      this.nextPage(this.nextPageNo);
    }
  }

  ngOnInit() {
    this.globalMatchFeed(this.nextPageNo);
    this.pagetitle.setTitle(this.title);
    this.meta.updateTag({name:'title',content:this.title});
    this.meta.updateTag({name:'keywords',content:"Open Arena,Sports Social,Sports Arena nearby,Sports events nearby,Sports Activities nearby,Sports Grounds nearby, Connect to Sports players nearby,Find Sports players nearby"});
    this.meta.updateTag({name:'description',content:"See What's going around you in sports in the open Arena. Use Arena to find,connect,play, follow matches, players, academies, coaches and events in your favorite sport in your locality and around the world | stay connected to your sports world."});

  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }

}
