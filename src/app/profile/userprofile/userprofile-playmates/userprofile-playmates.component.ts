import { InteractionService } from './../../../shared/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserprofileComponent } from '../userprofile.component';

@Component({
  selector: 'sports-social-userprofile-playmates',
  templateUrl: './userprofile-playmates.component.html',
  styleUrls: ['./userprofile-playmates.component.css']
})
export class UserprofilePlaymatesComponent implements OnInit {

  date = Math.abs(Date.now());
  parentUserid;
  pageno=1;
  show:boolean=false;
  array=[];
  constructor(private postservice:PostService,
    private activatedroute:ActivatedRoute,
    private userprofilecmp:UserprofileComponent,
    private interactionService: InteractionService,
    private router: Router
    ) { }

    getuserid(){
     this.parentUserid=this.userprofilecmp.userid;
    }
  // route change for playmates defined here!!!!
  // it sends the value to the interaction service.
  changeroute(name,id){
    name = name.replace(/ /g,"-");
    this.interactionService.routechangefunction(id);
    this.router.navigate(['/profile', name,id, 'about'],{queryParams:id});
  }

  getplaymates(){
    this.postservice.UserProfielPlaymate(this.parentUserid,this.parentUserid,this.pageno,this.date).subscribe(
      res=>{
        if(res[0].user_id == undefined){
          console.log("matches");
        }
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
          EventId:res[i].EventId,
          City:res[i].City
        });
        if(res[0].user_id != undefined){
          this.pageno=this.pageno+1;
          this.getplaymates();
        }
      });
    }

  ngOnInit() {
    this.getuserid();
    this.getplaymates();
  }

}
