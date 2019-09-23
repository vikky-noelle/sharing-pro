import { ActivatedRoute } from '@angular/router';
import { PostService } from './../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  arraypool; //this is used to store all the data from the api in connect for filters
  team = [];
  filtermenubg = document.getElementsByClassName("filter-menu-bg") as HTMLCollectionOf<HTMLElement>;
  filtermenu = document.getElementsByClassName("filter-menu") as HTMLCollectionOf<HTMLElement>;

  constructor(
    private postservice: PostService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.getconnectteams();
  }
  getconnectteamsfilter(){
    this.postservice.getconnectteamsfilter(0, "Basketball", 0, 90, "ALL").subscribe(res=>{
      console.log(res);
      for(const i in res){
        this.team.push({
          username: res[i].UserName,
          uniquename: res[i].Uniquename,
          pfp: res[i].ProfilePhoto,
          sportsinterest: res[i].SportsInterest,
          userid: res[i].UserId,
          bg: null
        });
      }
      console.log(this.team);
    });
  }
  getconnectteams(){
    this.postservice.getconnectteams().subscribe(res=>{
      console.log(res["PopularOnSportsSocial"]);
      this.arraypool = res;
      this.initdata();
    });
  }
  initdata(){
    this.team = [];
    console.log("working");
    var url;
    this.route.params.subscribe(params=>{
      url = params['filter'];
    });
    console.log(url);
    if(url == "Most_Popular"){
      url = "PopularOnSportsSocial";
      console.log("weird");
    }
    for(const i in this.arraypool[url]){
      this.team.push({
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
    console.log(this.team);
  }
  showfiltermenu(){
    console.log("working");
    this.filtermenubg[0].style.display="block";
    this.filtermenu[0].style.right="0";
  }
  close(){
    console.log("working");
    this.filtermenubg[0].style.display="none";
    this.filtermenu[0].style.right="-1000px";
  }
}
