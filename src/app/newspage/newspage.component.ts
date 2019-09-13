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
  
  
  routechangestatus=false;
  news=[];
  rnews=[];
  arr=[];
  temp=[];
  newspool=[];
  tempnews=[];
  mainnewshead;
  mainnewsimage;
  mainnewsdesc;
  mainnewsurl;
  firststatus=true;
  datastr;
  newsstatus = false;
  show:boolean= false;  
  mainnewstime;
  mainnewssource;
  topic;
  c=0;
  j=-1;
  loadcheck=30;
  scroll=document.getElementsByClassName('c-element') as HTMLCollectionOf<HTMLElement>;
  @ViewChild('widgets') widgets:ElementRef;
  @ViewChild('widgetsContent') widgetsContent:ElementRef;

  newsParamTopic;
  gamenameSet;

  getparamtopic(){
    this.route.params.subscribe((param)=>{
      this.newsParamTopic=param.topic;
    });
    var title=this.newsParamTopic+" News from around the world";
    var metadesc="Get the latest"+ this.newsParamTopic+ " trends,news,updates from around the world on Sports Social from top sources";
    var metakeys="Latest "+ this.newsParamTopic+ " News, Breaking news "+ this.newsParamTopic+ ","+ this.newsParamTopic+ " Trends,Sports Social,"+ this.newsParamTopic+ " Updates,Headlines "+ this.newsParamTopic+ ","+ this.newsParamTopic+ " News Today";
   
    if(this.newsParamTopic === null){
           
    }
    else{
      this.titleservice.setTitle(title);
      this.metaservice.updateTag({name:'title',content:title});
      this.metaservice.updateTag({name:'keywords' , content:metakeys});
      this.metaservice.updateTag({name:'description',content:metadesc});
      this.metaservice.updateTag({property:'og:title',content:title});
      this.metaservice.updateTag({property:'og:keywords',content:metakeys});
      this.metaservice.updateTag({property:'og:description',content:metadesc});
    }
   
  }
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
  
    //this is how i interact between components
    this.getparamtopic();
    this.event.listentoroute().subscribe((topic:any) => {
      this.news=[];
      this.rnews=[];
      this.arr=[];
      this.temp=[];
      this.routechangestatus=true;
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
    this.getparamtopic();
    this.route.params.subscribe((param)=>{
      this.newsParamTopic=param.topic;
      this.titleservice.setTitle(this.newsParamTopic +" News from around the world");
      
      
    });

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
      this.show= true;
      var x;
      for (var i in body.news) {
        this.j=this.j+1;
        x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
        // x = x.replace(/T/g," at "); 
        this.rnews.push({
          recentnews: true,
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

  getsportwise(topic){
    this.tempnews=[]
    if(this.c===1){
      this.news=[];
    }
      this.getService.getsportnews(topic).subscribe(res=>{
          var body = JSON.parse(res._body);
          this.show=true;
          if(body.news.length === 0){
            this.randomrouteresponse();
          }
          var x;
          this.j=-1;
            this.newspool = body.news;
           for (const i in body.news) {
            this.j=this.j+1;
            x = this.time.ExactDate(Date.parse(body.news[i].insertedDate)/1000);
            // x = x.replace(/T/g," at "); 
            if(this.j === 0){
              this.tempnews.push({
                recentnews: false,
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
              recentnews: false,
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
              if(this.datastr === undefined || this.routechangestatus){
                this.mainnewshead = this.tempnews[0].title;
                this.mainnewstime = this.tempnews[0].timestamp;
                this.mainnewsimage = this.tempnews[0].image;
                this.mainnewsdesc = this.tempnews[0].desc;
                this.mainnewsurl = this.tempnews[0].url;
                this.mainnewssource = this.tempnews[0].source; 
              }
            }
            if(+i===this.loadcheck){
              break;
            }
          }
      });
      this.topscroll();
  }

  loadmore(){
    this.loadcheck=this.loadcheck+30;
    for (const i in this.newspool) {
      this.j=this.j+1;
      var x = this.time.ExactDate(Date.parse(this.newspool[i].insertedDate)/1000);
      // x = x.replace(/T/g," at "); 
      if(+i>this.loadcheck-30 && +i<this.loadcheck){
        this.news.push({
          recentnews: false,
            source: this.newspool[i].source,
            id:this.j,
            title:this.newspool[i].title,
            timestamp:x.substr(0,19),
            url: this.newspool[i].url,
            image: this.newspool[i].newsImage,
            desc: this.newspool[i].desc
        });
      }
    }
  }
    opennews(data){
      var id = data.id;
      this.newsstatus=true;
      this.mainnewshead = data.title;
      this.mainnewstime = data.timestamp;
      this.mainnewsimage = data.image;
      this.mainnewsdesc = data.desc;
      this.mainnewsurl = data.url;
      this.mainnewssource = data.source; 
      if(id < 5){
        if(this.firststatus){
          id=id-1;
        }
      if(!data.recentnews){
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
          console.log("this is tiemstamp:",this.tempnews[0].timestamp);
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
      this.topscroll();
    }

    topscroll(){
      window.scrollTo(0,0);
    }
  
}