import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { Meta } from '@angular/platform-browser';
import { LinkService } from '../../shared/services/link.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'sports-social-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogCardComponent implements OnInit, AfterViewInit {

  @Input()  blogId: string;
  @Input()  heading: string;
  @Input()  blogImage: string;
  @Input()  viewCount: string;
  @Input()  shareCount: string;
  @Input()  bloggerName:string;
  @Input()  metaDesc: string;
  @Input()  imageDesc: string;
  @Input()  topic: string;
  @Input()  shortTitle: string;
  @Input()  insertedDate: string;
  url;
  
  constructor(){} 
  
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.url = 'https://www.chaseyoursport.com/' + this.topic
      + '/' + this.shortTitle + '/' + this.blogId;
  }

}
