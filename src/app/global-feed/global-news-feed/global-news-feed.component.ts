import { 
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
  OnDestroy
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { GetService } from '../../shared/services/get.service';

import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'sports-social-global-news-feed',
  templateUrl: './global-news-feed.component.html',
  styleUrls: ['./global-news-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalNewsFeedComponent implements OnInit, OnDestroy {

  News = [];
  prevPageNo: number = 0;
  nextPageNo: number = 0;

  _masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;
  constructor(
    private get: PostService,
    private getNews: GetService,
    private renderer: Renderer2,
  ) { }

  globalNewsFeed( pageNo ) {
    this.get.globalNewsFeed( pageNo, 'all' ).subscribe(
      res => {
        const data = res;
         console.log(data);
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.News.push({
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
        console.log(this.News);
      },
      err => {
        console.log('Something went wrong with feed!');
      }
    );
  }

  nextPage(pageNo) {
    this.prevPageNo = pageNo;
    this.globalNewsFeed(pageNo);
  }

  @HostListener('window:scroll', ['$event'])onWindowScroll(event) {

     console.log(Math.floor(scrollY / 700), scrollY);
    this.nextPageNo = Math.floor(scrollY / 700);

    if (this.nextPageNo > 0 && this.prevPageNo < this.nextPageNo ) {
      this.nextPage(this.nextPageNo);
    }
  }

  ngOnInit() {
    this.globalNewsFeed(this.nextPageNo);
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }


}
