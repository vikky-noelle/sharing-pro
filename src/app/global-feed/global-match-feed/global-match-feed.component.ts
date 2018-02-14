import { Component, OnInit, ViewEncapsulation, Renderer2, HostListener } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { GetService } from '../../shared/services/get.service';
import { LocationBasedDataService } from '../../shared/services/location-based-data.service';

@Component({
  selector: 'sports-social-global-match-feed',
  templateUrl: './global-match-feed.component.html',
  styleUrls: ['./global-match-feed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalMatchFeedComponent implements OnInit {

  Match = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;

  constructor(
    private get: LocationBasedDataService,
    private loc: LocationBasedDataService,
    private getNews: GetService,
    private renderer: Renderer2,
  ) { }

  globalMatchFeed( pageNo ) {
    this.get.globalMatchFeed( pageNo, 0).subscribe(
      res => {
        const data = res;
         console.log(data);
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.Match.push({
            eventId: data[i].eventId,
            creatorImage: data[i].creatorImage,
            creatorName: data[i].creatorName,
            type: data[i].feedType,
            doerId: data[i].doerId,
            doerName: data[i].doerName,
            doerPic: data[i].doerPic,
            matchText: data[i].matchText,
            matchImage: data[i].matchImage,
            activityDate: data[i].startDate,
            matchDate: data[i].creationDate,
            restrictionCount: data[i].restrictionCount,
            joineeCount: data[i].joineeCount,
            commentCount: data[i].commentCount,
            watchCount: data[i].watchCount,
            promoteCount: data[i].promoteCount,
            gameName: data[i].gameName,
            venueName: data[i].venueName,
            activityName: data[i].activityName,
            newsId: data[i]._id,
            newsImage: data[i].newsImage,
            sourceImage: data[i].sourceImage,
            source: data[i].source,
            title: data[i].title,
            url: data[i].url,
            desc: data[i].desc
          });
        }
        console.log(this.Match);
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
    this.loc.getGeoLocation();
    // console.log(this.loc.pos);
    this.globalMatchFeed(this.nextPageNo);
  }

}
