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
  show:boolean=true;
  result;
  matchstatus;

  constructor(
    private userprofilecomponent:UserprofileComponent) { }

    getUserId(){
      this.paramUserId=this.userprofilecomponent.userid;
      this.array=this.userprofilecomponent.array;
      this.array = this.userprofilecomponent.array;
        if(this.userprofilecomponent.array[0] == undefined){
          this.matchstatus = false;
          console.log("matched");
          console.log(this.array);
        }
    
      // if(this.array[0]!=null){
      //   this.result="Finished Matches";
      // }
      // else{
      //   this.result="No Matches";
        
      // }
    }
  ngOnInit() {
    this.getUserId();
  }

}
