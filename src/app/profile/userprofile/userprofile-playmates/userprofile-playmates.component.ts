import { InteractionService } from './../../../shared/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  show:boolean=false;
  array=[];
  constructor(private postservice:PostService,
    private activatedroute:ActivatedRoute,
    private userprofilecmp:UserprofileComponent,
    private event: InteractionService,
    private router: Router
    ) { }

    getuserid(){
     this.parentUserid=this.userprofilecmp.userid;
    }

  changeroute(id){
    console.log("working" + id);
    this.event.routechangefunction(id);
    this.router.navigate(['/userprofile', id, 'about']);
  }
  getplaymates(){
    for(var i=1;i<=10;i++){
      this.pageno=i;
      if(this.pageno==0){
        break;
      }
    this.postservice.UserProfielPlaymate(this.parentUserid,this.parentUserid,this.pageno,this.date).subscribe(
      res=>{
        this.show=true;  
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
        
      });
    }
  }

  ngOnInit() {
    this.getuserid();
    this.getplaymates();
  }

}
