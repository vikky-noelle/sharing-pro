import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  AfterViewInit,
} from '@angular/core';
import { Http } from '@angular/http';
import { TimeService } from '../../shared/services/time.service';

@Component({
  selector: 'sports-social-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogCardComponent implements OnInit, AfterViewInit{
  url1 = 'https://www.chaseyoursport.com/'

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
  @Input()  url:string;

  blogs=[];
  
  constructor(private http:Http,private time:TimeService){} 
  // getLatestBlog() {
  //   this.http.post(this.url1, {}).map((res:Response) => res.json())
  //   .subscribe( data => {
  //     for(var i=0;i<data.length;i++){
  //       this.blogs.push({
  //                   blogId: data[i].blogId,
  //                   shortTitle:data[i].shortTitle,
  //                   url:data[i].url,
  //                   heading: data[i].heading,
  //                   blogImage: data[i].blogImage,
  //                   viewCount: data[i].viewCount,
  //                   shareCount:data[i].shareCount,
  //                   bloggerName: data[i].bloggerName,
  //                   metaDesc: data[i].metaDesc,
  //                   topic: data[i].topic,
  //                   insertedDate: this.time.timePassed( data[i].insertedDate )
  //       });
  //       console.log("this is only blogidigjhgjhfjhf",this.blogs[i].url);
  
  //     }
  //   });
  //   }


  ngOnInit() {
    // this.getLatestBlog();
  }

  ngAfterViewInit() {
    this.url = 'https://www.chaseyoursport.com/'+this.topic+'/'+this.shortTitle +'/'+this.blogId;
  }

}
