import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'sports-social-teamview',
  templateUrl: './teamview.component.html',
  styleUrls: ['./teamview.component.css']
})
export class TeamviewComponent implements OnInit {
  
  service = [];
  tvdata = [];
  mview: Number;
  constructor(private post:PostService) { }

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
