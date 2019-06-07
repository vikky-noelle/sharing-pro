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
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-global-news-feed',
  templateUrl: './global-news-feed.component.html',
  styleUrls: ['./global-news-feed.component.css', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css'],
  encapsulation: ViewEncapsulation.None
})
export class GlobalNewsFeedComponent implements OnInit, OnDestroy {

  title="Around the World | Sports Social";
  metakey="Sports news from around the world,latest sports news,latest cricket news,football news,tennis news,pro kabbadi news,Hocket news";
  metades="Sports Social Around the World Provides the latest news and stories in sports,sports trends,sports business, international tournaments, cricket news,football news, tennis news, hockey news etc. stay tuned";
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
    private pagetitle:Title,
    private metaservice:Meta
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
    this.pagetitle.setTitle(this.title);
    this.metaservice.updateTag({name:'title',content:this.title});
    this.metaservice.updateTag({name:'keywords',content:this.metakey});
    this.metaservice.updateTag({name:'description',content:this.metades});
    this.metaservice.updateTag({property:'og:title',content:this.title});
    this.metaservice.updateTag({property:'og:description',content:this.metades});
    this.metaservice.updateTag({property:'og:keywords',content:this.metakey});
  }

  ngOnDestroy() {
    if (this._masonry) {
      this._removeAllSubscription.unsubscribe();
      this._removeItemSubscription.unsubscribe();
      this._removeFirstItemSubscription.unsubscribe();
    }
  }


}
