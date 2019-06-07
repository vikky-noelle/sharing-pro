import { PostService } from './../shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-localitypage',
  templateUrl: './localitypage.component.html',
  styleUrls: ['./localitypage.component.css']
})
export class LocalitypageComponent implements OnInit {
  
  mview;
  service=[];
  lvdata = [];
  photo;
  constructor(private post:PostService) { }

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
