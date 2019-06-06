import { TimeService } from './../shared/services/time.service';
import { ActivatedRoute } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';
import { DefaultRouteReuseStrategy } from '@angular/router/src/route_reuse_strategy';
@Component({
  selector: 'sports-social-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit{
  
  news=[];
  rnews=[];
  list=[];
  list1=[];
  mnewshead;
  mnewsimage;
  mnewsdesc;
  mnewsurl;
  datastr;
  mnewstime;
  cdata=true;
  ddata=true;
  topic;
  j=-1;
  scroll=document.getElementsByClassName('c-element') as HTMLCollectionOf<HTMLElement>;
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;
  constructor(
    private _eventemiter: EventEmiterService,
    private getService: GetService,
    private route: ActivatedRoute,
    private time: TimeService
  ) { }

  ngOnInit() {
  //   if(this.route.snapshot.paramMap.has("topic")){
  //     this.topic = this.route.snapshot.paramMap.get("topic");
  //  }
  this.route.params.subscribe(params => {
    this.topic = params.topic;
    console.log("routes working"+this.topic);
  });
   if(this.topic===""){
    this.cdata=false;
    this.getnews(this.topic);
   }
   else{
    this.getnewss(this.topic);
     this.ddata=false;
   }
    this.recentnews("");
    this.datastr=this._eventemiter.userToEdit;
    if(this.datastr !== undefined){
    this.mnewshead = this.datastr.title;
    this.mnewstime = this.datastr.timestamp;
    this.mnewsimage = this.datastr.image;
    this.mnewsdesc = this.datastr.desc;
    this.mnewsurl = this.datastr.url;
    }
  }
  recentnews(topic){
    this.getService.getsportnews(topic).subscribe(res=>{
      var body = JSON.parse(res._body);
      var x;
      for (var i in body.news) {
        this.j=this.j+1;
        x = this.time.ExactDate(Date.parse(body.news[i].insertedDate));
        x = x.replace(/T/g," at "); 
        this.rnews.push({
          source: body.news[i].source,
          id:this.j,
          title:body.news[i].title,
          timestamp:x.substr(0,19),
          url: body.news[i].url,
          image: body.news[i].newsImage,
          desc: body.news[i].desc
        });
        if(i==="10"){
          break;
        }
      }
    });

  }
  getnews(topic){
      this.getService.getsportnews(topic).subscribe(res=>{
        var body = JSON.parse(res._body);
        var x;
        this.j=this.j+1;
        console.log(body);
        for (var i=0; i<5; i++) {
          x = this.time.ExactDate(body.news[i].insertedDate);
          x = x.replace(/T/g," at "); 
            this.list.push({
              source: body.news[i].source,
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
            });
          }
          // console.log(this.list);
          for(var i=5; i<7; i++){
            x = this.time.ExactDate(body.news[i].insertedDate);
            x = x.replace(/T/g," at "); 
            this.list1.push({
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
            });
          }
          for(var i=7; i<20; i++){
            x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
            x = x.replace(/T/g," at "); 
            this.news.push({
              source: body.news[i].source,
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
          });
        }
          if(this.datastr === undefined){
          this.mnewshead = this.news[0].title;
          this.mnewstime = this.news[0].timestamp;
          this.mnewsimage = this.news[0].image;
          this.mnewsdesc = this.news[0].desc;
          this.mnewsurl = this.news[0].url;
          }
    });
  }
  getnewss(topic){
      this.getService.getsportnews(topic).subscribe(res=>{
          var body = JSON.parse(res._body);
          var x;
          for (const i in body.news) {
            this.j=this.j+1;
            x = this.time.ExactDate(body.news[i].insertedDate);
            x = x.replace(/T/g," at "); 
            this.news.push({
              source: body.news[i].source,
              id:this.j,
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
            });
            if(this.datastr === undefined){
            this.mnewshead = this.news[0].title;
            this.mnewstime = this.news[0].timestamp;
            this.mnewsimage = this.news[0].image;
            this.mnewsdesc = this.news[0].desc;
            this.mnewsurl = this.news[0].url;
            }
            if(i==="4"){
              break;
            }
          }
      });
  }
    opennews(id){
      console.log("lalala"+id);
      if(id < 5){
      this.mnewshead = this.news[id].title;
      this.mnewstime = this.news[id].timestamp;
      this.mnewsimage = this.news[id].image;
      this.mnewsdesc = this.news[id].desc;
      this.mnewsurl = this.news[id].url;
      }
      else{
        id=id-5;
        this.mnewshead = this.rnews[id].title;
        this.mnewstime = this.rnews[id].timestamp;
        this.mnewsimage = this.rnews[id].image;
        this.mnewsdesc = this.rnews[id].desc;
        this.mnewsurl = this.rnews[id].url;
      }
    }
    ngDestroy(){
      
    }
    lscroll(){
      console.log('working');
      this.widgets.nativeElement.scrollLeft -=this.widgetsContent.nativeElement.clientWidth;
      // this.scroll[0].scrollLeft+=150;
    }
    rscroll(){
      console.log('working');
      this.widgets.nativeElement.scrollLeft +=this.widgetsContent.nativeElement.clientWidth;
      
      // this.scroll[0].scrollLeft+=150;
    }
}
