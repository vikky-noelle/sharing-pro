import { TimeService } from './../shared/services/time.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';
import { InteractionService } from '../shared/services/interaction.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'sports-social-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit{
  
  title="Sports News from around the world";
  description="Get the latest sports trends,news,updates from around the world on Sports Social from top sources";
  keywords="Latest Sports News, Breaking news Sports,Sports Trends,Sports Social,Sports Updates,Headlines Sports,Sports News Today";
  
  news=[];
  rnews=[];
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
    private event: InteractionService,
    private titleservice:Title,
    private metaservice:Meta
  ) { 
    this.titleservice.setTitle(this.title);
    this.metaservice.updateTag({name:'title',content:this.title});
    this.metaservice.updateTag({name: 'keywords' , content:this.keywords});
    this.metaservice.updateTag({name:'description',content:this.description});
    this.metaservice.updateTag({property:'og:title',content:this.title});
    this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
    this.metaservice.updateTag({property:'og:description',content:this.description});
    //this is how i interact between components
    this.event.listentoroute().subscribe((topic:any) => {
      this.news=[];
      this.rnews=[];
      this.arr=[];
      this.temp=[];
       this.getsportwise(topic);
      this.recentnews("");
   }); 
  }

  ngOnInit() {
  this.route.params.subscribe(params => {
    this.topic = params.topic;
  });
  this.datastr=this._eventemiter.userToEdit;
  console.log(this.datastr);
  if(this.datastr !== undefined){
    this.mainnewshead = this.datastr.title;
    this.mainnewstime = this.datastr.timestamp;
    this.mainnewsimage = this.datastr.image;
    this.mainnewsdesc = this.datastr.desc;
    this.mainnewsurl = this.datastr.url;
    this.mainnewssource = this.datastr.source;
    }
    this.getsportwise(this.topic);
    this.recentnews("");
   
  }
  randomrouteresponse(){
       this.router.navigate(['/news']);
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
 
  openews(id, topic){
    this.c=1;
    if(id<5){
      this.ngtemp(topic);
      this.router.navigate(['/news', topic]);  
    }
    else if(id >= 5 && id < 7){
      id=id-5;
      this.router.navigate(['/news', topic]);  
    }
    else{
      id=id-7;
      this.mainnewshead = this.news[id].title;
      this.mainnewstime = this.news[id].timestamp;
      this.mainnewsimage = this.news[id].image;
      this.mainnewsdesc = this.news[id].desc;
      this.mainnewsurl = this.news[id].url;  
      this.mainnewssource = this.news[id].source; 
      this.router.navigate(['/news', topic]); 
    }
  } 
  getsportwise(topic){
    this.tempnews=[]
    if(this.c===1){
      this.news=[];
    }
      this.getService.getsportnews(topic).subscribe(res=>{
          var body = JSON.parse(res._body);
          if(body.news.length === 0){
            this.randomrouteresponse();
          }
          var x;
          this.j=-1;

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
  
}
