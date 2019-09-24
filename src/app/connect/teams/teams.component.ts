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
  sportlist=[
    {id: 1, title: "Aerobics", status:false},                 
    {id: 3, title: "Archery", status:false},                  
    {id: 5, title: "Badminton", status:false},                
    {id: 6, title: "Basketball", status:false},               
    {id: 7, title: "Biking", status:false},                   
    {id: 9, title: "Bowling", status:false},                   
    {id: 10, title: "Boxing", status:false},                       
    {id: 12, title: "Call of Duty", status:false},             
    {id: 14, title: "Carrom", status:false},                         
    {id: 15, title: "Chess", status:false},                          
    {id: 16, title: "Counter Strike", status:false},           
    {id: 17, title: "Cricket", status:false},                         
    {id: 18, title: "Cycling", status:false},                         
    {id: 21, title: "Fifa", status:false},           
    {id: 22, title: "Fishing", status:false},                         
    {id: 23, title: "Football", status:false},                       
    {id: 24, title: "Golf", status:false},                              
    {id: 25, title: "Gym", status:false},                     
    {id: 26, title: "Gymnastics", status:false},                   
    {id: 27, title: "Handball", status:false},                      
    {id: 29, title: "Hockey", status:false},                           
    {id: 30, title: "Horse Riding", status:false},             
    {id: 33, title: "Kabbadi", status:false},                        
    {id: 34, title: "Kho Kho", status:false},                         
    {id: 35, title: "Laser Tag", status:false},                     
    {id: 36, title: "Lawn Tennis", status:false},                      
    {id: 37, title: "Long Driving", status:false},                    
    {id: 39, title: "Martial Arts", status:false},             
    {id: 42, title: "NFS", status:false},                      
    {id: 43, title: "Paintball", status:false},                     
    {id: 45, title: "Poker", status:false},                             
    {id: 46, title: "Snooker", status:false},                     
    {id: 48, title: "Touch Rugby", status:false},                 
    {id: 49, title: "Running", status:false},                         
    {id: 50, title: "Shooting", status:false},                    
    {id: 51, title: "Skate Boarding", status:false},              
    {id: 52, title: "Sky Diving", status:false},                
    {id: 53, title: "Squash", status:false},        
    {id: 54, title: "Surfing", status:false},                         
    {id: 55, title: "Swimming", status:false},               
    {id: 56, title: "Table Tennis", status:false},               
    {id: 57, title: "Taekwondo", status:false},                  
    {id: 58, title: "Teen Patti", status:false},                   
    {id: 59, title: "Trekking", status:false},      
    {id: 60, title: "VolleyBall", status:false},                   
    {id: 62, title: "WeightLifting", status:false},     
    {id: 64, title: "Wrestling", status:false},                     
    {id: 65, title: "Yoga", status:false} 
  ];

  filtermenubg = document.getElementsByClassName("filter-menu-bg") as HTMLCollectionOf<HTMLElement>;
  filtermenu = document.getElementsByClassName("filter-menu") as HTMLCollectionOf<HTMLElement>;
  clear = document.getElementsByClassName("input-chkbox") as HTMLCollectionOf<HTMLElement>;
 
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
  // showing and hiding the filter menu
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
  // checkbox check
  checkbox(string){
    console.log("chck working");
    for(var i=0; i<this.sportlist.length; i++){
      if(string == this.sportlist[i].title){
        if(this.sportlist[i].status == false){
          this.sportlist[i].status = true;
        }
        else{
          this.sportlist[i].status = false;
        }
      }
    }
    // console.log(this.sportlist);
  }
  // clearing chkbox
  clearfilter(){
    for(var i=0; i<this.sportlist.length; i++){
      
    }
  }
}
