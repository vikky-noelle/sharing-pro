import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './../../shared/services/post.service';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import 'rxjs/add/observable/interval';

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
  upcomingmatches=[];
  media=[];
  teams=[];
  matches=[];
  specificteam=[];
  localityid;
  slotdetails=[];
  address;
  crousalsingleimage;
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
  sideshellposition = document.getElementsByClassName('side-shell') as HTMLCollectionOf<HTMLElement>;
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  leftarrow = document.getElementsByClassName('larrow') as HTMLCollectionOf<HTMLElement>;
  rightarrow = document.getElementsByClassName('rarrow') as HTMLCollectionOf<HTMLElement>;
  showcrousal = document.getElementsByClassName('media-crousal') as HTMLCollectionOf<HTMLElement>;
  singleimage = document.getElementsByClassName('single-image') as HTMLCollectionOf<HTMLElement>;
  crousal = document.getElementsByClassName('crousal-element') as HTMLCollectionOf<HTMLElement>;
  
  openfan= document.getElementsByClassName('fanslist') as HTMLCollectionOf<HTMLAnchorElement>;
  openfollower=document.getElementsByClassName('followerlist') as HTMLCollectionOf<HTMLAnchorElement>;
  sub;
  count=0;

  @ViewChild('parent') parent:ElementRef;  
  @ViewChild('child') child:ElementRef;
  @ViewChild('slide') slide:ElementRef;  
  @ViewChild('show') images:ElementRef;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  sample(){
    this.sub = Observable.interval(3000)
    .subscribe((val) => { 
      if(this.count == this.media.length){
        for(var i=0; i< this.count; i++){
          console.log("loop working");
          this.slide.nativeElement.scrollLeft -=this.images.nativeElement.clientWidth;
        }
        this.count=0;
      }
      else{
        this.count=this.count+1;
        this.slide.nativeElement.scrollLeft +=this.images.nativeElement.clientWidth;
      }
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      this.localityid=params['id'];
    });
    this.getDetails();
    // this.getLocalityTeams();
    // this.getUpcomingMatches();
    window.addEventListener('scroll', this.scroll, true);
    this.sample();
  }
  // openteam(id){
  //   this.router.navigate(['localityprofile', this.sports[0]], {queryParams:{id: this.localityid}});
  // }
  lscroll(){
    this.parent.nativeElement.scrollLeft -=this.child.nativeElement.clientWidth;
  }
  rscroll(){
    this.parent.nativeElement.scrollLeft +=this.child.nativeElement.clientWidth;
  }
  // @HostListener('document:keyup', ['$event'])
  // handleDeleteKeyboardEvent(event: KeyboardEvent) {
  //   if(event.key === 'ArrowLeft')
  //   {
  //     this.lscroll()
  //   }
  //   if(event.key === 'ArrowRight')
  //   {
  //     this.rscroll()
  //   }
  //   if(event.keyCode === 27)
  //   {
  //     this.showcrousal[0].style.display="none";
  //   }
  // }
  scroll = (): void => {
    if(window.pageYOffset > 370){
    this.opensubheader[0].style.display="block";
    // this.sideshellposition[0].style.position="fixed";
    // this.sideshellposition[0].style.top="130px";
  }
  else{
    // this.sideshellposition[0].style.top="0";
    this.opensubheader[0].style.display="none";
    // this.sideshellposition[0].style.position="relative";
  }
};
openspecificsport(name){
  // console.log("working haha")
  name=name.toLowerCase();
  this.specificteam=[];
  for(var i=0; i < this.teams.length; i++){
    if(name == this.teams[i].gamename.toLowerCase()){
      this.specificteam.push(this.teams[i]);
    }
  }
  for(var i=0; i < this.upcomingmatches.length; i++){
    if(name == this.upcomingmatches[i].gamename.toLowerCase()){
      this.matches.push(this.upcomingmatches[i]);
    }
  }

}
imageopen(url){
  this.crousalsingleimage = url;
  this.showcrousal[0].style.display="block";
  this.crousal[0].style.display="none";
  this.leftarrow[0].style.display="none";
  this.rightarrow[0].style.display="none";
  this.singleimage[0].style.display="block";
}
opencrousal(){
  this.showcrousal[0].style.display="block";
  this.crousal[0].style.display="block";
  this.leftarrow[0].style.display="block";
  this.rightarrow[0].style.display="block";
  this.singleimage[0].style.display="none";
}
  getUpcomingMatches(){
    this.postService.getUpcomingMatches("119", this.localityid, 1564844406046, 1).subscribe((res : any[])=>{
      console.log(res);
      for(var i=0; i < res.length; i++){
        this.upcomingmatches.push({
          coverpic: res[i].image,
          userName: res[i].userName,
          gamename: res[i].gameName,
          Team1Pic: res[i].Team1Image,
          Team2Pic: res[i].Team2Image,
          Team1Name: res[i].Team1Name,
          Team2Name: res[i].Team2Name,
          Uniquename: res[i].UniqueName,
          scoreTeam1: res[i].scoreTeam1,
          scoreTeam2: res[i].scoreTeam2,
          JoineeCount: res[i].JoineeCount,
          WatchCount: res[i].WatchCount,
          PromoteCount: res[i].PromoteCount,
          CommentCount: res[i].CommentCount,
          upcoming: true,
          finished: false,
          Venue_Name: res[i].VenueName,
          gender: res[i].matchGender,
        });
      }
      for(var i=0; i < this.upcomingmatches.length; i++){
        console.log(this.sports[0]);
        if(this.sports[0].toLowerCase() == this.upcomingmatches[i].gamename.toLowerCase()){
          this.matches.push(this.upcomingmatches[i]);
          console.log("matched");
        }
      }
      console.log(this.specificteam);
    });
  }
  getLocalityTeams(){
    this.postService.getLocalityTeams(this.localityid).subscribe((res: any[]) => {
      console.log(res[0][1]);
      for(var i=0; i<res[0].length;i++){
        this.teams.push({
          fancount: res[0][i].FanCount,
          membercount: res[0][i].memberCount,
          bgimage: res[0][i].Cover_Photo,
          pfp: res[0][i].Profile_Photo,
          gameid: res[0][i].GameId,
          gamename: res[0][i].GameName,
          insertedDate: res[0][i].InsertedDate,
          istemp: res[0][i].IsTemp,
          Teamcategory: res[0][i].TeamCategory,
          teamid: res[0][i].TeamId,
          teamname: res[0][i].TeamName,
          teamtype: res[0][i].TeamType,
          teamuniquename: res[0][i].teamUniqueName
        });
      }
      for(var i=0; i < this.teams.length; i++){
        console.log(this.sports[0]);
        if(this.sports[0].toLowerCase() == this.teams[i].gamename.toLowerCase()){
          this.specificteam.push(this.teams[i]);
          console.log("matched");
        }
      }
      console.log(this.specificteam);
    });
  }
  getDetails(){
    this.postService.getLocalityDetails("119", this.localityid).subscribe(res => {
      // getting sports and changing the route
      for(var i=0; i< res["Sports"].length; i++){
        for(var j=0; j<this.sportlist.length; j++){
          if(res["Sports"][i].gameid === this.sportlist[j].id){
            this.sports.push(this.sportlist[j].title);
          }
        }
      }
      this.getLocalityTeams(); //called here because asynch
      this.getUpcomingMatches();

      console.log(this.sports[0]);
      if(this.sports[0] != undefined){
         this.router.navigate(['localityprofile', this.sports[0]], {queryParams:{id: this.localityid}});
      }
   
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
  openAppDownloadPopup() {
    this.router.navigate( [ { outlets: { 'AppDownload': ['PopUp'] }} ], { skipLocationChange: true });
  }
}
