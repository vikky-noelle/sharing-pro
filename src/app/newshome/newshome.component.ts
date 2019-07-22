import { InteractionService } from './../shared/services/interaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';
import { TimeService } from '../shared/services/time.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-newshome',
  templateUrl: './newshome.component.html',
  styleUrls: ['./newshome.component.css']
})
export class NewshomeComponent implements OnInit {

  news=[];
  crousallist=[];
  crousalitem=[];
  c=0;
  j=-1;
  title="Sports News from around the world";
  description="Get the latest sports trends,news,updates from around the world on Sports Social from top sources";
  keywords="Latest Sports News, Breaking news Sports,Sports Trends,Sports Social,Sports Updates,Headlines Sports,Sports News Today";
 
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
    // this is how i interact between components
     
  }

  ngOnInit() {
    this.getallsportnews(''); 
  }
  randomrouteresponse(){
       this.router.navigate(['/news']);
  }

  
  
  getallsportnews(topic){
      this.getService.getsportnews(topic).subscribe(res=>{
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
          for(var i=5; i<8; i++){
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
          for(var i=8; i<20; i++){
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
        });
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
