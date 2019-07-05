import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sports-social-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    private postservice:PostService,
    private activatedroute:ActivatedRoute) { }

  date = new Date();
  userid;
  pageNo;
  array=[];
  mediaArr=[];
  Instutionresult;
  opensubheader = document.getElementsByClassName('sub-header') as HTMLCollectionOf<HTMLElement>;


  getUserId(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.userid= param.MatchStarterId;
        }
      );
  }

  getUserDetails(){
    for(var i=0;i<20;i++){
      this.pageNo=i;
    }
    this.postservice.UserProfile(this.userid,this.userid,this.pageNo,this.date).subscribe(
      (res)=>{
        
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
          // console.log("this is typeinst",this.Instutionresult);

          this.array.push({
            FirstName:res["UserData"][i].FirstName,
            LastName:res["UserData"][i].LastName,
            UniqueName:res["UserData"][i].UniqueName,
            Gender:res["UserData"][i].Gender,
            DateofBirth:agecount,
            profile_image:res["UserData"][i].profile_image,
            coverpic:res["UserData"][i].coverpic,
            Fancount:res["UserData"][i].Fancount,
            FollowingCount:res["UserData"][i].FollowingCount,
            City:res["UserData"][i].City,
            Academy:res["UserData"][i].Academy,
            TypeofInstn:this.Instutionresult,
            InstnName:res["UserData"][i].InstnName
          });
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
          console.log("thi is paath of image",res["Images"][i].Path);
        }
        
      }
    )
  }

  ngOnInit() {
    this.getUserId();
    this.getUserDetails();
    window.addEventListener('scroll', this.scroll, true);
    
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  scroll = (): void => {
    console.log("is it owrking?");
    if(window.pageYOffset > 370){
      this.opensubheader[0].style.display="block";
    }
    else{
      this.opensubheader[0].style.display="none";
    }
  
  };

}
