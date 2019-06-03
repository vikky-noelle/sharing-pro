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
  mnewshead;
  mnewsimage;
  mnewsdesc;
  mnewsurl;
  datastr;
  mnewstime;
  topic;
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
    this.datastr=this._eventemiter.userToEdit;
    if(this.datastr !== undefined){
    this.mnewshead = this.datastr.title;
    this.mnewstime = this.datastr.timestamp;
    this.mnewsimage = this.datastr.image;
    this.mnewsdesc = this.datastr.desc;
    this.mnewsurl = this.datastr.url;
    }
  }
  getnews(topic){
    this.getService.getsportnews(topic).subscribe(res=>{
        var body = JSON.parse(res._body);
        this.news=[];
        var x;
        for (const i in body.news) {
          x = body.news[i].insertedDate;
          x = x.replace(/T/g," at "); 
          this.news.push({
            id:i,
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
          if(i==="5"){
            break;
          }
        }
    });
    }
    opennews(id){
      this.mnewshead = this.news[id].title;
      this.mnewstime = this.news[id].timestamp;
      this.mnewsimage = this.news[id].image;
      this.mnewsdesc = this.news[id].desc;
      this.mnewsurl = this.news[id].url;
    }
}
