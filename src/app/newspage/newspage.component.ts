import { TimeService } from './../shared/services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';
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
  arr=[];
  temp=[];
  mnewshead;
  mnewsimage;
  mnewsdesc;
  mnewsurl;
  firststatus=true;
  datastr;
  newsstatus = false;
  mnewstime;
  cdata=true;
  ddata=true;
  topic;
  c=0;
  j=-1;
  scroll=document.getElementsByClassName('c-element') as HTMLCollectionOf<HTMLElement>;
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;
  constructor(
    private _eventemiter: EventEmiterService,
    private getService: GetService,
    private route: ActivatedRoute,
    private time: TimeService,
    private router: Router
  ) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
    this.topic = params.topic;
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
  ngtemp(topic){
      this.getnewss(topic);
      this.recentnews("");
  }
  // public ngfake(){
  //   console.log("ngfake working");  
  //   this.route.params.subscribe(params => {
  //     this.topic = params.topic;
  //     console.log("topic is  "+ this.topic);
  //   });
  //    if(this.topic===""){
  //     this.cdata=false;
  //     this.getnews(this.topic);
  //    }
  //    else{
  //     this.getnewss(this.topic);
  //      this.ddata=false;
  //    }
  //     this.recentnews("");
  //     this.datastr=this._eventemiter.userToEdit;
  //     if(this.datastr !== undefined){
  //     this.mnewshead = this.datastr.title;
  //     this.mnewstime = this.datastr.timestamp;
  //     this.mnewsimage = this.datastr.image;
  //     this.mnewsdesc = this.datastr.desc;
  //     this.mnewsurl = this.datastr.url;
  //     }
  // }
  recentnews(topic){
    if(this.c===1){
      this.rnews=[];
    }
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
        if(i==="5"){
          break;
        }
      }
    });

  }
  getnews(topic){
      this.getService.getsportnews(topic).subscribe(res=>{
        var body = JSON.parse(res._body);
        console.log(body);
        var x;
        this.j=this.j+1;
        for (var i=0; i<5; i++) {
          x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
          x = x.replace(/T/g," at "); 
            this.list.push({
              id: i,
              game: body.news[i].gameName,
              source: body.news[i].source,
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
            });
          }
          for(var i=5; i<7; i++){
            x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
            x = x.replace(/T/g," at "); 
            this.list1.push({
              id: i,
              source: body.news[i].source,
              game: body.news[i].gameName,
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
              id: i,
              game: body.news[i].gameName,
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
  openews(id, topic){
    this.c=1;
    if(id<5){
      this.mnewshead = this.list[id].title;
      this.mnewstime = this.list[id].timestamp;
      this.mnewsimage = this.list[id].image;
      this.mnewsdesc = this.list[id].desc;
      this.mnewsurl = this.list[id].url;  
      this.ddata=false;
      this.cdata=true;
      this.ngtemp(topic);
      this.router.navigate(['/newspage', topic]);  
    }
    else if(id >= 5 && id < 7){
      id=id-5;
      this.mnewshead = this.list1[id].title;
      this.mnewstime = this.list1[id].timestamp;
      this.mnewsimage = this.list1[id].image;
      this.mnewsdesc = this.list1[id].desc;
      this.mnewsurl = this.list1[id].url;  
      this.ddata=false;1
      this.cdata=true;
      this.router.navigate(['/newspage', topic]);  
    }
    else{
      id=id-7;
      this.mnewshead = this.news[id].title;
      this.mnewstime = this.news[id].timestamp;
      this.mnewsimage = this.news[id].image;
      this.mnewsdesc = this.news[id].desc;
      this.mnewsurl = this.news[id].url;  
      this.ddata=false;
      this.cdata=true;
      this.router.navigate(['/newspage', topic]); 
    }
  } 
  getnewss(topic){
    if(this.c===1){
      this.news=[];
    }
      this.getService.getsportnews(topic).subscribe(res=>{
          var body = JSON.parse(res._body);
          var x;
          for (const i in body.news) {
            this.j=this.j+1;
            x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
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
            if(this.c===0){
              if(this.datastr === undefined){
                this.mnewshead = this.news[0].title;
                this.mnewstime = this.news[0].timestamp;
                this.mnewsimage = this.news[0].image;
                this.mnewsdesc = this.news[0].desc;
                this.mnewsurl = this.news[0].url;
              }
            }
            if(i==="4"){
              break;
            }
          }
      });
  }
    opennews(id){
      this.newsstatus=true;
      if(id < 5){
        this.mnewshead = this.news[id].title;
        this.mnewstime = this.news[id].timestamp;
        this.mnewsimage = this.news[id].image;
        this.mnewsdesc = this.news[id].desc;
        this.mnewsurl = this.news[id].url;
      if(this.newsstatus){
        if(this.firststatus){
          var popnews = this.news.splice(id,1)[0];
          this.arr.push(popnews);
          for(var i=1; i<this.news.length;i++){
            this.news[i].id=this.news[i].id-1;
          }
          this.firststatus=false;
          console.log(this.arr);
        }
        else{
          console.log(this.arr);
          this.temp=this.arr;
          this.news.push({
            id: null,
            source: this.temp[0].source,
            title:this.temp[0].title,
            timestamp:this.temp[0].timestamp,
            url: this.temp[0].url,
            image: this.temp[0].image,
            desc: this.temp[0].desc
          });
          this.news[this.news.length-1].id=this.news.length-1;
          console.log(this.news);
          this.arr=[];
          var popnews = this.news.splice(id,1)[0];
          this.arr.push(popnews);
          for(var i=1; i<this.news.length;i++){
            this.news[i].id=this.news[i].id-1;
          }
        }
      }
      }
      else{
        id=id-5;
        this.mnewshead = this.rnews[id].title;
        this.mnewstime = this.rnews[id].timestamp;
        this.mnewsimage = this.rnews[id].image;
        this.mnewsdesc = this.rnews[id].desc;
        this.mnewsurl = this.rnews[id].url;
      }
      this.topscroll();
    }
    ngDestroy(){
      
    }
    topscroll(){
      window.scrollTo(0,0);
    }
    lscroll(){
      this.widgets.nativeElement.scrollLeft -=this.widgetsContent.nativeElement.clientWidth;
    }
    rscroll(){
      this.widgets.nativeElement.scrollLeft +=this.widgetsContent.nativeElement.clientWidth;
    }
}
