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
    private resolver: ComponentFactoryResolver
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

  createComponent(id) {
    this.openNewsCardContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(OpenNewsCardComponent);
    this.componentRef = this.openNewsCardContainer.createComponent(factory);
    console.log(id);
    this.componentRef.instance.title = this.title;
    this.componentRef.instance.insertedDate = this.insertedDate;
    this.componentRef.instance.desc = this.desc;
    this.componentRef.instance.newsImage = this.newsImage;
    this.componentRef.instance.url = this.url;
    this.componentRef.instance.likeCount = this.likeCount;
    this.componentRef.instance.shareCount = this.shareCount;
    this.componentRef.instance.sourceImage = this.sourceImage;
    this.componentRef.instance.sourceName = this.sourceName;
  }
  ngOnInit() {
    this.removeActionsCountBar();
  }

}
