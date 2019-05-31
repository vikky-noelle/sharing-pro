import { ActivatedRoute } from '@angular/router';
import { GetService } from './../shared/services/get.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  mnewstime;
  topic;
  rdore = document.getElementsByClassName('rdmore') as HTMLCollectionOf<HTMLElement>;
  ls = document.getElementsByClassName('rd') as HTMLCollectionOf<HTMLElement>;
  hide = document.getElementsByClassName('melement') as HTMLCollectionOf<HTMLElement>;
  constructor(
    private getService: GetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.topic = params['topic'];
    });
    this.getnews(this.topic);
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
          this.mnewshead = this.news[0].title;
          this.mnewstime = this.news[0].timestamp;
          this.mnewsimage = this.news[0].image;
          this.mnewsdesc = this.news[0].desc;
          this.mnewsurl = this.news[0].url;
          if(i==="5"){
            break;
          }
        }
    });
    }
    rdmore(){
      this.ls[0].style.display="none";
      this.hide[0].style.display="block";
      this.rdore[0].style.display="none";
    }
    opennews(id){
      this.mnewshead = this.news[id].title;
      this.mnewstime = this.news[id].timestamp;
      this.mnewsimage = this.news[id].image;
      this.mnewsdesc = this.news[id].desc;
      this.mnewsurl = this.news[id].url;
    }
}
