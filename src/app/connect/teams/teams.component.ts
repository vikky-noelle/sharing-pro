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
  sportlist=[
    {id: 1, title: "Aerobics"},                 
    {id: 3, title: "Archery"},                  
    {id: 5, title: "Badminton"},                
    {id: 6, title: "Basketball"},               
    {id: 7, title: "Biking"},                   
    {id: 9, title: "Bowling"},                   
    {id: 10, title: "Boxing"},                       
    {id: 12, title: "Call of Duty"},             
    {id: 14, title: "Carrom"},                         
    {id: 15, title: "Chess"},                          
    {id: 16, title: "Counter Strike"},           
    {id: 17, title: "Cricket"},                         
    {id: 18, title: "Cycling"},                         
    {id: 21, title: "Fifa"},           
    {id: 22, title: "Fishing"},                         
    {id: 23, title: "Football"},                       
    {id: 24, title: "Golf"},                              
    {id: 25, title: "Gym"},                     
    {id: 26, title: "Gymnastics"},                   
    {id: 27, title: "Handball"},                      
    {id: 29, title: "Hockey"},                           
    {id: 30, title: "Horse Riding"},             
    {id: 33, title: "Kabbadi"},                        
    {id: 34, title: "Kho Kho"},                         
    {id: 35, title: "Laser Tag"},                     
    {id: 36, title: "Lawn Tennis"},                      
    {id: 37, title: "Long Driving"},                    
    {id: 39, title: "Martial Arts"},             
    {id: 42, title: "NFS"},                      
    {id: 43, title: "Paintball"},                     
    {id: 45, title: "Poker"},                             
    {id: 46, title: "Snooker"},                     
    {id: 48, title: "Touch Rugby"},                 
    {id: 49, title: "Running"},                         
    {id: 50, title: "Shooting"},                    
    {id: 51, title: "Skate Boarding"},              
    {id: 52, title: "Sky Diving"},                
    {id: 53, title: "Squash"},        
    {id: 54, title: "Surfing"},                         
    {id: 55, title: "Swimming"},               
    {id: 56, title: "Table Tennis"},               
    {id: 57, title: "Taekwondo"},                  
    {id: 58, title: "Teen Patti"},                   
    {id: 59, title: "Trekking"},      
    {id: 60, title: "VolleyBall"},                   
    {id: 62, title: "WeightLifting"},     
    {id: 64, title: "Wrestling"},                     
    {id: 65, title: "Yoga"} 
  ];

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
