import { PostService } from './../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-localitypage',
  templateUrl: './localitypage.component.html',
  styleUrls: ['./localitypage.component.css']
})
export class LocalitypageComponent implements OnInit {
  
  title="Stay Connected to your locality ";
  keywords="Find a playground,Sports Venues nearby,Sports Arena nearby,Sports playgrounds nearby, Sports Locality";
  description="Get the real time updates and information about what people playing around you and where, Just visit Sports Social Locality";
  mview;
  service=[];
  lvdata = [];
  photo;
  constructor(private post:PostService,
    private titleservice:Title,
    private metaservice:Meta) { 
  this.titleservice.setTitle(this.title);
  this.metaservice.updateTag({name:'title',content:this.title});
  this.metaservice.updateTag({name: 'keywords' , content:this.keywords});
  this.metaservice.updateTag({name:'description',content:this.description});
  this.metaservice.updateTag({property:'og:title',content:this.title});
  this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
  this.metaservice.updateTag({property:'og:description',content:this.description});
    }

  ngOnInit() {
  
    this.lmv();
    if(window.innerWidth <= 700) {
      this.mview = 0;
    }
    else {
      this.mview = 1;
    }
  }

  lmv() {
    this.post.Localityviewdata(this.service)
    .subscribe(
      (response) => {
      for(const i in response){
        this.lvdata.push(response[i]);
        
      }  
    },
    (error) => console.log(error)
    );
  }

}
