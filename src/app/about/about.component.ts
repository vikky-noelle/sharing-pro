import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { TimeService } from '../shared/services/time.service';

@Component({
  selector: 'sports-social-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  blog = [];
  constructor(
    private get: PostService,
    private time: TimeService
  ) { }

  getLatestBlog() {
    this.get.blogData(1, 'dfg').subscribe(
      res => {
        const data = res;
        console.log(res);
        for (let i = 0 ; i <= 2 ; i++) {
          console.log(data[i].blogId)
          this.blog.push({
              blogId: data[i].blogId,
              blogImage: data[i].blogImage,
              heading: data[i].heading,
              ViewCount: data[i].ViewCount,
              ShareCount: data[i].ShareCount,
              MetaDesc: data[i].MetaDesc,
              ImageDesc: data[i].ImageDesc,
              topic: data[i].topic,
              shortTitle: data[i].shortTitle,
              insertedDate: this.time.timePassed( data[i].insertedDate )
            });
      }
      }
    );
  }

  ngOnInit() {
    this.getLatestBlog();
  }

}
