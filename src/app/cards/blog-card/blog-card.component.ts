import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterViewInit
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'sports-social-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogCardComponent implements OnInit, AfterViewInit {

  @Input()  blogId: string;
  @Input()  blogImage: string;
  @Input()  heading: string;
  @Input()  insertedDate: string;
  @Input()  viewCount: string;
  @Input()  shareCount: string;
  @Input()  metaDesc: string;
  @Input()  imageDesc: string;
  @Input()  topic: string;
  @Input()  shortTitle: string;

  url;
  constructor(
  ) { }



  ngOnInit() {
  }

  ngAfterViewInit() {
    this.url = 'https://www.chaseyoursport.com/' + this.topic
      + '/' + this.shortTitle + '/' + this.blogId;
  }

}
