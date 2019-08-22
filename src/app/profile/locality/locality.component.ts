import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'sports-social-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.css']
})
export class LocalityComponent implements OnInit {


  venuename;
  venuetype;
  ownername;
  sports=[];
  media=[];
  slotdetails=[];
  address;
  profileimage;
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
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDetails();
    this.getLocalityTeams();
    this.getUpcomingMatches();
  }
  // getUpcomingMatches(){
  //   this.PostService.getUpcomingMatches(119, 844, 1564844406046, 1).subscribe(res=>{
  //     console.log(res);
  //     // for(var i = 0; i < res.length)
  //   });
  // }
  getUpcomingMatches(){
    this.postService.getUpcomingMatches(844, 1564844406046,1, 119).subscribe(res=>{
      console.log("gyggg",res);
      // for(var i = 0; i < res.length)
    });
  }
  getLocalityTeams(){
    this.postService.getLocalityTeams("11").subscribe(res => {
      console.log(res);
    });
  }
  getDetails(){
    // console.log(this.sportlist);
    this.postService.getLocalityDetails("119", "11").subscribe(res => {
      // console.log(res);
      // getting sports and changing the route
      for(var i=0; i< res["Sports"].length; i++){
        for(var j=0; j<this.sportlist.length; j++){
          // console.log(this.sportlist[j].title);
          if(res["Sports"][i].gameid === this.sportlist[j].id){
            this.sports.push(this.sportlist[j].title);
          }
        }
      }
     // this.router.navigate(['localityprofile', this.sports[0]]);
   
      // slot details
      for(var i=0; i < res["SlotDetails"].length; i++){
        res["SlotDetails"][i].Day = res["SlotDetails"][i].Day.replace(/"/g, "")
        this.slotdetails.push(res["SlotDetails"][i]);
      }
      // gallery
      for(var i=0; i < res["Images"].length; i++){
        this.media.push({
          url: res["Images"][i].Path
        });
      }
      // console.log(this.media);
      this.venuename = res["Venue"][0].Venue_Name;
      this.ownername = res["Venue"][0].User_Name;
      this.address = res["Venue"][0].Address;
      this.profileimage = res["Venue"][0].profile_image;
      switch(res["Venue"][0].Category){
        case 0: this.venuetype = "School";
        break;
        case 1: this.venuetype = "College";
        break;
        case 2: this.venuetype = "Academy";
        break;
        case 3: this.venuetype = "Society";
        break;
        case 4: this.venuetype = "Complex";
        break;
        case 5: this.venuetype = "Organisatiom";
        break;
        case 6: this.venuetype = "Private";
        break;
        default: this.venuetype = "Unknown";
      }
  });
  }
}
