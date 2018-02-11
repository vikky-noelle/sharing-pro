import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'sports-social-open-news-card',
  templateUrl: './open-news-card.component.html',
  styleUrls: ['./open-news-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpenNewsCardComponent implements OnInit {


  @ViewChild('openCard') openCard;

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
  @Input()  comments: {
              userName: string;
              commentDate: string;
              uniqueName: string;
              comment: string;
              userImage: string;
            } [] = [];

  removeActionBar () {
    if ( this.likeCount === 0 && this.shareCount === 0) {
      return false;
    } else {
      return true;
    }

  }

  close() {
    this.renderer.setStyle(this.openCard.nativeElement, 'display', 'none');
  }

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
  }

}
