import { PostService } from './../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  team = [];
  filtermenubg = document.getElementsByClassName("filter-menu-bg") as HTMLCollectionOf<HTMLElement>;
  filtermenu = document.getElementsByClassName("filter-menu") as HTMLCollectionOf<HTMLElement>;

  constructor(
    private postservice: PostService
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
      for(const i in res["PopularOnSportsSocial"]){
        this.team.push({
          username: res["PopularOnSportsSocial"][i].UserName,
          uniquename: res["PopularOnSportsSocial"][i].Uniquename,
          pfp: res["PopularOnSportsSocial"][i].ProfilePhoto,
          sportsinterest: res["PopularOnSportsSocial"][i].SportsInterest,
          userid: res["PopularOnSportsSocial"][i].UserId,
          bg: null
        });
        if(+i==5){
          break;
        }
      }
      console.log(this.team);
    });
  }
  showfiltermenu(){
    console.log("working");
    this.filtermenubg[0].style.display="block";
    this.filtermenu[0].style.right="0";
  }
}
