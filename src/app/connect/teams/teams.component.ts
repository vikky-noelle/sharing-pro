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
  gifstatus=false;
  menulist=[];
  Age=[
    {id:13, title: "Under 13", status: false},
    {id:15, title: "Under 15", status: false},
    {id:17, title: "Under 17", status: false},
    {id:19, title: "Under 19", status: false},
    {id:21, title: "Under 21", status: false},
    {id:23, title: "Under 23", status: false}
  ];
  Gender=[
    {id:1, title: "Male", status: false},
    {id:2, title: "Female", status: false},
    {id:3, title: "All", status: false}
  ];
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
  sport = document.getElementsByClassName("sport") as HTMLCollectionOf<HTMLElement>;
  age = document.getElementsByClassName("age") as HTMLCollectionOf<HTMLElement>;
  gender = document.getElementsByClassName("gender") as HTMLCollectionOf<HTMLElement>;
 
  constructor(
    private postservice: PostService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.getconnectteams();
    this.menulist=this.sportlist;
  }
  // function to change filter menu
  one(){
    this.menulist=this.sportlist;
    this.sport[0].style.backgroundColor="white";
    this.age[0].style.backgroundColor="#e0e0e0";
    this.gender[0].style.backgroundColor="#e0e0e0";
  }
  two(){
    this.menulist=this.Age;
    this.sport[0].style.backgroundColor="#e0e0e0";
    this.age[0].style.backgroundColor="white";
    this.gender[0].style.backgroundColor="#e0e0e0";
  }
  three(){
    this.menulist=this.Gender;
    this.sport[0].style.backgroundColor="#e0e0e0";
    this.age[0].style.backgroundColor="#e0e0e0";
    this.gender[0].style.backgroundColor="white";
  
  }
    // applying filter
  applyfilter(){
    this.gifstatus=true;
    this.team=[];
    var clearstatus=true, sportname = null, agestatus=0, age=22, genderstatus;
    for(var i=0; i<this.sportlist.length; i++){
        if(this.sportlist[i].status == true){
          clearstatus=false;
          sportname = this.sportlist[i].title;    
        }
      }
    if(!clearstatus){
      for(var j=0; j<this.sportlist.length; j++){
        // filter service
        for(var k=0; k<this.Age.length;k++){
          if(this.Age[k].status == true){
            agestatus = 1;
            age = this.Age[k].id;
          }
        }
        for(var k=0; k<this.Gender.length;k++){
          if(this.Gender[k].status == true){
            genderstatus = this.Gender[k].title;
          }
        }
        this.postservice.getconnectteamsfilter(1, this.sportlist[j].title, agestatus, age, genderstatus).subscribe(res=>{
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
          this.gifstatus=false;
          console.log(this.team);
        });
      }
    }
    else{
      for(var j=0; j<this.sportlist.length; j++){
        // filter service

        // for all age
        if(this.sportlist[j].status == true){

          this.postservice.getconnectteamsfilter(0, this.sportlist[j].title, 0, 90, "ALL").subscribe(res=>{
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
            this.gifstatus=false;
            console.log(this.team);
          });
        }
      }
    }
    // if(this.team.length == 0){
    //   this.gifstatus = false;
    // }
    this.close();
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
       this.sportlist[i].status=true;
      }
      else{
        this.sportlist[i].status=false;
      }
    }
    for(var i=0; i<this.Age.length; i++){
      if(string == this.Age[i].title){
       this.Age[i].status=true;
      }
      else{
        this.Age[i].status=false;
      }
    }
    for(var i=0; i<this.Gender.length; i++){
      if(string == this.Gender[i].title){
       this.Gender[i].status=true;
      }
      else{
        this.Gender[i].status=false;
      }
    }

    // this.getconnectteams();
    // console.log(this.sportlist);
  }
  // clearing chkbox
  clearfilter(){
    for(var i=0; i<this.sportlist.length; i++){
      this.sportlist[i].status=false;
    }
    for(var i=0; i<this.Age.length; i++){
      this.Age[i].status=false;
    }
    for(var i=0; i<this.Gender.length; i++){
      this.Gender[i].status=false;
    }
  }
}
