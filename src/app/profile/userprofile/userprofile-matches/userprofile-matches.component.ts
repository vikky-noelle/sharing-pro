import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { UserprofileComponent } from '../userprofile.component';

@Component({
  selector: 'sports-social-userprofile-matches',
  templateUrl: './userprofile-matches.component.html',
  styleUrls: ['./userprofile-matches.component.css']
})
export class UserprofileMatchesComponent implements OnInit {

  paramUserId;
  date= Math.floor(Date.now() / 1000);
  pageno;
  array=[];
  constructor(
    private postservice:PostService,
    private userprofilecomponent:UserprofileComponent) { }

    getUserId(){
      this.paramUserId=this.userprofilecomponent.userid;
    }
    getdataOfUserMatches(){
      for(var i=0;i<2;i++){
        this.pageno=i;
      this.postservice.UsersParticularMatches(this.paramUserId,this.paramUserId,this.pageno,this.date).subscribe(
        (res)=>{
            for(var j=0;j<res["Past"].length;j++){
              this.array.push({
                Username:res["Past"][j].Username,
                Eventid:res["Past"][j].Eventid,
                Gamename:res["Past"][j].Gamename,
                EventText:res["Past"][j].EventText,
                profile_image:res["Past"][j].profile_image,
                event_image:res["Past"][j].event_image,
                InsertedDate:res["Past"][j].InsertedDate,
                CommentCount:res["Past"][j].CommentCount,
                PromoteCount:res["Past"][j].PromoteCount,
                JoineeCount:res["Past"][j].JoineeCount,
                WatchCount:res["Past"][j].WatchCount,
                StartDateTime:res["Past"][j].StartDateTime,
                MatchStarterName:res["Past"][j].MatchStarterName,
                MatchStarterUniqueName:res["Past"][j].MatchStarterUniqueName,
                MatchStarterPhoto:res["Past"][j].MatchStarterPhoto,
                venue_name:res["Past"][j].venue_name,
                Team1Name:res["Past"][j].Team2Name,
                Team2Name:res["Past"][j].Team2Name,
                scoreTeam1:res["Past"][j].scoreTeam1,
                scoreTeam2:res["Past"][j].scoreTeam2,
                matchGender:res["Past"][j].matchGender,
                profile_Photo_path:res["Past"][j].profile_Photo_path,
              });
              console.log("this username",res["Past"][j].Eventid);
            }
        }
      )
      }
    }

  ngOnInit() {
    this.getUserId();
    this.getdataOfUserMatches();
  }

}
