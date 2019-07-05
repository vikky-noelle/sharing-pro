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


  getUserId(){
      this.activatedroute.params.subscribe(
        (param)=>{
          this.userid= param.userid;
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
          this.array.push({
            FirstName:res["UserData"][i].FirstName,
            LastName:res["UserData"][i].LastName,
            UniqueName:res["UserData"][i].UniqueName,
            Gender:res["UserData"][i].Gender,
            DateofBirth:res["UserData"][i].DateofBirth,
            profile_image:res["UserData"][i].profile_image,
            coverpic:res["UserData"][i].coverpic,
            Fancount:res["UserData"][i].Fancount,
            FollowingCount:res["UserData"][i].FollowingCount,
            City:res["UserData"][i].City,
            Academy:res["UserData"][i].Academy
          });
          var bdate= res["UserData"][i].DateofBirth;
          let timeDiff = Math.abs(Date.now() - bdate);
          let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
          console.log("Age",age);
        }
        
      }
    )

  }

  ngOnInit() {
    this.getUserId();
    this.getUserDetails();
    
  }

}
