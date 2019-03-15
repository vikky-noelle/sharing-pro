import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  Renderer2,
  OnDestroy
} from '@angular/core';

import { Masonry, MasonryGridItem } from 'ng-masonry-grid';
import { ISubscription } from 'rxjs/Subscription';
import { NewsService } from '../../shared/services/news.service';

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
    private newsData: NewsService,
    private renderer: Renderer2,
  ) { }

  globalNewsFeed( pageNo ) {
    this.newsData.globalNewsFeed(this.nextPageNo, 'all').then( (news) => {
      this.News = this.News.concat(news);
    }).catch( (err) => {
      console.log(err);
    });
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
