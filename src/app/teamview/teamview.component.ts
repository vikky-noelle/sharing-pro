import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'sports-social-teamview',
  templateUrl: './teamview.component.html',
  styleUrls: ['./teamview.component.css']
})
export class TeamviewComponent implements OnInit {

  title="Create and Manage your Sports Team";
  keywords="Create New Team Sports Social,Sports Teams on Sports Social,My Sports Team Profile,Find a sports team,School Sports Team,Colleges Sports Team";
  description="To easily manage, find the new matches, new opponents around you just create a new team or join a team nearby";
  service = [];
  tvdata = [];
  mview: Number;
  constructor(private post:PostService,
    private titleservice:Title,
    private metaservice:Meta) {this.titleservice.setTitle(this.title);
      this.metaservice.updateTag({name:'title',content:this.title});
      this.metaservice.updateTag({name: 'keywords' , content:this.keywords});
      this.metaservice.updateTag({name:'description',content:this.description});
      this.metaservice.updateTag({property:'og:title',content:this.title});
      this.metaservice.updateTag({property:'og:keywords',content:this.keywords});
      this.metaservice.updateTag({property:'og:description',content:this.description}); }

  ngOnInit() {
  
    this.tmv();
    //mobile view 
    if(window.innerWidth <= 700) {
      this.mview = 0;
    }
    else {
      this.mview = 1;
    }
  }
  // anchor scroll
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  tmv() {
    this.post.Teamviewdata(this.service)
    .subscribe(
      (response) => {
      for(const i in response){
        this.tvdata.push(response[i]);
      }    
    },
    (error) => console.log(error)
    );
  }
}
