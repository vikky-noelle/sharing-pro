import { TeamprofileComponent } from './../teamprofile.component';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'sports-social-teamprofile-about',
  templateUrl: './teamprofile-about.component.html',
  styleUrls: ['./teamprofile-about.component.css']
})
export class TeamprofileAboutComponent implements OnInit {
  
  members;
  description;
  array=[];
  Matcharr=[];
  location;
  challenge="Open For Challenge";
  gender;
  gamename;
  teamtypestatus;
  teamstatus;
  mantra=[];
  // @Input() member =[];
  constructor(
    private parent: TeamprofileComponent
  ) { }
  
  initvariables(){
    this.members = this.parent.members;
    this.description = this.parent.description;
    this.Matcharr = this.parent.past;
    console.log(this.description);
    this.location = this.parent.location;
    this.challenge = this.parent.challenge; 
    this.gender = this.parent.gender;
    this.gamename = this.parent.gamename;
    this.teamtypestatus = this.parent.teamtypestatus;
    this.teamstatus = this.parent.teamstatus;
    this.mantra = this.parent.mantra;
  }
  ngOnInit() {
    // console.log("about working");
    this.initvariables();
  }
}
