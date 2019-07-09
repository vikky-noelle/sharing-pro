import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports-social-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {


  FirstName;
  LastName;
  UniqueName;
  Gender;
  DateofBirth;
  profile_image;
  coverpic;
  Fancount;
  FollowingCount;            
  City;
  Academy;
  TypeofInstn;
  InstnName;
  followerstab = document.getElementsByClassName('followers') as HTMLCollectionOf<HTMLElement>;
  sideshellposition = document.getElementsByClassName('side-shell') as HTMLCollectionOf<HTMLElement>;
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;
  
  constructor(
    private postservice:PostService,
    private activatedroute:ActivatedRoute) { }

  date = new Date();
  @Input() userid;
  @Input() pageNo;
  @Input() public array=[];
  mediaArr=[];
  Instutionresult;
  show:boolean=false;


  getUserId(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.userid= param.MatchStarterId;
        }
      );
  }

  getUserDetails(){
    for(var i=1;i<=10;i++){
      this.pageNo=i;
    }
    
    this.postservice.UserProfile(this.userid,this.userid,this.pageNo,this.date).subscribe(
      (res)=>{
        this.show=true;
        for(var i=0;i<res["UserData"].length;i++){

          /** Birthdate calculate*/
          var bdate= res["UserData"][i].DateofBirth;
          var bdateSubStr = new String(bdate).slice(0,4);
          var bdateIntiger =  parseInt(bdateSubStr)-1970;
          let timeDiff = Math.abs(Date.now() - bdateIntiger);
          var agecount = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25)-bdateIntiger;
          /**Institution rendering */
          var typeinst = res["UserData"][i].TypeofInstn;
          
          if(typeinst == 1){
              this.Instutionresult = "Student at" +res["UserData"][i].InstnName;
          }
          else if(typeinst ==2){
             this.Instutionresult = "Student at " + res["UserData"][i].InstnName;
          }
          else if(typeinst ==3){
            this.Instutionresult = "Working at " + res["UserData"][i].InstnName;
          }

  
            this.FirstName=res["UserData"][i].FirstName,
            this.LastName=res["UserData"][i].LastName,
            this.UniqueName=res["UserData"][i].UniqueName,
            this.Gender=res["UserData"][i].Gender,
            this.DateofBirth=agecount,
            this.profile_image=res["UserData"][i].profile_image,
            this.coverpic=res["UserData"][i].coverpic,
            this.Fancount=res["UserData"][i].Fancount,
            this.FollowingCount=res["UserData"][i].FollowingCount,
            this.City=res["UserData"][i].City,
            this.Academy=res["UserData"][i].Academy,
            this.TypeofInstn=this.Instutionresult,
            this.InstnName=res["UserData"][i].InstnName
        }

        /*End of Userdata loop */

        for (var i=0 ;i<res["Images"].length;i++){
          this.mediaArr.push({
            imageId:res["Images"][i].imageId,
            Path:res["Images"][i].Path,
            likecount:res["Images"][i].likecount,
            commentcount:res["Images"][i].commentcount,
            isliked:res["Images"][i].isliked,
            text:res["Images"][i].text,
            UserId:res["Images"][i].UserId,
            profile_photo:res["Images"][i].profile_photo,
            User_Name:res["Images"][i].User_Name
          });
        }
      });
  }

  ngOnInit() {
    this.getUserId();
    this.getUserDetails();
    this.getpastmatches();
    window.addEventListener('scroll', this.scroll, true);
    
  }
  getpastmatches(){
    var date= Math.floor(Date.now() / 1000);
    var pageno, statusnumber;
    // for(var i=1;i<2;i++){
      pageno=1;
      // statusnumber = i;
      // i=0;
    this.postservice.UsersParticularMatches(this.userid,this.userid,pageno,date).subscribe(
      (res)=>{
        console.log(res["Past"].length);
        
          for(var j=0;j<res["Past"].length;j++){
            this.array.push({
              finished: true,
              upcoming: false,
              Username:res["Past"][j].Username,
              Eventid:res["Past"][j].Eventid,
              Gamename:res["Past"][j].Gamename,
              EventText:res["Past"][j].EventText,
              // profile_image:res["Past"][j].profile_image,
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
              scoreTeam1:res["Past"][j].scoreTeam1==null || res["Past"][j].scoreTeam2==null?'':res["Past"][j].scoreTeam1 + ' - ',
              scoreTeam2:res["Past"][j].scoreTeam2==null || res["Past"][j].scoreTeam1==null?'VS':res["Past"][j].scoreTeam2,
              matchGender:res["Past"][j].matchGender,
              profile_Photo_path:res["Past"][j].profile_Photo_path,
            });
            // console.log("this username",res["Past"][j].Eventid);
          }
      }
    )
    // }
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    if(window.pageYOffset > 370){
    this.opensubheader[0].style.display="block";
    this.followerstab[0].style.display="none";
    this.sideshellposition[0].style.position="fixed";
    this.sideshellposition[0].style.top="130px";
  }
  else{
    this.sideshellposition[0].style.top="0";
    this.followerstab[0].style.display="block";
    this.opensubheader[0].style.display="none";
    this.sideshellposition[0].style.position="relative";
  }
};
}
