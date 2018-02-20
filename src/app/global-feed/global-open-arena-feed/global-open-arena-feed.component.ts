import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChildren,
  QueryList,
  Renderer2,
  AfterViewInit,
  HostListener,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef,
  OnDestroy
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { MatchCardComponent } from '../../cards/match-card/match-card.component';
import { GetService } from '../../shared/services/get.service';
import { OpenMatchCardComponent } from '../../open-cards/open-match-card/open-match-card.component';
import { LocationBasedDataService } from '../../shared/services/location-based-data.service';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'sports-social-global-open-arena-feed',
  templateUrl: './global-open-arena-feed.component.html',
  styleUrls: ['./global-open-arena-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.Emulated,
  preserveWhitespaces: false
})
export class GlobalOpenArenaFeedComponent implements OnInit, OnDestroy {


  globalArena = [];
  Match = [];
  News = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;

  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;


  constructor(
    private getM: LocationBasedDataService,
    private loc: LocationBasedDataService,
    private getN: PostService,
    private getNews: GetService,
    private renderer: Renderer2,

  ) { }


  globalMatchFeed( pageNo ) {
    this.getM.globalMatchFeed( pageNo, 0).subscribe(
      res => {
        const data = res['Feed'];
         console.log(data);
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.globalArena.push({
            eventId: data[i].eventid,
            creatorImage: data[i].creatorImage,
            creatorName: data[i].creatorName,
            type: data[i].feedtype,
            doerId: data[i].doerId,
            doerName: data[i].user_name,
            doerPic: data[i].Profile_Photo,
            matchText: data[i].EventText,
            matchImage: data[i].Event_Image,
            activityDate: data[i].InsertedDate,
            matchDate:  data[i].startdatetime,
            restrictionCount: data[i].restrictionCount,
            joineeCount: data[i].JoineeCount,
            commentCount: data[i].CommentCount,
            watchCount: data[i].WatchCount,
            promoteCount: data[i].PromoteCount,
            venueName: data[i].Venue_Name,
            gameName: data[i].GameName,
            activityName: data[i].Activity_name !== undefined ?  data[i].Activity_name.split(' ')[0] : ''
          });
        }
      },
      err => {
        console.log('Something went wrong with feed!');
      }
    );
  }
  globalNewsFeed( pageNo ) {
    this.getN.globalNewsFeed( pageNo, 'all' ).subscribe(
      res => {
        const data = res;
         console.log(data);
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.globalArena.push({
            type: data[i].feedType,
            commentCount: data[i].commentCount,
            likeCount: data[i].likeCount,
            shareCount: data[i].shareCount,
            publishedAt: data[i].publishedAt,
            gameName: data[i].gameName,
            newsId: data[i]._id,
            newsImage: data[i].newsImage,
            sourceImage: data[i].sourceImage,
            source: data[i].source,
            title: data[i].title,
            url: data[i].url,
            desc: data[i].desc
          });
        }
      },
      err => {
        console.log('Something went wrong with feed!');
      }
    );
  }

  globalFeed(  ) {
    this.globalMatchFeed(this.nextPageNo);
    this.globalNewsFeed(this.nextPageNo);
  }

  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    this.globalFeed();
  }


  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {
    this.nextPageNo = Math.floor(scrollY / 2100);

    if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
      this.nextPage(this.nextPageNo);
    }
  }

  ngOnInit() {
    this.loc.getGeoLocation()
    .then( () => {
      this.globalFeed();
    })
    .catch( (err) => {
      console.log(err);
    });
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }

}
