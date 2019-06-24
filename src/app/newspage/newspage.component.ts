import { TimeService } from './../shared/services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';
import { InteractionService } from '../shared/services/interaction.service';
@Component({
  selector: 'sports-social-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit{
  
  news=[];
  rnews=[];
  crousallist=[];
  crousalitem=[];
  arr=[];
  temp=[];
  tempnews=[];
  mainnewshead;
  mainnewsimage;
  mainnewsdesc;
  mainnewsurl;
  firststatus=true;
  datastr;
  newsstatus = false;
  mainnewstime;
  mainnewssource;
  cdata=true;
  ddata=true;
  show:boolean=false;
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
    private router: Router,
    private event: InteractionService
  ) { 
    //this is how i interact between components
    this.event.listentoroute().subscribe((topic:any) => {
      this.news=[];
      this.rnews=[];
      this.crousallist=[];
      this.crousalitem=[];
      this.arr=[];
      this.temp=[];
      this.cdata=false;
      this.ddata=true;
      this.getsportwise(topic);
      this.ddata=false;
      this.recentnews("");
   }); 
  }

  ngOnInit() {
  this.route.params.subscribe(params => {
    this.topic = params.topic;
  });
  this.datastr=this._eventemiter.userToEdit;
  if(this.datastr !== undefined){
    this.mainnewshead = this.datastr.title;
    this.mainnewstime = this.datastr.timestamp;
    this.mainnewsimage = this.datastr.image;
    this.mainnewsdesc = this.datastr.desc;
    this.mainnewsurl = this.datastr.url;
    this.mainnewssource = this.datastr.source;
    }
   if(this.topic===undefined){
    this.cdata=false;
    this.getallsportnews('');
   }
   else{
    this.getsportwise(this.topic);
     this.ddata=false;
   }
    this.recentnews("");
   
  }
  ngtemp(topic){
      this.getsportwise(topic);
      this.recentnews("");
  }
  
  recentnews(topic){
    if(this.c===1){
      this.rnews=[];
    }
    this.getService.getsportnews(topic).subscribe(res=>{
      this.show=true;
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
  getallsportnews(topic){
      this.getService.getsportnews(topic).subscribe(res=>{
        this.show=true;
        var body = JSON.parse(res._body);
        var x;
        this.j=this.j+1;
        for (var i=0; i<5; i++) {
          // if(this.mainnewsurl === body.news[i].url){
          //   continue;
          // }
          x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
          x = x.replace(/T/g," at "); 
            this.crousallist.push({
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
            this.crousalitem.push({
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
          this.mainnewshead = this.news[0].title;
          this.mainnewstime = this.news[0].timestamp;
          this.mainnewsimage = this.news[0].image;
          this.mainnewsdesc = this.news[0].desc;
          this.mainnewsurl = this.news[0].url;
          this.mainnewssource = this.news[0].source;
          }
    });
  }
  openews(id, topic){
    this.c=1;
    if(id<5){
      this.mainnewshead = this.crousallist[id].title;
      this.mainnewstime = this.crousallist[id].timestamp;
      this.mainnewsimage = this.crousallist[id].image;
      this.mainnewsdesc = this.crousallist[id].desc;
      this.mainnewsurl = this.crousallist[id].url; 
      this.mainnewssource = this.crousallist[id].source; 
      this.ddata=false;
      this.cdata=true;
      this.ngtemp(topic);
      this.router.navigate(['/newspage', topic]);  
    }
    else if(id >= 5 && id < 7){
      id=id-5;
      this.mainnewshead = this.crousalitem[id].title;
      this.mainnewstime = this.crousalitem[id].timestamp;
      this.mainnewsimage = this.crousalitem[id].image;
      this.mainnewsdesc = this.crousalitem[id].desc;
      this.mainnewsurl = this.crousalitem[id].url;  
      this.mainnewssource = this.crousalitem[id].source; 
      this.ddata=false;1
      this.cdata=true;
      this.router.navigate(['/newspage', topic]);  
    }
    else{
      id=id-7;
      this.mainnewshead = this.news[id].title;
      this.mainnewstime = this.news[id].timestamp;
      this.mainnewsimage = this.news[id].image;
      this.mainnewsdesc = this.news[id].desc;
      this.mainnewsurl = this.news[id].url;  
      this.mainnewssource = this.news[id].source; 
      this.ddata=false;
      this.cdata=true;
      this.router.navigate(['/newspage', topic]); 
    }
  } 
  getsportwise(topic){
    this.tempnews=[]
    if(this.c===1){
      this.news=[];
    }
      this.getService.getsportnews(topic).subscribe(res=>{
          var body = JSON.parse(res._body);
          var x;
          this.j=-1;

          this.show=true;
          this.cdata=true;
          for (const i in body.news) {
            this.j=this.j+1;
            x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
            x = x.replace(/T/g," at "); 
            if(this.j === 0){
              this.tempnews.push({
                source: body.news[i].source,
                id:this.j,
                title:body.news[i].title,
                timestamp:x.substr(0,19),
                url: body.news[i].url,
                image: body.news[i].newsImage,
                desc: body.news[i].desc
              });
            }
            else{
            this.news.push({
              source: body.news[i].source,
              id:this.j,
              title:body.news[i].title,
              timestamp:x.substr(0,19),
              url: body.news[i].url,
              image: body.news[i].newsImage,
              desc: body.news[i].desc
            });
          }
            if(this.c===0){
              if(this.datastr === undefined){
                this.mainnewshead = this.tempnews[0].title;
                this.mainnewstime = this.tempnews[0].timestamp;
                this.mainnewsimage = this.tempnews[0].image;
                this.mainnewsdesc = this.tempnews[0].desc;
                this.mainnewsurl = this.tempnews[0].url;
                this.mainnewssource = this.tempnews[0].source; 
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
        if(this.firststatus){
          id=id-1;
        }
        this.mainnewshead = this.news[id].title;
        this.mainnewstime = this.news[id].timestamp;
        this.mainnewsimage = this.news[id].image;
        this.mainnewsdesc = this.news[id].desc;
        this.mainnewsurl = this.news[id].url;
        this.mainnewssource = this.news[id].source; 
      if(this.newsstatus){
        if(this.firststatus){
          var popnews = this.news.splice(id,1)[0];
          this.arr.push(popnews);
          for(var i=1; i<this.news.length;i++){
            this.news[i].id=this.news[i].id-1;
          }
          this.firststatus=false;
          this.news.push({
            id: null,
            source: this.tempnews[0].source,
            title:this.tempnews[0].title,
            timestamp:this.tempnews[0].timestamp,
            url: this.tempnews[0].url,
            image: this.tempnews[0].image,
            desc: this.tempnews[0].desc
          });
          this.news[this.news.length-1].id=this.news.length;
          for(var i=1; i<this.news.length;i++){
            this.news[i].id=this.news[i].id-1;
          }
          this.news[0].id=0;
        }
        else{
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
          this.arr=[];
          var popnews = this.news.splice(id,1)[0];
          this.arr.push(popnews);
          for(var i=1; i<this.news.length;i++){
            this.news[i].id=this.news[i].id-1;
          }
          this.news[0].id=0;
        }
      }
      }
      else{
        id=id-5;
        this.mainnewshead = this.rnews[id].title;
        this.mainnewstime = this.rnews[id].timestamp;
        this.mainnewsimage = this.rnews[id].image;
        this.mainnewsdesc = this.rnews[id].desc;
        this.mainnewsurl = this.rnews[id].url;
        this.mainnewssource = this.rnews[id].source; 
      }
      this.topscroll();
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
