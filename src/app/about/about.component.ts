import { Component, 
  OnInit ,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2,
  PLATFORM_ID,
  Inject,
  AfterViewInit
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
import { Http ,Response} from '@angular/http';

@Component({
selector: 'app-about',
templateUrl: './about.component.html',
styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

title='About Sports Social | Chase Your Sport';
keywords="About Sports Social,Sports Social,Chase Your Sport,Sports is the new Social,Your Sports Manager,Bond over Sports,Participate in Sport,Khelo India,Play your sport"
description="Sports Social is Social Networking Service that lets users to chase their passion for the sport at any time, anywhere.“Sports Social” aims to provide a framework and maximize access to participation in appropriate forms of physical activity.";
private marginTop;
isbrowser:boolean;
url;
blogs=[];
instaArr=[];
instadata=[];
instaimageArray:
{id,
    user:{
          profile_picture,username
         },
    images:{
              standard_resolution:{
                                    width,height,url
                                  },
            }
    created_time,
    caption:{
             text
             },
    link
};


instafeed():void{
  this.http.request('https://api.instagram.com/v1/users/self/media/recent/?access_token=3238782460.1408c01.74c84f4d73a048c69abe08f3d038e444')
    .subscribe((res:Response)=>{
      this.instadata=res.json().data;
      // console.log("this is insta data::"+this.instadata);
      for(var i=0;i<this.instadata.length;i++){
        this.instaimageArray=this.instadata[i];
        this.instaArr.push({
          id:this.instaimageArray.id,
          profile_picture:this.instaimageArray.user.profile_picture,
          username: this.instaimageArray.user.username,
          url:this.instaimageArray.images.standard_resolution.url,
          created_time:this.time.ExactDate(this.instaimageArray.created_time),
          text:this.instaimageArray.caption.text,
          link:this.instaimageArray.link
        });
      }
      
    });
}
_masonry: Masonry;
  private _removeAllSubscription: ISubscription;
  private _removeItemSubscription: ISubscription;
  private _removeFirstItemSubscription: ISubscription;
descTitle="Sports Social is";
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
  private http:Http,
  @Inject(PLATFORM_ID)platformid:Object)
    
    {   
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
          })
    }
    
    }
  );
}
setCanonicalURL() {
  this.link.addTag( { rel: 'canonical', href: 'https://www.sportsoical.in'});
}
ngOnInit() {
  // console.log(this.desc.nativeElement.textContent);
  this.instafeed();
  this.titleservice.setTitle(this.title);
  this.metaservice.updateTag({name:'title',content:this.title});
  this.metaservice.updateTag({name: 'keywords' , content:this.keywords});
  this.metaservice.updateTag({name:'description',content:this.description});
  this.metaservice.updateTag({property:'og:title',content:this.title});
  this.metaservice.updateTag({property:'og:description',content:this.description});
  this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
  this.getLatestBlog();
  this.setCanonicalURL();
  
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
}
rightScroll(){
  this.blog.nativeElement.scrollLeft +=this.blogImg.nativeElement.clientWidth;
}
leftScroll2(){
  this.socialFeed.nativeElement.scrollLeft -=this.socialFeedImg.nativeElement.clientWidth;
}
rightScroll2(){
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