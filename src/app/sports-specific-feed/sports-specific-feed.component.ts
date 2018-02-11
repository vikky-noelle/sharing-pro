import { Component, OnInit, ViewEncapsulation, HostListener, Renderer2 } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { GetService } from '../shared/services/get.service';
import { LocationBasedDataService } from '../shared/services/location-based-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports-social-sports-specific-feed',
  templateUrl: './sports-specific-feed.component.html',
  styleUrls: ['./sports-specific-feed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SportsSpecificFeedComponent implements OnInit {

  globalArena = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;
  gameName: string;

  constructor(
    private getM: LocationBasedDataService,
    private getN: PostService,
    private renderer: Renderer2,
    private loc: LocationBasedDataService,
    private activeRoute: ActivatedRoute
  ) { }

  globalMatchFeed( pageNo ) {
    this.getM.globalMatchFeed( pageNo).subscribe(
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
            matchDate: data[i].strartdatetime,
            restrictionCount: data[i].restrictionCount,
            joineeCount: data[i].JoineeCount,
            commentCount: data[i].CommentCount,
            watchCount: data[i].WatchCount,
            promoteCount: data[i].PromoteCount,
            venueName: data[i].Venue_Name,
            gameName: data[i].GameName,
            activityName: data[i].Activity_Name !== undefined ?  data[i].Activity_Name.split(' ')[0] : '' 
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
   console.log(this.gameName);
    this.activeRoute.params.subscribe(
      (params) => {
        this.gameName = params.sport;
        this.globalNewsFeed(this.nextPageNo, this.gameName.toLowerCase());
      }
    );
    // this.globalMatchFeed(this.nextPageNo);
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
     this.loc.getGeoLocation();
    // console.log(this.loc.pos);
      this.globalFeed();
  }


}
