import { Component, OnInit, ViewEncapsulation, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { GetService } from '../shared/services/get.service';
import { LocationBasedDataService } from '../shared/services/location-based-data.service';
import { ActivatedRoute } from '@angular/router';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';

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
    private getM: LocationBasedDataService,
    private getN: PostService,
    private renderer: Renderer2,
    private loc: LocationBasedDataService,
    private activeRoute: ActivatedRoute
  ) { }

  globalMatchFeed( pageNo, id ) {
    this.getM.globalMatchFeed( pageNo, id).subscribe(
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
            matchDate: data[i].startdatetime,
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
  globalNewsFeed( pageNo , gameName ) {
    this.getN.globalNewsFeed( pageNo, gameName ).subscribe(
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

  globalFeed( ) {
   this.gameName = this.activeRoute.snapshot.params.sport;
   this.gameId = this.Sports.find((sport) => {
     return sport.title === this.gameName;
   }).id;
   console.log('id: ', this.gameId);
   console.log(this.gameName);
    this.activeRoute.params.subscribe(
      (params) => {
        this.gameName = params.sport;
        this.gameId = this.Sports.find((sport) => {
          return sport.title === this.gameName;
        }).id;
        this.globalNewsFeed(this.nextPageNo, this.gameName.toLowerCase());
        this.globalMatchFeed(this.nextPageNo, this.gameId);
      }
    );
  }


  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    this.globalFeed();
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
