import { PostService } from './../shared/services/post.service';
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
  temporarynews=[];
  c=0;
  j=-1;
  title="Sports News from around the world";
  description="Get the latest sports trends,news,updates from around the world on Sports Social from top sources";
  keywords="Latest Sports News, Breaking news Sports,Sports Trends,Sports Social,Sports Updates,Headlines Sports,Sports News Today";
   
  sportlist=[
    {id: 1, title: "Aerobics"},                 
    {id: 3, title: "Archery"},                  
    {id: 5, title: "Badminton"},                
    {id: 6, title: "Basketball"},               
    {id: 7, title: "Biking"},                   
    {id: 9, title: "Bowling"},                   
    {id: 10, title: "Boxing"},                       
    {id: 12, title: "Call of Duty"},             
    {id: 14, title: "Carrom"},                         
    {id: 15, title: "Chess"},                          
    {id: 16, title: "Counter Strike"},           
    {id: 17, title: "Cricket"},                         
    {id: 18, title: "Cycling"},                         
    {id: 21, title: "Fifa"},           
    {id: 22, title: "Fishing"},                         
    {id: 23, title: "Football"},                       
    {id: 24, title: "Golf"},                              
    {id: 25, title: "Gym"},                     
    {id: 26, title: "Gymnastics"},                   
    {id: 27, title: "Handball"},                      
    {id: 29, title: "Hockey"},                           
    {id: 30, title: "Horse Riding"},             
    {id: 33, title: "Kabbadi"},                        
    {id: 34, title: "Kho Kho"},                         
    {id: 35, title: "Laser Tag"},                     
    {id: 36, title: "Lawn Tennis"},                      
    {id: 37, title: "Long Driving"},                    
    {id: 39, title: "Martial Arts"},             
    {id: 42, title: "NFS"},                      
    {id: 43, title: "Paintball"},                     
    {id: 45, title: "Poker"},                             
    {id: 46, title: "Snooker"},                     
    {id: 48, title: "Touch Rugby"},                 
    {id: 49, title: "Running"},                         
    {id: 50, title: "Shooting"},                    
    {id: 51, title: "Skate Boarding"},              
    {id: 52, title: "Sky Diving"},                
    {id: 53, title: "Squash"},        
    {id: 54, title: "Surfing"},                         
    {id: 55, title: "Swimming"},               
    {id: 56, title: "Table Tennis"},               
    {id: 57, title: "Taekwondo"},                  
    {id: 58, title: "Teen Patti"},                   
    {id: 59, title: "Trekking"},      
    {id: 60, title: "VolleyBall"},                   
    {id: 62, title: "WeightLifting"},     
    {id: 64, title: "Wrestling"},                     
    {id: 65, title: "Yoga"} 
  ];

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
  
  openspecificnews(feed){
    console.log(feed);
    // for(var i=0; i<this.news.length;i++){
    //   for(var j=0; j<this.news[i]["news"].length;j++){
    //     console.log(this.news[i]["news"][j]);
    //   }
    // }
    this._eventemiter.userToEdit = feed;
    feed.game=feed.game.replace(/ /g,"-");
    this.router.navigate(['/news', feed.game])  
  }
  ngOnInit() {
    this.getsportnewsheader('');
    this.getsportwisenews(); 
  }
  randomrouteresponse(){
       this.router.navigate(['/news']);
  }

  getsportwisenews(){
    var topic="";
    for(var i=0; i<this.sportlist.length;i++){
      topic = this.sportlist[i].title.toLowerCase();
      this.getService.getsportnews(topic).subscribe(res=>{
        var body = JSON.parse(res._body);
        // console.log(body.news);
        this.temporarynews=[];
        var x;
        this.j=this.j+1;
        if(body.news.length > 0){
          for(var j=0; j<6; j++){
            x = this.time.ExactDate(Date.parse(body.news[j].insertedDate)/1000);
            x = x.replace(/T/g," at "); 
            this.temporarynews.push({
              id: j,
              source: body.news[j].source,
              game: body.news[j].gameName,
              title:body.news[j].title,
              timestamp:x.substr(0,19),
              url: body.news[j].url,
              image: body.news[j].newsImage,
              desc: body.news[j].desc
            });

          }
          console.log(this.temporarynews);
          console.log(i);
          this.news.push({
            gamename: this.temporarynews[0].game,
            news: this.temporarynews
          });
        }
        });
    }
    console.log(this.news);
  }
  
  getsportnewsheader(topic){
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
          for(var i=5; i<9; i++){
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
        });
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
