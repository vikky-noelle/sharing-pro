import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/services/post.service';

@Component({
  selector: 'sports-social-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.css']
})
export class LocalityComponent implements OnInit {

  arraypool;
  locality=[];
 
  constructor(
    private postservice: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getconnectlocality();
  }
  getconnectlocality(){
    this.postservice.getconnectteams().subscribe(res=>{
      console.log(res["PopularOnSportsSocial"]);
      this.arraypool = res;
      this.initdata();
    });
  }
  initdata(){
    this.locality = [];
    console.log("working");
    var url;
    this.route.params.subscribe(params=>{
      url = params['filter'];
    });
    console.log(url);
    if(url == "Most_Popular"){
      url = "PopularOnSportsSocial";
      console.log("incorrect output");
    }
    for(const i in this.arraypool[url]){
      this.locality.push({
        username: this.arraypool[url][i].UserName,
        uniquename: this.arraypool[url][i].Uniquename,
        pfp: this.arraypool[url][i].ProfilePhoto,
        sportsinterest: this.arraypool[url][i].SportsInterest,
        userid: this.arraypool[url][i].UserId,
        bg: null
      });
      if(+i==5){
        break;
      }
    }
    console.log(this.locality);
  }
}
