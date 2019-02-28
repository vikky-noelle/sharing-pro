import { Component, 
  OnInit ,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { SendService } from '../shared/services/send.service';
import { PostService } from '../shared/services/post.service';
import { TimeService } from '../shared/services/time.service';
import { ISubscription } from 'rxjs/Subscription';
import { Masonry } from 'ng-masonry-grid';
import { GetService } from '../shared/services/get.service';
import { isPlatformBrowser } from '@angular/common';
import { LinkService } from '../shared/services/link.service';
import { Meta ,Title} from '@angular/platform-browser';

@Component({
selector: 'app-about',
templateUrl: './about.component.html',
styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title='About Sports Social | Chase Your Sport';
private marginTop;
isbrowser:boolean;
blogs=[];
_masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;
descTitle="Sports social is";
descTitleDisplay="";
desc="Sports digital media and Networking Service that helps you to see\
 what's going around in your locality and around the globe right now & let's\
  you chase your passion to play your favourite sport."
descDisplay=""

@ViewChild('blog') blog:ElementRef;
@ViewChild('blogImg') blogImg:ElementRef;
@ViewChild('socialFeed') socialFeed:ElementRef;
@ViewChild('socialFeedImg') socialFeedImg:ElementRef;
constructor(private margin:SendService,
  private renderer:Renderer2,
  private get:GetService,
  private time:TimeService,
  private link:LinkService,
  private metaservice:Meta,
  private titleservice:Title,
  @Inject(PLATFORM_ID)platformid:Object)
    
    {   
        // link.addTag(  { rel: 'canonical', href: 'https://www.sportsocial.in/'});
        // metaservice.addTags([
        //   { name: 'description', content: `Sports Social: Chase Your Sport aims to create a sustainable
        //     platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //     career in sports.` },
        //   { name: 'keywords' , content: `About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,
        //   Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport`},
        //   { name: 'title', content: 'Sports Social: Making it easier to play around'},
        //   { name: 'theme-color', content: '#4327a0'},
          
          
        //   { property: 'og:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
        //   platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //   career in sports.`},

        //   { property: 'og:Meta-description', content: `Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, 
        //   anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate 
        //   forms of physical activity.`},
          
        //   { property: 'og:title', content: 'About Sports Social | Chase Your Sport' },
        //   { property: 'og:url', content:  'https://www.sportsocial.in/' },
        //   { property: 'og:image', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        //   { property: 'og:site_name', content: 'Sport Social' },
        //   { property: 'fb:app_id', content: '1750709328507665'},
        //   { name: 'facebook:creator', content: '@SourabhArora'},
        //   { name: 'twitter:card', content: 'summary_large_image'},
        //   { name: 'twitter:site', content: '@Sportsoical'},
        //   { name: 'twitter:creator', content: '@SourabhArora'},
        //   { name: 'twitter:title', content: 'Sports Social: Sports Digital Media and Networking Service'},
        //   { name: 'twitter:description', content: `Sports Social Blog: Chase Your Sport aims to create a sustainable
        //   platform for Indian sports lovers to provide latest updates on Indian Sports Trends, analytics and
        //   career in sports.`},
        //   { name: 'twitter:image:src', content: 'https://test.sportsocial.in/defaultimages/Chase_Your_Sport.jpg'},
        // ]);
        // this.isbrowser = isPlatformBrowser( platformid );
      


  this.margin.height.subscribe(
    (top)=>this.marginTop=top
  )
  
  }


 getLatestBlog() {
  this.get.getBlogdata().subscribe(
    res => {
      var data =JSON.parse(res._body);
      console.log(res);
      for (const i in data) {
       // console.log(data[i].blogId)
        this.blogs.push({
          blogId: data[i].blogId,
          heading: data[i].heading,
          blogImage: data[i].blogImage,
          viewCount: data[i].viewCount,
          shareCount:data[i].shareCount,
          bloggerName: data[i].bloggerName,
          metaDesc: data[i].metaDesc,
          topic: data[i].topic,
          insertedDate: this.time.timePassed( data[i].insertedDate )
          });
    }
    }
  );
}
ngOnInit() {
  // console.log(this.desc.nativeElement.textContent);
  this.titleservice.setTitle(this.title);
  this.getLatestBlog();
  this.typeWriterTitle(this.descTitle,0); 
  setTimeout(function() {
    var i=0;
    i++;
    if(i<=5){}
    console.log(i)
  }, 1000);
  this.typeWriter(this.desc,0);
}
ngOnDestroy() {
  if (this._masonry) {
    this._removeAllSubscription.unsubscribe();
    this._removeItemSubscription.unsubscribe();
    this._removeFirstItemSubscription.unsubscribe();
  }
}
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.margin.height.subscribe(
    (top)=>{
      this.marginTop=top;
    }
  )
}

leftScroll(){
  this.blog.nativeElement.scrollLeft -=this.blogImg.nativeElement.clientWidth;
  this.socialFeed.nativeElement.scrollLeft -=this.socialFeedImg.nativeElement.clientWidth;
}
rightScroll(){
  this.blog.nativeElement.scrollLeft +=this.blogImg.nativeElement.clientWidth;
  this.socialFeed.nativeElement.scrollLeft +=this.socialFeedImg.nativeElement.clientWidth;
}

typeWriter(text:string,n:number){
  if(n<text.length){
    this.descDisplay+=(this.desc[n]);
    n++;
    setTimeout(()=> {
     this.typeWriter(this.desc,n);
    }, 30);
  }
}
typeWriterTitle(text:string,n:number){
  if(n<text.length){
    this.descTitleDisplay+=(text[n]);
    n++;
    setTimeout(()=> {
     this.typeWriterTitle(text,n);
    }, 40);
  }
}

} 