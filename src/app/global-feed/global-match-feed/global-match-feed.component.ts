import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { GetService } from '../../shared/services/get.service';
import { LocationBasedDataService } from '../../shared/services/location-based-data.service';

import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'sports-social-global-match-feed',
  templateUrl: './global-match-feed.component.html',
  styleUrls: ['./global-match-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalMatchFeedComponent implements OnInit, OnDestroy {

  Match = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;
  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;
  constructor(
    private get: LocationBasedDataService,
    private loc: LocationBasedDataService,
    private getNews: GetService,
    private renderer: Renderer2,
  ) { }

  globalMatchFeed( pageNo ) {
    this.get.globalMatchFeed( pageNo, 0).subscribe(
      res => {
        const data = res['Feed'];
         console.log(data);
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.Match.push({
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
    this.loc.getGeoLocation()
    .then( () => {
      this.globalMatchFeed(this.nextPageNo);
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
