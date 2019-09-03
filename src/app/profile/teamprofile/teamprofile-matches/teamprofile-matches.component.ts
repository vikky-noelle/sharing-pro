import { TeamprofileComponent } from './../teamprofile.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sports-social-teamprofile-matches',
  templateUrl: './teamprofile-matches.component.html',
  styleUrls: ['./teamprofile-matches.component.css']
})
export class TeamprofileMatchesComponent implements OnInit {
  
  Matcharr;
  matchstatus = true;
  constructor(
    private parent: TeamprofileComponent
  ) { }

  ngOnInit() {
        this.Matcharr = this.parent.past;
        if(this.parent.past[0] == undefined){
          this.matchstatus = false;
          console.log("matched");
          console.log(this.Matcharr);
        }
  }

}
