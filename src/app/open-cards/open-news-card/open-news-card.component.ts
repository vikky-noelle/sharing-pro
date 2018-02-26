import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.router.navigate( [ { outlets: { 'News': null}} ])
  }

  constructor(
    private renderer: Renderer2,
    private get: PostService,
    private  activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  getNewsData(id) {
    this.get.singleNewsData(id).subscribe(
      (res) => {
        console.log(res);
        this.title = res['title'];
        this.insertedDate = res['insertedDate'];
        this.desc = res['desc'];
        this.newsImage = res['newsImage'];
        this.url = res['url'];
        this.likeCount = res['likeCount'];
        this.shareCount = res['shareCount'];
        this.sourceImage = res['sourceImage'];
        this.sourceName = res['sourceName'];
      }
    );
  }
  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param) => {
        this.getNewsData(param.id);
      }
    )
  }

}
