import { ActivatedRoute } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EventEmiterService } from '../shared/services/event.emiter.service';

@Component({
  selector: 'sports-social-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {
  
  news=[];
  rnews=[];
  mnewshead;
  mnewsimage;
  mnewsdesc;
  mnewsurl;
  datastr;
  mnewstime;
  topic;
  j=-1;
  constructor(
    private _eventemiter: EventEmiterService,
    private getService: GetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topic = params['topic'];
    });
    this.getnews(this.topic);
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
        x = body.news[i].insertedDate;
        x = x.replace(/T/g," at "); 
        this.rnews.push({
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
        for (const i in body.news) {
          this.j=this.j+1;
          x = body.news[i].insertedDate;
          x = x.replace(/T/g," at "); 
          this.news.push({
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
}
