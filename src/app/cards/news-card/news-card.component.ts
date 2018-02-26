import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ComponentFactory,
  ComponentRef,
  ComponentFactoryResolver
} from '@angular/core';
import { OpenNewsCardComponent } from '../../open-cards/open-news-card/open-news-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'sports-social-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NewsCardComponent implements OnInit {

  @Input() newsId: String;
  @Input() newsImage: String;
  @Input() sourceImage: String;
  @Input() sourceName: String;
  @Input() desc: String;
  @Input() likeCount: Number;
  @Input() shareCount: Number;
  @Input() commentCount: Number;
  @Input() url: String;
  @Input() insertedDate: String;
  @Input() publishedAt: String;
  @Input() title: String;


  @ViewChild('actionsCount') actionsCount;

  @ViewChild('openNewsCard', { read: ViewContainerRef}) openNewsCardContainer;
  componentRef: ComponentRef<any>;

  constructor(
    private renderer: Renderer2,
    private router: Router
  ) { }

  defaultImage() {
    if ( this.sourceName === 'BBC Sport') {
      this.newsImage = '/assets/images/bbc-default.jpg';
    }

    if ( this.sourceName === 'The Sport Bible') {
      this.newsImage = '/assets/images/sports-bible-default.jpg';
    }

    if ( this.sourceName === 'TalkSport') {
      this.newsImage = '/assets/images/talksport-default.jpg';
    }
  }

  removeActionsCountBar() {
    if ( this.likeCount === 0 && this.shareCount === 0 && this.commentCount === 0 ) {
      this.renderer.setStyle( this.actionsCount.nativeElement, 'display', 'none');
    }
  }

  openPopUp(id) {
    this.router.navigate([{outlets: {'News':[id]}}]);
  }
  ngOnInit() {
    this.removeActionsCountBar();
  }

}
