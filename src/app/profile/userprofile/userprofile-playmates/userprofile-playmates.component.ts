import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { UserprofileComponent } from '../userprofile.component';

@Component({
  selector: 'sports-social-userprofile-playmates',
  templateUrl: './userprofile-playmates.component.html',
  styleUrls: ['./userprofile-playmates.component.css']
})
export class UserprofilePlaymatesComponent implements OnInit {

  date = Math.abs(Date.now());
  parentUserid;
  pageno;
  array=[];
  constructor(private postservice:PostService,
    private activatedroute:ActivatedRoute,
    private userprofilecmp:UserprofileComponent) { }

    getuserid(){
     this.parentUserid=this.userprofilecmp.userid;
    //  this.pageno= this.userprofilecmp.pageNo;
      console.log("this is paramid",this.parentUserid);
      console.log("this is pageNumber",this.pageno);
    }


  getplaymates(){
    for(var i=1;i<=3;i++){
      this.pageno=i;
      if(this.pageno==0){
        break;
      }
    this.postservice.UserProfielPlaymate(this.parentUserid,this.parentUserid,this.pageno,this.date).subscribe(
      res=>{
        console.log("response of playmates",res);
        for(const i in res)
        this.array.push({
          user_id:res[i].user_id,
          user_name:res[i].user_name,
          UniqueName:res[i].UniqueName,
          profile_image:res[i].profile_image,
          Gender:res[i].Gender,
          Age:res[i].Age,
          distance:res[i].distance,
          IsPlaymate:res[i].IsPlaymate,
          PlaymateCount:res[i].PlaymateCount,
          FanCount:res[i].FanCount,
          GameId:res[i].GameId,
          Start_Date:res[i].Start_Date,
          EventId:res[i].EventId
        });
        // console.log("this is response of userid",res[i].Age);
      });
    }
  }

  ngOnInit() {
    this.getuserid();
    this.getplaymates();
    console.log("thi is date",this.date);
  }

}
