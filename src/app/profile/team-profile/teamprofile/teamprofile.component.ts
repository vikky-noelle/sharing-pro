import { PostService } from './../../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-teamprofile',
  templateUrl: './teamprofile.component.html',
  styleUrls: ['./teamprofile.component.css']
})
export class TeamprofileComponent implements OnInit {
  teamid = "611";
  backgroundimage;
  name;
  profileimage;
  membercount;
  teamusername;
  location;
  fancount;
  media=[];
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private PostService: PostService
  ) { }
  
  getTeamData(){
    console.log("working");
    this.PostService.TeamProfile("99999",this.teamid).subscribe(
      (res)=>{
        this.backgroundimage =  res["Details"].Cover_Photo;
        this.profileimage = res["Details"].Profile_Photo;
        this.name = res["Details"].TeamName;
        this.membercount = res["Details"].Members;
        this.fancount = res["Details"].FanCount;
        this.teamusername = res["Details"].TeamUserName;
        this.location = res["Details"].location;
        console.log(res);
        for(var i =0; i<res["Images"].length; i++){
          this.media.push({
            url: res["Images"][i].Path
          });
        }
      });
  }
  ngOnInit() {
    this.getTeamData();
    window.addEventListener('scroll', this.scroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
      if(window.pageYOffset > 370){
      this.opensubheader[0].style.display="block";
    }
    else{
      this.opensubheader[0].style.display="none";
    }
  };

}
