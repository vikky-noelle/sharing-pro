import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sports-social-teamprofile',
  templateUrl: './teamprofile.component.html',
  styleUrls: ['./teamprofile.component.css']
})
export class TeamprofileComponent implements OnInit {

  @Input() teamcaption:string;
  teamid = "611";
  backgroundimage;
  name;
  routename;
  profileimage;
  membercount;
  teamusername;
  location;
  fancount;
  media=[];
  captain=[];
  mantra=[];
  teamcategory;
  teamstatus;
  teamtype;
  teamtypestatus;
  gender;
  challenge="Open For Challenge";
  sports= [
    {id: 17,  title: 'Cricket'},
    {id: 23, title: 'Football'},
    {id: 6, title: 'Basketball'},
    {id: 5, title: 'Badminton'},
    {id: 29, title: 'Hockey'},
    {id: 36, title: 'Tennis'},
    {id: 46, title: 'Snooker'},
    {id: 56, title: 'Table Tennis'},
    {id: 60, title: 'Volleyball'}
  ];
  gamename;
  sideshell = document.getElementsByClassName('stick-div') as HTMLCollectionOf<HTMLElement>;
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  constructor(
    private route: ActivatedRoute,
    private PostService: PostService
  ) { }
  
  getFans(){
    var timestamp=Date.now();
    var page=1;
    this.PostService.getFan("119", this.teamid, timestamp, page).subscribe((res)=>{
      console.log(res);
    });
  }
  getMembers(){
    var timestamp=Date.now();
    timestamp = timestamp/1000;
    this.PostService.getMembers(this.teamid, "119", timestamp).subscribe((res)=>{
      console.log(res);
    });
  }
  getTeamData(){
    this.PostService.TeamProfile("99999",this.teamid).subscribe(
      (res)=>{
        this.teamcaption = res["Details"].CaptainUserName;
        this.backgroundimage =  res["Details"].Cover_Photo;
        this.profileimage = res["Details"].Profile_Photo;
        this.name = res["Details"].TeamName;
        this.membercount = res["Details"].Members;
        this.fancount = res["Details"].FanCount;
        this.teamusername = res["Details"].TeamUserName;
        this.location = res["Details"].location;
        this.captain = res["Details"].CaptainUserName;
        this.mantra = res["Details"].slogan;
        this.teamcategory = res["Details"].TeamCategory;
        switch(this.teamcategory){
          case -1:
          this.teamstatus = "Open For All";
          break;
          case 0:
          this.teamstatus = "Under 13";
          break;
          case 1:
          this.teamstatus = "Under 15";
          break;
          case 2:
          this.teamstatus = "Under 17";
          break;
          case 3:
          this.teamstatus = "Under 19";
          break;
          case 4:
          this.teamstatus = "Under 21";
          break;
          case 5:
          this.teamstatus = "Under 23";
          break;
          default:
          this.teamstatus = "None Selected";
                  
        }
        this.teamtype = res["Details"].TeamType;
        switch(this.teamtype){
          case -1:
          this.teamtypestatus = "Others";
          break;
          case 0:
          this.teamtypestatus = "School";
          break;
          case 1:
          this.teamtypestatus = "College";
          break;
          case 2:
          this.teamtypestatus = "Academy";
          break;
          case 3:
          this.teamtypestatus = "Organisation";
          break;
          default:
          this.teamstatus = "None Selected";      
        }
        if(res['Details'].openchallenge != 1){
          this.challenge = "Private"
        }
        if(res["Details"].Gender.toLowerCase() === "mix"){
          this.gender = "Mix ";
        }
        if(res["Details"].Gender.toLowerCase() === "male"){
          this.gender = "Men's ";
        }
        if(res["Details"].Gender.toLowerCase() === "female"){
          this.gender = "Women's ";
        }
        for(var i=0; i<this.sports.length;i++){
          if(this.sports[i].id === res["Details"].GameId){
            this.gamename = this.sports[i].title;
          }
        }
        console.log(res);
        for(var i =0; i<res["Images"].length; i++){
          this.media.push({
            url: res["Images"][i].Path
          });
        }
      });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("this is param ID of team",params);
      // this.teamid = params['teamid'];
      this.teamid = params.teamid;
      console.log(this.teamid);
  });
    this.route.params.subscribe(params => {
      this.routename = params.name;
  });
    this.getTeamData();
    this.getFans();
    this.getMembers();
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
      if(window.pageYOffset > 370){
      this.opensubheader[0].style.display="block";
      this.sideshell[0].style.display="block";
    }
    else{
      this.sideshell[0].style.display="none";
      this.opensubheader[0].style.display="none";
    }
  };

}
