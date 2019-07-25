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
    private userprofilecomponent:UserprofileComponent) { }

    getUserId(){
      this.paramUserId=this.userprofilecomponent.userid;
      this.array=this.userprofilecomponent.array;
      
      console.log(this.array);
    }
  ngOnInit() {
    this.getUserId();
  }

}
